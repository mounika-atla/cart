
import data from "../store/data"
const intialstate = {
  cart: data,
  cartitems: [],
  

}
const cartreducer = function (state = intialstate, action) {

  if (action.type === "ADDTODO") {
    return { ...state, cartitems: [...state.cartitems, {...action.payload,count:1}] }
  }
  if (action.type === "DELTODO") {
    var temp = [...state.cartitems]
    temp.splice(action.index, 1)
    return { ...state, cartitems: [...temp] }
  }
  if (action.type === "INC") {
    state.cartitems[action.index].count++
    return { ...state, cartitems: [...state.cartitems] }
  }
  if (action.type === "DEC") {
    state.cartitems[action.index].count--
    return { ...state, cartitems:[...state.cartitems]}
  }
  return state;
}


export default cartreducer