import React, { useState } from "react";
import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/header/Header.jsx";
import SignIn from "./components/authentication/login/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
function App() {
  const [flag, setFlag] = useState(true);   // for header menu
  const [lettuceCount, setLettuceCount] = useState([]);
  const [baconCount, setBaconCount] = useState([]);
  const [cheeseCount, setCheeseCount] = useState([]);
  const [meatCount, setMeatCount] = useState([]);

  console.log(lettuceCount, "lettuceCount");
  return (
    <div className="App">
      <BrowserRouter>
        <Header flag={flag} setFlag={setFlag} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                flag={flag}
                cheeseCount={cheeseCount}
                setCheeseCount={setCheeseCount}
                meatCount={meatCount}
                setMeatCount={setMeatCount}
                lettuceCount={lettuceCount}
                setLettuceCount={setLettuceCount}
                baconCount={baconCount}
                setBaconCount={setBaconCount}
              />
            }
          />
          <Route path="signin" element={<SignIn setFlag={setFlag} />} />
          <Route
            path="checkout"
            element={
              <Checkout
                lettuceCount={lettuceCount}
                cheeseCount={cheeseCount}
                meatCount={meatCount}
                baconCount={baconCount}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
