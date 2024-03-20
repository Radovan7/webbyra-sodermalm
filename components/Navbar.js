import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../public/img/net-partner-logo.svg'

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar navbar-styling">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/" className="navbar-item">
            <Image src={logo} alt="" width="100%" height={28} />
          </Link>
          <div
            className={`navbar-burger has-text-white ${isActive ? "is-active" : ""
              }`}
            onClick={handleBurgerClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div
          id="navbar"
          className={`navbar-menu navbar-menu-styling ${isActive ? "is-active" : ""
            }`}
        >
          <div className="navbar-end has-text-centered">
            <Link href="https://www.np011.se/om-oss/" target="_blank" className="navbar-item">
              Om oss
            </Link>
            <Link href="https://www.np011.se/webbsuport-konsulttjanst/" target="_blank" className="navbar-item">
              Tjänster
            </Link>
            <Link href="https://www.np011.se/kundsida/" target="_blank" className="navbar-item">
              Kundsida
            </Link>
            <Link href="https://www.np011.se/kontakta-oss/" target="_blank" className="navbar-item">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// TODO: Connect navbar links with the corresponding sections of the page
