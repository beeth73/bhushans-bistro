import { useState } from "react";
import Header from "./components/Header";
import FoodItem from "./components/FoodItem";
import Cart from "./components/Cart";

function App() {
  const menu = [
    { id: 1, name: "Pizza", price: 250, image: "https://wp-cdn.typhur.com/wp-content/uploads/2025/01/homemade-pizza-in-air-fryer.jpg" },
    { id: 2, name: "Burger", price: 150, image: "https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg" },
    { id: 3, name: "Pasta", price: 200, image: "https://www.inspiredtaste.net/wp-content/uploads/2025/02/Pasta-Carbonara-Recipe-1.jpg" },
  ];

  const [cartItems, setCartItems] = useState([]);

  // Logic: Add item or Increase Quantity if it already exists
  function addToCart(food) {
    const exist = cartItems.find((item) => item.id === food.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === food.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, qty: 1 }]);
    }
  }

  // Logic: Remove the entire group of an item
  function removeFromCart(id) {
    setCartItems(cartItems.filter((item) => item.id !== id));
  }

  // Derived State: Total quantity for the Header bubble
  const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Header cartCount={totalQty} />
      
      <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ borderBottom: "2px solid #ff4d4d", paddingBottom: "10px" }}>Menu</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {menu.map((item) => (
            <FoodItem key={item.id} food={item} addToCart={addToCart} />
          ))}
        </div>

        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default App;