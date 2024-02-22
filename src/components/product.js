import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";
import "./product.css";
import Card from "./card";

function Product(props) {
  const dispatch = useDispatch();
  const [activeCard, setActiveCard] = useState(null);

  const deck = useSelector((state) => state.deck);
  const diffuseCount = useSelector((state) => state.diffuseCount);
  const start = useSelector((state) => state.start);
  // console.log(test)

  // const sherwani = useSelector(state => state["sherwani"])
  const animateCard = () => {
    return new Promise((resolve) => setTimeout(resolve, 1500));
  };
  const delay = async () => {
    await animateCard();
  };

  const revealHandler = async () => {
    let randomCardIndex = Math.floor(Math.random() * deck.length);
    let randomCard = deck[randomCardIndex];

    setActiveCard(randomCardIndex);
    delay().then(() => {
      setActiveCard(null);

      if (randomCard === "🔀")
        dispatch(counterActions.shuffle(randomCardIndex));
      else if (randomCard === "🙅‍♂️")
        dispatch(counterActions.diffuse(randomCardIndex));
      else if (randomCard === "💣")
        dispatch(counterActions.explode(randomCardIndex));
      else dispatch(counterActions.cat(randomCardIndex));
      dispatch(counterActions.checkResult());
    });
    console.log(randomCard, "@@@");
  };

  return (
    <div className="flex gap-y-[15rem] justify-center flex-col items-center h-[100vh] w-[100vw]">
      <div className="product-container">
        {deck.map((val, key) => (
          <Card activeCard={activeCard} indi={key} type={val} />
        ))}
      </div>
      {start ? (
        <button
          onClick={revealHandler}
          className="bg-[crimson] text-white border-1 rounded-xl p-4 text-3xl"
        >
          REVEAL
        </button>
      ) : (
        <button
          onClick={()=>{dispatch(counterActions.start())}}
          className="bg-[cadetblue] text-white border-1 rounded-xl p-4 text-5xl"
        >
          Let's Start!
        </button>
      )}

      <div className="bg-[gray] p-6 rounded-xl">
        <h3 className="text-5xl">
          🙅‍♂️: <span>{diffuseCount}</span>
        </h3>
      </div>
    </div>
  );
}

export default Product;
