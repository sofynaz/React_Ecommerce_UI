import React, { Fragment } from "react";
import '../Footer.css'

function Footer() {
    return (
        <Fragment>
            <div className="container-fluid " >
                <div className="row text-center bg-dark Footer1 justify-content-center">
                    {/* -- Women column -- */}
                    <div className="col-md-3 col-lg-2  col-sm-12 mt-sm-4 mb-sm-5">
                        <h5 className="text-light text">Women's</h5>
                        <a href="wo-All.html" className="d-block  mt-3">All Products</a>
                        <a href="Wo-Dress.html" className="d-block mt-3">Dresses</a>
                        <a href="Wo-Pants.html" className="d-block mt-3">Pants</a>
                        <a href="Wo-Skirts.html" className="d-block mt-3">Skirts</a>
                    </div>
                    {/* -- Men column -- */}
                    <div className="col-md-3 col-lg-2  col-sm-12 mt-sm-4 mb-sm-5">
                        <h5 className="text-light text">Men's</h5>
                        <a href="me-All.html" className="d-block mt-3 ">All Products</a>
                        <a href="Me-Shirts.html" className="d-block mt-3">Shirts</a>
                        <a href="Me-Pants.html" className="d-block mt-3">Pants</a>
                        <a href="Me-Hoody.html" className="d-block mt-3">Hoodies</a>
                    </div>
                    {/* -- Kids -- */}
                    <div className="col-md-3 col-lg-2 col-sm-12 mt-sm-4 mb-sm-5">
                        <h5 className="text-light text">Kids</h5>
                        <a href="Kids.html" className="d-block mt-3">Kids</a>
                    </div>
                    {/* -- link details -- */}
                    <div className="col-md-3 col-lg-2  col-sm-12 mt-sm-4 mb-sm-5">
                        <h5 className="text-light text">Importants Link</h5>                   
                        <a href="#" className="d-block mt-3 ">Link</a>
                        <a href="index.html" className="d-block mt-3">Home</a>
                        <a href="Login.html" className="d-block mt-3">Login</a>
                        <a href="Contact.html" className="d-block mt-3">Contact</a>
                    </div>
                    <div className="text-light">
                        <div className="copyright p-3 mb-5 text-light">
                            <p className="copy">Copyright &#169; Newstyle 2022-23;</p>
                            <p className="copy">Created <i className="fa-duotone fa-face-smile-hearts fa-beat"
                                ></i> by Mis Naaz</p>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>

    )
}

export default Footer;