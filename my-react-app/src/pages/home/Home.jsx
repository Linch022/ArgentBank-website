import Hero from "../../components/hero/Hero";
import Features from "../../containers/features/Features";

function Home() {
	const heroContent = {
		className: "hero-home",
		title: "Promoted Content",
		srOnlyTitle: true,
		subtitles: ["No fees.", "No minimum deposit.", "High interest rates."],
		text: "Open a savings account with Argent Bank today!",
	};
	return (
		<main>
			<Hero content={heroContent} />
			<Features />
		</main>
	);
}

export default Home;
