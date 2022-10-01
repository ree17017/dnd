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

import { Player } from './InitiativeOrder';
import ReactModal from 'react-modal';
import uniqid from 'uniqid';
import useLocalStorage from 'react-localstorage-hook';

type AddActionProps = {
  players: Player[];
  monsters: Player[];
  handleToast: (response: string) => void;
  setMonsters: any;
  setPlayers: any;
};

export type Action = {
  id: string;
  actor: string;
  type: string;
  target: string;
  amount: string;
  action: string;
  rounds: string;
};

export const AddAction = ({
  players,
  monsters,
  handleToast,
  setMonsters,
  setPlayers,
}: AddActionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState('');
  const [amount, setAmount] = useState('');
  const [target, setTarget] = useState('');
  const [type, setType] = useState('');
  const [actor, setActor] = useState('');
  const [actions, setActions] = useLocalStorage('actions', []);
  const [rounds, setRounds] = useState('');

  const handleAction = (
    actor: Player,
    target: Player,
    type: string,
    amount: string
  ) => {
    if (target.actorType === 'monster') {
      if (type === 'Heal') {
        let sum = Number(target.hp.currentHp) + Number(amount);
        const newMonsters = monsters.map((monster) => {
          if (monster.id === target.id) {
            return { ...monster, hp: { ...monster.hp, currentHp: sum } };
          }
          return monster;
        });
        setMonsters(newMonsters);
      }

      if (type === 'Damage') {
        let sum = Number(target.hp.currentHp) - Number(amount);
        const newMonsters = monsters.map((monster) => {
          if (monster.id === target.id) {
            return { ...monster, hp: { ...monster.hp, currentHp: sum } };
          }
          return monster;
        });
        setMonsters(newMonsters);
      }
    }

    if (target.actorType === 'player') {
      if (type === 'Heal') {
        let sum = Number(target.hp.currentHp) + Number(amount);
        const newPlayers = players.map((player) => {
          if (player.id === target.id) {
            return { ...player, hp: { ...player.hp, currentHp: sum } };
          }
          return player;
        });
        setPlayers(newPlayers);
      }

      if (type === 'Damage') {
        let sum = Number(target.hp.currentHp) - Number(amount);
        const newPlayers = players.map((player) => {
          if (player.id === target.id) {
            return { ...player, hp: { ...player.hp, currentHp: sum } };
          }
          return player;
        });
        setPlayers(newPlayers);
      }
    }
  };

  const saveAction = () => {
    const currentActor = [...players, ...monsters].filter(
      (item) => item.id === actor
    );
    const currentTarget = [...players, ...monsters].filter(
      (item) => item.id === target
    );

    const newAction = {
      id: uniqid(),
      actor: currentActor[0].name,
      type: type,
      target: currentTarget[0].name,
      amount: amount,
      action: action,
      rounds: rounds,
    };

    handleAction(currentActor[0], currentTarget[0], type, amount);
    setActions([...actions, newAction]);
    handleToast(
      `${currentActor[0].name} ${action} ${currentTarget[0].name} ${type} for ${amount}! `
    );
  };
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Add Action</Button>
      <ReactModal isOpen={isOpen} style={{ overlay: { height: '20rem' } }}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Actor</InputLabel>
          <Select
            label="Actor"
            labelId="demo-simple-select-label"
            id="actor-label"
            sx={{ width: '200px' }}
            onChange={(event: SelectChangeEvent) => {
              setActor(event.target.value);
            }}
          >
            {[...players, ...monsters].map((actor) => (
              <MenuItem value={actor.id}>{actor.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          name="action"
          value={action}
          label="Action"
          required
          onChange={(event) => setAction(event.target.value)}
        />
        <FormControl>
          <InputLabel id="target-input-label">Target</InputLabel>
          <Select
            sx={{ width: '200px' }}
            label="Target"
            id="target-label"
            labelId="target-input-label"
            onChange={(event: SelectChangeEvent) => {
              setTarget(event.target.value);
            }}
          >
            {[...players, ...monsters].map((actor) => (
              <MenuItem value={actor.id}>{actor.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="type-input-label">Type</InputLabel>
          <Select
            sx={{ width: '200px' }}
            label="Type"
            labelId="type-input-label"
            id="type"
            onChange={(event: SelectChangeEvent) => setType(event.target.value)}
          >
            {['Heal', 'Damage', 'Condition'].map((action) => (
              <MenuItem value={action}>{action}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {type == 'Condition' && (
          <TextField
            label="Rounds"
            value={rounds}
            onChange={(event) => setRounds(event?.target.value)}
          />
        )}
        <TextField
          name="amount"
          label="Amount"
          onChange={(event) => setAmount(event.target.value)}
        />
        <Button onClick={saveAction}>Save</Button>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </ReactModal>
    </>
  );
};
