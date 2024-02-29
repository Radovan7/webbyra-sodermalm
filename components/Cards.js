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
      url: "/",
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
      url: "/",
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
      url: "/",
      text: "LÄS MER",
    },
  },
};

const itemsArray = Object.keys(items).map((key) => items[key]);

export default function Cards() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
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
