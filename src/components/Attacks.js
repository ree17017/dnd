import React, { useState } from "react";
import useLocalStorage from "react-localstorage-hook";

export default function Attacks(props) {
  const [attacks, setAttacks] = useLocalStorage("attack1", {
    attackName1: "",
    attackRange1: "",
    attackBonus1: "",
    damage1: "",
    type1: "",
  });

  const [actionList, setActionList] = useLocalStorage("userActionList", [0]);
  const [attackProficiency, setAttackProficiency] = useLocalStorage(
    "attackProficiency",
    []
  );
  const [attackModifier, setAttackModifier] = useLocalStorage(
    "attackModifier",
    []
  );

  //{"attackName1":"","attackRange1":"","attackBonus1":"","damage1":"","type1":""}
  const handleAttacks = (event) => {
    setAttacks({ ...attacks, [event.target.name]: event.target.value });
  };

  const handleAttackProficiency = (event) => {
    if (attackProficiency.indexOf(event.target.name) === -1) {
      setAttackProficiency([...attackProficiency, event.target.name]);
      return;
    }

    if (attackProficiency.indexOf(event.target.name) > -1) {
      let saveThis = attackProficiency.filter(
        (attackName) => attackName !== event.target.name
      );
      setAttackProficiency(saveThis);
    }
  };

  const handleAttackModifier = (event) => {
    if (attackModifier.indexOf(event.target.name) === -1) {
      setAttackModifier([...attackModifier, event.target.name]);
      return;
    }

    if (attackModifier.indexOf(event.target.name) > -1) {
      let saveThis = attackModifier.filter(
        (attackName) => attackName !== event.target.name
      );
      setAttackModifier(saveThis);
    }
  };

  const handleAddAction = () =>
    setActionList([...actionList, +actionList[actionList.length - 1] + 1]);
  const handleRemoveAction = (removeNumber) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure you want to remove this action?")) {
      if (actionList.length > 0) {
        let saveThis = actionList.filter((action) => action !== removeNumber);
        setActionList(saveThis);
      }
    }
  };

  return (
    <div className="attacks">
      <button onClick={handleAddAction}>Add Action</button>
      {actionList.map((action) => (
        <Attack
          handleAttacks={handleAttacks}
          attackValue={attacks}
          attackNumber={action}
          handleAttackProficiency={handleAttackProficiency}
          attackProficiency={attackProficiency}
          attackModifier={attackModifier}
          handleAttackModifier={handleAttackModifier}
          handleRemoveAction={handleRemoveAction}
        />
      ))}
    </div>
  );
}

function Attack({
  attackValue,
  attackNumber,
  handleAttacks,
  handleAttackProficiency,
  attackProficiency,
  handleAttackModifier,
  attackModifier,
  handleRemoveAction,
}) {
  const isAttackProficiencyChecked =
    attackProficiency.indexOf(`attackProficiency${attackNumber}`) > -1;
  const isAttackModifierChecked = (name) =>
    attackModifier.indexOf(`modeType${attackNumber}-${name}`) > -1;
  return (
    <>
      {attackNumber !== 0 && (
        <button onClick={() => handleRemoveAction(attackNumber)}>
          Remove Action
        </button>
      )}
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
            <input
              type="checkbox"
              name={`attackProficiency${attackNumber}`}
              onChange={handleAttackProficiency}
              checked={isAttackProficiencyChecked}
            />
            <input
              type="checkbox"
              name={`modeType${attackNumber}-str`}
              onChange={handleAttackModifier}
              checked={isAttackModifierChecked("str")}
              disabled={
                isAttackModifierChecked("dex") ||
                isAttackModifierChecked("spell-power")
              }
            />
          </td>
          <td>
            <input
              type="checkbox"
              name={`modeType${attackNumber}-dex`}
              onChange={handleAttackModifier}
              checked={isAttackModifierChecked("dex")}
              disabled={
                isAttackModifierChecked("str") ||
                isAttackModifierChecked("spell-power")
              }
            />
          </td>
          <td>
            <input
              type="checkbox"
              name={`modeType${attackNumber}-spell-power`}
              onChange={handleAttackModifier}
              checked={isAttackModifierChecked("spell-power")}
              disabled={
                isAttackModifierChecked("str") || isAttackModifierChecked("dex")
              }
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              value={attackValue[`attackBonus${attackNumber}`]}
              onChange={handleAttacks}
              name={`attackBonus${attackNumber}`}
            />
          </td>
          <td>
            <input
              type="text"
              value={attackValue[`damage${attackNumber}`]}
              onChange={handleAttacks}
              name={`damage${attackNumber}`}
            />
          </td>
          <td>
            <input
              type="text"
              value={attackValue[`type${attackNumber}`]}
              onChange={handleAttacks}
              name={`type${attackNumber}`}
            />
          </td>
          <td>
            <textarea
              type="text"
              value={attackValue[`type${attackNumber}`]}
              onChange={handleAttacks}
              name={`notes${attackNumber}`}
            />
          </td>
        </tr>
        <tr>
          <td style={{ marginRight: "80px" }}>Atk Bonus</td>
          <td style={{ marginRight: "94px" }}>Damage</td>
          <td>Type / Weight</td>
          <td>Notes</td>
        </tr>
      </table>
    </>
  );
}
