import {useState} from "react";

export default function Player() {
    const [enteredPlayerName, setEnteredPlayerName] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    const nameHandler = (event) => {
        setIsSubmitted(false)
        setEnteredPlayerName(event.target.value)
    }

    const clickHandler = () => {
        setIsSubmitted(true)
    }

  return (
    <section id="player">
      <h2>Welcome {isSubmitted ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input
            type="text"
            value={enteredPlayerName}
            onChange={nameHandler}
        />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
