import Image from "next/image"
import mapIcon from '../public/img/map-icon.svg'
import emailIcon from '../public/img/email-icon.svg'
import phoneIcon from '../public/img/phone-icon.svg'
import Link from "next/link"


const contactDetails = [{
  icon: {
    url: mapIcon,
    alt: 'Map icon'
  },
  text: `Drakenbergsgatan 8
        117 41 Stockholm`,
  url: 'https:google.com/maps/place/Drakenbergsgatan+8,+117+41+Stockholm,+Sweden/@59.3158187,18.0396964,17.25z/data=!4m6!3m5!1s0x465f77c30e2ce0b3:0x3ed47e7893542fc9!8m2!3d59.3160405!4d18.0420206!16s%2Fg%2F11c5q8hzpp?entry=ttu'
},
{
  icon: {
    url: emailIcon,
    alt: 'Email icon'
  },
  text: 'info@np011.se',
  url: 'mailto:info@np011.se',
},
{
  icon: {
    url: phoneIcon,
    alt: 'Phone icon'
  },
  text: '08 121 591 29',
  url: 'tel:08 121 591 29'
}]
export default function CTA() {
  return (
    <div className="container actions mt-4">
      {contactDetails.map((item, index) => <div className="cta" key={index}>
        <Link href={item.url} target="_blank">
          <button className="cta-button">
            <div className="wrapper">
              <Image
                src={item.icon.url}
                alt={item.icon.alt}
                loading="lazy"
              />
            </div>
          </button>
        </Link>
        <small>{item.text}</small>
      </div>
      )
      }
    </div >
  )
}
