import React from "react";
import "./checkout.css";
import Lettuce from "../Ingredients/lettuce/Lettuce";
import Bacon from "../Ingredients/bacon/Bacon";
import Cheese from "../Ingredients/cheese/Cheese";
import Meat from "../Ingredients/meat/Meat";
import { Link } from "react-router-dom";

export default function Checkout({
  lettuceCount,
  baconCount,
  cheeseCount,
  meatCount,
}) {
  console.log(lettuceCount, "checkout");
  return (
    <>
      <div className="home__main checkout__box">
        <h1>We hope it tastes well!</h1>
        <div className="Ingrediant__burgerTop">
          <div className="Burger__Seed1"></div>
          <div className="Burger__Seed2"></div>
          <div className="Burger__Seed3"></div>
          <div className="Burger__Seed4"></div>
          <div className="Burger__Seed5"></div>
        </div>
        {lettuceCount.length === 0 &&
          baconCount.length == 0 &&
          cheeseCount.length === 0 &&
          meatCount.length === 0 && <p>No Ingredients Added</p>}

        <Lettuce lettuceCount={lettuceCount} />
        <Bacon baconCount={baconCount} />
        <Cheese cheeseCount={cheeseCount} />
        <Meat meatCount={meatCount} />
        <div className="Ingrediant__burgerBottom"></div>

        <div className="confirmation__box confirmation__Checkout__box">
          <Link to="/">
            <p className="confirmation__cancel">Cancel</p>
          </Link>
          <Link to="/">
            <p className="confirmation__done">Continue</p>
          </Link>
        </div>
      </div>
    </>
  );
}
