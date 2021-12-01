import './to-do-list.css';
import * as React from 'react';
import { useContext } from 'react';
import { TaskContext } from '../../contexts/taskContext';
import ToDoItem from '../to-do-item/to-do-item';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


function ToDoList() {
    const [tasks, setTasks] = useContext(TaskContext);

        return (
        <div>
          <h1 style={{color:'blueviolet'}}>Shopping list</h1>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 350,
          height: 128,
          bgcolor: 'Lightcyan',
          marginLeft:'41%'

        },
      }}
    >
        <Paper elevation={3}>
        <Stack component="form" noValidate spacing={2}>
            <TextField
              id="date"
              label="Select date to buy"
              type="date"
              defaultValue="2021-11-30"
              sx={{ width: 220,
                    marginTop: 2,
                    marginLeft: 8 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'Lightcyan' }}>
            {tasks.map(task => 
                <ToDoItem task={task} />
            )}
        </List>

        </Stack>
        </Paper>
      
        </Box>
        </div>  
        );
    }

    export default ToDoList;