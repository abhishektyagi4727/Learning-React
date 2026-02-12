import React from "react";
import "./App.css";
import download from "../src/assets/download (1).jpeg";
function Cart({ arr }) {
  console.log(arr);

  return (
    <>
      <div className="div">
        {arr.map((x) => (
          <div className="hello">
            <div className="container">
              <div className="img-main">
                <img className="img" src={x.img} alt="shirt" />
              </div>
              <div className="main-header">
                <h3 className="cart-name">{x.productName}</h3>
                <h4 className="cart-color">{x.productColor}</h4>
                <h1 className="mrp">{x.productPrice}</h1>
                <button className="btn">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;
