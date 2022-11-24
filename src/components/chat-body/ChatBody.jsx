import React, { useContext, useEffect, useState } from 'react';
import './ChatBody.css';
import Chip from '@mui/material/Chip';
import { StateContext } from '../../utils/StateProvider';


const dummy = [
    {
        id: 1,
        sender: "user1",
        recipient: "user2",
        text: "yo"
    },
    {
        id: 2,
        sender: "user2",
        recipient: "user1",
        text: "yeah man"
    },
    {
        id: 3,
        sender: "user2",
        recipient: "user1",
        text: "going to do some grocery shopping"
    },
    {
        id: 4,
        sender: "user1",
        recipient: "user2",
        text: "I need me some tomatoes"
    }
]

export default function ChatBody() {
    const [data, dispatch] = useContext(StateContext);
    let messages = [];


    useEffect(() => {
        messages.push(...data.user.socket.getMessages());
    }, [data.user.socket, messages])


    return (
        <div className='chatBody'>
            {
                messages?.map((message) => (
                    <div key={message.id} className='chatBodyBubbleContainer'>
                        <Chip
                            className={`chatBodyBubble ${data.user.username === message.sender ? "sender" : "recipient"}`}
                            label={message.text}
                        />
                    </div>
                ))
            }
        </div>
    )
}