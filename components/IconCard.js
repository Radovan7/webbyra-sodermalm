import Image from "next/image"

export default function IconCard({ title, icon, tag, bgColor, url }) {
  return (
    <a href={url} target="_blank" itemProp="url">
      <div className="separator">
        <div className="social-card-styles has-text-centered" style={{ backgroundColor: bgColor }}>
          <div className="mt-5">
            <Image
              src={icon.url}
              alt={icon.alt}
              loading="lazy"
              itemProp="image"
            />
          </div>
          <div className="pb-6 pt-3">
            <h3 className="is-size-3 has-text-weight-bold" itemProp="socialMediaName">{title}</h3>
            <small>{tag}</small>
          </div>
        </div>
      </div >
    </a>
  )
}