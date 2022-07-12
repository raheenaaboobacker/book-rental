import React from 'react'

function About() {
  return (
    <div> <div className="offcanvas-minicart_wrapper" id="miniCart">
    <div className="offcanvas-menu-inner">
        <a href="#" className="btn-close"><i className="zmdi zmdi-close"></i></a>
        <div className="minicart-content">
            <div className="minicart-heading">
                <h4>Shopping Cart</h4>
            </div>
            <ul className="minicart-list">
                <li className="minicart-product">
                    <a className="product-item_remove" href="javascript:void(0)"><i
                        className="zmdi zmdi-close"></i></a>
                    <div className="product-item_img">
                        <img src="assets/images/product/small-size/1.jpg" alt="Quicky's Product Image"/>
                    </div>
                    <div className="product-item_content">
                        <a className="product-item_title" href="shop-left-sidebar.html">Autem ipsa ad</a>
                        <span className="product-item_quantity">1 x $145.80</span>
                    </div>
                </li>
                <li className="minicart-product">
                    <a className="product-item_remove" href="javascript:void(0)"><i
                        className="zmdi zmdi-close"></i></a>
                    <div className="product-item_img">
                        <img src="assets/images/product/small-size/2.jpg" alt="Quicky's Product Image"/>
                    </div>
                    <div className="product-item_content">
                        <a className="product-item_title" href="shop-left-sidebar.html">Tenetur illum
                            amet</a>
                        <span className="product-item_quantity">1 x $150.80</span>
                    </div>
                </li>
                <li className="minicart-product">
                    <a className="product-item_remove" href="javascript:void(0)"><i
                        className="zmdi zmdi-close"></i></a>
                    <div className="product-item_img">
                        <img src="assets/images/product/small-size/3.jpg" alt="Quicky's Product Image"/>
                    </div>
                    <div className="product-item_content">
                        <a className="product-item_title" href="shop-left-sidebar.html">Non doloremque</a>
                        <span className="product-item_quantity">1 x $165.80</span>
                    </div>
                </li>
            </ul>
        </div>
        <div className="minicart-item_total">
            <span>Subtotal</span>
            <span className="ammount">$462.4‬0</span>
        </div>
        <div className="minicart-btn_area">
            <a href="cart.html" className="quicky-btn-2 quicky-btn_fullwidth square-btn">Minicart</a>
        </div>
        <div className="minicart-btn_area">
            <a href="checkout.html" className="quicky-btn-2 quicky-btn_fullwidth square-btn">Checkout</a>
        </div>
    </div>
</div>
</div>
  )
}

export default About