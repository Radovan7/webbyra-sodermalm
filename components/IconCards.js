import IconCard from "./IconCard"
import instagramIcon from '../public/img/instagram.svg'
import twitterIcon from '../public/img/twitter.svg'
import facebookIcon from '../public/img/facebook.svg'
import slackIcon from '../public/img/slack.svg'

const socialMediaCards = [{
  title: 'twitter',
  icon: { url: twitterIcon, alt: 'Twitter logo' },
  tag: '@np011AB',
  bgColor: '#4DB5F5'
}, {
  title: 'facebook',
  icon: { url: facebookIcon, alt: 'Facebook logo' },
  tag: '@netPartner011',
  bgColor: '#4D70BA'
},
{
  title: 'slack',
  icon: { url: slackIcon, alt: 'Slack logo' },
  tag: '@netPartner011AB',
  bgColor: '#55C79E'
},
{
  title: 'instagram',
  icon: { url: instagramIcon, alt: 'Instagram logo' },
  tag: '@np011',
  bgColor: '#EA6D84'
}]

export default function IconCards() {
  return (
    <div className="social-cards">
      {socialMediaCards.map((card, index) => <IconCard key={index} title={card.title} icon={card.icon} tag={card.tag} bgColor={card.bgColor} />)}
    </div>
  )
}
