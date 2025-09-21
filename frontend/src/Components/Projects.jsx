import React, { useContext } from "react";
import "./css/Project.css";
import { ThemeContext } from "./themeContext";

function Projects() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="container" id="project" style={{ marginTop: "3%", height: "auto" }}>
      <h2 className="text-center fs-1 fw-bolder m-0">Projects</h2>
      <h4 className="text-center mt-3 m-0 text-secondary">
        Things I’ve built so fars
      </h4>
      <div className="row g-4 mt-5">
        {/* 🔹 Project 1 */}
        <div className="col-md-4">
          <div
            className={`card project-card h-100 shadow-sm ${
              darkMode ? "whiteBG" : "blackBG"
            }`}
          >
            <img src="/assets/theemwiz.avif" className="card-img-top project-img" alt="theemwiz" />
            <div
              className={`card-body d-flex flex-column ${
                darkMode ? "text-black" : "text-white"
              }`}
            >
              <h5 className="card-title fw-bold">Themewiz-Digital Agency</h5>
              <p className={`card-text small ${darkMode ? "text-black" : "text-white"}`}>
                A digital company website for ThemWiz that showcases services, portfolio, and contact details. Built with Html, Bootstrap, and CSS for a responsive, user-friendly experience.
              </p>
              <p className={`small mb-3 ${darkMode ? "text-black" : "text-white"}`}>
                <strong>Tech stack: </strong> HTML, CSS, BootStrap.
              </p>
              <div className="mt-auto d-flex gap-3">
                <a href="https://theemwiz-alpha.vercel.app/" target="_blank" className={darkMode ? "text-black" : "text-white"}>
                  <i className="bi bi-link-45deg"></i> Live Preview
                </a>
                <a href="https://github.com/Sameerwadekar/Theemwiz" target="_blank" className={darkMode ? "text-black" : "text-white"}>
                  <i className="bi bi-github"></i> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* 🔹 Project 2 */}
        <div className="col-md-4">
          <div
            className={`card project-card h-100 shadow-sm ${
              darkMode ? "whiteBG" : "blackBG"
            }`}
          >
            <img src="/assets/plantScan.avif" className="card-img-top project-img" alt="plantScan" />
            <div
              className={`card-body d-flex flex-column ${
                darkMode ? "text-black" : "text-white"
              }`}
            >
              <h5 className="card-title fw-bold">PlantScan- AI-Plant-Analysis-Tool</h5>
              <p className={`card-text small ${darkMode ? "text-black" : "text-white"}`}>
                An AI-powered web application that identifies plant species from uploaded photos using Google’s Vision API. It provides users with instant insights about the plant and enhances learning with image recognition. Built with modern web technologies for accuracy and ease of use.
              </p>
              <p className={`small mb-3 ${darkMode ? "text-black" : "text-white"}`}>
                <strong>Tech stack: </strong> HTML, CSS, JavaScript, Node.js, express.js, Google vision API.
              </p>
              <div className="mt-auto d-flex gap-3">
                <a href="https://plant-scan-ai-plant-analysis-tool-x.vercel.app/" target="_blank" className={darkMode ? "text-black" : "text-white"}>
                  <i className="bi bi-link-45deg"></i> Live Preview
                </a>
                <a href="https://github.com/Sameerwadekar/PlantScan---AI-Plant-Analysis-Tool" target="_blank" className={darkMode ? "text-black" : "text-white"}>
                  <i className="bi bi-github"></i> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* 🔹 Project 3 */}
        <div className="col-md-4">
          <div
            className={`card project-card h-100 shadow-sm ${
              darkMode ? "whiteBG" : "blackBG"
            }`}
          >
            <img src="/assets/shopEase.avif" className="card-img-top project-img" alt="shopEase" />
            <div
              className={`card-body d-flex flex-column ${
                darkMode ? "text-black" : "text-white"
              }`}
            >
              <h5 className="card-title fw-bold">ShopEase- E-commerce Website</h5>
              <p className={`card-text small ${darkMode ? "text-black" : "text-white"}`}>
                A modern e-commerce web application that displays products across multiple categories such as fashion, electronics, beauty, and more. Products are fetched dynamically using the FakeStore API, with features like category browsing, product detail pages, and responsive design for a seamless shopping experience.
              </p>
              <p className={`small mb-3 ${darkMode ? "text-black" : "text-white"}`}>
                <strong>Tech stack: </strong> HTML, CSS, BootStrap, React.js, FakeStore API.
              </p>
              <div className="mt-auto d-flex gap-3">
                <a href="https://products-mauve.vercel.app/" target="_blank" className={darkMode ? "text-black" : "text-white"}>
                  <i className="bi bi-link-45deg"></i> Live Preview
                </a>
                <a href="https://github.com/Sameerwadekar/Products" target="_blank" className={darkMode ? "text-black" : "text-white"}>
                  <i className="bi bi-github"></i> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* {project 4} */}
        <div className="col-md-4">
          <div
            className={`card project-card h-100 shadow-sm ${
              darkMode ? "whiteBG" : "blackBG"
            }`}
          >
            <img src="/assets/iTask.avif" className="card-img-top project-img" alt="iTask" />
            <div
              className={`card-body d-flex flex-column ${
                darkMode ? "text-black" : "text-white"
              }`}
            >
              <h5 className="card-title fw-bold">iTask- The Task Manager</h5>
              <p className={`card-text small ${darkMode ? "text-black" : "text-white"}`}>
               A simple and efficient task manager that helps users organize daily activities. Users can add, update, and delete tasks with a clean, responsive interface. Designed for productivity, it works across devices and ensures tasks stay manageable and easy to track.
              </p>
              <p className={`small mb-3 ${darkMode ? "text-black" : "text-white"}`}>
                <strong>Tech stack: </strong> HTML, Tailwind, React(Vite).
              </p>
              <div className="mt-auto d-flex gap-3">
                <a href="https://i-task-todo.vercel.app/" target="_blank" className={darkMode ? "text-black" : "text-white"}>
                  <i className="bi bi-link-45deg"></i> Live Preview
                </a>
                <a href="https://github.com/Sameerwadekar/iTask--Todo" target="_blank" className={darkMode ? "text-black" : "text-white"}>
                  <i className="bi bi-github"></i> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* project 5 */}
        <div className="col-md-4">
          <div
            className={`card project-card h-100 shadow-sm ${
              darkMode ? "whiteBG" : "blackBG"
            }`}
          >
            <img src="/assets/MarkOnline.png" className="card-img-top project-img" alt="MarkOnline" />
            <div
              className={`card-body d-flex flex-column ${
                darkMode ? "text-black" : "text-white"
              }`}
            >
              <h5 className="card-title fw-bold">Themewiz-Digital Agency</h5>
              <p className={`card-text small ${darkMode ? "text-black" : "text-white"}`}>
                A web-based attendance management system designed for teachers to efficiently record and track student attendance. The system allows faculty to create attendance records, mark students as present/absent, and access previous attendance with PDF export functionality. It supports multiple courses and year levels, making it simple to manage large student groups.
              </p>
              <p className={`small mb-3 ${darkMode ? "text-black" : "text-white"}`}>
                <strong>Tech stack: </strong> MERN Stack (MongoDB, Express, React, Node.js), Tailwind CSS.
              </p>
              <div className="mt-auto d-flex gap-3">
                <a href="https://mark-online-student-attendance-management-system.vercel.app/" target="_blank" className={darkMode ? "text-black" : "text-white"}>
                  <i className="bi bi-link-45deg"></i> Live Preview
                </a>
                <a href="https://github.com/Sameerwadekar/Mark-Online---Student-Attendance-Management-System-" target="_blank" className={darkMode ? "text-black" : "text-white"}>
                  <i className="bi bi-github"></i> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* project 6 */}
        <div className="col-md-4">
          <div
            className={`card project-card h-100 shadow-sm ${
              darkMode ? "whiteBG" : "blackBG"
            }`}
          >
            <img src="/assets/theemwiz.avif" className="card-img-top project-img" alt="theemwiz" />
            <div
              className={`card-body d-flex flex-column ${
                darkMode ? "text-black" : "text-white"
              }`}
            >
              <h5 className="card-title fw-bold">Themewiz-Digital Agency</h5>
              <p className={`card-text small ${darkMode ? "text-black" : "text-white"}`}>
                A digital company website for ThemWiz that showcases services, portfolio, and contact details. Built with Html, Bootstrap, and CSS for a responsive, user-friendly experience.
              </p>
              <p className={`small mb-3 ${darkMode ? "text-black" : "text-white"}`}>
                <strong>Tech stack: </strong> HTML, CSS, BootStrap.
              </p>
              <div className="mt-auto d-flex gap-3">
                <a href="https://theemwiz-alpha.vercel.app/" target="_blank" className={darkMode ? "text-black" : "text-white"}>
                  <i className="bi bi-link-45deg"></i> Live Preview
                </a>
                <a href="https://github.com/Sameerwadekar/Theemwiz" target="_blank" className={darkMode ? "text-black" : "text-white"}>
                  <i className="bi bi-github"></i> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
