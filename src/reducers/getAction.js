const fetchPswd = async (objectJson) =>{
    const response = await fetch(`http://localhost:5000/${objectJson}`) 
    const data = await response.json()
    return data
}

const nestedPswd = async (temp) => {
    const a = await fetchPswd(temp)
    main = a.pswd
}

var main = 'password'

const authenticate = (guestInput) =>{

    nestedPswd('admin')

    if(guestInput===main){
        return true
    }
    else{
        return false
    }

    /*
        nestedPswd('admin').then(()=>{
        console.log(main)

        if(guestInput===main){
            return true
        }
        else{
            return false
        }
    })
    */

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