import React, { useState } from "react";
import "./ordersummary.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Link } from "react-router-dom";

export default function OrderSummary({
  open,
  onCloseModal,
  lettuceCount,
  baconCount,
  cheeseCount,
  meatCount,
  totalAmount,
}) {
  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center className="modal__Size">
        <h2>Your Order Summary:</h2>
        <ul>
          <li className="item">Lettuce: {lettuceCount}</li>
          <li className="item">Bacon: {baconCount}</li>
          <li className="item">Cheese: {cheeseCount}</li>
          <li className="item">Meat: {meatCount}</li>
        </ul>
        <h2>Total Price: ${totalAmount.toFixed(2)}</h2>
        <p>Continue to Checkout?</p>
        <div className="confirmation__box">
          <p className="confirmation__cancel" onClick={onCloseModal}>
            Cancel
          </p>
          <Link to="checkout">
            <p className="confirmation__done">Continue</p>
          </Link>
        </div>
      </Modal>
    </div>
  );
}
