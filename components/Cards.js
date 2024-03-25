import Card from "./Card";

const items = {
  firstItem: {
    icon: {
      url: "/img/icons8-coding.png",
      width: "50",
      height: "50",
      alt: "Icon of self closing tag",
    },
    title: "Konsulttjänst",
    text: "Society has put up so many boundaries and limitations on what’s right and wrong that it’s almost impossible...",
    link: {
      url: "https://www.np011.se/webbsuport-konsulttjanst/",
      text: "LÄS MER",
    },
  },
  secondItem: {
    icon: {
      url: "/img/icons8-e-commerce.png",
      width: "50",
      height: "50",
      alt: "Icon of shopping bag displayed on monitor",
    },
    title: "E-handel",
    text: "Colors are good, before somebody tells you you shouldn’t like pink because that’s for girls.",
    link: {
      url: "https://www.np011.se/webbshop-ehandel/",
      text: "LÄS MER",
    },
  },
  thirdItem: {
    icon: {
      url: "/img/icons8-software.png",
      width: "50",
      height: "50",
      alt: "Icon of monitor with a cog",
    },
    title: "Software",
    text: "Because it's about motivating the doers. Because I’m here to follow my dreams and inspire other people.",
    link: {
      url: "https://www.np011.se/saas-software/",
      text: "LÄS MER",
    },
  },
};

const itemsArray = Object.keys(items).map((key) => items[key]);

export default function Cards() {
  return (
    <section className="section" id="about-us">
      <div className="container">
        <div className="columns mx-auto mb-6">
          {itemsArray.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              icon={item.icon}
              text={item.text}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
