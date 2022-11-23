import React from 'react';
import ChatBody from '../chat-body/ChatBody';
import ChatField from '../chat-field/ChatField';
import ChatRecipient from '../channel/Channel';
import ChatInfo from '../channel-info/ChannelInfo';
import './Home.css';
import Divider from '@mui/material/Divider';
import { StateContext } from '../../utils/StateProvider';

export default class Home extends React.Component {
    static contextType = StateContext;

    componentDidMount() {
        const [data, dispatch] = this.context

        console.log(data)
    }

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