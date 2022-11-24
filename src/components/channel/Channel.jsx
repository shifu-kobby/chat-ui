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
import Button from '@mui/material/Button';


const dummy = [
    { name: "user1", id: 1 },
    { name: "user2", id: 2 },
    { name: "user3", id: 3 },
]

const channels = [
    {
        room: 1,
        name: "SocialHub"
    },
    {
        room: 2,
        name: "Comics"
    }
]

export default function Channel() {
    const [data, dispatch] = useContext(StateContext);
    console.log(data);

    const updateActiveChannel = (id) => {
        const currentChannel = dummy.filter((d) => d.id === id)[0];
        dispatch({
            type: "UPDATE ACTIVE CHANNEL",
            item: {
                id: currentChannel.id,
                name: currentChannel.name
            }
        })
    }

    const updateActiveChannelGroup = (room) => {
        const currentChannel = channels.filter((d) => d.room === room)[0];
        dispatch({
            type: "UPDATE ACTIVE CHANNEL",
            item: {
                id: currentChannel.room,
                name: currentChannel.name
            }
        })
    }
    const joinRoom = (room) => {
        data.user.socket.joinRoom(room)
    }

    return (
        <div className='channel'>
            <div className='channelHeader'>
                <AccountCircleIcon fontSize='large' />
                {data.user.username}
                <TextField id="outlined-search" label="Search field" type="search" />
            </div>
            <div className='channelList'>
                <h3>People</h3>
                <List>
                    {
                        dummy.map((c) => (
                            <ListItem key={c.name} disablePadding>
                                <ListItemButton onClick={() => updateActiveChannel(c.id)}>
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
            <div className='channelList'>
                <h3>Groups</h3>
                <List>
                    {
                        channels.map((c) => (
                            <div key={c.room}  className='channels'>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => updateActiveChannelGroup(c.id)}>
                                        <ListItemIcon>
                                            <AccountCircleIcon fontSize='large' />
                                        </ListItemIcon>
                                        <ListItemText primary={c.name} />
                                    </ListItemButton>
                                </ListItem>
                                <div>
                                    <Button className='joinButton' size="small" variant="contained" onClick={() => joinRoom(c.room)}>join</Button>
                                </div>
                            </div>


                        ))
                    }
                </List>
            </div>
        </div>
    )
}