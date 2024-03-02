import Image from "next/image";
import Link from "next/link";

function PortfolioCard({ image, title, subtitle, link }) {
  return (
    <div className="column is-one-quarter">
      <Link href={link}>
        <div className="image-container">
          <Image
            className="image-overlay"
            src={image.url}
            alt={image.alt}
            fill={image.fill}
          />
          <div className="image-text">
            <h3 className="is-size-4 mb-4">{title}</h3>
            <p className="is-size-5">{subtitle}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PortfolioCard;
