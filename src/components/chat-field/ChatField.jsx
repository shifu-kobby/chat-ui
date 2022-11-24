import React, { useState, useContext } from "react";
import './ChatField.css';
import TextField from '@mui/material/TextField';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import IconButton from '@mui/material/IconButton';
import { StateContext } from '../../utils/StateProvider';


export default function ChatField() {
    const [data, dispatch] = useContext(StateContext);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        console.log(input)
        data.user.socket.sendMessage(data.activeChannel.id, input);
    }

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    return (
        <div className="chatField">
            <InsertEmoticonIcon />
            <AttachFileIcon />
            <TextField
                className='chatBodyTextField'
                id="outlined-search"
                label="Type a message"
                type="text"
                value={input}
                onChange={handleChange}
            />
            <KeyboardVoiceIcon />
            <IconButton onClick={() => sendMessage()}>
                <SendIcon />
            </IconButton>
        </div>
    )
}