import { useContext } from "react";
import { useParams } from "react-router-dom";

//Context
import DispatchContext from "../Context/DispatchContext";

//Item
import FloatCart from "./FloatCart";

//Function to render design product screen
function DesignProduct(props) {
  //we have slices id from params to get required shoes on which we have clicked
  const { id } = useParams();
  const appDispatch = useContext(DispatchContext);

  //Code to get  required shoes from data by matching id
  const d = props.data.filter((sdata) => {
    // eslint-disable-next-line eqeqeq
    return sdata.id == id;
  });
  const da = d[0];

  //Add To Cart
  const addToCartF = () => {
    appDispatch({ type: "addToCart", value: da });
  };

  //Rating Calculation
  const rate = (shoe) => {
    const rating = Math.floor(shoe.rating);
    const left = Math.floor(5 - shoe.rating);
    const arr = [];
    for (let i = 1; i <= rating; i++) {
      arr.push(<i className="fa-solid fa-star rating"></i>);
    }
    if (rating !== shoe.rating) {
      arr.push(<i className="fa-solid fa-star-half-stroke rating"></i>);
    }
    for (let i = 1; i <= left; i++) {
      arr.push(<i className="fa-regular fa-star rating"></i>);
    }
    return arr;
  };
  return (
    <>
      <FloatCart cartActive={props.cartActive} />
      <div className="design-product">
        <div className="design-heading">
          <i className="fa-solid fa-angle-left arrow"> </i>
          your design space
          <div
            onClick={() => {
              props.SetCartActive((prev) => {
                return !prev;
              });
            }}
            className="design-float-cart"
          >
            <i className="fa-solid fa-cart-plus "></i>
          </div>
        </div>

        <div className="design-product-footer">
          <small className="rate-product">
            Rate product &nbsp;
            <i className="fa-regular fa-star rating"></i>
            <i className="fa-regular fa-star rating"></i>
            <i className="fa-regular fa-star rating"></i>
            <i className="fa-regular fa-star rating"></i>
            <i className="fa-regular fa-star rating"></i>
          </small>
          <div className="design-product-buttons">
            <button className="share-design">share design</button>
            <button onClick={addToCartF} className="add-to-cart">
              add to cart
            </button>
          </div>
        </div>
        <div className="design-space-row row">
          <div className="columndes col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <img
              className="shoe-design"
              src={`/kicksup/images/${da.name + ".png"}`}
              alt=""
            />
          </div>
          <div className="columndes col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="shoe-colour-column-one">
              <img
                className="shoe-colour-image"
                src={`/kicksup/images/${da.name + ".png"}`}
                alt=""
              />
              <img
                className="shoe-colour-image"
                src={`/kicksup/images/${da.name + ".png"}`}
                alt=""
              />
              <img
                className="shoe-colour-image-last"
                src={`/kicksup/images/${da.name + ".png"}`}
                alt=""
              />
            </div>
            <div className="shoe-colour-column-two">
              <div className="design-text">
                <p className="design-shoename">{da.name}</p>
                <small className="design-shoeline">By KICKSUP and you</small>

                <p className="shoe-rating">
                  &nbsp; &nbsp;
                  {rate(da)}
                </p>
                <p className="review">80 reviews</p>
                <p className="shoe-price">Rs. {da.price}/-</p>
                <p className="shoe-discount">
                  Get an exclusive 20% off shopping with HDFC bank
                </p>
              </div>
              <div className="position-shoes">
                <div className="position-text-one">Front</div> &nbsp;&nbsp;
                <label className="shades">
                  <input type="checkbox" />
                  <span className="shades-checkmark check"></span>
                </label>
                <label className="shades">
                  <input type="checkbox" />
                  <span className="shades-checkmark bluecheck"></span>
                </label>
                <label className="shades">
                  <input type="checkbox" />
                  <span className="shades-checkmark yellowcheck"></span>
                </label>
              </div>
              <div className="position-shoes">
                <div className="position-text-two">Middle</div>

                <label className="shades">
                  <input type="checkbox" />
                  <span className="shades-checkmark check"></span>
                </label>
                <label className="shades">
                  <input type="checkbox" />
                  <span className="shades-checkmark bluecheck"></span>
                </label>
                <label className="shades">
                  <input type="checkbox" />
                  <span className="shades-checkmark yellowcheck"></span>
                </label>
              </div>
              <div className="position-shoes">
                <div className="position-text-three">Back</div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <label className="shades">
                  <input type="checkbox" />
                  <span className="shades-checkmark check"></span>
                </label>
                <label className="shades">
                  <input type="checkbox" />
                  <span className="shades-checkmark bluecheck"></span>
                </label>
                <label className="shades">
                  <input type="checkbox" />
                  <span className="shades-checkmark yellowcheck"></span>
                </label>
              </div>
              <div className="position-shoes">
                <div className="position-text-four">Sole</div>{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;
                <label className="shades">
                  <input type="checkbox" />
                  <span className="shades-checkmark check"></span>
                </label>
                <label className="shades">
                  <input type="checkbox" />
                  <span className="shades-checkmark bluecheck"></span>
                </label>
                <label className="shades">
                  <input type="checkbox" />
                  <span className="shades-checkmark yellowcheck"></span>
                </label>
              </div>
              <div className="size-shoes">
                <div className="position-text-five">Size</div>{" "}
                &nbsp;&nbsp;&nbsp;
                <label className="shades">
                  <input type="checkbox" />
                  <span className="shades-checkmark check"></span>
                </label>
                <label className="shades">
                  <input type="checkbox" />
                  <span className="shades-checkmark bluecheck"></span>
                </label>
                <label className="shades">
                  <input type="checkbox" />
                  <span className="shades-checkmark yellowcheck"></span>
                </label>
                <label className="shades">
                  <input type="checkbox" />
                  <span className="shades-checkmark yellowcheck"></span>
                </label>
              </div>
            </div>
            <div className="design-extra-space"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DesignProduct;
