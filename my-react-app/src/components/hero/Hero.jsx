import { PropTypes } from "prop-types";

function Hero({ content }) {
	return (
		<div className={`hero ${content.className}`}>
			<section className='hero-content'>
				{content.title && (
					<h2 className={content.srOnlyTitle ? "sr-only" : ""}>
						{content.title}
					</h2>
				)}
				{content.subtitles.map((subtitle, index) => (
					<p
						key={index}
						className='subtitle'
					>
						{subtitle}
					</p>
				))}
				<p className='text'>{content.text}</p>
			</section>
		</div>
	);
}

Hero.PropTypes = {
	content: PropTypes.shape({
		className: PropTypes.string.isRequired,
		title: PropTypes.string,
		srOnlyTitle: PropTypes.bool,
		subtitles: PropTypes.arrayOf(PropTypes.string),
		text: PropTypes.string,
	}).isRequired,
};
export default Hero;
