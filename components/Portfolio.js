import PortfolioCard from "./PortfolioCard";

const portfolio = {
  firstProject: {
    image: {
      url: "/img/coding-image.png",
      fill: "true",
      alt: "image of coding",
    },
    title: "Strategiska lösningar",
    subtitle: "React JS, Gatsby, Contentful, AWS...",
    link: "/first-project"
  },
  secondProject: {
    image: {
      url: "/img/trucks-image.png",
      fill: "true",
      alt: "Image of green trucks",
    },
    title: "Webbplatsutveckling",
    subtitle: "React JS, Contentful CMS.",
    link: "/second-project"
  },
  thirdProject: {
    image: {
      url: "/img/laptop-image.png",
      fill: "true",
      alt: "image of laptop",
    },
    title: "Frontend Uppgradering",
    subtitle: "Vue.js, AngularJS, GraphQL, Docker...",
    link: "/third-project"
  },
  fourthProject: {
    image: {
      url: "/img/mobile-image.png",
      fill: "true",
      alt: "image of mobile phone",
    },
    title: "Innovativa Lösningar",
    subtitle: "React JS, JavaScript, Wordpress",
    link: "/fourth-project"
  },
};

const portfolioArray = Object.keys(portfolio).map((key) => portfolio[key]);

export default function ProjectSection() {
  return (
    <section className="py-6">
      <div className="portfolio-container">
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
