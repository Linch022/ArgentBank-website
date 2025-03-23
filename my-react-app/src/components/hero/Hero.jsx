import { PropTypes } from 'prop-types';

function Hero({ backgroundImage, children }) {
    return (
      <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {children}
      </div>
    );
  };

Hero.PropTypes = {
    backgroundImage: PropTypes.string,
    children: PropTypes.node,
};
export default Hero