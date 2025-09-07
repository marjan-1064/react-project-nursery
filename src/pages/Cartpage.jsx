import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart, changeQuantity } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <div className="container">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div>
                  <h5>{item.name}</h5>
                  <img src={item.img} alt={item.name} width={100} height={100} />
                  <p>${item.price}</p>
                  <div className="quantity">
                    <button onClick={() => changeQuantity(item.id, -1)}>-</button>
                    {item.quantity}
                    <button onClick={() => changeQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
            <h3>Total: ${total}</h3>
            <Link to="/thankyou"><button className="checkout-btn">Checkout</button></Link>
            <Link to="/List"><button className="shop-btn">Continue shopping</button></Link>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
