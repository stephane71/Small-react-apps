import React from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

class DepartmentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      departmentList: []
    };
  }

  componentDidMount() {
    fetch("https://geo.api.gouv.fr/departements")
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          departmentList: data
        });
      });
  }

  render() {
    const { departmentList } = this.state;

    return (
      <div>
        <List>
          {departmentList.map((dep) => (
            <Link
              key={dep.code}
              to={`/department-list/${dep.code}`}
              state={dep}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary={dep.nom} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    );
  }
}

export default DepartmentList;
