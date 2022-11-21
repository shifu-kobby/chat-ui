import React from 'react';
import './ChatBody.css';
import Chip from '@mui/material/Chip';


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

    let currentUser = "user1";

    return (
        <div className='chatBody'>
            {
                dummy.map((message) => (
                    <div key={message.id} className='chatBodyBubbleContainer'>
                        <Chip
                            className={`chatBodyBubble ${currentUser === message.sender ? "sender" : "recipient"}`}
                            label={message.text}
                        />
                    </div>
                ))
            }
        </div>
    )
}