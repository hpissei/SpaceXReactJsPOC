import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";


function TableComponent() {
	const [result, setResult] = useState([]);
	const [showElement, setShowElement] = useState(true)
	React.useEffect(() => {
		axios.get("https://api.spacexdata.com/v3/launches").then((response) => {
			setResult(response.data);
		});

		setTimeout(function () {
			setShowElement(false)
		}, 200);
	}, []);

	return (
		<div className="App">
			{showElement ? (<div className="spinner-border m-5" role="status">
				<span className="sr-only"></span>
			</div>) : (
				<div></div>)
			}
			<table className="table table-striped table-dark" data-testid="table-component">
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
								<td data-testid={"table-component-" + val["flight_number"]}>{val["flight_number"]}</td>
								<td>{val["mission_name"]}</td>
								<td>{val["launch_window"]}</td>
								<td>{val["launch_year"]}</td>
								<td>{val["upcoming"] == true ? "Yes" : "No"}</td>
								<td>
									<Link
										to="/ViewLaunchDetails"
										state={{ id: val["flight_number"], value: val }}
										className="btn btn-success">
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

