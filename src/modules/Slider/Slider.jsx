import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, History } from "swiper";
import omg from "../../assets/images/boso.png";
import "./Slider.scss";

const Slider = () => {
  return (
    <>
      <Swiper
        className="mySwiper"
        spaceBetween={50}
        slidesPerView={3}
        navigation={true}
        pagination={false}
        history={{
          key: "slide",
        }}
        modules={[Navigation, Pagination, History]}
      >
        <SwiperSlide data-history="1">
          <article className="sliderCard">
            <img src={omg} alt="" />
            <h5>hello</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
              rerum.
            </p>
          </article>
        </SwiperSlide>
        <SwiperSlide data-history="1">
          <article className="sliderCard">
            <img src={omg} alt="" />
            <h5>hello</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
              rerum.
            </p>
          </article>
        </SwiperSlide>
        <SwiperSlide data-history="1">
          <article className="sliderCard">
            <img src={omg} alt="" />
            <h5>hello</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
              rerum.
            </p>
          </article>
        </SwiperSlide>
        <SwiperSlide data-history="1">
          <article className="sliderCard">
            <img src={omg} alt="" />
            <h5>hello</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
              rerum.
            </p>
          </article>
        </SwiperSlide>
        <SwiperSlide data-history="1">
          <article className="sliderCard">
            <img src={omg} alt="" />
            <h5>hello</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
              rerum.
            </p>
          </article>
        </SwiperSlide>
        <SwiperSlide data-history="1">
          <article className="sliderCard">
            <img src={omg} alt="" />
            <h5>hello</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
              rerum.
            </p>
          </article>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
