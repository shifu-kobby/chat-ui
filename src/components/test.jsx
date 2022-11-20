import React from 'react';
import SocketClient from '../utils/client';

export default class Test extends React.Component {

    state = {
        username: "",
        client: null,
        messages: []
    };

    componentDidMount() {
        console.log("mounted")
    }

    componentDidUpdate() {
        console.log("updating....")
        console.log(this.state.client)
        this.state.client?.getMessages();
    }

    createUser = () => {
        let user = new SocketClient(this.state.username);
        console.log("user created...")
        if (user) {
            this.setState({ client: user });
            console.log("done...")
        }
    }

    sendMessage = () => {
        console.log(this.state.client)
        console.log("joining room....")
        this.state.client.joinRoom(1)
        console.log("joined...sending message now")
        this.state.client.sendMessage(this.state.username, 1, "what's up")
        console.log("message sent!")
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.createUser();
    }

    handleChange = (event) => {
        if (event.target.value) {
            this.setState({ username: event.target.value });
        }
    }

    // handleUserCreation = (e) => {
    //     this.createUser(e.target.value);
    // }

    render() {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    create user:
                    <input type="text" value={this.state.username} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <button onClick={this.sendMessage}>send message</button>
        </div>
        )
    }
}