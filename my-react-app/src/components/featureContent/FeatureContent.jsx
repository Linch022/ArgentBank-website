import PropTypes from "prop-types";

function FeatureContent({ title, text }) {
  return (
    <>
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </>
  );
};

FeatureContent.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
  };
export default FeatureContent