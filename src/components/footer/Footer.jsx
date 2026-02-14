import React from 'react'
import './footer.css'
const footer = () => {
  return (
    <footer className="footer">
    <div className="footer__container container">
      <h1 className="footer__title">Chanchal Singh Rathore</h1>

      <ul className="footer__list">
        <li>
          <a href="#about" className="footer__link">About</a>

        </li>
        <li>
          <a href="#portfolio" className="footer__link">Projects</a>

        </li>
        <li>
          <a href="#skills" className="footer__link">Skills</a>

        </li>
     
      </ul>

      <div className="footer__social">
      <a href="https://github.com/ChanchalSinghRathore" className="footer__social-link" target="_blank" rel="noreferrer">
          <i className="bx bxl-github"></i>
      </a>
      <a href="https://www.instagram.com/_chanchalsinghrathore_" className="footer__social-link" target="_blank" rel="noreferrer">
          <i className="bx bxl-instagram"></i>
      </a>
      <a href="https://twitter.com/ShritikRathore" className="footer__social-link" target="_blank" rel="noreferrer">
          <i className="bx bxl-twitter"></i>
      </a>
      </div>


      <span className="footer__copy">
      &#000; ChanchalRathore. All rigths reserved
      </span>
    </div>
  </footer>
  )
}

export default footer
