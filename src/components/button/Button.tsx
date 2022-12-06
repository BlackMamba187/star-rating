import React from "react";
import "./Button.css";
type Props = {
	click: () => void;
};

const Button = (props: Props) => {
	return (
		<div className="container">
			<button onClick={props.click} className="button">
				Submit
			</button>
		</div>
	);
};

export default Button;
