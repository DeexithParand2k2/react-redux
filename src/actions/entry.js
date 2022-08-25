//action
const enter = (mypass) =>{
    return{
      type:'AUTH',
      guest:`${mypass}`
    }
}

export default enter;