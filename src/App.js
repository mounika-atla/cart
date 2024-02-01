import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Products from "./Products";
import { Outlet, useNavigate } from "react-router-dom";

function App(props) {
  const navigate=useNavigate()
  return (
    <Provider store={store}>
      <div  className="d-flex  flex-wrap justify-content-between">
        <h1 className="text-warning text-center">MEN'S BOUTIQUE</h1>
        <button  className="border border-1   justify-content-end bg-info text-end"onClick={()=>{navigate("/cart")}}><i className="bi bi-cart4"><br></br></i>CART</button>
        
    <Outlet></Outlet>
      </div>
    </Provider>
  );
}

export default App;
