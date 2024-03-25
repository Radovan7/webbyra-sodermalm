import CTA from "./CTA";
import CopyrightNavigation from "./CopyrightNavigation";
import IconCards from "./IconCards";

export default function Footer() {
  return (
    <footer className="section" id='contact'>
      <div className="footer-container">
        <h2 className="has-text-centered is-size-3 mb-5">Kontakta oss redan idag!</h2>
        <p className="has-text-centered is-size-5 mb-6">Klar att starta ditt nästa projekt med oss? Toppen! Ring oss eller skicka ett mail till så återkommer vi till dig så snart som möjligt!</p>
        <IconCards />
        <CTA />
        <CopyrightNavigation />
      </div>
    </footer>
  );
}