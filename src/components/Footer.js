import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "../styles/components/Footer.scss"

const Footer = ({ contactInfo }) => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h3>Contact</h3>
        <p></p>
        <p></p>
      </div>
      <div className="footer-social">
        <h3>Follow</h3>
        <ul>
          <li>
            {/* {<a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>} */}
          </li>
          <li>
            {/* <a href={contactInfo.twitter} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a> */}
          </li>
          <li>
            {/* <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a> */}
          </li>
          <li>
            {/* <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a> */}
          </li>
        </ul>
      </div>
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} NeurarticAI. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
