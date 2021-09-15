import React from "react";
import { useState } from "react";

export const TrafficLight = () => {
	const [redLight, setRedLight] = useState(false);
	const [yellowLight, setYellowLight] = useState(false);
	const [greenLight, setGreenLight] = useState(false);
	return (
		<div className="trafficBox rounded">
			<div
				className={`redLight rounded ${redLight ? "light" : ""}`}
				onClick={event => {
					setRedLight(!redLight);
					setYellowLight(false);
					setGreenLight(false);
				}}></div>
			<div
				className={`yellowLight rounded ${yellowLight ? "light" : ""}`}
				onClick={event => {
					setYellowLight(!yellowLight);
					setRedLight(false);
					setGreenLight(false);
				}}></div>
			<div
				className={`greenLight rounded ${greenLight ? "light" : ""}`}
				onClick={event => {
					setGreenLight(!greenLight);
					setYellowLight(false);
					setRedLight(false);
				}}></div>
		</div>
	);
};
