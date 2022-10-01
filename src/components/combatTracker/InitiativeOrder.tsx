import { Box, Button, List, ListItem } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { Action } from './AddAction';
import uniqid from 'uniqid';
import useLocalStorage from 'react-localstorage-hook';

export type Player = {
  id: string;
  name: string;
  ac: string;
  hp: {
    currentHp: string;
    maxHp: string;
    tempHp: string;
  };
  initiative: string;
  actorType: string;
};

type InitiativeOrderProps = {
  title: string;
};
export default function InitiativeOrder({ title }: InitiativeOrderProps) {
  const [turn, setTurn] = useState(0);
  const [round, setRound] = useLocalStorage('round', 0);
  const [actions, setActions] = useLocalStorage('actions');
  const [players, setPlayers] = useLocalStorage('players');
  const [monsters, setMonsters] = useLocalStorage('monsters');

  const alivePlayers = [...players, ...monsters].map((player: Player) => {
    if (Number(player.hp.currentHp) > 0) {
      return player;
    }
  });

  const sortedPlayers = alivePlayers.sort(
    (firstPlayer: any, secondPlayer: any) =>
      secondPlayer.initiative - firstPlayer.initiative
  );

  const handleActions = () => {
    const newActions = actions.map((action: Action) => {
      if (action.type === 'Condition') {
        let newRounds = Number(action.rounds) - 1;
        return { ...action, rounds: newRounds.toString() };
      }
      return action;
    });
    setActions([
      ...newActions,
      { id: uniqid(), actor: `End of Round ${round}` },
    ]);
  };

  const handleNext = () => {
    const totalPlayers = players.length + monsters.length;
    if (turn < totalPlayers - 1) {
      setTurn(turn + 1);
      return;
    }

    handleActions();
    setRound(round + 1);
    setTurn(0);
  };

  const next = (index: number) => {
    return turn === index ? { border: '1px solid red' } : {};
  };

  const handleBackTurn = () => {
    console.log(turn);
    if (turn > 0) {
      setTurn(turn - 1);
      return;
    }

    setRound(round - 1);
    setTurn(players.length + monsters.length - 1);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <div>{title}</div>
      <Button onClick={handleNext}>Next</Button>
      <Button onClick={handleBackTurn}>Back</Button>
      <Button onClick={() => setRound(0)}>Reset Rounds</Button>
      <div>Current Round: {round}</div>
      <List>
        {sortedPlayers.map(
          (player, index) =>
            player && (
              <ListItem sx={() => next(index)} key={player?.id + index}>
                {player?.name}
              </ListItem>
            )
        )}
      </List>
    </Box>
  );
}
