import React, { useLayoutEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import ShopitMain from "../images/shopIT/shopit-main.png";
import ShopitProduct from "../images/shopIT/shopit-product.png";
import ShopitSearch from "../images/shopIT/shopit-search.png";
import ShopitCart from "../images/shopIT/shopit-cart.png";
import ShopitCheckout from "../images/shopIT/shopit-checkout.png";
import ShopitConfirmOrder from "../images/shopIT/shopit-confirm-order.png";
import ShopitPayment from "../images/shopIT/shopit-payment.png";
import ShopitShippingInfo from "../images/shopIT/shopit-shipping-info.png";
import ShopitSuccess from "../images/shopIT/shopit-success.png";
import ShopitOrders from "../images/shopIT/shopit-orders.png";
import ShopitOrderInfo from "../images/shopIT/shopit-order-info.png";

const Images = [
  ShopitMain,
  ShopitProduct,
  ShopitSearch,
  ShopitCart,
  ShopitCheckout,
  ShopitConfirmOrder,
  ShopitPayment,
  ShopitShippingInfo,
  ShopitSuccess,
  ShopitOrders,
  ShopitOrderInfo,
];

export default function App() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <>
      <h1>Shopit</h1>
      <p>Ecommerce website in MERN</p>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          Images.map((item, index) => {
            return (
              <SwiperSlide index={index}><img src={item} alt="project" /></SwiperSlide>
            )
          })
        }
      </Swiper>
      <p>While making this project I learnt about:</p>
      <ul>
        <li>Setting Up Environment</li>
        <li>Starting with ShopIT Backend</li>
        <li>Adding Products Resource</li>
        <li>Backend Error Handling</li>
        <li>Adding Filter, Pagination, Search</li>
        <li>Authentication & Authorization</li>
        <li>User Routes</li>
        <li>Adding Orders Resource</li>
        <li>User Reviews</li>
        <li>Starting with ShopIT Frontend</li>
        <li>Implementing Redux</li>
        <li>Adding Pagination, Search & Filters</li>
        <li>Users & Authentication Frontend</li>
        <li>Adding Shopping Cart</li>
        <li>Handle Checkout & Payments</li>
        <li>User Orders & Reviews</li>
        <li>Admin Routes</li>
        <li>Deployment</li>
        <li>Your Task / Assignment</li>
      </ul>
    </>
  );
}
