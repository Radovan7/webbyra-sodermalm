const content = {
  title: "LÅT OSS BYGGA DIN WEBBLÖSNING!",
  heroClass: "is-medium is-black",
  ctaButton: { text: "Kontakta oss", link: "/" },
};

export default function Hero() {
  return (
    <section className={`hero ${content.heroClass}`}>
      <div className="container">
        <div className="hero-body">
          <p className="title pb-4 pt-4 has-text-centered-mobile">
            {content.title}
          </p>
          {content.ctaButton && (
            <button className="button" to={content.ctaButton.link}>
              {content.ctaButton.text}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
