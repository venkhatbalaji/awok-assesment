const initialSate = {
    isLoginClicked:false,
    isRegisterClicked: false
}

const reducer = (state = initialSate, action) => {
    const newState = {...state};

    if(action.type === 'LOGIN_CLICK'){
        newState.isLoginClicked = !newState.isLoginClicked;
    }
    if(action.type === 'REGISTER_CLICK'){
        newState.isRegisterClicked = !newState.isRegisterClicked;
    }
    if(action.type === 'CLOSE_LOGIN'){
        newState.isLoginClicked = !newState.isLoginClicked;
    }
    if(action.type === 'CLOSE_REGISTER'){
        newState.isRegisterClicked = !newState.isRegisterClicked;
    }
    console.log(newState)
    return newState;
}

export default reducer;