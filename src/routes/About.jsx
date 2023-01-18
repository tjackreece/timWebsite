import React from "react";
import "./routesCss/About.css";
import file from "../components/componentsData/imgFiles/Timothy_Jackreece_Resume.pdf";

const About = () => {
  return (
    <div className="aboutMeText">
      <h1>About Me</h1>
      <p>
        I first learned HTML, CSS, JavaScript, React, Node.js, Express, Next.js,
        SQL, Postgres, and MongoDB through Lambda's comprehensive and intuitive
        course offerings. The courses were designed to teach students the
        fundamentals of web development in an engaging and effective way.
        Through lectures, projects, and hands-on exercises, I was able to learn
        the basics and move on to more advanced topics quickly. I also had
        access to a supportive community of students and mentors who were always
        willing to help when I had questions. With Lambda, I was able to develop
        a strong foundation in web development that has served me well
        throughout my software development career.{" "}
      </p>
      <p>
        I am happy to say that my hard work and dedication to learning software
        development through Lambda paid off when I was offered a job at Amida
        Technology Solutions in Washington D.C., a healthcare tech company.{" "}
      </p>
      <p>
        At Amida Technology Solutions, I was part of a team of developers called
        Saraswati, dedicated to creating a healthcare quality monitoring tool to
        improve the care patients receive. We built a data pipeline that ingests
        and converts data using Spring Boot applications before running it
        through HEDIS CQL scripts to generate care quality scores, all of which
        are stored in a MongoDB, accessible through Express servers. We also
        used Facebook Profit to monitor the data for trends. On the front end,
        we used D3 charts in the app to advise healthcare providers.{" "}
      </p>
      <p>
        I was responsible for architecting the front end wireframes using React,
        Material UI, and SCSS, and I tested front end components using unit
        tests with React testing libraries and Jest. I also designed APIs using
        Node.js and troubleshooted bugs found on the UI and backend projects,
        composed Docker files, and re-engineered the company's main website with
        WordPress.{" "}
      </p>
      <p>
        Overall, my experience at Amida Technology Solutions was extremely
        rewarding and I learned a great deal about software development and
        working in a team environment. You can read more about my projects. Also
        my experience, skills, education, and much more in the PDF attached
        below:{" "}
      </p>
      <img
        src="https://fontmeme.com/permalink/210710/f22ddc0787313b39bbb6a2a2353437c8.png"
        alt="signature-fonts"
      />
      <form method="get" action={file}>
        <button className="btnGetResume" type="submit">
          Get Resume
        </button>
      </form>
    </div>
  );
};

export default About;
