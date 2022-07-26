import React from "react";
import { useSelector } from "react-redux";
import "./StyleCart.css";
function Cart() {
  const state = useSelector((state) => state.handleCart.carts);
  console.log(state);
  const price = state.map((prod) => prod.price);
  const sum = price.reduce((partialSum, a) => partialSum + a, 0);
  console.log(sum);
  const CartProd = () => {
    return (
      <div className="cart">
        <div class="CartContainer">
          <div class="Header">
            <h3 class="Heading">Shopping Cart</h3>
            <h5 class="Action">Remove all</h5>
          </div>
          {state.map((prod) => (
            <div key={prod.id}>
              <div class="Cart-Items">
                <div class="image-box">
                  <img src={prod.image} style={{ height: "120px" }} />
                </div>
                <div class="about">
                  <h1 class="title">{prod.title}</h1>
                  <h3 class="subtitle">{prod.description}</h3>
                </div>
                <div class="counter">
                  <div class="bton">+</div>
                  <div class="count">1</div>
                  <div class="bton">-</div>
                </div>
                <div class="prices">
                  <div class="amount">₹{prod.price}</div>
                  <div class="save">
                    <u>Save for later</u>
                  </div>
                  <div class="remove">
                    <u>Remove</u>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <hr className="hor" />
          <div class="checkout">
            <div class="total">
              <div>
                <div class="Subtotal">Sub-Total</div>
                <div class="items">{state.length} items</div>
              </div>
              <div class="total-amount">₹{sum.toFixed(2)}</div>
            </div>
            <button class="button">Checkout</button>
          </div>
        </div>
      </div>
    );
  };
  return <CartProd />;
}

export default Cart;
