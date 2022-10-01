import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';

import ReactModal from 'react-modal';
import uniqid from 'uniqid';
import useLocalStorage from 'react-localstorage-hook';

export type AddActorProps = {
  handleToast: (response: string) => void;
};

export const AddActor = ({ handleToast }: AddActorProps) => {
  const [name, setName] = useState('');
  const [ac, setAc] = useState('ac');
  const [hp, setHp] = useState({ currentHp: 0, maxHp: 0, tempHp: 0 });
  const [initiative, setInitiative] = useState('');
  const [actorType, setActorType] = useState<string>('');
  const [players, setPlayers] = useLocalStorage('players', []);
  const [monsters, setMonsters] = useLocalStorage('monsters', []);
  const [isOpen, setIsOpen] = useState(false);

  const submitActor = () => {
    if (actorType === 'player') {
      const id = uniqid();
      setPlayers([
        ...players,
        {
          id: id,
          ac: ac,
          name: name,
          hp: hp,
          initiative: initiative,
          actorType: 'player',
        },
      ]);
      handleToast(`Player ${name} Added`);
      setIsOpen(false);
      return;
    }

    if (actorType === 'monster') {
      const id = uniqid();
      setMonsters([
        ...monsters,
        {
          id: id,
          ac: ac,
          name: name,
          hp: hp,
          initiative: initiative,
          actorType: 'monster',
        },
      ]);
      handleToast(`Monster ${name} Added`);
      setIsOpen(false);
      return;
    }
    handleToast('No Actor Added');
    setIsOpen(false);
    return;
  };
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Add Actor</Button>
      <ReactModal isOpen={isOpen} style={{ overlay: { height: '20rem' } }}>
        <h2>Add Player or Monster</h2>
        <TextField
          type="text"
          name="name"
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          style={{ paddingRight: '8px' }}
          required
        />
        <TextField
          type="text"
          name="ac"
          label="AC"
          value={ac}
          onChange={(event) => setAc(event.target.value)}
          style={{ paddingRight: '8px' }}
          required
        />
        <TextField
          type="number"
          label="Max HP"
          name="maxHp"
          value={hp.maxHp}
          onChange={(event) =>
            setHp({ ...hp, maxHp: Number(event.target.value) })
          }
          style={{ paddingRight: '8px' }}
          required
        />
        <TextField
          type="number"
          label="Current HP"
          name="currentHp"
          value={hp.currentHp}
          onChange={(event) =>
            setHp({ ...hp, currentHp: Number(event.target.value) })
          }
          style={{ paddingRight: '8px' }}
          required
        />
        <TextField
          type="number"
          label="Temp HP"
          name="tempHp"
          value={hp.tempHp}
          onChange={(event) =>
            setHp({ ...hp, tempHp: Number(event.target.value) })
          }
          style={{ paddingRight: '8px' }}
          required
        />
        <TextField
          type="number"
          name="initiative"
          label="Initiative"
          value={initiative}
          onChange={(event) => setInitiative(event.target.value)}
          style={{ paddingRight: '8px' }}
          required
        />
        <FormControl>
          <InputLabel id="actor-type-label">Actor Type</InputLabel>
          <Select
            label="Actor Type"
            labelId="actor-type-label"
            sx={{ width: '200px' }}
            required
            onChange={(event: SelectChangeEvent) =>
              setActorType(event.target.value)
            }
            value={actorType}
            name="playerType"
          >
            <MenuItem value="player">Player</MenuItem>
            <MenuItem value="monster">Monster</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" onClick={submitActor}>
          Add
        </Button>
        <Button onClick={() => setIsOpen(false)}>Cancel</Button>
      </ReactModal>
    </>
  );
};
