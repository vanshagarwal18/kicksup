import React, { useState } from "react";
import { Link } from "react-router-dom";

//Item
import FloatCart from "./FloatCart";

//Function to render filter and shoes screen
function FilterShoes(props) {
  //To get sample data which we have as array of objects
  let sampledata = props.data;
  let filterinfo = {
    pricerange: [],
    colour: [],
    designtemplate: [],
    type: [],
  };

  const [data, setData] = useState(sampledata);
  const [filter, setFilter] = useState(filterinfo);

  const [filterActive, SetFilterActive] = useState(false);

  //Price filter to get shoes of required prices
  const pricefilter = (e, minp, maxp) => {
    setFilter({
      ...filter,
      pricerange: e.target.checked
        ? [
            ...filter.pricerange,
            {
              minprice: minp,
              maxprice: maxp,
            },
          ]
        : filter.pricerange.filter((range) => range.minprice !== minp),
    });
  };

  //Colour filter to get shoes of required colour
  const colourfilter = (e, value) => {
    setFilter({
      ...filter,
      colour: e.target.checked
        ? [...filter.colour, value]
        : filter.colour.filter((onecolour) => onecolour !== value),
    });
  };

  //Design filter to get shoes with requuired number of design templates
  const designfilter = (e, mind, maxd) => {
    setFilter({
      ...filter,
      designtemplate: e.target.checked
        ? [
            ...filter.designtemplate,
            {
              mindesign: mind,
              maxdesign: maxd,
            },
          ]
        : filter.designtemplate.filter((design) => design.mindesign !== mind),
    });
  };

  //Type filter to get shoes of reuired type i.e. Loafers or Sneakers
  const typefilter = (e, value) => {
    setFilter({
      ...filter,
      type: e.target.checked
        ? [...filter.type, value]
        : filter.type.filter((onetype) => onetype !== value),
    });
  };

  //Handle Submit function to apply Filters
  const handleSubmit = (e) => {
    e.preventDefault();
    const newdata = sampledata.filter((f) => {
      return (
        (filter.pricerange.length === 0 ||
          filter.pricerange.some((p) => {
            return f.price >= p.minprice && f.price <= p.maxprice;
          })) &&
        (filter.colour.length === 0 || filter.colour.includes(f.color)) &&
        (filter.type.length === 0 || filter.type.includes(f.type)) &&
        (filter.designtemplate.length === 0 ||
          filter.designtemplate.some((d) => {
            return (
              f.designTemplates >= d.mindesign &&
              f.designTemplates <= d.maxdesign
            );
          }))
      );
    });
    setData(newdata);
    console.log(data);
  };

  //Rating calculation function
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
      <div
        className={`${
          filterActive ? "float-filter  display-active" : "float-filter "
        } `}
      >
        <h2 className="float-heading-filter">FILTERS</h2>
        <form
          action=""
          onSubmit={handleSubmit}
          method=""
          className="filterform"
        >
          <div>
            <h3>Cost</h3>
            <input
              type="checkbox"
              id="price1"
              name="price11"
              onChange={(e) => pricefilter(e, 1500, 4000)}
              checked={filter.pricerange.some((obj) => {
                return obj.minprice === 1500 && obj.maxprice === 4000;
              })}
            />
            <label> Rs. 1500-4000</label>
            <br />
            <input
              type="checkbox"
              id="price2"
              name="price2"
              onChange={(e) => pricefilter(e, 4001, 7000)}
              checked={filter.pricerange.some((obj) => {
                return obj.minprice === 4001 && obj.maxprice === 7000;
              })}
            />
            <label> Rs. 4001-7000</label>
            <br />
            <input
              type="checkbox"
              id="price3"
              name="price3"
              onChange={(e) => pricefilter(e, 7001, 100000)}
              checked={filter.pricerange.some((obj) => {
                return obj.minprice === 7001 && obj.maxprice === 100000;
              })}
            />
            <label> Rs. 7000+</label>
            <br />
          </div>
          <div>
            <h3>Colour</h3>
            <div className="color">
              <label className="contain">
                <input
                  type="checkbox"
                  onChange={(e) => colourfilter(e, "red")}
                  checked={filter.colour.includes("red")}
                />
                <span className="checkmark redcheck"></span>
              </label>
              <label className="contain">
                <input
                  type="checkbox"
                  onChange={(e) => colourfilter(e, "blue")}
                  checked={filter.colour.includes("blue")}
                />
                <span className="checkmark bluecheck"></span>
              </label>
              <label className="contain">
                <input
                  type="checkbox"
                  onChange={(e) => colourfilter(e, "yellow")}
                  checked={filter.colour.includes("yellow")}
                />
                <span className="checkmark yellowcheck"></span>
              </label>
              <label className="contain">
                <input
                  type="checkbox"
                  onChange={(e) => colourfilter(e, "green")}
                  checked={filter.colour.includes("green")}
                />
                <span className="checkmark greencheck"></span>
              </label>
              <label className="contain">
                <input
                  type="checkbox"
                  onChange={(e) => colourfilter(e, "mustard")}
                  checked={filter.colour.includes("mustard")}
                />
                <span className="checkmark goldencheck"></span>
              </label>
            </div>
          </div>
          <div>
            <h3>Design Templates</h3>
            <input
              type="checkbox"
              id="design1"
              name="design11"
              onChange={(e) => designfilter(e, 2, 2)}
              checked={filter.designtemplate.some((obj) => {
                return obj.mindesign === 2 && obj.maxdesign === 2;
              })}
            />
            <label> 2</label>
            <br />
            <input
              type="checkbox"
              id="design2"
              name="design2"
              onChange={(e) => designfilter(e, 3, 3)}
              checked={filter.designtemplate.some((obj) => {
                return obj.mindesign === 3 && obj.maxdesign === 3;
              })}
            />
            <label> 3</label>
            <br />
            <input
              type="checkbox"
              id="design3"
              name="design3"
              onChange={(e) => designfilter(e, 4, 10)}
              checked={filter.designtemplate.some((obj) => {
                return obj.mindesign === 4 && obj.maxdesign === 10;
              })}
            />
            <label> 3+</label>
            <br />
          </div>
          <div>
            <h3>Type</h3>
            <input
              type="checkbox"
              id="type1"
              name="type11"
              onChange={(e) => typefilter(e, "Loafers")}
              checked={filter.type.includes("Loafers")}
            />
            <label> Loafers</label>
            <br />
            <input
              type="checkbox"
              id="type2"
              name="type2"
              value="Car"
              onChange={(e) => typefilter(e, "Sneakers")}
              checked={filter.type.includes("Sneakers")}
            />
            <label> Sneakers</label>
            <br />
          </div>
          <div className="btndiv">
            <input className="btn" type="submit" value="Apply" />
          </div>
        </form>
      </div>
      <div className="one">
        <h2 className="filter">
          FILTERS
          <div className="filterdiv">
            <i className="fa-solid fa-filter"></i>
          </div>
        </h2>
        <form
          action=""
          onSubmit={handleSubmit}
          method=""
          className="filterform"
        >
          <div>
            <h3>Cost</h3>
            <input
              type="checkbox"
              id="price1"
              name="price11"
              onChange={(e) => pricefilter(e, 1500, 4000)}
              checked={filter.pricerange.some((obj) => {
                return obj.minprice === 1500 && obj.maxprice === 4000;
              })}
            />
            <label> Rs. 1500-4000</label>
            <br />
            <input
              type="checkbox"
              id="price2"
              name="price2"
              onChange={(e) => pricefilter(e, 4001, 7000)}
              checked={filter.pricerange.some((obj) => {
                return obj.minprice === 4001 && obj.maxprice === 7000;
              })}
            />
            <label> Rs. 4001-7000</label>
            <br />
            <input
              type="checkbox"
              id="price3"
              name="price3"
              onChange={(e) => pricefilter(e, 7001, 100000)}
              checked={filter.pricerange.some((obj) => {
                return obj.minprice === 7001 && obj.maxprice === 100000;
              })}
            />
            <label> Rs. 7000+</label>
            <br />
          </div>
          <div>
            <h3>Colour</h3>
            <div className="color">
              <label className="contain">
                <input
                  type="checkbox"
                  onChange={(e) => colourfilter(e, "red")}
                  checked={filter.colour.includes("red")}
                />
                <span className="checkmark redcheck"></span>
              </label>
              <label className="contain">
                <input
                  type="checkbox"
                  onChange={(e) => colourfilter(e, "blue")}
                  checked={filter.colour.includes("blue")}
                />
                <span className="checkmark bluecheck"></span>
              </label>
              <label className="contain">
                <input
                  type="checkbox"
                  onChange={(e) => colourfilter(e, "yellow")}
                  checked={filter.colour.includes("yellow")}
                />
                <span className="checkmark yellowcheck"></span>
              </label>
              <label className="contain">
                <input
                  type="checkbox"
                  onChange={(e) => colourfilter(e, "green")}
                  checked={filter.colour.includes("green")}
                />
                <span className="checkmark greencheck"></span>
              </label>
              <label className="contain">
                <input
                  type="checkbox"
                  onChange={(e) => colourfilter(e, "mustard")}
                  checked={filter.colour.includes("mustard")}
                />
                <span className="checkmark goldencheck"></span>
              </label>
            </div>
          </div>
          <div>
            <h3>Design Templates</h3>
            <input
              type="checkbox"
              id="design1"
              name="design11"
              onChange={(e) => designfilter(e, 2, 2)}
              checked={filter.designtemplate.some((obj) => {
                return obj.mindesign === 2 && obj.maxdesign === 2;
              })}
            />
            <label> 2</label>
            <br />
            <input
              type="checkbox"
              id="design2"
              name="design2"
              onChange={(e) => designfilter(e, 3, 3)}
              checked={filter.designtemplate.some((obj) => {
                return obj.mindesign === 3 && obj.maxdesign === 3;
              })}
            />
            <label> 3</label>
            <br />
            <input
              type="checkbox"
              id="design3"
              name="design3"
              onChange={(e) => designfilter(e, 4, 10)}
              checked={filter.designtemplate.some((obj) => {
                return obj.mindesign === 4 && obj.maxdesign === 10;
              })}
            />
            <label> 3+</label>
            <br />
          </div>
          <div>
            <h3>Type</h3>
            <input
              type="checkbox"
              id="type1"
              name="type11"
              onChange={(e) => typefilter(e, "Loafers")}
              checked={filter.type.includes("Loafers")}
            />
            <label> Loafers</label>
            <br />
            <input
              type="checkbox"
              id="type2"
              name="type2"
              value="Car"
              onChange={(e) => typefilter(e, "Sneakers")}
              checked={filter.type.includes("Sneakers")}
            />
            <label> Sneakers</label>
            <br />
          </div>
          <div className="btndiv">
            <input className="btn" type="submit" value="Apply" />
          </div>
        </form>
      </div>
      <div className="two">
        <h2 className="shoes">
          SHOES
          <div className="shoesdiv">
            <i className="fa-solid fa-magnifying-glass"></i>
            <button>sort by</button>
            <div
              onClick={() => {
                props.SetCartActive((prev) => {
                  return !prev;
                });
              }}
              className="float-cartdiv"
            >
              <i className="fa-solid fa-cart-plus slide-toggle"></i>
            </div>
            <div
              onClick={() => {
                SetFilterActive((prev) => {
                  return !prev;
                });
              }}
              className="float-cartdiv"
            >
              <i className="fa-solid fa-filter filter-toggle"></i>
            </div>
          </div>
        </h2>

        <div className="row shoerow">
          {data.map((shoe, index) => {
            return (
              <div
                className="col-6 col-xl-4 col-lg-6 col-md-6 col-sm-6"
                key={shoe.id.toString()}
              >
                <Link
                  className="shoe-links"
                  to={`/store/design/${shoe.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="shoecard">
                    <img src={`/images/${shoe.name + ".png"}`} alt="Shoes" />
                    <h4 className="shoename">{shoe.name}</h4>
                    <p className="price">
                      Rs.{shoe.price} &nbsp; &nbsp; &nbsp;
                      {rate(shoe)}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default FilterShoes;
