import React from "react";
import store from "./store/store";
import cart from "./cart";
import { connect } from "react-redux";
function Cartitems(props) {
    console.log('cartprops', props)  
    return (
        
        <div className="border border-2 m-5 p-2 w-50justify-content-between border-dark">
            <img style={{ width: "90px", height: "90px" }} src={props.t.image}></img><br></br>
            <span className="text-center"> CATEGORY:{props.t.category}</span><br></br>
            <span className="text-center">ID:{props.t.id}</span><br></br>
            <span className="text-center">PRICE:<i class="bi bi-currency-dollar"></i> {props.t.price}</span><br></br>
            <span className="text-center">RATING:{props.t.rating.rate}</span><br></br>
            <span className="text-center bg-info-subtle fs-8">FREE DELIVERY</span><br></br>
            <button onClick={() => { props.dispatch({type:"DEC",index:props.i}) }} className=" m-2 rounded">-</button>
            <span>{props.t.count}</span>
            <button onClick={() => { props.dispatch({type:"INC",index:props.i})}} className=" m-2 rounded ">+</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>
            <button className="border border-1 bg-info" onClick={() => { props.dispatch({ type: "DELTODO", index: props.i }) }}>DELETE</button>           
        </div>
    )
}
{ }
export default connect((store) => { return store })(Cartitems)
