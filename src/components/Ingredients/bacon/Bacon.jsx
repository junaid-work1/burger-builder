import React from "react";
import "./bacon.css";
export default function Bacon({ baconCount }) {
  return (
    <>
      {baconCount.map((item, index) => {
        return <div className="Ingredient__Bacon" key={index}></div>;
      })}
    </>
  );
}
