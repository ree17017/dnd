import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';

import { Action } from './AddAction';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ReactModal from 'react-modal';
import { type } from '@testing-library/user-event/dist/type';
import useLocalStorage from 'react-localstorage-hook';

type CharacterTableProps = { title: string };

export function CharacterTable({ title }: CharacterTableProps) {
  const [actions, setActions] = useLocalStorage('actions', []);
  const removeAction = (id: string) => {
    const newActions = actions.filter((action: Action) => action.id !== id);
    newActions === undefined ? setActions([]) : setActions(newActions);
  };
  return (
    <>
      <h2>{title}</h2>
      <Button
        onClick={() => setActions([{ id: 'round1', actor: 'Start Round 0' }])}
      >
        Reset Table
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Actor</TableCell>
              <TableCell>Action</TableCell>
              <TableCell>Target</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Rounds</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Remove Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {actions.map((action: Action, index: number) => (
              <TableRow key={action.id}>
                <TableCell>{index}</TableCell>
                <TableCell>{action.actor}</TableCell>
                <TableCell>{action.action}</TableCell>
                <TableCell>{action.target}</TableCell>
                <TableCell>{action.type}</TableCell>
                <TableCell>{action.rounds}</TableCell>
                <TableCell>{action.amount}</TableCell>
                <TableCell>
                  {action.action ? (
                    <Button onClick={() => removeAction(action.id)}>
                      <DeleteIcon />
                    </Button>
                  ) : null}
                  {/* <EditAction editAction={action} /> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

// type EditActionProps = {
//   editAction: Action;
// };

// const EditAction = ({ editAction }: EditActionProps) => {
//   const [open, setOpen] = useState(false);
//   const [action, setAction] = useState('');
//   const [amount, setAmount] = useState('');
//   const [target, setTarget] = useState('');
//   const [type, setType] = useState('');
//   const [actor, setActor] = useState('');
//   const [actions, setActions] = useLocalStorage('actions', []);
//   const [rounds, setRounds] = useState('');
//   const [players, setPlayers] = useLocalStorage('players');
//   const [monsters, setMonsters] = useLocalStorage('monsters');

//   const saveAction = () => {
//     const currentActor = [...players, ...monsters].filter(
//       (item) => item.id === actor
//     );
//     const currentTarget = [...players, ...monsters].filter(
//       (item) => item.id === target
//     );

//     const newAction = {
//       id: uniqid(),
//       actor: currentActor[0].name,
//       type: type,
//       target: currentTarget[0].name,
//       amount: amount,
//       action: action,
//       rounds: rounds,
//     };

//     handleAction(currentActor[0], currentTarget[0], type, amount);
//     setActions([...actions, newAction]);
//     handleToast(
//       `${currentActor[0].name} ${action} ${currentTarget[0].name} ${type} for ${amount}! `
//     );
//   };
//   return (
//     <>
//       <Button onClick={() => setOpen(true)}>
//         <EditIcon />
//       </Button>
//       <ReactModal isOpen={open} style={{ overlay: { height: '20rem' } }}>
//         <FormControl>
//           <InputLabel id="demo-simple-select-label">Actor</InputLabel>
//           <Select
//             label="Actor"
//             labelId="demo-simple-select-label"
//             id="actor-label"
//             sx={{ width: '200px' }}
//             onChange={(event: SelectChangeEvent) => {
//               setActor(event.target.value);
//             }}
//           >
//             {[...players, ...monsters].map((actor) => (
//               <MenuItem value={actor.id}>{actor.name}</MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <TextField
//           name="action"
//           value={action}
//           label="Action"
//           required
//           onChange={(event) => setAction(event.target.value)}
//         />
//         <FormControl>
//           <InputLabel id="target-input-label">Target</InputLabel>
//           <Select
//             sx={{ width: '200px' }}
//             label="Target"
//             id="target-label"
//             labelId="target-input-label"
//             onChange={(event: SelectChangeEvent) => {
//               setTarget(event.target.value);
//             }}
//           >
//             {[...players, ...monsters].map((actor) => (
//               <MenuItem value={actor.id}>{actor.name}</MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <FormControl>
//           <InputLabel id="type-input-label">Type</InputLabel>
//           <Select
//             sx={{ width: '200px' }}
//             label="Type"
//             labelId="type-input-label"
//             id="type"
//             onChange={(event: SelectChangeEvent) => setType(event.target.value)}
//           >
//             {['Heal', 'Damage', 'Condition'].map((action) => (
//               <MenuItem value={action}>{action}</MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         {type == 'Condition' && (
//           <TextField
//             label="Rounds"
//             value={rounds}
//             onChange={(event) => setRounds(event?.target.value)}
//           />
//         )}
//         <TextField
//           name="amount"
//           label="Amount"
//           onChange={(event) => setAmount(event.target.value)}
//         />
//         <Button onClick={saveAction}>Save</Button>
//         <Button onClick={() => setOpen(false)}>Close</Button>
//       </ReactModal>
//     </>
//   );
// };
