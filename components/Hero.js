const content = {
  title: "LÅT OSS BYGGA DIN WEBBLÖSNING!",
  heroClass: "is-medium is-black",
  ctaButton: { text: "kontakta oss", link: "/" },
};

export default function Hero() {
  return (
    <section className={`hero ${content.heroClass} is-flex `}>
      <div className="container">
        <div className="hero-body is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
          <p className="title title-styles">
            {content.title}
          </p>
          {content.ctaButton && (
            <button className="button button-styles" to={content.ctaButton.link} >
              {content.ctaButton.text}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
