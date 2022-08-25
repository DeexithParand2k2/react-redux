const admin = 'econsys'

const authenticate = (guestInput) =>{
    if(guestInput===admin){
        return true
    }
    else{
        return false
    }
}

//reducer => get action and initialize state
const getAction = (initialState=false,action) =>{
    switch(action.type){
        case 'AUTH':
            return authenticate(action.guest)
        default:
            return false
    }
} 

export default getAction;