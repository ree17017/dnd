import React from 'react';
import useLocalStorage from 'react-localstorage-hook';

export type LockButtonProps = {
    isLocked: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const LockButton = ({ isLocked, onClick }: LockButtonProps) => {
    return (
        <button type="button" aria-label="lock" onClick={onClick}>
            {isLocked ? "Locked": "Unlocked"}
        </button>
    )
}

export const useWithLockButton = (startsLocked: boolean = false): LockButtonProps => {
    const [isLocked, setIsLocked] = useLocalStorage('lockStats', false);
    
    return { 
        isLocked,
        onClick: () => {
            setIsLocked(!isLocked);
        }
    }
}

export default LockButton;