import React from "react";
import {connect} from "react-redux";
import Product from "./Product";
import { Outlet } from "react-router-dom";
function Products(props){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary w-100 ">
  <div class="container-fluid bg-danger-subtle">
    <a class="navbar-brand" href="#"><b>Home</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><b>Daily Deals</b></a>
        </li>
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <b> Categories</b>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Mens Wear</a></li>
            <li><a class="dropdown-item" href="#">Womens Wear</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Accesories</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-info" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        <div  className=" border border-1  w-100">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="2000">
              <img src="https://www.shipindiasey.com/images-new/shoppers-stop-1.jpg" class="d-block  w-100" />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="https://images.freekaamaal.com/post_images/1569566196.png" class="d-block  w-100" />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="https://sslimages.shoppersstop.com/sys-master/root/h82/hf0/12262663585822/multiclick_20190130.jpg" class="d-block   w-100" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        </div>

        <Outlet></Outlet>
    
    
        <div className="  d-flex flex-wrap  justify-content-center border-secondary">
            
             {
                    props.cart.cart.map((t,i)=>{
                        return(
                        <Product t={t} i={i}></Product>
                        )
                        
                 })
                }
                           
        </div>
        </>
    )
            }
export default connect(function(store){return store})(Products)
