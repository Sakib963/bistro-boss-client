// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <section className="my-10">
        <SectionTitle 
        heading={"ORDER ONLINE"}
        subHeading={'From 11:00am to 10:00pm'}
        ></SectionTitle>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          dynamicBullets: true,
        }}
        grabCursor={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-3xl uppercase text-center -mt-20 mb-10 text-white font-semibold">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-3xl uppercase text-center -mt-20 mb-10 text-white font-semibold">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-3xl uppercase text-center -mt-20 mb-10 text-white font-semibold">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-3xl uppercase text-center -mt-20 mb-10 text-white font-semibold">
            Cakes
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-3xl uppercase text-center -mt-20 mb-10 text-white font-semibold">
            Rice Bowls
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
