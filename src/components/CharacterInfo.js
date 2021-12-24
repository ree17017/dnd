import React, { useEffect } from "react";
import useLocalStorage from "react-localstorage-hook";

export default function CharacterInfo(props) {
  const [characterName, setCharacterName] = useLocalStorage("characterInfo");
  const [characterclass, setCharacterClass] = useLocalStorage("class");
  const [level, setLevel] = useLocalStorage("level");
  const [background, setBackground] = useLocalStorage("background");
  const [playerName, setPlayerName] = useLocalStorage("playername");
  const [race, setRace] = useLocalStorage("race");
  const [speed, setSpeed] = useLocalStorage("speed");
  const [alignment, setAlignment] = useLocalStorage("alignment");
  const [experience, setExperience] = useLocalStorage("experience");

  return (
    <div>
      Character Name:
      <input
        type="text"
        value={characterName}
        onChange={(event) => setCharacterName(event.target.value)}
        name="characterName"
      />
      Class:
      <input
        type="text"
        name="class"
        value={characterclass}
        onChange={(event) => setCharacterClass(event.target.value)}
      />
      Level:
      <input
        type="number"
        name="level"
        value={level}
        onChange={(event) => setLevel(event.target.value)}
      />
      Background:
      <input
        type="text"
        name="Background"
        value={background}
        onChange={(event) => setBackground(event.target.value)}
      />
      Player Name:
      <input
        type="text"
        name="playerName"
        value={playerName}
        onChange={(event) => setPlayerName(event.target.value)}
      />
      Race:
      <input
        type="text"
        name="race"
        value={race}
        onChange={(event) => setRace(event.target.value)}
      />
      Speed:
      <input
        type="text"
        name="speed"
        value={speed}
        onChange={(event) => setSpeed(event.target.value)}
      />
      Alignment:
      <input
        type="text"
        name="alignment"
        value={alignment}
        onChange={(event) => setAlignment(event.target.value)}
      />
      Experience Points:
      <input
        type="text"
        name="experience"
        value={experience}
        onChang={(event) => setExperience(event.target.value)}
      />
    </div>
  );
}
