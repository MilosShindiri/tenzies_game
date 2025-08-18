import { useState, useRef, useEffect } from "react";
import Dices from "/components/Dices";

export default function App() {
  function generateDice() {
    return Math.ceil(Math.random() * 6);
    // const newNumber = Math.ceil(Math.random() * 6);
    // console.log(newNumber);
    // setDices((prevDices) => [...prevDices, newNumber]);
  }
  //future proof
  const numberOfDices = 10;

  // function createDie() {
  //   return {
  //     value: dices,
  //   };
  // }
  function generateAllDice() {
    return Array.from({ length: numberOfDices }, generateDice);
  }

  const [dices, setDices] = useState(generateAllDice);

  function rollDice() {
    setDices(generateAllDice());
  }
  // function indexing(id) {
  //   setDices((prevDices) =>
  //     prevDices.map((item) => {
  //       return item.id;
  //     })
  //   );
  // }

  return (
    <>
      <main className="main">
        <h1 className="title">Tenzies</h1>
        <p className="text">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <Dices dices={dices} />
        <div className="button-container">
          <button className="button" onClick={rollDice}>
            Roll
          </button>
        </div>
      </main>
    </>
  );
}
