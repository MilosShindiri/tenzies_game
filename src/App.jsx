import { nanoid } from "nanoid";
import { useState, useRef, useEffect } from "react";
import Dices from "/components/Dices";

export default function App() {
  function generateDice() {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    };
  }

  //future proof
  const numberOfDices = 10;

  function generateAllDice() {
    return Array.from({ length: numberOfDices }, generateDice);
  }

  const [dices, setDices] = useState(generateAllDice);

  function rollDice() {
    setDices((oldDice) =>
      oldDice.map((die) => (die.isHeld ? die : generateDice()))
    );
  }

  function hold(id) {
    setDices((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  return (
    <>
      <main className="main">
        <h1 className="title">Tenzies</h1>
        <p className="text">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <Dices dices={dices} hold={hold} />
        <div className="button-container">
          <button className="button" onClick={rollDice}>
            Roll
          </button>
        </div>
      </main>
    </>
  );
}
