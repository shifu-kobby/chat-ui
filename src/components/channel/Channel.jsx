import React, { useContext } from 'react';
import './Channel.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { StateContext } from '../../utils/StateProvider';


const dummy = [
    { name: "user1" },
    { name: "user2" },
    { name: "user3" },
]

export default function ChatRecipient() {
    const [data, dispatch] = useContext(StateContext);
    console.log(data);
    return (
        <div className='chatRecipient'>
            <div className='chatRecipientHeader'>
                <AccountCircleIcon fontSize='large' />
                {data.user.username}
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