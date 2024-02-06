import React, { Fragment } from "react";
import { connect } from "react-redux";

function Product(props) {
    // console.log(props)
    return (

        <div className="border border-2 m-5 p-1 w-25 d-flex flex-column justify-content-center border-secondary .b">
            <img  style={{ width: "90px", height: "90px" }} className= "rounded mx-auto d-block justify-content-between"src={props.t.image}></img><br></br>
            <span className="  text-center display-0  w-2 text-danger">{props.t.title}</span>
            <span className="text-center" > CATEGORY:{props.t.category}</span>
            <span className="text-center" >PRICE:<i class="bi bi-currency-dollar"></i> {props.t.price}</span>
            <span className="text-center">RATING:{props.t.rating.rate}</span>
            <span className="text-center bg-info-subtle fs-8">FREE DELIVERY</span>
            
        
<button  className="  border border-1 btn btn-outline-primary a" onClick={()=>{props.dispatch({type:"ADDTODO",payload:props.t})}}>ADD TO CART<i className="bi bi-cart3 fnt"></i></button>
</div>
        
        
    )
}
export default connect(function (store) { return store })(Product)
