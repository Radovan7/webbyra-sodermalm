import Image from "next/image";
import Link from "next/link";

function PortfolioCard({ image, title, subtitle, link }) {
  return (
    <div className="portfolio-card-styles">
      <Link href={link} target="_blank" itemProp="url">
        <Image
          src={image.url}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          itemProp="image"
        />
        <div className="image-text">
          <p className="is-size-5" itemProp="projectTechStack">{subtitle}</p>
          <h3 className="is-size-4 mb-4" itemProp="projectName">{title}</h3>
        </div>
      </Link>
    </div>
  );
}

export default PortfolioCard;
