import { ActorCard, ActorCardProps } from './ActorCard';
import { Button, Grid, accordionActionsClasses } from '@mui/material';
import React, { useState } from 'react';

import { Action } from './AddAction';
import HideSourceIcon from '@mui/icons-material/HideSource';
import { Player } from '../../pages/CombatTracker';
import useLocalStorage from 'react-localstorage-hook';

export type ActorCardsProps = {
  players: Player[];
  removeActor: any;
  editActor: (id: string) => void;
  title: string;
};

export const ActorCards = ({
  title,
  players,
  removeActor,
  editActor,
}: ActorCardsProps) => {
  const [isRemoveActor, setIsRemoveActor] = useState(false);
  const [actions, setActions] = useLocalStorage('actions');

  const handleCondition = (name: string) => {
    return actions.filter((action: Action) => {
      if (action.target === name && action.type === 'Condition') {
        return action;
      }
    });
  };

  return (
    <Grid sx={{ flexGrow: 1, paddingTop: '16px' }} container spacing={2}>
      <h3>{title}</h3>
      <Button onClick={() => setIsRemoveActor(!isRemoveActor)}>
        <HideSourceIcon />
      </Button>
      <Grid item xs={12}>
        <Grid container justifyContent="left" spacing={2}>
          {players.length > 0 &&
            players.map((player: Player) => (
              <Grid key={player.name} item>
                <ActorCard
                  condition={handleCondition(player.name)}
                  ac={player.ac}
                  hideRemoveActor={isRemoveActor}
                  editActor={editActor}
                  id={player.id}
                  name={player.name}
                  hp={player.hp}
                  initiative={player.initiative}
                  removeActor={removeActor}
                  player={player}
                />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
