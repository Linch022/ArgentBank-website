import PropTypes from "prop-types";

function FeatureItem({ feature }) {
	return (
		<div className='feature-item'>
			<img
				src={feature.icon.src}
				className={feature.icon.className}
				alt={feature.icon.alt}
			/>
			<h3 className='feature-item-title'>{feature.title}</h3>
			<p>{feature.text}</p>
		</div>
	);
}
FeatureItem.propTypes = {
	children: PropTypes.node.isRequired,
};
export default FeatureItem;
