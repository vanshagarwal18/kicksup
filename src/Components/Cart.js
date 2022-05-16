import { useContext } from "react";

//Context
import StateContext from "../Context/StateContext";
import DispatchContext from "../Context/DispatchContext";

//Cart function to render cart
function Cart() {
  //state and dispatch variables to maintani cart in local storage
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  //Feature to remove items from cart
  const removeFromCartF = (id) => {
    appDispatch({ type: "removeFromCart", value: id });
  };

  //JSX rendering
  return (
    <>
      <div className="three">
        <h2 className="cart">
          CART
          <div className="cartdiv">
            <i className="fa-solid fa-cart-plus"></i>
          </div>
        </h2>
        <div className="cartapply">
          <div className="row mt-2 ml-5">
            <div className="col-4.5">
              <i className="fa-solid fa-location-dot"> </i> Home
            </div>
            <div className="col-7.5 ml-4">
              <i className="fa-regular fa-calendar"> </i> Select date
              <br />
              <input className="cartbtn" type="submit" value="order now" />
            </div>
          </div>
        </div>

        <div className="row cartrow">
          {appState.shoecart.length === 0 && (
            <div className="empty-cart">What's stopping you, designer?</div>
          )}
          {appState.shoecart.map((item, index) => {
            return (
              <div className="col-12 mt-4" key={index}>
                <div className="myshoecart">
                  <i
                    onClick={() => removeFromCartF(item.id)}
                    className="fa-solid fa-circle-xmark cross"
                  ></i>
                  <div className="myshoe">
                    <img
                      src={`/kicksup/images/${item.name + ".png"}`}
                      alt="shoes in cart"
                    />
                  </div>
                  <div className="course-info earned-badge">
                    <p className="cart-shoename">{item.name}</p>
                    <p className="cart-shoeline">By KICKSUP and you</p>
                    <p className="cart-price">Rs.{item.price}/-</p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="cartextraspace"></div>
        </div>
      </div>
    </>
  );
}

export default Cart;
