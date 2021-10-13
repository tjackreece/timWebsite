import React from "react";
import "../routes/routesCss/Contact.css";
const Contact = () => {
	return (
		<div className="contactContainer">
			<div className="contactDiv">
				<div className="title">
					<h1>Contact Tim</h1>
				</div>
				<div className="contactInfo">
					<p>
						<span className="contactMain">Phone Number:</span> (239) 238-0926
					</p>
					<p>
						<span className="contactMain">Email:</span>{" "}
						TimothyJackreece@gmail.com
					</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
