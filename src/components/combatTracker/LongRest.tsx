import { Button } from '@mui/material';
import { Player } from './InitiativeOrder';
import React from 'react';
import useLocalStorage from 'react-localstorage-hook';

export default function LongRest() {
  const [players, setPlayers] = useLocalStorage('players');
  const handleLongRest = () => {
    const newPlayerList = players.map((player: Player) => {
      return { ...player, hp: { ...player.hp, currentHp: player.hp.maxHp } };
    });
    setPlayers(newPlayerList);
  };
  return <Button onClick={handleLongRest}>Rest</Button>;
}
