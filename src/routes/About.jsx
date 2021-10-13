import React from "react";
import "./routesCss/About.css";
import file from "../components/componentsData/imgFiles/resume1.jeg";

const About = () => {
	return (
		<div className="aboutMeText">
			<h1>About Me</h1>
			<h2 className="aboutMeTexth2">
				I am <span className="webDeveloper">Web Developer</span>
			</h2>
			<p>
				Ever since I was a kid, I loved solving puzzles. As I matured, I fell in
				love with mathematics and saw math problems as simple puzzles to be
				solved. My love for computers helped grow my passion for web
				development. The satisfaction of solving a difficult problem was a
				reward in and of itself. With each project, I gained new knowledge and
				problem solving skills. I define myself by the artistic and functional
				capabilites I develop in my projects. While skills can be taught, my
				work ethic and perserverance are two characteristics I pride myself
				upon. Additionally, I strive to continue learning, challenging myself,
				and constucting projects of significanct value.
			</p>
			<p>
				You can read more about my projects. Also my experience, skills,
				education, and much more in the PDF attached below:
			</p>
			<form method="get" action={file}>
				<button className="btnGetResume" type="submit">
					Get Resume
				</button>
			</form>
			<img
				src="https://fontmeme.com/permalink/210710/f22ddc0787313b39bbb6a2a2353437c8.png"
				alt="signature-fonts"
			/>
		</div>
	);
};

export default About;
