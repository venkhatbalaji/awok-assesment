const initialSate = {
    isLoginClicked: false,
    isRegisterClicked: false,
    isLoggedIn: false,
    isRegisterd: false,
    globalRegisteredData: [],
    registeredData: [],
    loggedInData: [],
    cardbuttonEnable: true
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
    if(action.type === 'SUBMIT_REGISTER'){
        newState.registeredData = {...action.data};
        newState.isRegisterd = !newState.isRegisterd;
    }
    if(action.type === 'SUBMIT_LOGIN'){
        newState.isLoggedIn = !newState.isLoggedIn;
        newState.loggedInData = {...newState.registeredData};
        newState.cardbuttonEnable = !newState.cardbuttonEnable;
    }
    if(action.type === 'REGISTERED_LOGIN'){
        newState.isLoggedIn = !newState.isLoggedIn;
        newState.loggedInData = {...newState.registeredData};
    }
    if(action.type === 'LOGOUT_CLICK'){
        newState.isLoginClicked = false;
        newState.isRegisterClicked = false;
        newState.isLoggedIn = false;
        newState.isRegisterd = false;
        newState.registeredData = [];
        newState.loggedInData = [];
        newState.cardbuttonEnable = true;        
    }
    if(action.type === 'START_BUTTONCLICK'){
        newState.cardbuttonEnable = !newState.cardbuttonEnable;        
    }
    if(action.type === 'START_GLOBAL_SESSION'){
        newState.globalRegisteredData = action.data;
    }
    console.log(newState)
    return newState;
}

export default reducer;