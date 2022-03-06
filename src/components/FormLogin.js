import React, { useState, useEffect } from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";

const FormLogin = ({ submitForm }) => {
	const { handleChange, handleSubmit, values, errors } = useForm(
		submitForm,
		validate
	);

	//
	const [width, setWidth] = useState(window.innerWidth);

	// method to update the width size
	const handleWindowSizeChange = () => {
		setWidth(window.innerWidth);
	};

	// create a eventListener to update the width every time the user resize the window
	useEffect(() => {
		handleWindowSizeChange();
		window.addEventListener("resize", handleWindowSizeChange);
		return () => {
			window.removeEventListener("resize", handleWindowSizeChange);
		};
	}, []);

	return (
		<div className="form-content-right">
			<form onSubmit={handleSubmit} className="form" noValidate>
				<h1>Login Your Account!!</h1>
				<div className="form-inputs">
					<label className="form-label">Email</label>
					<input
						className="form-input"
						type="email"
						name="email"
						placeholder="Enter your email"
						value={values.email}
						onChange={handleChange}
					/>
					{errors.email && <p>{errors.email}</p>}
				</div>
				<div className="form-inputs">
					<label className="form-label">Password</label>
					<input
						className="form-input"
						type="password"
						name="password"
						placeholder="Enter your password"
						value={values.password}
						onChange={handleChange}
					/>
					{errors.password && <p>{errors.password}</p>}
				</div>
				<button className="form-input-btn" type="submit">
					Sign up
				</button>
				<span className="form-input-login">
					Don't have an account? Sign Up <a href="/sign-up">here</a>
				</span>
			</form>
		</div>
	);
};

export default FormLogin;
