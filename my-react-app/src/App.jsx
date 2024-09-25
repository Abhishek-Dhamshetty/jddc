import React, { useEffect, useState } from "react";
import './App.css'; // Import custom CSS or bootstrap here.
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
    calculateTotal(updatedCart);
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
    calculateTotal(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
      calculateTotal(updatedCart);
    }
  };

  const calculateTotal = (cart) => {
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalAmount(total);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">E-Commerce Platform</h1>
      
      {/* Products Section */}
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.title} style={{ height: '150px', objectFit: 'contain' }} />
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">⭐ {product.rating?.rate}</p>
                <p className="card-text">₹ {product.price}</p>
                <button className="btn btn-primary w-25" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="mt-5">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index} className="d-flex justify-content-between align-items-center mb-3">
                <img src={item.image} alt={item.title} style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                <p>{item.title}</p>
                <p>₹{item.price}</p>
                <div>
                  <button onClick={() => decreaseQuantity(index)}>-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button onClick={() => increaseQuantity(index)}>+</button>
                </div>
              </div>
            ))}

            {/* Price Details */}
            <div className="card p-3 mt-4">
              <h4>Price Details</h4>
              <p>Total MRP: ₹{totalAmount}</p>
              <p>Coupon Discount: ₹50</p>
              <p>Platform Fee: ₹10</p>
              <p>Shipping Charges: ₹20</p>
              <h5>Total Amount: ₹{totalAmount + 10 + 20 - 50}</h5>
              <button className="btn btn-success mt-3 w-25">Place Order</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
