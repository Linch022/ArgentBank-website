import Hero from '../../components/hero/Hero';
import HeroContent from '../../components/heroContent/HeroContent';
import heroImg from '../../assets/img/bank-tree.jpeg';
import Features from '../../containers/features/Features';

function Home() {

  return (
    <main>
      <Hero backgroundImage={heroImg}>
        <HeroContent title="Promoted Content" srOnlyTitle subtitles={["No fees.", "No minimum deposit.", "High interest rates."]} text="Open a savings account with Argent Bank today!"/>
      </Hero>
      <Features />
    </main>
  );
};

export default Home