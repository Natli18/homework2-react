import * as React from 'react';
import { useState } from 'react';
import './to-do-item.css';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';

function ToDoItem(props) {
    const[checked, setChecked] = useState(false);

    const checkedChange = () => {
        setChecked(!checked);
    }

    return (
          <ListItem
            secondaryAction={
              <Checkbox
                onChange={checkedChange}
                checked={checked}
                edge="end"
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${1}`}
                  src={props.task.image}
                />
              </ListItemAvatar>
              <ListItemText className = {checked ? 'line' : 'outline'} primary={props.task.title} />
              <ListItemText className = {checked ? 'line' : 'outline'} primary={props.task.description} />
            </ListItemButton>
          </ListItem>     
        );
}

export default ToDoItem;