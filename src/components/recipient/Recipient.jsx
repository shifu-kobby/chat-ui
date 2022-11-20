import React from 'react';
import './Recipient.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Recipient(props) {
    // const {name} = props;
    // console.log(props)

    let getMessageHistory = (user) => {
        console.log(user);
    }

    return (
        <div className='recipient' onClick={() => getMessageHistory(props.user)}>
            <AccountCircleIcon fontSize='large' />
            <div>
                {props.user.name}
            </div>
        </div>
    )
}