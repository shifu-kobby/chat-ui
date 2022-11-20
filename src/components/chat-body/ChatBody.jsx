import React from 'react';
import './ChatBody.css';
import Chip from '@mui/material/Chip';


const dummy = [
    {
        sender: "user1",
        recipient: "user2",
        text: "yo"
    },
    {
        sender: "user2",
        recipient: "user1",
        text: "yeah man"
    },
    {
        sender: "user2",
        recipient: "user1",
        text: "going to do some grocery shopping"
    },
    {
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
                    <div className='chatBodyBubbleContainer'>
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