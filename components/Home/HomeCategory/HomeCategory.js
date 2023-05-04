"use client"
import ButtonTypo from '@/components/ButtonTypo/ButtonTypo';
import { BiPen } from "react-icons/bi";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/grid';
import Style from './category.module.css'
const iconArt = 'https://i.ibb.co/RSWh8Sy/Group.png';
const iconData = 'https://i.ibb.co/XWpzy5D/Vector.png';
const HomeCategory = () => {
  return (
    <div className='w-4/5 mx-auto mb-32'>
      <p className='text-primary text-[14px] font-bold uppercase'>category</p>
      <div className='flex justify-between flex-wrap gap-3 items-center'>
        <h2>Explore by category</h2>
        <div>
          <ButtonTypo bg={'bg-black'} text={'text-white'}>View all</ButtonTypo>
        </div>
      </div>

      <div>
        <div className='about-carousel mt-6'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 50
              }
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            autoplay={true}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide className="mr-10 pb-16">
              <div className={`bg-[#F5F0EE] px-6 py-7 rounded-xl transition-all duration-300 category hover:bg-primary hover:text-white cursor-pointer ${Style.category}`}>
                <div className=' bg-white flex items-center justify-center h-[50px] w-[50px] rounded-full mb-10'>
                  <BiPen className='text-[#BAA299] text-[24px]' />
                </div>
                <div>
                  <h5 className='mb-2'>Graphics Design</h5>
                  <p>Donec bibendum, dui id ultrices molestie, neque.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mr-10 pb-16">
              <div className={`bg-[#F5F0EE] px-6 py-7 rounded-xl transition-all duration-300 category hover:bg-primary hover:text-white cursor-pointer ${Style.category}`}>
                <div className=' bg-white flex items-center justify-center h-[50px] w-[50px] rounded-full mb-10'>
                  <FaAngleLeft className='text-[#BAA299] text-[20px]' />
                  <FaAngleRight className='text-[#BAA299] text-[20px]' />
                </div>
                <div>
                  <h5 className='mb-2'>Web Development</h5>
                  <p>Donec bibendum, dui id ultrices molestie, neque.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mr-10 pb-16">

              <div className={`bg-[#F5F0EE] px-6 py-7 rounded-xl transition-all duration-300 category hover:bg-primary hover:text-white cursor-pointer ${Style.category}`}>
                <div className=' bg-white flex items-center justify-center h-[50px] w-[50px] rounded-full mb-10'>
                  <img src={iconArt} alt="" />
                </div>
                <div>
                  <h5 className='mb-2'>Digital Painting</h5>
                  <p>Donec bibendum, dui id ultrices molestie, neque.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mr-10 pb-16">

              <div className={`bg-[#F5F0EE] px-6 py-7 rounded-xl transition-all duration-300 category hover:bg-primary hover:text-white cursor-pointer ${Style.category}`}>
                <div className=' bg-white flex items-center justify-center h-[50px] w-[50px] rounded-full mb-10'>
                  <img src={iconData} alt="" />
                </div>
                <div>
                  <h5 className='mb-2'>Data Science</h5>
                  <p>Donec bibendum, dui id ultrices molestie, neque.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mr-10 pb-16">

              <div className={`bg-[#F5F0EE] px-6 py-7 rounded-xl transition-all duration-300 category hover:bg-primary hover:text-white cursor-pointer ${Style.category}`}>
                <div className=' bg-white flex items-center justify-center h-[50px] w-[50px] rounded-full mb-10'>
                  <img src={iconArt} alt="" />
                </div>
                <div>
                  <h5 className='mb-2'>Digital Painting</h5>
                  <p>Donec bibendum, dui id ultrices molestie, neque.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mr-10 pb-16">
              <div className={`bg-[#F5F0EE] px-6 py-7 rounded-xl transition-all duration-300 category hover:bg-primary hover:text-white cursor-pointer ${Style.category}`}>
                <div className=' bg-white flex items-center justify-center h-[50px] w-[50px] rounded-full mb-10'>
                  <BiPen className='text-[#BAA299] text-[24px]' />
                </div>
                <div>
                  <h5 className='mb-2'>Graphics Design</h5>
                  <p>Donec bibendum, dui id ultrices molestie, neque.</p>
                </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default HomeCategory;