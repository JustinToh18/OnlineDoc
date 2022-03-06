import React, { useState } from "react";
import "../../App.css";
import FormLogin from "../FormLogin";
import FormSuccess from "../FormSuccess";
import "./../Form.css";
import { Link } from "react-router-dom";

// export default function SignUp() {
// 	return <h1 className="sign-up">SIGN UP</h1>;
// }

const Login = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitForm() {
		setIsSubmitted(true);
	}

	return (
		<>
			<div className="form-container">
				{/* <span className="close-btn">×</span> */}
				<Link to="/Home" className="close-btn">
					<i className="fas fa-times"></i>
				</Link>

				{/* <Link
					to="/Home"
					className="nav-links-mobile"
					onClick={closeMobileMenu}
				></Link> */}

				<div className="form-content-left">
					<img
						className="form-img"
						src="images/doctor1.png"
						alt="doctor-male"
					/>
				</div>
				{!isSubmitted ? <FormLogin submitForm={submitForm} /> : <FormSuccess />}
			</div>
		</>
	);
};

export default Login;
