import React from "react";
import "./meat.css";
export default function Meat({ meatCount }) {
  return (
    <>
      {meatCount.map((item, index) => {
        return <div className="Ingredient__Meat" key={index}></div>;
      })}
    </>
  );
}
