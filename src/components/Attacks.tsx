import Attack from './Attack';
import React from 'react';
import useLocalStorage from 'react-localstorage-hook';

export default function Attacks() {
  const [attacks, setAttacks] = useLocalStorage('attack1', {
    attackName1: '',
    attackRange1: '',
    attackBonus1: '',
    damage1: '',
    type1: '',
  });

  const [actionList, setActionList] = useLocalStorage('userActionList', [0]);
  const [attackProficiency, setAttackProficiency] = useLocalStorage(
    'attackProficiency',
    []
  );
  const [attackModifier, setAttackModifier] = useLocalStorage(
    'attackModifier',
    []
  );

  //{"attackName1":"","attackRange1":"","attackBonus1":"","damage1":"","type1":""}
  const handleAttacks = (event: any) => {
    setAttacks({ ...attacks, [event.target.name]: event.target.value });
  };

  const handleAttackProficiency = (event: any) => {
    if (attackProficiency.indexOf(event.target.name) === -1) {
      setAttackProficiency([...attackProficiency, event.target.name]);
      return;
    }

    if (attackProficiency.indexOf(event.target.name) > -1) {
      const saveThis = attackProficiency.filter(
        (attackName: any) => attackName !== event.target.name
      );
      setAttackProficiency(saveThis);
    }
  };

  const handleAttackModifier = (event: any) => {
    if (attackModifier.indexOf(event.target.name) === -1) {
      setAttackModifier([...attackModifier, event.target.name]);
      return;
    }

    if (attackModifier.indexOf(event.target.name) > -1) {
      let saveThis = attackModifier.filter(
        (attackName: any) => attackName !== event.target.name
      );
      setAttackModifier(saveThis);
    }
  };

  const handleAddAction = () =>
    setActionList([...actionList, +actionList[actionList.length - 1] + 1]);
  const handleRemoveAction = (removeNumber: any) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure you want to remove this action?')) {
      if (actionList.length > 0) {
        let saveThis = actionList.filter((action: any) => action !== removeNumber);
        setActionList(saveThis);
      }
    }
  };

  return (
    <div className="attacks">
      <button onClick={handleAddAction}>Add Action</button>
      {actionList.map((action: any) => (
        <Attack
          key={`attack-${action}`}
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
