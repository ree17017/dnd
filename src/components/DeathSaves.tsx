import React from 'react';
import useLocalStorage from 'react-localstorage-hook';

export default function DeathSaves() {
  const [deathSaves, setDeathSaves] = useLocalStorage('deathSaves');

  const handleDeathSaves = (event: any) => {
    if (deathSaves.indexOf(event.target.name) > -1) {
      let saveDeathSaves = deathSaves.filter(
        (deathSaves: any) => deathSaves !== event.target.name
      );
      setDeathSaves([...saveDeathSaves]);
      return;
    }
    setDeathSaves([...deathSaves, event.target.name]);
  };
  const isDeathSaveChecked = (name: any) => deathSaves.indexOf(name) > -1;

  return (
    <div className="deathSaves">
      <div>Death Saves</div>
      <hr />
      <div>
        <div>Successes</div>
        <input
          type="checkbox"
          name="successes_1"
          checked={isDeathSaveChecked('successes_1')}
          onChange={handleDeathSaves}
        />
        <input
          type="checkbox"
          name="successes_2"
          checked={isDeathSaveChecked('successes_2')}
          onChange={handleDeathSaves}
        />
        <input
          type="checkbox"
          name="successes_3"
          checked={isDeathSaveChecked('successes_3')}
          onChange={handleDeathSaves}
        />
      </div>
      <div>
        <div>Failures</div>
        <input
          type="checkbox"
          name="failed_1"
          checked={isDeathSaveChecked('failed_1')}
          onChange={handleDeathSaves}
        />
        <input
          type="checkbox"
          name="failed_2"
          checked={isDeathSaveChecked('failed_2')}
          onChange={handleDeathSaves}
        />
        <input
          type="checkbox"
          name="failed_3"
          checked={isDeathSaveChecked('failed_3')}
          onChange={handleDeathSaves}
        />
      </div>
    </div>
  );
}
