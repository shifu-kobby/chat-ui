import React from 'react';
import ChatBody from '../chat-body/ChatBody';
import ChatField from '../chat-field/ChatField';
import ChatRecipient from '../chat-recipient/ChatRecipient';
import ChatInfo from '../recipient-info/ChatInfo';
import './Home.css';

export default class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <ChatRecipient />
                <div className='homeChatView'>
                    <ChatInfo />
                    <ChatBody />
                    <ChatField />
                </div>
            </div>
        )
    }
}