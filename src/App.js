import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Products from "./Products";
import { connect } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function App(props) {
  const navigate = useNavigate()
  return (
    <Provider store={store}>


<div  className="d-flex flex-wrap justify-content-center">
<i className="bi bi-shop fnt"></i> <h1 className="text-primary-emphasis text-center fw-bold">SHOPPERS STOP</h1><br></br>
        <div className="position-relative ms-auto">
          <button className="border border-1   bg-info " onClick={() => { navigate("/cart") }}><i className="bi bi-cart4 fnt"></i><span class=" badge p-1  position-absolute top-0 end-0 rounded-circle  rounded-pill text-bg-secondary">{props.cart.cartitems.length}</span></button>
        </div>
</div>
        <div><marquee behaviour="scroll" class="marq" w-100 direction="left" >
            *RAPID DELIVERY *LOWEST PRICES *QUICK RETURNS *CASH ON DELIVERY
          </marquee></div>
        <br></br>
        <div className=" background d-flex  flex-wrap justify-content-between">
        <Outlet></Outlet>
      </div>
      <div style={{ height: "150px" }} className=" card-title border border-1 bg-danger-subtle justify-content-between text-dark d-flex  flex-row h-25 ">

        <div className=" m-2  w-35 "><h2>SHOPPERS STOP </h2>
          <h6 className="text-primary">India's top fashion<br></br>
            and lifestyle destination
          </h6>
        </div>

        <div className=" m-2  w-45 "><h2>ORDER ONLINE</h2>
          <h6 className="text-primary">24*7*365<      br></br>
            website:http://www.shoppersstop.com
          </h6>
        </div>

        <div className=" m-2  w-30 ">
          <h3  className="text-dark">HELP & GUIDE</h3>

          <h6 className="text-primary">Terms of Use<br></br>
            Privacy Policy<br></br>
            Shipping & Returns
          </h6>
        </div>

      </div>
    </Provider>
  );
}

export default connect((store) => { return store })(App);
