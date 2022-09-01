import React, { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import Slider from "./Slider";
import Content from "./Content";

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


const ImagesDesktop = [
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

const ImagesMobile = [];

export default function App() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="project-page"
    >
      <h1>{Content[3].title}</h1>
      <p>{Content[3].subtitle}</p>

      <Slider ImagesDesktop={ImagesDesktop} ImagesMobile={ImagesMobile} />

      <p>{Content[3].text}</p>
      <ul>
        {
          Content[3].featuresList.map((item, index) => {
            return (
              <li index={item.id}>{item.content}</li>
            )
          })
        }
      </ul>
    </motion.div>
  );
}
