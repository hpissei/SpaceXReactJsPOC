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
				<h1>SpaceXReactJsPOC</h1>

				<nav className="navbar navbar-dark bg-dark">
					<span className="navbar-brand mb-0 h1"><Link to="/LaunchDetails" className="remove-link-underline"><h3>Launch Details</h3></Link></span>
				</nav>

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
