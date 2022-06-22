import React from "react";
import "./cheese.css";
export default function Cheese({ cheeseCount }) {
  return (
    <>
      {cheeseCount.map((item, index) => {
        return <div className="Ingredient__Cheese" key={index}></div>;
      })}
    </>
  );
}
