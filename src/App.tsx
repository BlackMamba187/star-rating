import React, { useState } from "react";
import "./App.css";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import Stars from "./components/stars/Stars";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const [starRating, setStarRating] = useState(0);
	const [hover, setHover] = useState(0);

	const Submit = (value: number) => {
		try {
			if (value === 0) {
				toast.error(`Cannot Submit`, {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			} else {
				toast.info(`you rated your experience ${value}*`, {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			}
			setStarRating(0);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className="body">
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<Card>
				<div className="layout">
					<p className="desc title">Spider-Man: Into the Spider-Verse</p>
					<div className="content">
						<p className="desc">
							Miles Morales is juggling his life between being a high school
							student and being a spider-man. When Wilson "Kingpin" Fisk uses a
							super collider, others from across the Spider-Verse are
							transported to this dimension.
						</p>
						<Stars
							hover={(num) => setHover(num)}
							rating={(num) => setStarRating(num)}
							starRating={starRating}
							starHover={hover}
						/>

						<Button click={() => Submit(starRating)} />
					</div>
				</div>
			</Card>
		</div>
	);
}

export default App;
