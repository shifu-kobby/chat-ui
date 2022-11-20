import React from 'react';
import ChatBody from '../chat-body/ChatBody';
import ChatField from '../chat-field/ChatField';
import ChatRecipient from '../chat-recipient/ChatRecipient';
import ChatInfo from '../chat-info/ChatInfo';
import './Home.css';
import Divider from '@mui/material/Divider';

export default class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <ChatRecipient />
                <div className='homeChatView'>
                    <ChatInfo />
                    <Divider />
                    <ChatBody />
                    <Divider />
                    <ChatField />
                </div>
            </div>
        )
    }
}