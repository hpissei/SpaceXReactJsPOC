import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import ViewLaunchDetails from "./components/ViewLaunchDetails/ViewLaunchDetails";

function TableComponent() {
  const [result, setResult] = useState([]);

  React.useEffect(() => {
    axios.get("https://api.spacexdata.com/v3/launches").then((response) => {
      setResult(response.data);
    });
  }, []);

  return (
    <div className="App">
      <table className="table table-striped table-dark">
        <tbody>
          <tr>
            <th>Flight Number</th>
            <th>Mission Name</th>
            <th>Launch Window</th>
            <th>Launch Year</th>
            <th>Upcoming</th>
            <th>View Details</th>
          </tr>
          {result.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val["flight_number"]}</td>
                <td>{val["mission_name"]}</td>
                <td>{val["launch_window"]}</td>
                <td>{val["launch_year"]}</td>
                <td>{val["upcoming"] == true ? "Yes" : "No"}</td>
                <td>
                  <Link
                    to="/ViewLaunchDetails"
                    state={{ id: val["flight_number"], value: val }}
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
