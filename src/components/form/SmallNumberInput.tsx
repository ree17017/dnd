import React, { useState } from "react";

export type SmallNumberInputProps = {
  name: string;
  isLocked: boolean;
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const SmallNumberInput = ({
  name,
  isLocked,
  value,
  onChange,
}: SmallNumberInputProps) => {
  return (
    <input
      name={name} 
      type="number"
      value={value}
      min="0"
      step="1"
      className="input_small"
      onChange={onChange}
      readOnly={isLocked}
    />
  )

}

export type UseWithSmallNumberInputArgs = {
  id: string;
  isReadonly?: boolean;
  name: string;
}

export const useWithSmallNumberInput = ({ isReadonly = false, name }: UseWithSmallNumberInputArgs): SmallNumberInputProps => {
  const [value, setValue] = useState<number>(0);

  return {
    name,
    value,
    isLocked: isReadonly,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(parseInt(event.target.value))
    } 
  }
}

export default SmallNumberInput;