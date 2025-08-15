export default function Dices({ dices }) {
  // let generateNumber = Math.floor(Math.random());
  // console.log(generateNumber);

  return (
    <>
      <section className="diceArea">
        {dices.map((dice, index) => (
          <button className="dice" key={index}>
            {dice}
          </button>
        ))}
      </section>
    </>
  );
}

// {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
