import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#6C7AE0" }}
      onClick={onClick}
    />
  );
}

function Carouselproduct() {
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
   
  };
  return (
    <div>
       
        <Slider {...settings}>
       
        <div className="col-sm-6 col-md-4 col-lg-12 p-b-35 isotope-item women">
				<div className="block2">
							<div className="block2-pic hov-img0">
							<img src="https://n3.sdlcdn.com/imgs/k/f/6/230X258_sharpened/Twisted-Love-Special-Edition-Paperback-SDL319774557-1-51910.webp" alt="IMG-PRODUCT"/>

								<a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
									Quick View
								</a>
							</div>

							<div className="block2-txt flex-w flex-t p-t-14">
								<div className="block2-txt-child1 flex-col-l ">
									<a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
										Esprit Ruffle Shirt
									</a>

									<span className="stext-105 cl3">
										$16.64
									</span>
								</div>

								<div className="block2-txt-child2 flex-r p-t-3">
									<a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
										<img className="icon-heart1 dis-block trans-04" src="assets/images/icons/icon-heart-01.png" alt="ICON"/>
										<img className="icon-heart2 dis-block trans-04 ab-t-l" src="assets/images/icons/icon-heart-02.png" alt="ICON"/>
									</a>
								</div>
							</div>
						</div>
					</div>

          <div className="col-sm-6 col-md-4 col-lg-12 p-b-35 isotope-item women">
            						<div className="block2">
							<div className="block2-pic hov-img0">
							<img src="https://n2.sdlcdn.com/imgs/b/e/y/large/Wings-Of-Fire-SDL997469457-1-b9984.jpg" alt="IMG-PRODUCT"/>

								<a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
									Quick View
								</a>
							</div>

							<div className="block2-txt flex-w flex-t p-t-14">
								<div className="block2-txt-child1 flex-col-l ">
									<a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
										Herschel supply
									</a>

									<span className="stext-105 cl3">
										$35.31
									</span>
								</div>

								<div className="block2-txt-child2 flex-r p-t-3">
									<a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
										<img className="icon-heart1 dis-block trans-04" src="assets/images/icons/icon-heart-01.png" alt="ICON"/>
										<img className="icon-heart2 dis-block trans-04 ab-t-l" src="assets/images/icons/icon-heart-02.png" alt="ICON"/>
									</a>
								</div>
							</div>
						</div>
					</div>

          <div className="col-sm-6 col-md-4 col-lg-12 p-b-35 isotope-item women">
						<div className="block2">
							<div className="block2-pic hov-img0">
								<img src="assets/images/product-03.jpg" alt="IMG-PRODUCT"/>

								<a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
									Quick View
								</a>
							</div>

							<div className="block2-txt flex-w flex-t p-t-14">
								<div className="block2-txt-child1 flex-col-l ">
									<a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
										Only Check Trouser
									</a>

									<span className="stext-105 cl3">
										$25.50
									</span>
								</div>

								<div className="block2-txt-child2 flex-r p-t-3">
									<a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
										<img className="icon-heart1 dis-block trans-04" src="assets/images/icons/icon-heart-01.png" alt="ICON"/>
										<img className="icon-heart2 dis-block trans-04 ab-t-l" src="assets/images/icons/icon-heart-02.png" alt="ICON"/>
									</a>
								</div>
							</div>
						</div>
					</div>
          <div className="col-sm-6 col-md-4 col-lg-12 p-b-35 isotope-item women">
				<div className="block2">
							<div className="block2-pic hov-img0">
							<img src="https://n3.sdlcdn.com/imgs/a/5/j/large/I-Am-Malala-SDL628390932-1-16df0.jpg" alt="IMG-PRODUCT"/>

								<a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
									Quick View
								</a>
							</div>

							<div className="block2-txt flex-w flex-t p-t-14">
								<div className="block2-txt-child1 flex-col-l ">
									<a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
										Esprit Ruffle Shirt
									</a>

									<span className="stext-105 cl3">
										$16.64
									</span>
								</div>

								<div className="block2-txt-child2 flex-r p-t-3">
									<a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
										<img className="icon-heart1 dis-block trans-04" src="assets/images/icons/icon-heart-01.png" alt="ICON"/>
										<img className="icon-heart2 dis-block trans-04 ab-t-l" src="assets/images/icons/icon-heart-02.png" alt="ICON"/>
									</a>
								</div>
							</div>
						</div>
					</div>
          <div className="col-sm-6 col-md-4 col-lg-12 p-b-35 isotope-item women">
				<div className="block2">
							<div className="block2-pic hov-img0">
							<img src="https://n3.sdlcdn.com/imgs/k/f/6/230X258_sharpened/Twisted-Love-Special-Edition-Paperback-SDL319774557-1-51910.webp" alt="IMG-PRODUCT"/>

								<a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
									Quick View
								</a>
							</div>

							<div className="block2-txt flex-w flex-t p-t-14">
								<div className="block2-txt-child1 flex-col-l ">
									<a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
										Esprit Ruffle Shirt
									</a>

									<span className="stext-105 cl3">
										$16.64
									</span>
								</div>

								<div className="block2-txt-child2 flex-r p-t-3">
									<a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
										<img className="icon-heart1 dis-block trans-04" src="assets/images/icons/icon-heart-01.png" alt="ICON"/>
										<img className="icon-heart2 dis-block trans-04 ab-t-l" src="assets/images/icons/icon-heart-02.png" alt="ICON"/>
									</a>
								</div>
							</div>
						</div>
					</div>

          <div className="col-sm-6 col-md-4 col-lg-12 p-b-35 isotope-item women">
            						<div className="block2">
							<div className="block2-pic hov-img0">
							<img src="https://n2.sdlcdn.com/imgs/b/e/y/large/Wings-Of-Fire-SDL997469457-1-b9984.jpg" alt="IMG-PRODUCT"/>

								<a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
									Quick View
								</a>
							</div>

							<div className="block2-txt flex-w flex-t p-t-14">
								<div className="block2-txt-child1 flex-col-l ">
									<a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
										Herschel supply
									</a>

									<span className="stext-105 cl3">
										$35.31
									</span>
								</div>

								<div className="block2-txt-child2 flex-r p-t-3">
									<a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
										<img className="icon-heart1 dis-block trans-04" src="assets/images/icons/icon-heart-01.png" alt="ICON"/>
										<img className="icon-heart2 dis-block trans-04 ab-t-l" src="assets/images/icons/icon-heart-02.png" alt="ICON"/>
									</a>
								</div>
							</div>
						</div>
					</div>

          <div className="col-sm-6 col-md-4 col-lg-12 p-b-35 isotope-item women">
						<div className="block2">
							<div className="block2-pic hov-img0">
								<img src="assets/images/product-03.jpg" alt="IMG-PRODUCT"/>

								<a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
									Quick View
								</a>
							</div>

							<div className="block2-txt flex-w flex-t p-t-14">
								<div className="block2-txt-child1 flex-col-l ">
									<a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
										Only Check Trouser
									</a>

									<span className="stext-105 cl3">
										$25.50
									</span>
								</div>

								<div className="block2-txt-child2 flex-r p-t-3">
									<a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
										<img className="icon-heart1 dis-block trans-04" src="assets/images/icons/icon-heart-01.png" alt="ICON"/>
										<img className="icon-heart2 dis-block trans-04 ab-t-l" src="assets/images/icons/icon-heart-02.png" alt="ICON"/>
									</a>
								</div>
							</div>
						</div>
					</div>
          <div className="col-sm-6 col-md-4 col-lg-12 p-b-35 isotope-item women">
				<div className="block2">
							<div className="block2-pic hov-img0">
							<img src="https://n3.sdlcdn.com/imgs/a/5/j/large/I-Am-Malala-SDL628390932-1-16df0.jpg" alt="IMG-PRODUCT"/>

								<a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
									Quick View
								</a>
							</div>

							<div className="block2-txt flex-w flex-t p-t-14">
								<div className="block2-txt-child1 flex-col-l ">
									<a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
										Esprit Ruffle Shirt
									</a>

									<span className="stext-105 cl3">
										$16.64
									</span>
								</div>

								<div className="block2-txt-child2 flex-r p-t-3">
									<a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
										<img className="icon-heart1 dis-block trans-04" src="assets/images/icons/icon-heart-01.png" alt="ICON"/>
										<img className="icon-heart2 dis-block trans-04 ab-t-l" src="assets/images/icons/icon-heart-02.png" alt="ICON"/>
									</a>
								</div>
							</div>
						</div>
					</div>
        </Slider>
       
      </div>
  )
}

export default Carouselproduct