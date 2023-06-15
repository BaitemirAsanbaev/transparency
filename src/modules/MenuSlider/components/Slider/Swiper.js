import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from '../../../../components/Card/Card';
import { data } from '../../../../store/test';
const Slider = () => {
  return ( <div>
    <Swiper
    spaceBetween={50}
    slidesPerView={5}>
      {data.map((item)=>{
        return <SwiperSlide><Card item={item}/></SwiperSlide>
      })}
    </Swiper>
  </div> );
}
 
export default Slider;