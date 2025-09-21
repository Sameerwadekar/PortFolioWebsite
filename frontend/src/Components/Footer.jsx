import React,{useContext,useState} from 'react'
import { ThemeContext } from './themeContext'
import LoadingBar from "react-top-loading-bar";


function Footer() {
  const {darkMode,toggleTheme} = useContext(ThemeContext)
   const [progress, setProgress] = useState(0);

   const handleClick = () => {
    setProgress(30);
    setTimeout(() => setProgress(60), 100);
    setTimeout(() => setProgress(100), 100);
  };

  return (
    <>
    <div className="container-fluid">
      <div className="container">
  <nav className={`navbar navbar-expand-lg d-flex justify-content-between ${ darkMode ? "bg-black" : "bg-white"}`}>
  <div className="container-fluid d-flex justify-content-between mt-2">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className={`navbar-nav me-auto mb-2 mb-lg-0`}>
        <li className="nav-item">
          <a className={`nav-link ${darkMode ? "text-white" : "text-black"}`} href="#" onClick={handleClick}>Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${darkMode ? "text-white" : "text-black"}` } href="#about" onClick={handleClick}>About</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${darkMode ? "text-white" : "text-black"}`} href="#tech" onClick={handleClick}>Tech-Stack</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${darkMode ? "text-white" : "text-black"}`} href="#project" onClick={handleClick}>Project</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${darkMode ? "text-white" : "text-black"}`} href="#contact" onClick={handleClick}>Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</div>
<LoadingBar
        color={darkMode ? "#ff416c":"#cc416c"}
        height={1}
        shadow={true}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </>
  )
}

export default Footer
