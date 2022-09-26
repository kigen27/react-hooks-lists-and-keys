import React from "react";
import ElementColour from "./ElementColour";

function ColorList() {
	const colors = [
		"firebrick",
		"rebeccapurple",
		"salmon",
		"darkslategray",
		"hotpink",
	];

	return (
		<div>
			<h1>Top 5 CSS Colors</h1>
			<ol>
				{colors.map((color) => (
					<ElementColour key={color} color={color} />
				))}
			</ol>
		</div>
	);
}

export default ColorList;
