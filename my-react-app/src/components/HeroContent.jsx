import { PropTypes } from 'prop-types';
import React from 'react'

function HeroContent({title, srOnlyTitle, subtitles, text}) {
  return (
    <section className="hero-content">
      {title && <h2 className={srOnlyTitle ? "sr-only" : ""}>{title}</h2>}
      {subtitles.map((subtitle, index) => (
        <p key={index} className="subtitle">{subtitle}</p>
      ))}
      <p className="text">{text}</p>
    </section>
  );
};

HeroContent.proptypes = {
    title: PropTypes.string,
    srOnlyTitle: PropTypes.bool,
    subtitles: PropTypes.string,
    text: PropTypes.string,
};
export default HeroContent