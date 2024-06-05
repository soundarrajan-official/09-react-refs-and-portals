import {useRef} from "react";

export default function Player() {
    let playerNameRef = useRef(null)

    const clickHandler = () => {
        playerNameRef.current.value = ""
    }

  return (
    <section id="player">
      {/*  Doesn't not cause component re evaluation when changed */}
      <h2>Welcome {playerNameRef.current ? playerNameRef.current.value : "unknown entity"}</h2>
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
