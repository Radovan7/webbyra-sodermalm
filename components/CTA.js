import Image from "next/image"
import mapIcon from '../public/img/map-icon.svg'
import emailIcon from '../public/img/email-icon.svg'
import phoneIcon from '../public/img/phone-icon.svg'


const contactDetails = [{
  icon: {
    url: mapIcon,
    alt: 'Map icon'
  },
  text: `Drakenbergsgatan 8
        117 41 Stockholm`
},
{
  icon: {
    url: emailIcon,
    alt: 'Email icon'
  },
  text: 'info@np011.se'
},
{
  icon: {
    url: phoneIcon,
    alt: 'Phone icon'
  },
  text: '08 121 591 29'
}]
export default function CTA() {
  return (
    <div className="container actions mt-4">
      {contactDetails.map((item, index) => <div className="cta" key={index}>
        <button className="cta-button">
          <div className="wrapper">
            <Image
              src={item.icon.url}
              alt={item.icon.alt}
            />
          </div>
        </button>
        <small>{item.text}</small>
      </div>
      )}
    </div>
  )
}
