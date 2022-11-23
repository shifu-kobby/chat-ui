import React from 'react';
import ChatBody from '../chat-body/ChatBody';
import ChatField from '../chat-field/ChatField';
import Channel from '../channel/Channel';
import ChannelInfo from '../channel-info/ChannelInfo';
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
                <Channel />
                <div className='homeChatView'>
                    <ChannelInfo />
                    <Divider />
                    <ChatBody />
                    <Divider />
                    <ChatField />
                </div>
            </div>
        )
    }
}