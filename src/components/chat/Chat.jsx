import React from "react";
import './Chat.css';
import { StateContext } from '../../utils/StateProvider';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import IconButton from '@mui/material/IconButton';


export default class Chat extends React.Component {
    static contextType = StateContext;
    state = {
        data: null,
        messages: [],
        input: ""
    }

    componentDidMount() {
        const [data, dispatch] = this.context;
        this.setState({ data: data });
    }

    componentDidUpdate() {
        console.log(this.state.data.user.socket.getMessages());
    }

    sendMessage = () => {
        console.log(this.state.input)
        this.state.data.user.socket.sendMessage(this.state.data.activeChannel.id, this.state.input);
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value });
    }

    render() {
        return (
            <div>
                <div className='chatBody'>
                    {
                        this.state.messages?.map((message) => (
                            <div key={message.id} className='chatBodyBubbleContainer'>
                                <Chip
                                    className={`chatBodyBubble ${this.state.data.user.username === message.sender ? "sender" : "recipient"}`}
                                    label={message.text}
                                />
                            </div>
                        ))
                    }
                </div>
                <div className="chatField">
                    <InsertEmoticonIcon />
                    <AttachFileIcon />
                    <TextField
                        className='chatBodyTextField'
                        id="outlined-search"
                        label="Type a message"
                        type="text"
                        value={this.state.input}
                        onChange={this.handleChange}
                    />
                    <KeyboardVoiceIcon />
                    <IconButton onClick={() => this.sendMessage()}>
                        <SendIcon />
                    </IconButton>
                </div>
            </div>
        )
    }
}