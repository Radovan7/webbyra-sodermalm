"use client";

import Hero from "../components/Hero";
import Cards from "../components/Cards";
import ContentBlock from "../components/ContentBlock";
import Portfolio from "../components/Portfolio";



const content = [
  {
    title: "",
    subtitle:
      "• Mobilanpassning • Responsive • Hemsida i Wordpress • E-handel • Woocommerce • Appar • E-postkommunikation • Webbhotell • Egen server • Konsulttjänster • Hackad hemsida",
    description:
      "Vi är en webbyrå i Stockholm som kan hjälpa med att skapa hela lösningen till dig och din affär. Vi bygger en säljande webbsida åt dig, lägga webbsida på säkert SERVER/WEBBHOTELL, skapa afärs E-POSTADRESS och göra bästa möjliga google optimmerade sida med bra SEO ranking! Har din hemsida blivit HACKAD eller behöver uppdatering? Ingen problem, vi kan hjälpa...",
    link: {
      to: "/las-mer",
      text: "LÄS MER",
    },
  },
  {
    title:
      "Vi kan göra till dig en funktionell webbplats eller utveckla din befintliga!",
    subtitle: "",
    description:
      "Vårt team består av webbdesigners, webbprogrammerare och optimerings- och server experter vilket gör att vi kan erbjuda kompletta tjänstepaket till dig som innebär webbplats, webbhotell eller egen server och e-postadress! Vi strävar alltid efter att föra en dialog med kunden så att idéplaneringen, realisationen av visuella och funktionella webbsajtsaspekter, support och underhåll sker i enlighet med kundens önskemål.",
    link: {
      to: "/kom-igang-nu",
      text: "Kom igång nu ",
    },
  },
];

export default function Index() {
  return (
    <>
      <Hero />
      <Cards />
      <ContentBlock content={content[0]} />
      <Portfolio />
      <ContentBlock content={content[1]} />
    </>
  );
}