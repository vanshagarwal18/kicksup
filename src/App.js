import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useImmerReducer } from "use-immer";
//Context
import StateContext from "./Context/StateContext";
import DispatchContext from "./Context/DispatchContext";

//Pages
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Journey from "./Pages/Journey";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import Store from "./Pages/Store";
import Store2 from "./Pages/Store2";

function App() {
  const [cartActive, SetCartActive] = useState(false);

  //Initialise state
  const initialState = {
    isThere: Boolean(localStorage.getItem("usercart")),
    shoecart: Boolean(localStorage.getItem("usercart"))
      ? JSON.parse(localStorage.getItem("usercart"))
      : [],
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case "showCart":
        draft.shoeCart = action.value;
        return;
      case "addToCart":
        const len = draft.shoecart.filter((i) => {
          // eslint-disable-next-line eqeqeq
          return i.id == action.value.id;
        }).length;
        if (len === 0) draft.shoecart.push(action.value);
        return;
      case "removeFromCart":
        draft.shoecart = draft.shoecart.filter((i) => {
          // eslint-disable-next-line eqeqeq
          return i.id != action.value;
        });
        return;
      default:
    }
  }
  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  //To get our cart as soon as app loads
  useEffect(() => {
    localStorage.setItem("usercart", JSON.stringify(state.shoecart));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.shoecart]);
  useEffect(() => {
    dispatch({
      type: "showCart",
      value: JSON.parse(localStorage.getItem("usercart")),
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Dummy data for app
  let data = [
    {
      id: 101,
      name: "KSL 01",
      price: 2000,
      rating: 3.5,
      color: "red",
      designTemplates: 2,
      type: "Loafers",
    },
    {
      id: 102,
      name: "KSW 01",
      price: 2500,
      rating: 2.5,
      color: "blue",
      designTemplates: 3,
      type: "Loafers",
    },
    {
      id: 103,
      name: "Royal S 01",
      price: 6000,
      rating: 4.5,
      color: "yellow",
      designTemplates: 4,
      type: "Sneakers",
    },
    {
      id: 104,
      name: "KSH 01",
      price: 7100,
      rating: 4.5,
      color: "yellow",
      designTemplates: 3,
      type: "Loafers",
    },
    {
      id: 105,
      name: "KSA 02",
      price: 1600,
      rating: 1.5,
      color: "green",
      designTemplates: 5,
      type: "Loafers",
    },
    {
      id: 106,
      name: "Royal K 01",
      price: 7200,
      rating: 5,
      color: "mustard",
      designTemplates: 2,
      type: "Sneakers",
    },
  ];
  return (
    <>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/journey" element={<Journey />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route
                path="/store"
                element={
                  <Store
                    data={data}
                    cartActive={cartActive}
                    SetCartActive={SetCartActive}
                  />
                }
              ></Route>
              <Route
                path="/store/design/:id"
                element={
                  <Store2
                    data={data}
                    cartActive={cartActive}
                    SetCartActive={SetCartActive}
                  />
                }
              ></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
          </Router>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </>
  );
}

export default App;
