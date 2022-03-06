import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import AboutUs from "./components/pages/AboutUs";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	return (
		<>
			<Router>
				<NavigationBar />
				<ScrollToTop />
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/home" exact element={<Home />} />
					<Route path="/services" exact element={<Services />} />
					<Route path="/about-us" exact element={<AboutUs />} />
					<Route path="/sign-up" exact element={<SignUp />} />
					<Route path="/login" exact element={<Login />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
