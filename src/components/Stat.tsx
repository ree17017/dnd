import React, { ChangeEvent } from 'react';
import useLocalStorage from 'react-localstorage-hook';
import { calculateModifier } from '../tools/calculateModifier';
import SmallNumberInput, { SmallNumberInputProps } from './form/SmallNumberInput';

export interface StatProps {
  name: string;
  stat: SmallNumberInputProps;
  otherModifier: SmallNumberInputProps;
}

export default function Stat({
  name,
  stat,
  otherModifier,
}: StatProps) {
  const modifier = calculateModifier(stat.value) + otherModifier.value;

  return (
    <li key={name} className="stats_padding">
      <div>{name}</div>
      <label className="big-font" aria-label={name}>
        {modifier}
      </label>
      <div className="stats_input-border">
        <SmallNumberInput {...stat} />
        <div> Other Modifier</div>
        <SmallNumberInput {...otherModifier} />
      </div>
    </li>
  );
}

type UseWithStatArgs = {
  id: string;
  name: string;
  isLocked?: boolean;
}


export const useWithStat = ({ 
  id,
  name, 
  isLocked = false,
}: UseWithStatArgs): StatProps => {
  const [storage, setStorage] = useLocalStorage(id, { stat: 0, otherModifier: 0 });

  const stat: SmallNumberInputProps = {
    name,
    isLocked,
    value: storage.stat,
    onChange: function (event: ChangeEvent<HTMLInputElement>): void {
      setStorage({ 
        ...storage,
        stat: event.target.value,
      })
    }
  }

  const otherModifier: SmallNumberInputProps = {
    name,
    isLocked: false,
    value: storage.otherModifier,
    onChange: function (event: ChangeEvent<HTMLInputElement>): void {
      setStorage({ 
        ...storage,
        otherModifier: event.target.value,
      })
    }
  }

  return {
    name,
    stat,
    otherModifier,
  }
}
