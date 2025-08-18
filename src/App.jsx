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
  function resetGame() {
    setDices(generateAllDice());
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
  const newButton = useRef(null);
  const gameWon =
    dices.every((die) => die.isHeld) &&
    dices.every((die) => die.value === dices[0].value);

  useEffect(() => {
    console.log("Komponenta se renderovala");
    if (gameWon) {
      newButton.current.focus();
    }
  }, [gameWon]);

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
          <button
            ref={newButton}
            className="button"
            onClick={gameWon ? resetGame : rollDice}
          >
            {gameWon ? "New Game" : "Roll"}
          </button>
        </div>
      </main>
    </>
  );
}
