import "../app/styles/globals.scss";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeadTag from "../components/HeadTag";

export default function Layout({ children }) {
  return (
    <>
      <HeadTag />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
