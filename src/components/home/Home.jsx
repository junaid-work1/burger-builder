import React, { useState } from "react";
import "./home.css";
import BuildBurger from "../order burger/BuildBurger";
import Lettuce from "../Ingredients/lettuce/Lettuce";
import Bacon from "../Ingredients/bacon/Bacon";
import Cheese from "../Ingredients/cheese/Cheese";
import Meat from "../Ingredients/meat/Meat";
export default function Home({
  flag,
  lettuceCount,
  setLettuceCount,
  baconCount,
  setBaconCount,
  cheeseCount,
  setCheeseCount,
  meatCount,
  setMeatCount,
}) {
  // Function for Remove Ingrediants
  const deleteIngrediant = (ingrediantType, ingrediantLength) => {
    if (ingrediantType === "Lettuce") {
      const result = lettuceCount.filter((item, index) => {
        return index !== ingrediantLength - 1;
      });
      setLettuceCount(result);
    } else if (ingrediantType === "Bacon") {
      const result = baconCount.filter((item, index) => {
        return index !== ingrediantLength - 1;
      });
      setBaconCount(result);
    } else if (ingrediantType === "Cheese") {
      const result = cheeseCount.filter((item, index) => {
        return index !== ingrediantLength - 1;
      });
      setCheeseCount(result);
    } else {
      const result = meatCount.filter((item, index) => {
        return index !== ingrediantLength - 1;
      });
      setMeatCount(result);
    }
  };

  return (
    <>
      <div className="home__main">
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
      </div>
      <BuildBurger
        lettuceCount={lettuceCount}
        setLettuceCount={setLettuceCount}
        baconCount={baconCount}
        setBaconCount={setBaconCount}
        cheeseCount={cheeseCount}
        setCheeseCount={setCheeseCount}
        meatCount={meatCount}
        setMeatCount={setMeatCount}
        deleteIngrediant={deleteIngrediant}
        flag={flag}
      />
    </>
  );
}
