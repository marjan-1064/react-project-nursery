import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
// import "./index.css";

export default function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <div className="logo">🌱 Flora World</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/list">Shop</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>
    </header>
  );
}
