import React, { useContext } from 'react';
import './ChannelInfo.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { StateContext } from '../../utils/StateProvider';


export default function ChannelInfo() {
    const [data, dispatch] = useContext(StateContext);
    console.log(data);

    return (
        <div className='recipientInfo'>
            <div className='recipientInfoDetails'>
                <AccountCircleIcon className='recipientInfoAccount' fontSize='large' />
                <div>
                    {data.activeChannel.name}
                </div>
            </div>
            <div className='recipientInfoMenu'>
                menu
            </div>
        </div>
    )
}