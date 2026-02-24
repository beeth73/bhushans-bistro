function FoodItem({ food, addToCart }) {
  return (
    <div style={{ 
      display: "flex", 
      alignItems: "center", 
      backgroundColor: "white", 
      padding: "15px", 
      borderRadius: "10px", 
      boxShadow: "0px 2px 5px rgba(0,0,0,0.05)" 
    }}>
      <img 
        src={food.image} 
        alt={food.name} 
        style={{ width: "250px", height: "200px", objectFit: "cover", borderRadius: "8px", marginRight: "20px" }} 
      />
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: "0 0 10px 0", fontSize: "1.4rem" }}>{food.name}</h3>
        <p style={{ margin: "0 0 15px 0", color: "#555", fontSize: "1.2rem", fontWeight: "bold" }}>₹{food.price}</p>
        <button 
          onClick={() => addToCart(food)}
          style={{ 
            backgroundColor: "#ff0b0b", 
            color: "white", 
            border: "none", 
            padding: "10px 20px", 
            borderRadius: "5px", 
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default FoodItem;