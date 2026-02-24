function Header({ cartCount }) {
  return (
    <div style={{ 
      background: "#ff4d4d", 
      color: "white", 
      padding: "30px 20px", 
      textAlign: "center", 
      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" 
    }}>
      <h1 style={{ margin: "0", fontSize: "3rem", letterSpacing: "1px" }}>Bhushan's Bistro</h1>
      <h3 style={{ margin: "5px 0", fontWeight: "300", opacity: "0.9" }}>Delivery Portal</h3>
      
      <div style={{ 
        background: "white", 
        color: "#ff4d4d", 
        display: "inline-block", 
        padding: "8px 20px", 
        borderRadius: "25px",
        marginTop: "15px",
        fontWeight: "bold",
        fontSize: "1.1rem",
        boxShadow: "0px 2px 5px rgba(0,0,0,0.2)"
      }}>
        🛒 Total Items: {cartCount}
      </div>
    </div>
  );
}

export default Header;