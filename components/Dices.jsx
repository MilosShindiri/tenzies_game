export default function Dices({ dices, hold }) {
  return (
    <section className="diceArea">
      {dices.map((dice) => (
        <button
          key={dice.id}
          className="dice"
          style={{ backgroundColor: dice.isHeld ? "#59E391" : "white" }}
          onClick={() => hold(dice.id)}
        >
          {dice.value}
        </button>
      ))}
    </section>
  );
}
