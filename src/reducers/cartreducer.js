import data from "../store/data"
const intialstate={
    cart:data,
    cartitems:[]

  }
  const cartreducer=function(state=intialstate,action)
  {
  
      if(action.type==="ADDTODO"){
        return{...state,cartitems:[...state.cartitems,action.payload]}
      }
  
      return state;
    }
    export default cartreducer