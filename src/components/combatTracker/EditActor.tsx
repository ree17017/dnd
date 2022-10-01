import {
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { Player } from './InitiativeOrder';
import ReactModal from 'react-modal';
import useLocalStorage from 'react-localstorage-hook';

export type EditActorProps = {
  editPlayer: Player;
};

export const EditActor = ({ editPlayer }: EditActorProps) => {
  const [name, setName] = useState(editPlayer.name);
  const [hp, setHp] = useState(editPlayer.hp);
  const [initiative, setInitiative] = useState(editPlayer.initiative);
  const [actorType, setActorType] = useState<string>(editPlayer.actorType);
  const [players, setPlayers] = useLocalStorage('players', []);
  const [monsters, setMonsters] = useLocalStorage('monsters', []);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPlayer] = useState(editPlayer);
  const [ac, setAc] = useState(editPlayer.ac);

  const submitActor = () => {
    if (actorType === 'player') {
      const newPlayersList = players.map((player: Player) => {
        if (player.id === currentPlayer.id) {
          return {
            ...player,
            name: name,
            hp: hp,
            initiative: initiative,
          };
        }
        return player;
      });

      setPlayers(newPlayersList);
      toast(`Player ${name} Added`);
      setIsOpen(false);
      return;
    }

    if (actorType === 'monster') {
      const newMonstersList = monsters.map((monster: Player) => {
        if (monster.id === currentPlayer.id) {
          return {
            ...monster,
            name: name,
            hp: hp,
            initiative: initiative,
          };
        }
        return monster;
      });
      setMonsters(newMonstersList);
      toast(`Monster ${name} Added`);
      setIsOpen(false);
      return;
    }
    toast('No Actor Added');
    setIsOpen(false);
    return;
  };
  return (
    <>
      <ToastContainer />
      <Button onClick={() => setIsOpen(true)}>Edit Actor</Button>
      <ReactModal isOpen={isOpen} style={{ overlay: { height: '20rem' } }}>
        <h2>Edit {currentPlayer.name}</h2>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
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
            onChange={(event) => setHp({ ...hp, maxHp: event.target.value })}
            style={{ paddingRight: '8px' }}
            required
          />
          <TextField
            type="number"
            label="Current HP"
            name="currentHp"
            value={hp.currentHp}
            onChange={(event) =>
              setHp({ ...hp, currentHp: event.target.value })
            }
            style={{ paddingRight: '8px' }}
            required
          />
          <TextField
            type="number"
            label="Temp HP"
            name="tempHp"
            value={hp.tempHp}
            onChange={(event) => setHp({ ...hp, tempHp: event.target.value })}
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
          <Select
            label="Actor Type"
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
          <div
            style={{
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              width: '4rem',
            }}
          >
            <Button variant="outlined" onClick={submitActor}>
              Edit
            </Button>
            <Button variant="contained" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </ReactModal>
    </>
  );
};
