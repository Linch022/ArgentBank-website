import { PropTypes } from "prop-types";

function Logo({ logoData }) {
	return (
		<img
			src={logoData.src}
			className={logoData.className}
			alt={logoData.alt}
		/>
	);
}

Logo.propTypes = {
	logoData: PropTypes.shape({
		src: PropTypes.string,
		className: PropTypes.string,
		alt: PropTypes.string,
	}),
};
export default Logo;
