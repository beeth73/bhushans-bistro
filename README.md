# 🍔 Bhushan's Bistro - Food Delivery Application

**Live Demo:** [https://bhushans-bistro.vercel.app/](https://bhushans-bistro.vercel.app/)

Developed by **Bhushan Ladgaonkar**  
Project for the **Full Stack Development (FSD) Course**  
**Fr. Conceicao Rodrigues College of Engineering (FRCRCE)**

---

## 📝 Project Overview
Bhushan's Bistro is a dynamic, single-page React application that simulates a modern food delivery experience. The project demonstrates core frontend engineering concepts including state management, component architecture, and real-time business logic calculations (GST, discounts, and quantity handling).

## 🚀 Features
- **Dynamic Menu:** Interactive list of food items with high-quality visual representation.
- **Advanced Cart Logic:** 
  - **Intelligent Quantity Management:** Prevents duplicate entries by grouping items and incrementing quantities.
  - **Real-time Updates:** Add or remove items with instant UI feedback.
- **Pricing Engine:** 
  - Real-time Subtotal calculation based on quantity.
  - **Promo Code System:** Supports `BHUSHAN50` for a 50% discount.
  - **Tax Module:** Automated calculation of 9% CGST and 9% SGST applied on the discounted subtotal.
- **Branded UI:** Fully customized header, centered layout, and styled with modern CSS-in-JS.

## 🛠️ Tech Stack
- **Library:** React.js (v18+)
- **Language:** JavaScript (ES6+)
- **UI Architecture:** Functional Components with Hooks (`useState`)
- **Deployment:** Vercel
- **Development Environment:** MacBook Air M4

## ⚙️ Installation & Setup
To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/beeth73/bhushans-bistro.git

2. **Navigate to the directory:**
  ```bash
  cd bhushans-bistro

3. **Install dependencies:**
  ```bash
  npm install
4. **Start the development server:**
  ```bash
  npm start


The app will open automatically at http://localhost:3000
🏫 Academic Context
This project was built as part of the Module 3 assignment for the FSD Course at FRCRCE. Key learning objectives achieved:
Component Reusability & Props: Passing data and functions across the component tree.
State-driven UI: Managing application memory with the useState hook.
Functional Programming: Heavy use of array manipulation methods like .map(), .filter(), and .reduce().
Conditional Rendering: Displaying cart empty states and promo success messages.
