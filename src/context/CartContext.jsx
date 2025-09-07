import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    if (!cart.find(c => c.id === item.id)) {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const changeQuantity = (id, delta) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, changeQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
// import { createContext, useState, useEffect } from "react";

// export const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState(() => {
//     return JSON.parse(localStorage.getItem("cart")) || [];
//   });

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // ✅ Add to cart
//   const addToCart = (item) => {
//     if (!cart.find(c => c.id === item.id)) {
//       setCart([...cart, { ...item, quantity: 1 }]);
//     }
//   };

//   // ✅ Remove from cart
//   const removeFromCart = (id) => {
//     setCart(cart.filter(item => item.id !== id));
//   };

//   // ✅ Increase/Decrease quantity
//   const changeQuantity = (id, delta) => {
//     setCart(cart.map(item =>
//       item.id === id
//         ? { ...item, quantity: Math.max(1, item.quantity + delta) }
//         : item
//     ));
//   };

//   // ✅ Check if item already in cart
//   const isInCart = (id) => {
//     return cart.some(item => item.id === id);
//   };

//   return (
//     <CartContext.Provider 
//       value={{ cart, addToCart, removeFromCart, changeQuantity, isInCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }
