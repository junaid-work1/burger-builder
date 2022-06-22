import React, { useState, useEffect } from "react";
import "./buildburger.css";
import OrderSummary from "./OrderSummary";
import { Link } from "react-router-dom";
export default function BuildBurger({
  lettuceCount,
  setLettuceCount,
  baconCount,
  setBaconCount,
  cheeseCount,
  setCheeseCount,
  meatCount,
  setMeatCount,
  deleteIngrediant,
  flag,
}) {
  const [open, setOpen] = useState(false); //state for model
  const [totalAmount, setTotalAmount] = useState(0); //state for total bill
  useEffect(() => {
    let sum =
      3 +
      lettuceCount.length * 0.5 +
      baconCount.length * 0.7 +
      cheeseCount.length * 0.4 +
      meatCount.length * 1.3;
    setTotalAmount(sum);
  }, [lettuceCount, baconCount, cheeseCount, meatCount]);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className="BuildBurger__main">
      {totalAmount > 3 ? (
        <p>
          Current price: <strong>${totalAmount.toFixed(2)}</strong>
        </p>
      ) : (
        <p>
          Current price: <strong>$3.00</strong>
        </p>
      )}

      <div className="Ingrediant__item-box">
        <div className="Ingrediant__item">Lettuce</div>
        <button
          className="Ingrediant-btn__less"
          disabled={lettuceCount.length === 0 ? true : false}
          onClick={() => {
            deleteIngrediant("Lettuce", lettuceCount.length);
          }}
        >
          Less
        </button>
        <button
          className="Ingrediant-btn__more"
          onClick={() => {
            setLettuceCount([...lettuceCount, `Entry ${lettuceCount.length}`]);
          }}
        >
          More
        </button>
      </div>
      <div className="Ingrediant__item-box">
        <div className="Ingrediant__item">Bacon</div>
        <button
          className="Ingrediant-btn__less"
          disabled={baconCount.length === 0 ? true : false}
          onClick={() => {
            deleteIngrediant("Bacon", baconCount.length);
          }}
        >
          Less
        </button>
        <button
          className="Ingrediant-btn__more"
          onClick={() => {
            setBaconCount([...baconCount, `Entry ${baconCount.length}`]);
          }}
        >
          More
        </button>
      </div>
      <div className="Ingrediant__item-box">
        <div className="Ingrediant__item">Cheese</div>
        <button
          className="Ingrediant-btn__less"
          disabled={cheeseCount.length === 0 ? true : false}
          onClick={() => {
            deleteIngrediant("Cheese", cheeseCount.length);
          }}
        >
          Less
        </button>
        <button
          className="Ingrediant-btn__more"
          onClick={() => {
            setCheeseCount([...cheeseCount, `Entry ${cheeseCount.length}`]);
          }}
        >
          More
        </button>
      </div>
      <div className="Ingrediant__item-box">
        <div className="Ingrediant__item">Meat</div>
        <button
          className="Ingrediant-btn__less"
          disabled={meatCount.length === 0 ? true : false}
          onClick={() => {
            deleteIngrediant("Meat", meatCount.length);
          }}
        >
          Less
        </button>
        <button
          className="Ingrediant-btn__more"
          onClick={() => {
            setMeatCount([...meatCount, `Entry ${meatCount.length}`]);
          }}
        >
          More
        </button>
      </div>
      {flag ? (
        <Link to="/signin">
          <button
            className="BuildBurger__Order-btn"
            disabled={
              lettuceCount.length > 0 ||
              baconCount.length > 0 ||
              cheeseCount.length > 0 ||
              meatCount.length > 0
                ? false
                : true
            }
            onClick={() => {
              onOpenModal();
            }}
          >
            SIGN UP TO ORDER
          </button>
        </Link>
      ) : (
        <button
          className="BuildBurger__Order-btn"
          disabled={
            lettuceCount.length > 0 ||
            baconCount.length > 0 ||
            cheeseCount.length > 0 ||
            meatCount.length > 0
              ? false
              : true
          }
          onClick={() => {
            onOpenModal();
          }}
        >
          ORDER
        </button>
      )}

      <OrderSummary
        open={open}
        onCloseModal={onCloseModal}
        lettuceCount={lettuceCount.length}
        baconCount={baconCount.length}
        cheeseCount={cheeseCount.length}
        meatCount={meatCount.length}
        totalAmount={totalAmount}
      />
    </div>
  );
}
