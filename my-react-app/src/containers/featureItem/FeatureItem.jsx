import PropTypes from 'prop-types';

function FeatureItem({ children }) {
  return (
    <div className='feature-item'>{children}</div>
  );
};
FeatureItem.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default FeatureItem