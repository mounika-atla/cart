import React from "react";
import store from "./store/store";
import { connect } from "react-redux";
import Cartitems from "./cartitems";
function Cart(props) {
       var total = props.cart.cartitems?.reduce((a, b) => {
              console.log(b.price,b.count);
              return  a + (b.price * b.count)
       }, 0)
       console.log("total::",total);
       return (
              <div className="  d-flex flex-wrap  justify-content-center border-secondary">
                     {
                            props.cart.cartitems.map((t, i) => {
                                   return (
                                          <Cartitems t={t} i={i}></Cartitems>
                                   )
                            })
                     }
              <div className="m-auto justify-content-end">
             <div className=" shadow p-3 border border-3 rounded bgm">
                 <h1>ORDER DETAILS</h1>
              <div className="d-flex flex-wrap justify-content-between">
                  <b>Total Items:</b>
                  <b>{props.cart.cartitems.length}</b>
                     </div>
             <div className="d-flex flex-wrap justify-content-between">
                   <b>Total Price:</b>
              <b><i class="bi bi-currency-dollar"></i>{total}</b>
                     </div>
              <button className="form-control rounded bg-info">Proceed to Buy</button>
                     </div>
              <div className="rounded shadow p-3 m-2 border bg-light text-center border-3" >
                     <h3>scan the QR to pay</h3>
              <img src="https://tse1.mm.bing.net/th?id=OIP.XddA3we5txwZAP4fAJtYRQHaHa&pid=Api&P=0&h=180" alt="" id="her" />
                     </div>
                     </div>
              </div>

       )
}
export default connect(function (store) { return store })(Cart)
