import Image from "next/image"

export default function IconCard({ title, icon, tag, bgColor, url }) {
  return (
    <div className="separator">
      <div className="social-card-styles has-text-centered" style={{ backgroundColor: bgColor }}>
        <a href={url} target="_blank">
          <div className="mt-5">
            <Image
              src={icon.url}
              alt={icon.alt}
            />
          </div>
        </a>
        <div className="pb-6 pt-3">
          <h3 className="is-size-3 has-text-weight-bold">{title}</h3>
          <small>{tag}</small>
        </div>
      </div>
    </div >
  )
}
