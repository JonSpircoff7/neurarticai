import React from 'react';
import "../styles/components/CallToAction.scss"

const CallToAction = ({ title, buttonText, buttonLink }) => {
  return (
    <section className="call-to-action">
      <h2 className="call-to-action-title">{title}</h2>
      <a href={buttonLink} className="call-to-action-button">
        {buttonText}
      </a>
    </section>
  );
};

export default CallToAction;

