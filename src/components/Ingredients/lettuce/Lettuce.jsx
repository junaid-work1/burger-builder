import React from "react";
import "./lettuce.css";
export default function Lettuce({ lettuceCount }) {
  return (
    <>
      {lettuceCount.map((item, index) => {
        return <div className="Ingredient__Lettuce" key={index}></div>;
      })}
    </>
  );
}
