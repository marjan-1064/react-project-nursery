import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <section className="hero">
        <h1>Welcome to Flora World</h1>
        <p>Bring life to your home with our plants 🌱</p>
        <Link to="/list">
        <button>Start Now</button></Link>
      </section>
      <Footer />
    </>
  );
}
