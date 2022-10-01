import {
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  Paper,
  Typography,
} from '@mui/material';

import { Action } from './AddAction';
import { EditActor } from './EditActor';
import { Player } from './InitiativeOrder';
import React from 'react';

export type ActorCardProps = {
  id: string;
  name: string;
  ac: string;
  hp: {
    maxHp: number | string;
    currentHp: number | string;
    tempHp: string | number;
  };
  initiative: string;
  removeActor: any;
  editActor: (id: string) => void;
  hideRemoveActor: boolean;
  player: Player;
  condition: Action[];
};
export const ActorCard = ({
  id,
  name,
  ac,
  hp,
  initiative,
  removeActor,
  editActor,
  hideRemoveActor,
  player,
  condition,
}: ActorCardProps) => {
  const hpStyle = (hp: string | number) => {
    if (hp <= '0') {
      return {
        border: '4px solid red',
      };
    }
    return {
      border: '2px solid black',
    };
  };

  return (
    <Paper elevation={13} sx={hpStyle(hp.currentHp)}>
      <CardContent>
        {hideRemoveActor && (
          <Button
            title={name}
            id={id.toString()}
            onClick={(event) => removeActor(event)}
          >
            Remove Actor
          </Button>
        )}
        <EditActor editPlayer={player} />
        <Typography sx={{ fontSize: 18 }}>{name}</Typography>
        <Typography textAlign="center">AC {ac}</Typography>
        <Typography textAlign="center">
          HP: {hp.currentHp} /{hp.maxHp}{' '}
        </Typography>
        <Typography textAlign="center">Temp HP: {hp.tempHp}</Typography>
        <Typography textAlign="center">Initiative: {initiative}</Typography>
        <List>
          {condition.map((action) => {
            if (Number(action.rounds) >= 0) {
              return (
                <ListItem>
                  {action.action} for {action.rounds} rounds
                </ListItem>
              );
            }
          })}
        </List>
      </CardContent>
    </Paper>
  );
};
