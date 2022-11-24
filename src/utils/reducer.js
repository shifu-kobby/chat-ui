export const initialState = {
    user: {
        username: "",
        password: "",
        socket: "",
        status: "offline",
    },
    messages: [{
        id: "",
        sender: "",
        text: "",
        room: ""
    }],
    activeChannel: {
        id: "",
        name: ""
    }
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'CREATE_NEW_USER':
            //create an account
            return {
                ...state,
                user: {
                    ...state.user,
                    username: action.item.password,
                    password: action.item.password
                }
            };
        case 'LOGIN':
            //set user socket instance
            return {
                ...state,
                user: {
                    ...state.user,
                    username: action.item.username,
                    password: action.item.password,
                    socket: action.item.socket,
                    status: action.item.status
                }
            };
        case 'LOGOUT':
            //set disconnect user socket instance
            return {
                ...state,
                user: {
                    ...state.user,
                    socket: action.item
                }
            };
        case 'UPDATE MESSAGES':
            return {
                ...state,
                messages: [...state.messages, action.item]
            };
            case 'UPDATE ACTIVE CHANNEL':
            return {
                ...state,
                activeChannel: action.item
            };
        default:
            return state;
    }
}

export default reducer;