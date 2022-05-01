import "./styles.css";
import ShoppingList from "./ShoppingList";
import Home from "./Home";
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Link to="/">
        <h1 className="appTitle">Exercices ReatJS - semaine 16</h1>
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping-list" element={<ShoppingList />} />
      </Routes>
    </div>
  );
}
