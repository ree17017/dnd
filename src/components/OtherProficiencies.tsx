import React, { useState } from 'react';
import useLocalStorage from 'react-localstorage-hook';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function OtherProficiencies() {
  const [armorProficiencies, setArmorProficiencies] = useLocalStorage(
    'armorProficiencies',
    []
  );
  const [weaponProficiencies, setWeaponProficiencies] = useLocalStorage(
    'weaponProficiencies',
    []
  );
  const [savingThrow, setSavingThrow] = useLocalStorage('savingThrow', []);
  const [armor, setArmor] = useState('');
  const [weapon, setWeapon] = useState('');
  const [save, setSave] = useState('');

  const handleAddProficiencies = (event: any) => {
    switch (event.target.name) {
      case 'armor': {
        if (armorProficiencies.find((value: any) => value === armor)) {
          toast(`${armor} is already on the list.`);
          return;
        }
        setArmorProficiencies([...armorProficiencies, armor]);
        break;
      }
      case 'weapon': {
        if (weaponProficiencies.find((value: any) => value === weapon)) {
          toast(`${weapon} is already on the list.`);
          return;
        }
        setWeaponProficiencies([...weaponProficiencies, weapon]);
        break;
      }
      case 'savingThrow': {
        if (savingThrow.find((value: any) => value === save)) {
          toast(`${save} is already on the list.`);
          return;
        }
        setSavingThrow([...savingThrow, save]);
        break;
      }
      default:
        break;
    }
  };

  const handleRemoveProficiencies = (event: any) => {
    switch (event.target.name) {
      case 'armor':
        let armorList = armorProficiencies.filter(
          (armor: any) => armor !== event.target.id
        );
        setArmorProficiencies(armorList);
        break;
      case 'weapon':
        let weaponList = weaponProficiencies.filter(
          (weapon: any) => weapon !== event.target.id
        );
        setWeaponProficiencies(weaponList);
        break;
      case 'savingThrow':
        let saving = savingThrow.filter((saving: any) => saving !== event.target.id);
        setSavingThrow(saving);
        break;
      default:
    }
  };
  return (
    <div>
      <ToastContainer />
      <h3>Proficiencies</h3>
      <div>Armor:</div>
      <input type="text" onChange={(event) => setArmor(event.target.value)} />
      <button name="armor" onClick={(event) => handleAddProficiencies(event)}>
        Add
      </button>
      <ul>
        {armorProficiencies.length > 0 &&
          armorProficiencies.map((armor: any) => (
            <li key={armor}>
              {armor}
              <button
                name="armor"
                id={armor}
                onClick={(event) => handleRemoveProficiencies(event)}
              >
                {' '}
                X{' '}
              </button>
            </li>
          ))}
      </ul>
      <div>Weapons:</div>
      <input type="text" onChange={(event) => setWeapon(event.target.value)} />
      <button name="weapon" onClick={(event) => handleAddProficiencies(event)}>
        Add
      </button>
      <ul>
        {weaponProficiencies.length > 0 &&
          weaponProficiencies.map((weapon: any) => (
            <li key={weapon}>
              {weapon}
              <button
                name="weapon"
                id={weapon}
                onClick={(event) => handleRemoveProficiencies(event)}
              >
                {' '}
                X{' '}
              </button>
            </li>
          ))}
      </ul>
      <div>Saving Throws:</div>
      <input type="text" onChange={(event) => setSave(event.target.name)} />
      <button
        name="savingThrow"
        onClick={(event) => handleAddProficiencies(event)}
      >
        Add
      </button>
      <ul>
        {savingThrow.length > 0 &&
          savingThrow.map((saving: any) => (
            <li key={saving}>
              {saving}
              <button
                name="savingThrow"
                id={saving}
                onClick={(event) => handleRemoveProficiencies(event)}
              >
                {' '}
                X{' '}
              </button>
            </li>
          ))}
      </ul>
      <div>Skills:</div>
      <input type="text" onChange={handleAddProficiencies} />
      <button name="skills" onClick={(event) => handleAddProficiencies(event)}>
        Add
      </button>
      <div>Not Working yet.</div>
      {/* <ul></ul> */}
      <div>Other:</div>
      <input type="text" onChange={handleAddProficiencies} />
      <button name="other" onClick={(event) => handleAddProficiencies(event)}>
        Add
      </button>
      <div>Not Working yet.</div>
      {/* <ul></ul> */}
    </div>
  );
}
