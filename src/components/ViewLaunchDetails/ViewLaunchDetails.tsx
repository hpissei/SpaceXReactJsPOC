import React, { useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

type LauncDetailsProps = {
  id?: number;
  value?: any;
};

function ViewLaunchDetailsByIdComponent(props: LauncDetailsProps) {
  const [result, setResult] = useState([]);

  const location = useLocation();

  React.useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v3/launches/${location.state.id}`) //`https://api.spacexdata.com/v3/launches/{props.id}`) // ("https://localhost:7289/Launch/" + props.id)
      .then((response) => {
        console.log(response.data);
        setResult(response.data);
        console.log("location " + location.state.id);
      })
      .catch(function (error) {
        console.log("id error" + error);
      });
  }, []);

  return (
    <div className="container">
      <p>Launch Details</p>
      <div className="form-group">
        <div className="form-control">
          Mission Name: {location.state.value["mission_name"]}
        </div>
      </div>
      <div className="form-group">
        <div className="form-control">
          Launch Year: {location.state.value["launch_year"]}
        </div>
        <div className="form-control">
          Launch Date: {location.state.value["launch_date_utc"]}
        </div>
      </div>
      <div className="form-group">
        <div className="form-control">
          Rocket Name: {location.state.value["rocket"]["rocket_name"]}
        </div>
        <div className="form-control">
          Rocket Type: {location.state.value["rocket"]["rocket_type"]}
        </div>
      </div>
      <div className="form-group">
        <div className="form-control">
          Site Name: {location.state.value["launch_site"]["site_name"]}
        </div>
        <div className="form-control">
          Site Name: {location.state.value["launch_site"]["site_name_long"]}
        </div>
      </div>
      <div className="form-group">
        <div className="form-control">
          Details: {location.state.value["details"]}
        </div>{" "}
        <div className="form-control">Rocket Type: </div>
      </div>
      <div className="form-group">
        Image
        <img
          width="60"
          height="180"
          className="img form-control"
          alt="Mission Patch Image"
          src={location.state.value["links"]["mission_patch"]}
        />
      </div>
      <div className="form-group">
        Article
        <a
          className="form-control"
          href="https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html"
        >
          Link
        </a>
      </div>
    </div>
  );
}

export default ViewLaunchDetailsByIdComponent;
