import React from "react";
import About from "../routes/About";
import file from "../components/componentsData/imgFiles/Timothy_Jackreece_Resume.pdf";

import "./routesCss/Home.css";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const history = useHistory();
  const projectsLink = () => {
    history.push("/projects");
  };
  const recommendLink = () => {
    history.push("/recommendations");
  };

  return (
    <>
      <div className="background">
        <div className="homeContainer">
          <div className="homeBanner">
            <div className="homeBannerText">
              <h1>Timothy Jackreece</h1>
              <p>Full-Stack Web Developer</p>
              <div className="btn-holder">
                <form method="get" action={(file, file)}>
                  <button className="btn" type="submit">
                    Get Resume
                  </button>
                </form>
                <button className="btn" type="submit" onClick={recommendLink}>
                  View Letters of Recommendation
                </button>
                <button onClick={projectsLink} className="btn">
                  View Projects Here
                </button>
              </div>
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
