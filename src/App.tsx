import "./styles.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TableComponent from "./components/TableComponent/TableComponent";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import ViewLaunchDetailsByIdComponent from "./components/ViewLaunchDetails/ViewLaunchDetails";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [result, setResult] = useState([]);

  return (
    <Router>
      <div className="App">
        <Link to="/home">Home</Link>
        <Link to="/LaunchDetails">LaunchDetails</Link>
        {/*         
        <TableComponent></TableComponent> */}
      </div>
      <Routes>
        <Route path="/home" element={<HomeComponent />}></Route>
        <Route path="/LaunchDetails" element={<TableComponent />} />
        <Route
          path="/ViewLaunchDetails"
          element={<ViewLaunchDetailsByIdComponent />}
        />
      </Routes>
    </Router>
  );
}
// state= {{ id: 0, value: null}} />}
