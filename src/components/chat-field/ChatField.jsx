import React from "react";
import './ChatField.css';
import TextField from '@mui/material/TextField';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';


export default function ChatField() {
    return (
        <div className="chatField">
            <InsertEmoticonIcon />
            <AttachFileIcon />
            <TextField
                className='chatBodyTextField'
                id="outlined-search"
                label="Type a message"
                type="search"
            />
            <KeyboardVoiceIcon />
            <SendIcon />
        </div>
    )
}