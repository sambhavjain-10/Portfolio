import React from "react";

function Project(props) {
  return (
    <>
      <div className="projects-container">
        <div>
          <div style={{ backgroundImage: "url(" + props.imageD + ")" }}></div>
        </div>
        {/* <span className="line1"></span> */}
        <div>
          <strong>{props.name}</strong>
          <span>{props.code}</span>
          <span>{props.desc}</span>
          <a href={props.link} rel="noreferrer" target="_blank">
            <button>View</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Project;
