import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Btn } from "./Btn";
import "./NavigationBar.css";
import { LinkContainer } from "react-router-bootstrap";

function NavigationBar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener("resize", showButton);

	return (
		<>
			<nav className="navigationBar">
				<div className="navigationBarContainer">
					<Link
						to="/"
						id="NavigationBarLogo"
						onClick={closeMobileMenu}
						// style={{ textDecoration: "none", color: "black" }}
					>
						ONLINEDOC
						<i className="fa-solid fa-stethoscope"></i>
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="navigation-item">
							<Link
								to="/home"
								className="nav-links"
								onClick={closeMobileMenu}
								// style={{ textDecoration: "none", color: "black" }}
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/services"
								className="nav-links"
								onClick={closeMobileMenu}
								// style={{ textDecoration: "none", color: "black" }}
							>
								Services
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/about-us"
								className="nav-links"
								onClick={closeMobileMenu}
								// style={{ textDecoration: "none", color: "black" }}
							>
								About us
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/sign-up"
								className="nav-links-mobile"
								onClick={closeMobileMenu}
							>
								Sign Up
							</Link>
						</li>
					</ul>
					<Link to="/sign-up" className="btn-mobile">
						{button && (
							<Btn buttonStyle="btn--outline" buttonSize="btn--medium">
								SIGN UP
							</Btn>
						)}
					</Link>
				</div>
			</nav>
		</>
	);
}

export default NavigationBar;
