import Image from "next/image";
import Link from "next/link";

function PortfolioCard({ image, title, subtitle, link }) {
  return (
    <div className="portfolio-card-styles">
      <Link href={link} target="_blank">
        <Image
          src={image.url}
          alt={image.alt}
          // width={image.width}
          // height={image.height}
          fill={true}
          loading="lazy"
        />
        <div className="image-text">
          <p className="is-size-5">{subtitle}</p>
          <h3 className="is-size-4 mb-4">{title}</h3>
        </div>
      </Link>
    </div>
  );
}

export default PortfolioCard;
