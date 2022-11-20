import React from 'react';
import './ChatInfo.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function ChatInfo() {
    return (
        <div className='recipientInfo'>
            <div className='recipientInfoDetails'>
                <AccountCircleIcon className='recipientInfoAccount' fontSize='large' />
                <div>
                    Name
                </div>
            </div>
            <div className='recipientInfoMenu'>
                menu
            </div>
        </div>
    )
}