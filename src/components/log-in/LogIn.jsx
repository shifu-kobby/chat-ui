import React from 'react';
import './LogIn.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../../utils/StateProvider';
import SocketClient from '../../utils/client';


export default function LogIn() {
    const [data, dispatch] = useStateValue();
    const [username, setUsername] = React.useState('');
    const [password, setPasssword] = React.useState('');
    const navigate = useNavigate();


    const handleChange = (event) => {
        if (event.target.name === "username") {
            setUsername(event.target.value);
        }
        if (event.target.name === "password") {
            setPasssword(event.target.value);
        }
    }

    const handleSubmit = () => {
        dispatch({
            type: 'LOGIN',
            item: {
                username: username,
                password: password,
                socket: createSocketInstance(),
                status: "online"
            }
        })
        
        navigate("/homepage");
    }

    const createSocketInstance = () => {
        let user = new SocketClient(username);
        return user;
    }

    return (
        <div className='login'>
            <h1>
                Welcome
            </h1>
            <div className='loginInputContainer'>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-name"
                        label="username"
                        type="text"
                        name='username'
                        value={username}
                        onChange={handleChange}
                    />
                    <TextField
                        id="outlined-name"
                        label="password"
                        type="text"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                    <Button className='loginButton' size="small" variant="contained" onClick={handleSubmit}>Login</Button>
                </Box>
            </div>
        </div>
    );
}