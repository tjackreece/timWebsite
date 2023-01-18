import React from "react";
import "./routesCss/Projects.css";

const Projects = (props) => {
  // console.log(props);
  return (
    <div className="projectsDiv">
      <div className="alsoProjects">
        <h3 className="siteName">Lambda School Projects</h3>
        <div className="languagesDisplayedPtag">
          <p className="skill1">HTML/CSS</p>
          <p className="skill1">Git</p>
          <p className="skill1">NPM</p>
          <p className="skill1">JavaScript</p>
          <p className="skill1">React.js</p>
          <p className="skill1">Redux</p>
          <p className="skill1">Node.js</p>
          <p className="skill1">Express.js</p>
        </div>
      </div>
      <p className="description1">
        During my time at Lambda School I learned many skills. I was able to
        create different projects which can be viewed on my github account. the
        link is at the bottom of the page.
      </p>
      <div className="projects">
        {props.websites.websites.map((site) => {
          return (
            <div className="ProjectsContainer" key={site.id}>
              <div className={site.classname2}>
                <div className="siteImageDiv">
                  <img className="siteImage" alt="" src={site.image} />
                </div>
              </div>
              <div className={site.classname}>
                <h1 className="siteName">{site.name}</h1>

                <div className="languagesDisplayedPtag">
                  {site.languagesDisplayed.map((item) => {
                    return <p className="skill1">{item}</p>;
                  })}
                </div>
                <p className="description">{site.description}</p>
                <a className="siteLink" href={site.url}>
                  View Site Here
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
