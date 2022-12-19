import React from "react";
import { BsBasketFill } from "react-icons/bs";
import { FaHeart, FaEye } from "react-icons/fa";
import "./EachProduct.css";

export default function EachProduct() {
  return (
    <div className="productCard">
      <div className="productCard_img">
        <img
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539"
          alt=""
        />
      </div>
      <div className="productCard_title">
        <h3>product Name</h3>
        <ins>$18</ins>
      </div>
      <div className="card_eventsWrapper">
        <button className="card_addtoBasket">
          <BsBasketFill /> Add to cart
        </button>

        <div className="card_eventsIcon">
          <button className="cardCQuickView">
            <FaEye />
          </button>
          <button className="cardWishList">
            <FaHeart />
          </button>
        </div>
      </div>
    </div>
  );
}
