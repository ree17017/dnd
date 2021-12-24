import React, { useEffect } from "react";
import useLocalStorage from "react-localstorage-hook";

export default function CharacterInfo(props) {
  const [characterInfo, setCharacterInfo] = useLocalStorage("characterInfo");

  const handleCharacterInfo = (event) => {
    setCharacterInfo(...characterInfo, event.target.value);
  };

  return (
    <div>
      Character Name:
      <input
        type="text"
        value={characterInfo.name}
        onChange={(event) => handleCharacterInfo(event)}
        name="characterName"
      />
      Class:
      <input
        type="text"
        name="class"
        value={characterInfo.class}
        onChange={(event) => handleCharacterInfo(event)}
      />
      Level:
      <input
        type="number"
        name="level"
        value={characterInfo.level}
        onChange={(event) => handleCharacterInfo(event)}
      />
      Background:
      <input
        type="text"
        name="Background"
        value={characterInfo.background}
        onChange={(event) => handleCharacterInfo(event)}
      />
      Player Name:
      <input
        type="text"
        name="playerName"
        value={characterInfo.playerName}
        onChange={(event) => handleCharacterInfo(event)}
      />
      Race:
      <input
        type="text"
        name="race"
        value={characterInfo.race}
        onChange={(event) => handleCharacterInfo(event)}
      />
      Speed:
      <input
        type="text"
        name="speed"
        value={characterInfo.speed}
        onChange={(event) => handleCharacterInfo(event)}
      />
      Alignment:
      <input
        type="text"
        name="alignment"
        value={characterInfo.alignment}
        onChange={(event) => handleCharacterInfo(event)}
      />
      Experience Points:
      <input
        type="text"
        name="experience"
        value={characterInfo.experience}
        onChange={(event) => handleCharacterInfo(event)}
      />
    </div>
  );
}
