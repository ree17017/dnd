import React, { useState } from "react";
import useLocalStorage from "react-localstorage-hook";
import ReactModal from "react-modal";
import { ToastContainer, toast } from "react-toastify";

export default function CharacterInfo() {
  const [characterName, setCharacterName] = useLocalStorage("characterInfo");
  const [characterclass, setCharacterClass] = useLocalStorage(
    "class",
    "cleric"
  );
  const [level, setLevel] = useLocalStorage("level", 1);
  const [background, setBackground] = useLocalStorage("background");
  const [playerName, setPlayerName] = useLocalStorage("playername");
  const [race, setRace] = useLocalStorage("race");
  const [speed, setSpeed] = useLocalStorage("speed");
  const [alignment, setAlignment] = useLocalStorage("alignment");
  const [experience, setExperience] = useLocalStorage("experience");

  const [isOpen, setIsOpen] = useState(false);

  const clearLocalStorage = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure?")) {
      localStorage.clear();
      window.location.reload();
      toast("Information cleared");
    }
  };

  const handleLevel = (event: any) => {
    if (event.target.name === "minus") {
      setLevel(Math.round(+level - 1));
    } else if (event.target.name === "plus") {
      setLevel(Math.round(+level + 1));
    }
  };

  return (
    <div>
      <ToastContainer />
      <CharacterInfoLayout
        characterName={characterName}
        characterclass={characterclass}
        level={level}
        background={background}
        playerName={playerName}
        race={race}
        speed={speed}
        alignment={alignment}
        experience={experience}
      />
      <button onClick={clearLocalStorage}>Clear your Character</button>
      <button onClick={() => setIsOpen(true)}>Edit Character Info</button>
      <div>
        If you find you need to email the creator: reed.josh.r@gmail.com
      </div>
      <ReactModal isOpen={isOpen}>
        <h1>Edit Character Info</h1>
        <div>
          <ul>
            <li className="modal_li">
              Character Name:
              <input
                type="text"
                value={characterName}
                onChange={(event) => setCharacterName(event.target.value)}
                name="characterName"
                className="modal_input"
              />
            </li>
            <li className="modal_li">
              Class:
              <input
                type="text"
                name="class"
                value={characterclass}
                onChange={(event) => setCharacterClass(event.target.value)}
                className="modal_input"
              />
            </li>
            <li className="modal_li">
              Level:
              <button
                name="minus"
                className="modal_input"
                onClick={(event) => handleLevel(event)}
              >
                -
              </button>
              <input
                type="number"
                max="10"
                step="1"
                min="1"
                name="level"
                readOnly
                value={level}
                onChange={(event) => handleLevel(event)}
              />
              <button name="plus" onClick={(event) => handleLevel(event)}>
                +
              </button>
            </li>
            <li className="modal_li">
              Background:
              <input
                type="text"
                name="Background"
                value={background}
                onChange={(event) => setBackground(event.target.value)}
                className="modal_input"
              />
            </li>
            <li className="modal_li">
              Player Name:
              <input
                type="text"
                name="playerName"
                value={playerName}
                onChange={(event) => setPlayerName(event.target.value)}
                className="modal_input"
              />
            </li>
            <li className="modal_li">
              Race:
              <input
                type="text"
                name="race"
                value={race}
                onChange={(event) => setRace(event.target.value)}
                className="modal_input"
              />
            </li>
            <li className="modal_li">
              Speed:
              <input
                type="text"
                name="speed"
                value={speed}
                onChange={(event) => setSpeed(event.target.value)}
                className="modal_input"
              />
            </li>
            <li className="modal_li">
              Alignment:
              <input
                type="text"
                name="alignment"
                value={alignment}
                onChange={(event) => setAlignment(event.target.value)}
                className="modal_input"
              />
            </li>
            <li className="modal_li">
              Experience Points:
              <input
                type="number"
                name="experience"
                value={experience}
                onChange={(event) => setExperience(event.target.value)}
                className="modal_input"
              />
            </li>
          </ul>
        </div>
        <button
          onClick={() => {
            toast("Character Saved");
            setIsOpen(false);
          }}
        >
          Save/Close
        </button>
      </ReactModal>
    </div>
  );
}

interface CharacterInfoLayoutProps {
  characterName: any,
  characterclass: any,
  level: any,
  background: any,
  playerName: any,
  race: any,
  speed: any,
  alignment: any,
  experience: any,
}

function CharacterInfoLayout({
  characterName,
  characterclass,
  level,
  background,
  playerName,
  race,
  speed,
  alignment,
  experience,
}: CharacterInfoLayoutProps) {
  return (
    <div style={{ display: "flex", height: "204px" }}>
      <div className="character-flex-container">
        <div>
          <div>
            <img src=".\Logo.png" alt="Logo" />
          </div>
          <DisplayInfo item={characterName} title={"Character Name"} />
        </div>
      </div>
      <div className="character-info-flex-container">
        <div>
          <DisplayInfo item={characterclass} title={"Class & Level"} />
          <DisplayInfo item={level} title={"Level"} />
          <DisplayInfo item={background} title={"Background"} />
          <DisplayInfo item={playerName} title={"Player Name"} />
        </div>
        <div>
          <DisplayInfo item={race} title={"Race"} />
          <DisplayInfo item={speed} title={"Speed"} />
          <DisplayInfo item={alignment} title={"Alignment"} />
          <DisplayInfo item={experience} title={"Experience"} />
        </div>
      </div>
    </div>
  );
}

interface DisplayInfoProps {
  item: any;
  title: any;
}

function DisplayInfo({ item, title }: DisplayInfoProps) {
  return (
    <ul data-testid={`${item}-${title}-ul`}>
      <li className="item-text">{item}</li>
      <li className="name-text">{title}</li>
    </ul>
  );
}
