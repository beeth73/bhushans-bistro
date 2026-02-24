import { useState } from "react";

function Cart({ cartItems, removeFromCart }) {
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);

  // Math: Price * Quantity
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const applyPromo = () => {
    if (promo.toUpperCase() === "BHUSHAN50") {
      setDiscount(subtotal * 0.5);
    } else {
      alert("Invalid Promo Code");
      setDiscount(0);
    }
  };

  // GST Calculation (on amount after discount)
  const taxableAmount = subtotal - discount;
  const cgst = taxableAmount * 0.09;
  const sgst = taxableAmount * 0.09;
  const grandTotal = taxableAmount + cgst + sgst;

  return (
    <div style={{ 
      marginTop: "40px", 
      padding: "20px", 
      backgroundColor: "white", 
      borderRadius: "10px", 
      boxShadow: "0px 0px 15px rgba(0,0,0,0.1)" 
    }}>
      <h2 style={{ color: "#333", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>Your Cart</h2>
      
      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center", color: "#888" }}>Your cart is hungry! Add some food.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px dashed #eee" }}>
              <div>
                <strong style={{ fontSize: "1.1rem" }}>{item.name}</strong>
                <span style={{ marginLeft: "10px", color: "#666" }}>x{item.qty}</span>
              </div>
              <div>
                <span style={{ marginRight: "15px", fontWeight: "bold" }}>₹{item.price * item.qty}</span>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  style={{ backgroundColor: "#ff4d4d", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
            <input 
              type="text" 
              placeholder="Enter BHUSHAN50" 
              style={{ flex: 1, padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
              onChange={(e) => setPromo(e.target.value)}
            />
            <button 
              onClick={applyPromo}
              style={{ padding: "10px 20px", backgroundColor: "#333", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
            >
              Apply Promo
            </button>
          </div>

          <div style={{ marginTop: "20px", textAlign: "right", lineSize: "1.6" }}>
            <p>Subtotal: <strong>₹{subtotal}</strong></p>
            {discount > 0 && <p style={{ color: "green" }}>Promo Discount (50%): <strong>-₹{discount}</strong></p>}
            <p>CGST (9%): <strong>₹{cgst.toFixed(2)}</strong></p>
            <p>SGST (9%): <strong>₹{sgst.toFixed(2)}</strong></p>
            <hr />
            <h3 style={{ color: "#ff4d4d", fontSize: "1.5rem" }}>Grand Total: ₹{grandTotal.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;