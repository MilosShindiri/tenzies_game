import { nanoid } from "nanoid";
import { useState, useRef, useEffect } from "react";
import Dices from "/components/Dices";
import Confetti from "react-confetti";

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
  // function resetGame() {
  //   setDices(generateAllDice());
  // }

  const [dices, setDices] = useState(() => generateAllDice());

  function rollDice() {
    if (!gameWon) {
      setDices((oldDice) =>
        oldDice.map((die) => (die.isHeld ? die : generateDice()))
      );
    } else {
      setDices(generateAllDice());
    }
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
    // console.log("Komponenta se renderovala");
    if (gameWon) {
      newButton.current.focus();
    }
  }, [gameWon]);

  return (
    <>
      <main className="main">
        {gameWon && <Confetti />}
        <div aria-live="polite" className="sr-only">
          {gameWon && (
            <p>Congratulations! You won! Press "New Game" to start again.</p>
          )}
        </div>
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
            onClick={rollDice}
            // onClick={gameWon ? resetGame : rollDice}
          >
            {gameWon ? "New Game" : "Roll"}
          </button>
        </div>
      </main>
    </>
  );
}
