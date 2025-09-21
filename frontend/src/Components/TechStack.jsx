import React,{useContext} from "react";
import "./css/Tech_stack.css";
import { ThemeContext } from "./themeContext";

function TechStack() {
   const {darkMode,toggleTheme} = useContext(ThemeContext)
  return (
    <div className="container tech-container" id="tech" style={{ marginTop: "6%", height: "auto"}}>
      <div>
        <h2 className="text-center fs-1 fw-bolder m-0">My Tech Stack</h2>
        <h4 className="text-center mt-3 text-secondary m-0">
          Technologies I've been working with recently
        </h4>
      </div>

      <div className="row text-center" style={{ marginTop: "5%" }}>
        <div className="col-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center">
          <img src="/assets/html.svg" alt="HTML" className="img-fluid" style={{ maxHeight: "80px", objectFit: "contain" }} />
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center">
          <img src="/assets/css.svg" alt="CSS" className="img-fluid" style={{ maxHeight: "80px", objectFit: "contain" }} />
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center">
          <img src="/assets/js.svg" alt="JavaScript" className="img-fluid" style={{ maxHeight: "80px", objectFit: "contain" }} />
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center">
          <img src="/assets/react.svg" alt="React" className="img-fluid" style={{ maxHeight: "80px", objectFit: "contain" }} />
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center">
          <img src="/assets/MySql.webp" alt="MySql" className="img-fluid" style={{ maxHeight: "80px", objectFit: "contain" }} />
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center">
          <img src="/assets/bootstrap.svg" alt="bootstrap" className="img-fluid" style={{ maxHeight: "80px", objectFit: "contain" }} />
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center">
          <img src="/assets/tailwind.svg" alt="MongoDB" className="img-fluid" style={{ maxHeight: "80px", objectFit: "contain" }} />
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center">
          <img src="/assets/git.svg" alt="git" className="img-fluid" style={{ maxHeight: "80px", objectFit: "contain" }} />
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center">
          <img src="/assets/github.svg" alt="github" className="img-fluid" style={{maxHeight: "80px", objectFit: "contain", filter: darkMode ? "invert(1)" : "invert(0)"}} />
        </div>
      </div>
    </div>
  );
}

export default TechStack;
