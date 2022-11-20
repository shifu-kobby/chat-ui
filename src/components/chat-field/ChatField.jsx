import React from "react";
import './ChatField.css';
import TextField from '@mui/material/TextField';


export default function ChatField() {
    return (
        <div className="chatField">
            <TextField
                className='chatBodyTextField'
                id="filled-search"
                label="Search field"
                type="search"
                variant="filled"
            />
        </div>
    )
}