import React from "react";
import { connect } from "react-redux";
function Product(props) {
    console.log(props)
    return (
        <div className="border border-2 m-4 p-2 w-25 justify-content-between border-dark">


            <img style={{ width: "90px", height: "90px" }} src={props.t.image}></img><br></br>
            <span>DESCRIPTION:{props.t.description}</span><br></br>
            <span> CATEGORY:{props.t.category}</span><br></br>

            <span>ID:{props.t.id}</span><br></br>

            <span>PRICE: {props.t.price}</span><br></br>

            <span>COUNT:{props.t.rating.count}</span><br></br>
<button  className="border border-1 bg-info"onClick={()=>{props.dispatch({type:"ADDTODO",payload:props.t})}}>ADD TO  CART</button>


        </div>
    )
}
export default connect(function (store) { return store })(Product)
