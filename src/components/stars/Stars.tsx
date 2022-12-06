import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./Stars.css";

type Props = {
	hover: (num: number) => void;
	rating: (num: number) => void;
	starRating: number;
	starHover: number;
};

const Stars = (props: Props) => {
	const GRADES = ["Poor", "Fair", "Good", "Very good", "Excellent"];

	return (
		<div className="row">
			{GRADES.map((grade, index) => (
				<div className="col" key={index}>
					<AiFillStar
						onMouseEnter={() => props.hover(index + 1)}
						onMouseLeave={() => props.hover(-1)}
						onClick={() => props.rating(index + 1)}
						className="stars"
						size={50}
						color={
							props.starRating >= index + 1 || props.starHover >= index + 1
								? "#ed1a14"
								: "#808080"
						}
					/>
				</div>
			))}
		</div>
	);
};

export default Stars;
