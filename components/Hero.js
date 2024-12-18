import Link from "next/link";

const content = {
  title: "LÅT OSS BYGGA DIN WEBBLÖSNING!",
  heroClass: "is-medium is-black",
  ctaButton: { text: "kontakta oss", link: "#contact", },
};

export default function Hero() {
  return (
    <section className={`hero ${content.heroClass} is-flex `}>
      <div className="container">
        <div className="hero-body is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
          <h1 className="title title-styles">
            {content.title}
          </h1>
          {content.ctaButton && (
            <Link href={content.ctaButton.link}>
              <button className="button-styles" href={content.ctaButton.link} >
                {content.ctaButton.text}
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
