import iconChat from '../../assets/img/icon-chat.png';
import iconMoney from '../../assets/img/icon-money.png';
import iconSecurity from '../../assets/img/icon-security.png';
import FeatureItem from '../../components/featureItem/FeatureItem';

function Features() {
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
    <section className="features">
       {featuresData.map((feature, index) => (
               <FeatureItem key={index} feature={feature} />
             ))}
    </section>
  )
}

export default Features