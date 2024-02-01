import React from "react";
import {connect} from "react-redux";
import Product from "./Product";
function Products(props){
    return(
        <div className="  d-flex flex-wrap  justify-content-center border-secondary">
             {
                    props.cart.cart.map((t,i)=>{
                        return(<Product t={t} i={i}></Product>)
                        
                 })
                }
                           
        </div>
    )
            }fdcwd
export default connect(function(store){return store})(Products)
