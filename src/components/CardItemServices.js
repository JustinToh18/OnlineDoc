// denyse
import React from "react";
import { Link } from "react-router-dom";
import MessengerCustomerChat from 'react-messenger-customer-chat';

function CardItemServices(props) {
	return (
		<>
			<li className="cardsS__item">
				<Link className="cardsS__item__link" to={props.path}>
					<figure
						className="cardsS__item__pic-wrap"
						data-category={props.label}
					>
						<img
							className="cardsS__item__img"
							alt="service-pic"
							src={props.src}
						/>
					</figure>
					<div className="cardsS__item__info">
						<h5 className="cardsS__item__text">{props.text}</h5>
					</div>
				</Link>
			</li>
			<MessengerCustomerChat
    			pageId="<106038188702400>"
    			appId="<320586853256086>"
  			/>
		</>
	);
}

export default CardItemServices;
