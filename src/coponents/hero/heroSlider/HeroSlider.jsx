import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HeroSlider.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function HeroSlider() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/5f76d7cb690e57c164388d32_Artboard%208.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.jumblebee.co.uk/site/wp-content/uploads/2014/06/JB-FE-Shop_10.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://image.shutterstock.com/image-vector/shop-store-vector-sketch-icon-260nw-432036079.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
