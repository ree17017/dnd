import React, { useEffect } from "react";
import useLocalStorage from "react-localstorage-hook";

export default function CharacterInfo(props) {
  const [characterName, setCharacterName] = useLocalStorage("characterInfo");

  return (
    <div>
      Character Name:
      <input
        type="text"
        value={characterName}
        onChange={(event) => setCharacterName(event.target.value)}
        name="characterName"
      />
      Class: <input type="text" name="class" />
      Level: <input type="number" name="level" />
      Background: <input type="text" name="Background" />
      Player Name: <input type="text" name="playerName" />
      Race: <input type="text" name="race" />
      Speed: <input type="text" name="speed" />
      Alignment: <input type="text" name="alignment" />
      Experience Points: <input type="text" name="experience" />
    </div>
  );
}
