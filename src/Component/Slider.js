import React, { Fragment } from "react";
import '../App.css'

function Slider() {
    return (

        <Fragment>
            <div className="container-fluid mb-5">
                <h1 className="text-center mt-3 feature">Featured Products</h1>
                {/* -- Carousels slider -- */}
                <div id="carouselExampleIndicators" className="carousel slide ">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2" className="bg-dark"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3" className="bg-dark"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className=" slider-carousel carousel-item active ">
                            <div className="row ">
                                <div className="col-lg-3 col-sm-6 col-xs-12 mb-3 ">
                                    {/* -- Card layout ist featured product  -- */}
                                    <div className="card mx-auto" style={{ width: "18rem" }}>
                                        <img src="https://img.freepik.com/free-photo/portrait-fashion-cute-young-woman-model-red-dress-white-wall_158538-8025.jpg?size=626&ext=jpg&ga=GA1.1.463143725.1692859751&semt=ais"
                                            height="350" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            {/* -- Card title -- */}
                                            <h5 className="card-title mx-5">Red Dress</h5>
                                            <p className="card- mx-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                                                odio harum ad.</p>
                                            <h5 className="text-danger mx-5">&#8377; 299.00</h5>
                                            <a className="btn btn-xs btn-tertiary" href="/other-pages/cart.html">
                                                <span className="fas fa-cart-plus me-2"></span> Add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-xs-12 mb-3 ">
                                    {/* -- Card layout  2nd-- */}
                                    <div className="card  mx-auto" style={{ width: "18rem" }}>
                                        <img src="https://img.freepik.com/free-photo/full-portrait-fashion-model-with-long-hair-dressed-blue-jeans_186202-8159.jpg?size=626&ext=jpg&ga=GA1.1.463143725.1692859751&semt=ais"
                                            height="350" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title mx-5 ">strip Pants</h5>
                                            <p className="card- mx-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                                                odio harum ad.</p>
                                            <h5 className="text-danger mx-5"> &#8377; 399.00</h5>
                                            {/* -- cart  -- */}
                                            <a className="btn btn-xs btn-tertiary" href="/other-pages/cart.html">
                                                <span className="fas fa-cart-plus me-2"></span> Add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
                                    {/* -- Card layout  3rd-------- */}
                                    <div className="card  mx-auto" style={{ width: "18rem" }}>
                                        <img src="https://img.freepik.com/free-photo/fashion-photo-young-magnificent-woman-bright-dress_158595-319.jpg?size=626&ext=jpg&ga=GA1.1.463143725.1692859751&semt=ais"
                                            height="350" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title mx-5">Cream Skirts </h5>
                                            <p className="card- mx-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autemodio harum ad.</p>
                                            <h5 className="text-danger mx-5"> &#8377; 199.00</h5>
                                            {/* -- cart -- */}
                                            <a className="btn btn-xs btn-tertiary" href="/other-pages/cart.html">
                                                <span className="fas fa-cart-plus me-2"></span> Add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
                                    {/* -- Card layout 4th ----------- -- */}
                                    {/* -- ----------------------------------------- -- */}
                                    <div className="card  mx-auto" style={{ width: "18rem" }}>
                                        <img src="https://img.freepik.com/premium-photo/women-enzyme-washed-denim-brallete-top_920356-4191.jpg?size=626&ext=jpg&ga=GA1.1.463143725.1692859751&semt=ais"
                                            height="350" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title mx-5">Ripped Jeans</h5>
                                            <p className="card- mx-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                                                odio harum ad.</p>
                                            <h5 className="text-danger mx-5"> &#8377; 599.00</h5>
                                            {/* -- cart -- */}
                                            <a className="btn btn-xs btn-tertiary" href="/other-pages/cart.html">
                                                <span className="fas fa-cart-plus me-2"></span> Add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* -- Carousel item 2nd item -- */}
                        {/* --MEN ITEMS------------------------ */}
                        <div className="carousel-item">
                            <div className="row mx-auto">
                                <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
                                    {/* -- Card layout1  -- */}
                                    <div className="card  mx-auto" style={{ width: "18rem" }}>
                                        <img src="https://img.freepik.com/premium-photo/men-s-regular-formal-shirt_920356-4809.jpg?size=626&ext=jpg&ga=GA1.1.463143725.1692859751&semt=ais"
                                            height="350" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title mx-5">Shirts</h5>
                                            <p className="card- mx-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                                                odio harum ad.</p>
                                            <h5 className="text-danger mx-5"> &#8377; 799.00</h5>
                                            {/* -- cart -- */}
                                            <a className="btn btn-xs btn-tertiary" href="/other-pages/cart.html">
                                                <span className="fas fa-cart-plus me-2"></span> Add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-xs-12 mb-3 ">
                                    {/* -- Card layout 2 -- */}
                                    <div className="card  mx-auto" style={{ width: "18rem" }}>
                                        <img src="https://img.freepik.com/free-photo/man-beige-shirt-pants-casual-wear-fashion-full-body_53876-128784.jpg?size=626&ext=jpg&ga=GA1.1.463143725.1692859751&semt=ais"
                                            height="350" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title mx-5">Pants</h5>
                                            <p className="card- mx-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                                                odio harum ad.</p>
                                            <h5 className="text-danger mx-5"> &#8377; 299.00</h5>
                                            {/* -- cart -- */}
                                            <a className="btn btn-xs btn-tertiary" href="/other-pages/cart.html">
                                                <span className="fas fa-cart-plus me-2"></span> Add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-xs-12 mb-3 ">
                                    {/* -- Card layout 3  -- */}
                                    <div className="card  mx-auto" style={{ width: "18rem" }}>
                                        <img src="https://img.freepik.com/premium-photo/man-wearing-black-sweater-isolated-white-background-your-designs-mockup_398492-4691.jpg?size=626&ext=jpg&ga=GA1.1.463143725.1692859751&semt=ais"
                                            height="350" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title mx-5">Hoodies </h5>
                                            <p className="card- mx-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                                                odio harum ad.</p>
                                            <h5 className="text-danger mx-5"> &#8377; 399.00</h5>
                                            {/* -- cart -- */}
                                            <a className="btn btn-xs btn-tertiary" href="/other-pages/cart.html">
                                                <span className="fas fa-cart-plus me-2"></span> Add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-xs-12 mb-3 ">
                                    {/* -- Card layout 4 -- */}
                                    <div className="card  mx-auto" style={{ width: "18rem" }}>
                                        <img src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man_158538-5019.jpg?size=626&ext=jpg&ga=GA1.1.463143725.1692859751&semt=ais"
                                            height="350" className="card-img-top" alt="..." />
                                        <div className="card-body ">
                                            <h5 className="card-title mx-5">Denym shirt</h5>
                                            <p className="card- mx-1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Autem
                                                odio harum ad.</p>
                                            <h5 className="text-danger mx-5"> &#8377; 699.00</h5>
                                            {/* -- cart -- */}
                                            <a className="btn btn-xs btn-tertiary" href="/other-pages/cart.html">
                                                <span className="fas fa-cart-plus me-2"></span> Add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* -- Carousel Item 3rd PART -- */}
                        {/* -- ---------------------------------KIDS DRESSS -- */}
                        <div className="carousel-item">
                            <div className="row ">
                                <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
                                    {/* -- Card layout  1st-- */}
                                    <div className="card  mx-auto" style={{ width: "18rem" }}>
                                        <img src="https://img.freepik.com/free-photo/beautiful-girl-with-long-hair-yellow-poses-white-background_78492-3828.jpg?size=626&ext=jpg&ga=GA1.2.463143725.1692859751&semt=ais"
                                            height="350" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title mx-5">Party Dress</h5>
                                            <p className="card- mx-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                                                odio harum ad.</p>
                                            <h5 className="text-danger mx-5"> &#8377; 499.00</h5>
                                            {/* -- cart -- */}
                                            <a className="btn btn-xs btn-tertiary" href="/other-pages/cart.html">
                                                <span className="fas fa-cart-plus me-2"></span> Add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
                                    {/* -- Card layout  2nd-- */}
                                    <div className="card  mx-auto" style={{ width: "18rem" }}>
                                        <img src="https://img.freepik.com/free-photo/little-girl-cute-dress_1303-13465.jpg?size=626&ext=jpg&ga=GA1.2.463143725.1692859751&semt=ais"
                                            height="350" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title mx-5">Sky Frock</h5>
                                            <p className="card- mx-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                                                odio harum ad.</p>
                                            <h5 className="text-danger mx-5"> &#8377; 399.00</h5>
                                            {/* -- cart -- */}
                                            <a className="btn btn-xs btn-tertiary" href="/other-pages/cart.html">
                                                <span className="fas fa-cart-plus me-2"></span> Add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-xs-12 mb-3 ">
                                    {/* -- Card layout  3rd-- */}
                                    <div className="card  mx-auto" style={{ width: "18rem" }}>
                                        <img src="https://img.freepik.com/free-photo/full-length-portrait-bright-fashionable-girl-red-raincoat-with-black-bag-posing-yellow-studio-wall_155003-26309.jpg?w=360&t=st=1693195985~exp=1693196585~hmac=8860b739455e2bb29ae2a674b059a45da7b7d1fef8ed3d8dce2e3b7473f2f7e6"
                                            height="350" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title mx-5">Kids jeans</h5>
                                            <p className="card- mx-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                                                odio harum ad.</p>
                                            <h5 className="text-danger mx-5"> &#8377; 399.00</h5>
                                            {/* -- cart -- */}
                                            <a className="btn btn-xs btn-tertiary" href="/other-pages/cart.html">
                                                <span className="fas fa-cart-plus me-2"></span> Add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-xs-12 mb-3">
                                    {/* -- Card layout  -- */}
                                    <div className="card  mx-auto" style={{ width: "18rem" }}>
                                        <img src="https://img.freepik.com/premium-photo/fashion-boy-girl-stylish-clothes-colored-wall-autumn-bright-clothes-children-child-posing-colored-purple-pink-wall_86390-4442.jpg?size=626&ext=jpg&ga=GA1.1.463143725.1692859751&semt=ais"
                                            height="350" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title mx-5">Kids Top's</h5>
                                            <p className="card- mx-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                                                odio harum ad.</p>
                                            <h5 className="text-danger mx-5"> &#8377; 699.00</h5>
                                            {/* -- cart -- */}
                                            <a className="btn btn-xs btn-tertiary" href="/other-pages/cart.html">
                                                <span className="fas fa-cart-plus me-2"></span> Add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon bg-dark " aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next bg-" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </div>


        </Fragment>


    )
} export default Slider;