import React from "react";
import "./componentsCSS/Footer.css";
import Twittericon from "../components/componentsData/imgFiles/twitter.png";
import LinkedInicon from "../components/componentsData/imgFiles/LinkedIn.png";
import Githubicon from "../components/componentsData/imgFiles/GitHub-Mark-64px.png";
const Footer = () => {
	return (
		<div className="footerContainer">
			<a href="https://github.com/tjackreece">
				<img alt="githubLink" className="githubLink" src={Githubicon} />
			</a>
			<a href="https://www.linkedin.com/in/timothy-jackreece/">
				<img alt="LinkedInLink" className="linkedInLink" src={LinkedInicon} />
			</a>
			<a href="https://twitter.com/jackreece_t">
				<img alt="twitterLink" className="twitterLink" src={Twittericon} />
			</a>
		</div>
	);
};

export default Footer;
