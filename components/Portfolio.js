import PortfolioCard from "./PortfolioCard";

const portfolio = {
  firstProject: {
    image: {
      url: "/img/coding-image.png",
      width: '270',
      height: '480',
      alt: "image of coding",
    },
    title: "Strategiska lösningar",
    subtitle: "React JS, Gatsby, Contentful, AWS...",
    link: "https://www.np011.se/referenser/strategiska-losningar-for-fighting-brand/"
  },
  secondProject: {
    image: {
      url: "/img/trucks-image.png",
      width: '270',
      height: '480',
      alt: "Image of green trucks",
    },
    title: "Webbplatsutveckling",
    subtitle: "React JS, Contentful CMS.",
    link: "https://www.np011.se/referenser/sug-blasbil-sverige-webbplats-react-next/"
  },
  thirdProject: {
    image: {
      url: "/img/laptop-image.png",
      width: '270',
      height: '480',
      alt: "image of laptop",
    },
    title: "Frontend Uppgradering",
    subtitle: "Vue.js, AngularJS, GraphQL, Docker...",
    link: "https://www.np011.se/referenser/webbapplikation-spbi-automatiserade-drivmedelskostnadsberakningar-anpassade-api-losningar/"
  },
  fourthProject: {
    image: {
      url: "/img/mobile-image.png",
      width: '270',
      height: '480',
      alt: "image of mobile phone",
    },
    title: "Innovativa Lösningar",
    subtitle: "React JS, JavaScript, Wordpress",
    link: "https://www.np011.se/referenser/innovativa-losningar-for-digitalt-innehall/"
  },
};

const portfolioArray = Object.keys(portfolio).map((key) => portfolio[key]);

export default function ProjectSection() {
  return (
    <section className="py-6" id='portfolio'>
      <div className="portfolio-container" >
        {portfolioArray.map((project, index) => (
          <PortfolioCard
            key={index}
            title={project.title}
            image={project.image}
            subtitle={project.subtitle}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
