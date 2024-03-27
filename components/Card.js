import Image from "next/image";
import Link from "next/link";

function Card({ icon, title, text, link }) {
  return (
    <div className="column card m-4 card-styles">
      <div className="card-image has-text-centered mt-5">
        <Image
          src={icon.url}
          alt={icon.alt}
          width={icon.width}
          height={icon.height}
          loading="lazy"
        />
      </div>
      <div className="card-content ">
        <div className="media">
          <div className="media-content">
            <h2 className="is-size-4 mb-4">{title}</h2>
            <p className="is-size-5">{text}</p>
          </div>
        </div>
        <div className="content">
          <Link href={link.url} target="_blank">{link.text}</Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
