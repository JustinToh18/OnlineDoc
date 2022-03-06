// denyse
import React from "react";
import "./CardsServices.css";
import CardItemServices from "./CardItemServices";

function CardsServices() {
	return (
		<div className="cardsServices">
			<h1> 💉Services We Provide </h1>
			<div className="cardsS__container">
				<div className="cardsS__wrapper">
					<ul className="cardsS__items">
						<CardItemServices
							src="images/img-10.jpg"
							text="Flu"
							label="Cough, Cold "
							path="/about-us"
						/>
						<CardItemServices
							src="images/img-11.jpg"
							text="Period Problems"
							label="Female"
							path="/services"
						/>
						<CardItemServices
							src="images/img-12.jpg"
							text="Skin Problems"
							label="Acne, Aczema"
							path="/about-us"
						/>
						<CardItemServices
							src="images/img-13.jpg"
							text="Fever"
							label="Sore Throat, Dizziness, Headache "
							path="/feedback"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default CardsServices;
