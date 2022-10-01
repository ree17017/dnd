// @ts-nocheck

import { ToastContainer, toast } from 'react-toastify';

import { ActorCards } from '../components/combatTracker/ActorCards';
import { AddAction } from '../components/combatTracker/AddAction';
import { AddActor } from '../components/combatTracker/AddActor';
import { CharacterTable } from '../components/combatTracker/CharacterTable';
import InitiativeOrder from '../components/combatTracker/InitiativeOrder';
import LongRest from '../components/combatTracker/LongRest';
import React from 'react';
import styled from '@emotion/styled';
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
  effect: string[];
  initiative: string;
  actorType: string;
};
export default function CombatTracker() {
  // Notes
  // List of Players
  // Need way to take in a list of players
  // object
  // {players: [{name, hp, initiative}]}
  // could also take in AC would be nice.
  // if known actions  could be just a text box that lays them out
  // List of Monsters
  // need way to take in a list of monsters
  // object
  // {monsters: [{name, hp, initiative}]}
  // could also take in AC would be nice.
  // if known actions  could be just a text box that lays them out
  // Table of action from both monsters and players
  // create a action from each player or monster and display in a table.
  // object
  // {action: [{name, action, actionType, healOrDamage }]}
  // Show health for each Monster and player
  // get the current health from the player or monster and display it.
  // Show if they are dead or alive
  // Show initiative order for players and monsters
  // sort the list by initiative so that you can see who is next
  // Next combat
  // Show who is dead

  const PageStyle = styled.div`
    padding: 16px;
  `;
  type ActorType = {
    name: string;
    hp: string;
    initiative: string;
  }[];
  const [players, setPlayers] = useLocalStorage('players', []);
  const [monsters, setMonsters] = useLocalStorage('monsters', []);
  const handleToast = (response: string) => {
    toast(response);
  };

  type removeActorProps = {
    id: number;
    name: string;
  };

  const removeActor = (event: any) => {
    if (players.length > 0) {
      const newPlayers = players.filter(
        (player: Player) => player.id !== event.target.id
      );

      setPlayers(newPlayers);
    }

    if (monsters.length > 0) {
      const newMonsters = monsters.filter(
        (monster: Player) => monster.id !== event.target.id
      );

      setMonsters(newMonsters);
    }
  };

  const editActor = (id) => {
    console.log(id);
  };

  return (
    <>
      <ToastContainer />
      <h1>Combat Tracker</h1>
      <LongRest players={players} />
      <AddActor handleToast={handleToast} style={{ height: 'fit-content' }} />
      <AddAction
        handleToast={handleToast}
        players={players}
        monsters={monsters}
        setMonsters={setMonsters}
        setPlayers={setPlayers}
        className={{ height: 'fit-content' }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
        }}
      >
        <InitiativeOrder title="Initiative" />
        <ActorCards
          title="Players"
          editActor={editActor}
          players={players}
          removeActor={removeActor}
        />
        <ActorCards
          title="Monsters"
          editActor={editActor}
          players={monsters}
          removeActor={removeActor}
        />
      </div>
      <CharacterTable title="Action Table" />
    </>
  );
}
