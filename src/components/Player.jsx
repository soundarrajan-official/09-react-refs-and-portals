import {useRef, useState} from "react";

export default function Player() {
    let playerNameRef = useRef(null)
    const [enteredPlayerName, setEnteredPlayerName] = useState("")

    const clickHandler = () => {
        setEnteredPlayerName(playerNameRef.current.value)
    }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input
            ref={playerNameRef}
            type="text"
        />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
