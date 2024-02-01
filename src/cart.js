import React from "react";
import Product from "./Product";
import store from "./store/store";
import { connect } from "react-redux";
function Cart(props){
return (
    <div>

    {
      props.cart.cartitems.map((t,i)=>{
             return(<Product t={t} i={i}></Product>)
                        
            })
                   }
</div>
)
}
export default  connect(function(store){return store})(Cart)