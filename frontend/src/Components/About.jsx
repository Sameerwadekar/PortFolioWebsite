import React from 'react';
import "./css/About.css"

function About() {
  return (
    <div className="container about-container " id='about'>
      <div className="row">
        <div className="col-md-6 col-lg-6 col-sm-6 col-12">    
            <p className="fs-1 fw-bolder m-0">Hi👋,</p>
            <p className="fs-1 fw-bolder m-0">My name is</p>
            <p className="fs-1 fw-bolder m-0"><span className='text-primary'>Sameer</span></p>
            <p className="fs-1 fw-bolder m-0">I build things for web</p>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-6 col-12">
          <div className="d-flex justify-content-center align-items-center image">
            <img 
            src="./assets/profile.jpeg"
            alt="Kitten" 
            className="img-fluid" 
            style={{borderRadius:"50%",border:"2px solid purple",width:"200px",height:"200px"}}
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
