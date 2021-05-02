import React from "react";
import Project from "./Project";
import tatvastu from "../../images/tatvastu.webp";
import lyricify from "../../images/lyricify.webp";
import mealbay from "../../images/mealbay.webp";
import techodecs from "../../images/techodecs.webp";
import mern from "../../images/mern.png";

function Projects() {
  return (
    <>
      <div id="projects">
        <center>
          <span className="heading-text">PROJECTS</span>
        </center>

        <Project
          name="Tatvastu - Architect Firm"
          code="REACT/PHP"
          desc="It's a project for a Architect Firm for their platform to display their projects and other information"
          link="https://tatvastu.in"
          imageD={tatvastu}
        />

        <Project
          name="Techodecs Technologies"
          code="REACT/PHP"
          desc="It's a project for a tech firm, developed during my internship"
          link="https://techodecs.com"
          imageD={techodecs}
        />

        <Project
          name="Mealbay - Order Food"
          code="HTML/CSS/JS/PHP/MYSQL"
          desc="It's a food ordering website, a user can register and order or he can become a partner and add his outlet"
          link="/projects/mealbay"
          imageD={mealbay}
        />

        <Project
          name="Lyricify - Find Lyrics"
          code="REACT"
          desc="It's a realtime Lyrics search web app"
          link="https://sambhavjain-10.github.io/Lyricify/"
          imageD={lyricify}
        />

        <Project
          name="Shopping List - MERN App"
          code="MERN/REDUX"
          desc="It's a shopping list web app for display purpose only"
          link="https://quiet-gorge-56958.herokuapp.com"
          imageD={mern}
        />
      </div>
      <center>
        <span className="soon">MORE UPLOADING SOON</span>
      </center>
    </>
  );
}

export default Projects;
