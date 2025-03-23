import Hero from '../components/hero/Hero';
import HeroContent from '../components/heroContent/HeroContent';
import FeatureItem from '../containers/featureItem/FeatureItem';
import Logo from '../components/logo/Logo';
import FeatureContent from '../components/featurecontent/FeatureContent';
import heroImg from '../assets/img/bank-tree.jpeg';
import iconChat from '../assets/img/icon-chat.png';
import iconMoney from '../assets/img/icon-money.png';
import iconSecurity from '../assets/img/icon-security.png';

function Home() {
  const featuresData = [
    {
      icon: {
        src: iconChat,
        className: "feature-icon",
        alt: "Chat Icon"
      },
      title: 'You are our #1 priority',
      text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    },
    {
      icon: {
        src: iconMoney,
        className: "feature-icon",
        alt: "Money Icon"
      },
      title: 'More savings means higher rates',
      text: 'The more you save with us, the higher your interest rate will be!',
    },
    {
      icon: {
        src: iconSecurity,
        className: "feature-icon",
        alt: "Security Icon"
      },
      title: 'Security you can trust',
      text: 'We use top of the line encryption to make sure your data and money is always safe.',
    },
  ];

  return (
    <main>
      <Hero backgroundImage={heroImg}>
        <HeroContent title="Promoted Content" srOnlyTitle subtitles={["No fees.", "No minimum deposit.", "High interest rates."]} text="Open a savings account with Argent Bank today!"/>
      </Hero>
      {featuresData.map((feature, index) => (
        <FeatureItem key={index}>
          <Logo logoData={feature.icon}/>
          <FeatureContent title={feature.title} text={feature.text} />
        </FeatureItem>
      ))}
    </main>
  );
};

export default Home