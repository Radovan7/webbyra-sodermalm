import PortfolioCard from "./PortfolioCard";

const projects = {
  firstProject: {
    image: {
      url: "/img/luca-bravo.png",
      width: "480",
      height: "480",
      fill: "true",
      alt: "image of coding",
    },
    title: "Strategiska lösningar",
    subtitle: "React JS, Gatsby, Contentful, AWS...",
    link:  "/first-project"
  },
  secondProject: {
    image: {
      url: "/img/hero-img 1.png",
      width: "480",
      height: "480",
      fill: "true",
      alt: "Image of sugbil",
    },
    title: "Webbplatsutveckling",
    subtitle: "React JS, Contentful CMS.",
    link: "/second-project"
  },
  thirdProject: {
    image: {
      url: "/img/christopher.png",
      width: "480",
      height: "480",
      fill: "true",
      alt: "image of laptop",
    },
    title: "Frontend Uppgradering",
    subtitle: "Vue.js, AngularJS, GraphQL, Docker...",
    link: "/third-project"
  },
  fourthProject: {
    image: {
      url: "/img/charlesdeluvio.png",
      width: "480",
      height: "480",
      fill: "true",
      alt: "image of chatting on phone",
    },
    title: "Innovativa Lösningar",
    subtitle: "React JS, JavaScript, Wordpress",
    link: "/fourth-project"
  },
};

const projectsArray = Object.keys(projects).map((key) => projects[key]);

export default function ProjectSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-gapless">
          {projectsArray.map((project, index) => (
            <PortfolioCard
              key={index}
              title={project.title}
              image={project.image}
              subtitle={project.subtitle}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
