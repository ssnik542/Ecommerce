import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { delCart, addCart, delIndv } from "../redux/action";
import EkorNav from "./EkorNav";
import "./StyleCart.css";
function Cart() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.handleCart.carts);

  const [total, setTotal] = useState(0);
  const [quanti, setquanti] = useState(0);
  const prod_Ki_price = () => {
    const price = state.map((prod) => prod.price * prod.qty);
    const sum = price.reduce((partialSum, a) => partialSum + a, 0);
    const quantity = state.map((prod) => prod.qty);
    const Qsum = quantity.reduce((partialSum, a) => partialSum + a, 0);
    setTotal(sum);
    setquanti(Qsum);
  };
  useEffect(() => {
    prod_Ki_price();
  }, [total, state]);

  const removeProd = (id) => {
    dispatch(delCart(id));
    alert("removing....");
  };
  //product count increse
  const increment = (product) => {
    if (product.qty < 5) {
      dispatch(addCart(product));
    } else {
      alert("Sorry 😢 you cannot add more than 5 products");
    }
  };

  //product count deacrease
  const decrement = (product) => {
    dispatch(delIndv(product));
  };
  const CartProd = () => {
    return (
      <>
        <EkorNav />
        <div className="cart">
          <div class="CartContainer">
            <div class="Header">
              <h3 class="Heading">Shopping Cart</h3>
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
                    <div class="bton" onClick={() => increment(prod)}>
                      +
                    </div>
                    <div class="count">{prod.qty}</div>
                    <div
                      class="bton"
                      onClick={
                        prod.qty <= 1
                          ? () => removeProd(prod.id)
                          : () => decrement(prod)
                      }
                    >
                      -
                    </div>
                  </div>
                  <div class="prices">
                    <div class="amount">
                      ₹{(prod.price * prod.qty).toFixed(2)}
                    </div>
                    <div class="save">
                      <u>Save for later</u>
                    </div>
                    <div class="remove" onClick={() => removeProd(prod.id)}>
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
                  <div class="items">{quanti} items</div>
                </div>
                <div class="total-amount">₹{total}</div>
              </div>
              <NavLink to="/billing">
                <button class="button">Checkout</button>
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  };
  return <CartProd />;
}

export default Cart;
