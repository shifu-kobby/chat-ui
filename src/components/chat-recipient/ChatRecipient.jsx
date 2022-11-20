import React from 'react';
import './ChatRecipient.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const dummy = [
    { name: "user1" },
    { name: "user2" },
    { name: "user3" },
]

export default function ChatRecipient() {
    return (
        <div className='chatRecipient'>
            <div className='chatRecipientHeader'>
                <AccountCircleIcon fontSize='large' />
                <TextField id="outlined-search" label="Search field" type="search" />
            </div>
            <div className='chatRecipientList'>
                <List>
                    {
                        dummy.map((c) => (
                            <ListItem key={c.name} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <AccountCircleIcon fontSize='large' />
                                    </ListItemIcon>
                                    <ListItemText primary={c.name} />
                                </ListItemButton>
                            </ListItem>
                            
                        ))
                    }
                </List>
            </div>
        </div>
    )
}