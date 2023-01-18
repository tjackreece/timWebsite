import React from "react";
import "./routesCss/Recommendations.css";

const Recommendations = (props) => {
  const { recommendations } = props;
  return (
    <div className="RecommendationsDiv">
      <h1 className="recommendTitle">Letters of Recommendations</h1>
      <div className="Recommendations">
        {recommendations.map((letter) => {
          return (
            <div className="RecommendationsContainer" key={letter.id}>
              <div className={letter.id}>
                <div className="letterImageDiv">
                  <img
                    className="letterImage"
                    alt=""
                    src={letter.thumbnail}
                    width="100%"
                  />
                </div>
              </div>
              <div className={letter.id}>
                <h1 className="letterName">Name: {letter.name}</h1>
                <p className="position">Position: {letter.position}</p>
                <p className="company">Company: {letter.company}</p>
                <form method="get" action={letter.file}>
                  <button className="btnletterLink" type="submit">
                    Click here to view
                  </button>
                </form>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recommendations;
