export const initialState = {
    user: {
        username: "",
        socket: "",
        messages: [{
            sender: "",
            text: "",
            room: ""
        }]
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
                    username: action.item
                }
            };
        case 'CONNECT':
            //set user socket instance
            return {
                ...state,
                user: {
                    ...state.user,
                    socket: action.item
                }
            };
        case 'DISCONNECT':
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
                user: {
                    ...state.user,
                    messages: [...state.user.message, action.item]
                }
            }
        default:
            return state;
    }
}

export default reducer;