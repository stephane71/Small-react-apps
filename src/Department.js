import React from "react";
import { useLocation } from "react-router-dom";

function Department() {
  let location = useLocation();

  return <div>Department {JSON.stringify(location.state)}</div>;
}

export default Department;
