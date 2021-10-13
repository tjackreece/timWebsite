import React from "react";
import About from "../routes/About";

import "./routesCss/Home.css";
import { useHistory } from "react-router-dom";

const Home = (props) => {
	const history = useHistory();
	const projectsLink = () => {
		history.push("/projects");
	};

	return (
		<>
			<div className="background">
				<div className="homeContainer">
					<div className="homeBanner">
						<div className="homeBannerText">
							<h1>Timothy Jackreece</h1>
							<p>Full-Stack Web Developer</p>

							<button onClick={projectsLink} className="btn">
								View Projects Here
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="aboutMe">
				<About />
			</div>
		</>
	);
};

export default Home;
