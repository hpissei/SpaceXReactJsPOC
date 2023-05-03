import React, { useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

type LauncDetailsProps = {
	id?: number;
	value?: any;
}

function ViewLaunchDetailsComponent(props: LauncDetailsProps) {
	const [result, setResult] = useState([]);

	const location = useLocation();

	React.useEffect(() => {
		axios
			.get(`https://dotnetwebapi20230502194532.azurewebsites.net/Launch/${location.state.id}`)
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
		<div className="card  w-30 center mt-2" >
			<img className="card-img-top" src={location.state.value["links"]["mission_patch"]} style={{ width: 100, height: 100 }} alt="Mission Patch Image" />
			<div className="card-body">
				<h5 className="card-title">Launch Details</h5>
				<p className="card-text"> <b>Mission Name:</b> {location.state.value["mission_name"]}</p>
				<p className="card-text"> <b>Launch Year:</b> {location.state.value["launch_year"]}</p>
				<p className="card-text"> <b>Launch Date: </b>{location.state.value["launch_date_utc"]}</p>
				<p className="card-text"> <b>Rocket Name:</b> {location.state.value["rocket"]["rocket_name"]}</p>
				<p className="card-text"> <b>Rocket Type:</b> {location.state.value["rocket"]["rocket_type"]}</p>
				<p className="card-text"> <b>Site Name: </b>{location.state.value["launch_site"]["site_name"]}</p>
				<p className="card-text"> <b>Site Name Long:</b> {location.state.value["launch_site"]["site_name_long"]}</p>
				<p className="card-text"> <b>Details:</b> {location.state.value["details"]}</p>
				<p className="card-text"> <b>Mission Name:</b> {location.state.value["mission_name"]}</p>
				<a href={location.state.value["links"]["article_link"]} className="btn btn-primary" target="_blank">Link</a>
			</div>
		</div>
	);
}

export default ViewLaunchDetailsComponent;
