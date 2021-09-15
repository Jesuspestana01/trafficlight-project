import React from "react";
import { TrafficLight } from "./TrafficLight.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className=" trafficStick"></div>
			</div>
			<div className="row justify-content-center">
				<TrafficLight />
			</div>
		</div>
	);
};

export default Home;
