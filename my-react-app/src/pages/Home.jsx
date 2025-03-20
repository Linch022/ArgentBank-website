import React from 'react'
import Hero from '../components/Hero'
import HeroContent from '../components/HeroContent'
import heroImg from '../assets/img/bank-tree.jpeg'

function Home() {
  return (
    <main>
      <Hero backgroundImage={heroImg}>
        <HeroContent title="Promoted Content" srOnlyTitle subtitles={["No fees.", "No minimum deposit.", "High interest rates."]} text="Open a savings account with Argent Bank today!"/>
      </Hero>
    </main>
  );
};

export default Home