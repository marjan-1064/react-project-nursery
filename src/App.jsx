
// import React from "react";
// // import EventPlanner from "./components/EventPlanner"; // 👈 import the other file
// import Todo from "./components/TodoApp";
// function App() {
//   const currDate = new Date();

//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>
//         It is {currDate.toLocaleDateString()} and the time now is{" "}
//         {currDate.toLocaleTimeString()}.
//       </h2>

//       {/* 👇 render the other file's component */}
//       <Todo />
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import ListPage from "./pages/listpage";
import CartPage from "./pages/Cartpage";
import ThankYou from "./pages/thankyou";
import "./index.css";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;


