import React, { useState } from "react";
import useLocalStorage from "react-localstorage-hook";

export default function Attacks(props) {
  const [attack1, setAttack1] = useLocalStorage("attack1", {
    attackName1: "",
    attackRange1: "",
    attackBonus1: "",
    damage1: "",
    type1: "",
  });
  const [attack2, setAttack2] = useLocalStorage("attack2", {
    attackName2: "",
    attackRange2: "",
    attackBonus2: "",
    damage2: "",
    type2: "",
  });
  const [attack3, setAttack3] = useLocalStorage("attack3", {
    attackName3: "",
    attackRange3: "",
    attackBonus3: "",
    damage3: "",
    type3: "",
  });
  const [attack4, setAttack4] = useLocalStorage("attack4", {
    attackName4: "",
    attackRange4: "",
    attackBonus4: "",
    damage4: "",
    type4: "",
  });
  const [attack5, setAttack5] = useLocalStorage("attack5", {
    attackName5: "",
    attackRange5: "",
    attackBonus5: "",
    damage5: "",
    type5: "",
  });
  const [attack6, setAttack6] = useLocalStorage("attack6", {
    attackName6: "",
    attackRange6: "",
    attackBonus6: "",
    damage6: "",
    type6: "",
  });

  //{"attackName1":"","attackRange1":"","attackBonus1":"","damage1":"","type1":""}
  const handleAttacks = (event) => {
    switch (event.target.title) {
      case "1":
        setAttack1({ ...attack1, [event.target.name]: event.target.value });
        break;
      case "2":
        setAttack2({ ...attack2, [event.target.name]: event.target.value });
        break;
      case "3":
        setAttack3({ ...attack3, [event.target.name]: event.target.value });
        break;
      case "4":
        setAttack4({ ...attack4, [event.target.name]: event.target.value });
        break;
      case "5":
        setAttack5({ ...attack5, [event.target.name]: event.target.value });
        break;
      case "6":
        setAttack6({ ...attack6, [event.target.name]: event.target.value });
        break;
      default:
        break;
    }
  };

  return (
    <div className="attacks">
      <Attack
        handleAttacks={handleAttacks}
        attackValue={attack1}
        attackNumber={1}
      />
      <Attack
        attackNumber={2}
        handleAttacks={handleAttacks}
        attackValue={attack2}
      />
      <Attack
        attackNumber={3}
        handleAttacks={handleAttacks}
        attackValue={attack3}
      />
      <Attack
        attackNumber={4}
        handleAttacks={handleAttacks}
        attackValue={attack4}
      />
      <Attack
        attackNumber={5}
        handleAttacks={handleAttacks}
        attackValue={attack5}
      />
      <Attack
        attackNumber={6}
        handleAttacks={handleAttacks}
        attackValue={attack6}
      />
    </div>
  );
}

function Attack({ attackValue, attackNumber, handleAttacks }) {
  return (
    <table className="attack_titles">
      <tr>
        <th style={{ marginRight: "112px" }}>Name</th>
        <th>Range</th>
        <th>
          <span>Prof</span>
          <span>Str</span>
        </th>
        <th>Dex</th>
        <th>Spell Power</th>
      </tr>
      <tr>
        <td>
          <input
            type="text"
            value={attackValue[`attackName${attackNumber}`]}
            onChange={handleAttacks}
            name={`attackName${attackNumber}`}
            title={attackNumber}
          />
        </td>
        <td>
          <input
            type="text"
            name={`attackRange${attackNumber}`}
            value={attackValue[`attackRange${attackNumber}`]}
            onChange={handleAttacks}
            title={attackNumber}
          />
        </td>
        <td>
          <input type="checkbox" name="attackProficiency" />
          <input type="radio" value="str" name="modType" />
        </td>
        <td>
          <input type="radio" value="dex" name="modType" />
        </td>
        <td>
          <input type="radio" value="spellPower" name="modType" />
        </td>
      </tr>
      <tr>
        <td>
          <input
            type="text"
            value={attackValue[`attackBonus${attackNumber}`]}
            onChange={handleAttacks}
            name={`attackBonus${attackNumber}`}
            title={attackNumber}
          />
        </td>
        <td>
          <input
            type="text"
            value={attackValue[`damage${attackNumber}`]}
            onChange={handleAttacks}
            name={`damage${attackNumber}`}
            title={attackNumber}
          />
        </td>
        <td>
          <input
            type="text"
            value={attackValue[`type${attackNumber}`]}
            onChange={handleAttacks}
            title={attackNumber}
            name={`type${attackNumber}`}
          />
        </td>
      </tr>
      <tr className="attack_titles">
        <td style={{ marginRight: "80px" }}>Atk Bonus</td>
        <td style={{ marginRight: "94px" }}>Damage</td>
        <td>Type / Weight</td>
      </tr>
    </table>
  );
}
