import React from 'react';
import Channel from '../channel/Channel';
import ChannelInfo from '../channel-info/ChannelInfo';
import './Home.css';
import Divider from '@mui/material/Divider';
import { StateContext } from '../../utils/StateProvider';
import Chat from '../chat/Chat';

export default class Home extends React.Component {
    static contextType = StateContext;

    componentDidMount() {
        const [data, dispatch] = this.context
    }

    render() {
        return (
            <div className='home'>
                <Channel />
                <div className='homeChatView'>
                    <ChannelInfo />
                    <Divider />
                    <Chat />
                </div>
            </div>
        )
    }
}