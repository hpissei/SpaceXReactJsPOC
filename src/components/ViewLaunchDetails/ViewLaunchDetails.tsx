import React, { useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

type LauncDetailsProps = {
	id?: number;
	value?: any;
}

function ViewLaunchDetailsComponent(props: LauncDetailsProps) {
	const [result, setResult] = useState<any>();

	const location = useLocation();

	React.useEffect(() => {
		axios
			.get(`https://dotnetwebapi20230502194532.azurewebsites.net/Launch/${location.state.id}`)
			.then((response) => {
				//console.log(response.data);
				setResult(response.data);
				//console.log("location " + location.state.id);
				//result.map((value, key) => {
				//	console.log(value[0]);
				//});
				//console.table(result);
			})
			.catch(function (error) {
				console.log("error" + error);
			});
	}, []);

	return (
		<div className="card  w-30 center mt-2" >
		<img className="card-img-top" src={result?.links.mission_patch} style={{ width: 100, height: 100 }} alt="Mission Patch Image" />
		<div className="card-body">
			<h5 className="card-title">Launch Details</h5>
				<p className="card-text"> <b>Mission Name:</b> {result?.mission_name}</p>
			<p className="card-text"> <b>Launch Year:</b> {result?.launch_year}</p>
			<p className="card-text"> <b>Launch Date: </b>{result?.launch_date_utc}</p>
			<p className="card-text"> <b>Rocket Name:</b> {result?.rocket.rocket_name}</p>
			<p className="card-text"> <b>Rocket Type:</b> {result?.rocket.rocket_type}</p>
			<p className="card-text"> <b>Site Name: </b>{result?.launch_site.site_name}</p>
			<p className="card-text"> <b>Site Name Long:</b> {result?.launch_site.site_name_long}</p>
			<p className="card-text"> <b>Details:</b> {result?.details}</p>
			<p className="card-text"> <b>Mission Name:</b> {result?.mission_name}</p>
			<a href={result?.links.article_link} className="btn btn-primary" target="_blank">Link</a>
		</div>
	</div>
	);
}

export default ViewLaunchDetailsComponent;
