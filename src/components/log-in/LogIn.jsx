import React from 'react';
import './LogIn.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function LogIn() {
    const [username, setUsername] = React.useState('');
    const [password, setPasssword] = React.useState('');

    const handleChange = (event) => {
        if (event.target.name === "username") {
            setUsername(event.target.value);
        }
        if (event.target.name === "password") {
            setPasssword(event.target.value);
        }
    }

    const handleSubmit = () => {
        console.log(username, password);
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