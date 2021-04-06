import SwiperCore, { Navigation, Pagination, Parallax } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlideContent } from '../slide-content';

SwiperCore.use([Navigation, Pagination, Parallax]);

export const ContinentsSlide = () => {
  return (
    <Swiper pagination navigation slidesPerView={1} style={{ width: '100%' }}>
      <SwiperSlide>
        <SlideContent
          title='Europa'
          subTitle='O continente mais antigo'
          imageUrl='/europe.jpg'
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideContent
          title='América do Norte'
          subTitle='A américa rica'
          imageUrl='/north-america.jpg'
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideContent
          title='América do Sul'
          subTitle='O continente mais tropical'
          imageUrl='/south-america.jpg'
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideContent
          title='Africa'
          subTitle='O continente mais cultural'
          imageUrl='/africa.jpg'
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideContent
          title='Oceania'
          subTitle='Tem um monte de ilhas aqui'
          imageUrl='/oceania.jpg'
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideContent
          title='Asia'
          subTitle='O maior dos continentes'
          imageUrl='/asia.jpg'
        />
      </SwiperSlide>
    </Swiper>
  );
};
