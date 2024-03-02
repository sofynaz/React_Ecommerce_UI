import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../Header.css'

function Header() {
  return (
    <Fragment>
      <div className='fixed-top'>

    
      <div className="container-fluid">
        <div className="row ">
          <nav className="navbar navbar-light navbar-expand-lg bg-body-tertiary ">
            <div className="col-sm-2">
              <h2 className="mt-2 mb-3 Brandname">New Style</h2>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ctn5" id="navbarSupportedContent">
              <div className="col-sm-6">
                <form className="d-flex mt-3 mb-3" id="searchbtn" role="search">
                  <input className="form-control   rounded-end-pill rounded-bottom-pill text-center me-2 border-danger"
                    type="search" placeholder="Search the products etc..." aria-label="Search" />
                  <button className="btn btn-outline-danger fw-bold m-0  bg-danger" type="submit"> <i
                    className="fa-solid fa-magnifying-glass   text-light jus"></i></button>
                </form>
              </div>
              <div className=" ps-5 mx-auto">
                <Link className="btn fw-bold mb-2" id="Loginbtn" href="Login.html" role="Button">Login</Link>
                <Link href="Cart.html" className="cart"><i className="fa-solid fa-cart-shopping ms-4 fa-2xl"
                ></i></Link>
              </div>
            </div>
          </nav>
        </div>
      </div>


      {/* <!-- ===============2nd part of header  --> */}
      <div className="row bg-dark">
        <div className="col-12">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="Allproduct.html">All Products</a>
            </li>
            <li className="nav-item dropdown ">
              <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Women
              </a>
              <ul className="dropdown-menu" id="dropdownli">
                <li><a className="dropdown-item text-danger" href="wo-All.html">All products</a></li>
                <li><a className="dropdown-item text-danger" href="Wo-Dress.html">Dresses</a></li>
                <li><a className="dropdown-item text-danger" href="Wo-Pants.html">Pants</a></li>
                <li><a className="dropdown-item text-danger" href="Wo-Skirts.html">Skirts</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Men
              </a>
              <ul className="dropdown-menu " id="dropdownli">
                <li><a className="dropdown-item text-danger" href="me-All.html">All Products</a></li>
                <li><a className="dropdown-item text-danger" href="Me-Shirts.html">Shirts</a></li>
                <li><a className="dropdown-item text-danger" href="Me-Pants.html">Pants</a></li>
                <li><a className="dropdown-item text-danger" href="Me-Hoody.html">Hoodies</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="Kids.html">Kids</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="Contact.html">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </Fragment>
  )
}
export default Header;