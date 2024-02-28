"use client";

import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
import CTA from "../components/CTA";
import ContentBlock from "../components/ContentBlock";

const content = {
  title: "",
  subtitle:
    "• Mobilanpassning • Responsive • Hemsida i Wordpress • E-handel • Woocommerce • Appar • E-postkommunikation • Webbhotell • Egen server • Konsulttjänster • Hackad hemsida",
  description:
    "Vi är en webbyrå i Stockholm som kan hjälpa med att skapa hela lösningen till dig och din affär. Vi bygger en säljande webbsida åt dig, lägga webbsida på säkert SERVER/WEBBHOTELL, skapa afärs E-POSTADRESS och göra bästa möjliga google optimmerade sida med bra SEO ranking! Har din hemsida blivit HACKAD eller behöver uppdatering? Ingen problem, vi kan hjälpa...",
  link: {
    to: "/las-mer",
    text: "LÄS MER",
  },
};

export default function Index() {
  return (
    <>
      <Hero />
      <Cards />
      <ContentBlock content={content} />
      <Carousel />
      <CTA />
    </>
  );
}
