import { Image } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination]);

export const ContinentsSlide = () => {
  return (
    <Swiper
      pagination
      navigation
      slidesPerView={1}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Image src='/europe.jpg' alt='Europe' height='450px' width='100%' />
      </SwiperSlide>

      <SwiperSlide>
        <Image
          src='/north-america.jpg'
          alt='Europe'
          height='450px'
          width='100%'
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
          src='/south-america.jpg'
          alt='Europe'
          height='450px'
          width='100%'
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image src='/africa.jpg' alt='Europe' height='450px' width='100%' />
      </SwiperSlide>

      <SwiperSlide>
        <Image src='/oceania.jpg' alt='Europe' height='450px' width='100%' />
      </SwiperSlide>

      <SwiperSlide>
        <Image src='/asia.jpg' alt='Europe' height='450px' width='100%' />
      </SwiperSlide>
    </Swiper>
  );
};
