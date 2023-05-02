import Head from "next/head";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/grid';
import { AiFillStar } from "react-icons/ai";
const bg = 'https://i.ibb.co/dW7bDYr/BG-3.png'
const icon = 'https://i.ibb.co/85h6cB6/Img-6.png';
const icon2 = 'https://i.ibb.co/XjXKSqH/Img-7.png';
const icon3 = 'https://i.ibb.co/3MdsBF7/Img-8.png';
const icon4 = 'https://i.ibb.co/s9PpFdq/Img-9.png';
const Home2Testimonial = () => {

  return (
    <div className="py-32 relative home2Testimonial" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute right-2 bottom-16">
        <img src="https://i.ibb.co/V3Fr0xj/Element-1.png"  alt=""></img>
      </div>
      <div>
        <img className="absolute left-16 top-[8%]" src="https://i.ibb.co/V3Fr0xj/Element-1.png"  alt=""></img>
      </div>
      <div className="mb-8">
        <p className="font-inter font-semibold text-primary trackint-[0.16em] uppercase text-center">Testimonials</p>
        <h2 className="font-outfit font-[700] text-center my-3">Our students says about us</h2>
      </div>
      
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        // spaceBetween={30}
        // slidesPerView={3.5}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 50
          }
        }}
        // direction="horizontal"
        
        reverseDirection= {true}
        autoplay={{
          delay:2000
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className="mr-10 pb-16"><div className="bg-white px-10 py-8">
          <div className="flex items-center gap-4">
            <div>
              <img src={icon} alt="" />
            </div>
            <div>
              <p className="text-[20px] font-semibold font-outfit">Eleanor Pena</p>
              <p className="text-primary text-[16px] font-medium font-inter">Medical Assistant</p>
            </div>
          </div>
          <p className="font-inter font-medium leading-6 mt-4">You might be raised on a farm. Sometimes language are difficult and difficult to find the right the adjective to go with noun.</p>
          <div className="flex gap-1 mt-3">
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="mr-10 pb-16"><div className="bg-white px-10 py-8">
          <div className="flex items-center gap-4">
            <div>
              <img src={icon2} alt="" />
            </div>
            <div>
              <p className="text-[20px] font-semibold font-outfit">Marvin McKinney</p>
              <p className="text-primary text-[16px] font-medium font-inter">Dog Trainer</p>
            </div>
          </div>
          <p className="font-inter font-medium leading-6 mt-4">You might be raised on a farm. Sometimes language are difficult and difficult to find the right the adjective to go with noun.</p>
          <div className="flex gap-1 mt-3">
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="mr-10 pb-16"><div className="bg-white px-10 py-8">
          <div className="flex items-center gap-4">
            <div>
              <img src={icon3} alt="" />
            </div>
            <div>
              <p className="text-[20px] font-semibold font-outfit">Eleanor Pena</p>
              <p className="text-primary text-[16px] font-medium font-inter">Medical Assistant</p>
            </div>
          </div>
          <p className="font-inter font-medium leading-6 mt-4">You might be raised on a farm. Sometimes language are difficult and difficult to find the right the adjective to go with noun.</p>
          <div className="flex gap-1 mt-3">
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="mr-10 pb-16"><div className="bg-white px-10 py-8">
          <div className="flex items-center gap-4">
            <div>
              <img src={icon4} alt="" />
            </div>
            <div>
              <p className="text-[20px] font-semibold font-outfit">Brooklyn Simmons</p>
              <p className="text-primary text-[16px] font-medium font-inter">Marketing Coordinator</p>
            </div>
          </div>
          <p className="font-inter font-medium leading-6 mt-4">You might be raised on a farm. Sometimes language are difficult and difficult to find the right the adjective to go with noun.</p>
          <div className="flex gap-1 mt-3">
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="mr-10 pb-16"><div className="bg-white px-10 py-8">
          <div className="flex items-center gap-4">
            <div>
              <img src={icon3} alt="" />
            </div>
            <div>
              <p className="text-[20px] font-semibold font-outfit">Eleanor Pena</p>
              <p className="text-primary text-[16px] font-medium font-inter">Medical Assistant</p>
            </div>
          </div>
          <p className="font-inter font-medium leading-6 mt-4">You might be raised on a farm. Sometimes language are difficult and difficult to find the right the adjective to go with noun.</p>
          <div className="flex gap-1 mt-3">
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="mr-10 pb-16"><div className="bg-white px-10 py-8">
          <div className="flex items-center gap-4">
            <div>
              <img src={icon} alt="" />
            </div>
            <div>
              <p className="text-[20px] font-semibold font-outfit">Eleanor Pena</p>
              <p className="text-primary text-[16px] font-medium font-inter">Medical Assistant</p>
            </div>
          </div>
          <p className="font-inter font-medium leading-6 mt-4">You might be raised on a farm. Sometimes language are difficult and difficult to find the right the adjective to go with noun.</p>
          <div className="flex gap-1 mt-3">
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        // spaceBetween={30}
        // slidesPerView={3.5}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 50
          }
        }}
        autoplay={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className="mr-10 pb-16"><div className="bg-white px-10 py-8">
          <div className="flex items-center gap-4">
            <div>
              <img src={icon} alt="" />
            </div>
            <div>
              <p className="text-[20px] font-semibold font-outfit">Eleanor Pena</p>
              <p className="text-primary text-[16px] font-medium font-inter">Medical Assistant</p>
            </div>
          </div>
          <p className="font-inter font-medium leading-6 mt-4">You might be raised on a farm. Sometimes language are difficult and difficult to find the right the adjective to go with noun.</p>
          <div className="flex gap-1 mt-3">
            <AiFillStar className="text-[#FFC947]"/>
            <AiFillStar className="text-[#FFC947]"/>
            <AiFillStar className="text-[#FFC947]"/>
            <AiFillStar className="text-[#FFC947]"/>
            <AiFillStar className="text-[#FFC947]"/>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="mr-10 pb-16"><div className="bg-white px-10 py-8">
          <div className="flex items-center gap-4">
            <div>
              <img src={icon2} alt="" />
            </div>
            <div>
              <p className="text-[20px] font-semibold font-outfit">Marvin McKinney</p>
              <p className="text-primary text-[16px] font-medium font-inter">Dog Trainer</p>
            </div>
          </div>
          <p className="font-inter font-medium leading-6 mt-4">You might be raised on a farm. Sometimes language are difficult and difficult to find the right the adjective to go with noun.</p>
          <div className="flex gap-1 mt-3">
            <AiFillStar className="text-[#FFC947]"/>
            <AiFillStar className="text-[#FFC947]"/>
            <AiFillStar className="text-[#FFC947]"/>
            <AiFillStar className="text-[#FFC947]"/>
            <AiFillStar className="text-[#FFC947]"/>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="mr-10 pb-16"><div className="bg-white px-10 py-8">
          <div className="flex items-center gap-4">
            <div>
              <img src={icon3} alt="" />
            </div>
            <div>
              <p className="text-[20px] font-semibold font-outfit">Eleanor Pena</p>
              <p className="text-primary text-[16px] font-medium font-inter">Medical Assistant</p>
            </div>
          </div>
          <p className="font-inter font-medium leading-6 mt-4">You might be raised on a farm. Sometimes language are difficult and difficult to find the right the adjective to go with noun.</p>
          <div className="flex gap-1 mt-3">
            <AiFillStar className="text-[#FFC947]"/>
            <AiFillStar className="text-[#FFC947]"/>
            <AiFillStar className="text-[#FFC947]"/>
            <AiFillStar className="text-[#FFC947]"/>
            <AiFillStar className="text-[#FFC947]"/>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="mr-10 pb-16"><div className="bg-white px-10 py-8">
          <div className="flex items-center gap-4">
            <div>
              <img src={icon4} alt="" />
            </div>
            <div>
              <p className="text-[20px] font-semibold font-outfit">Brooklyn Simmons</p>
              <p className="text-primary text-[16px] font-medium font-inter">Marketing Coordinator</p>
            </div>
          </div>
          <p className="font-inter font-medium leading-6 mt-4">You might be raised on a farm. Sometimes language are difficult and difficult to find the right the adjective to go with noun.</p>
          <div className="flex gap-1 mt-3">
            <AiFillStar className="text-[#FFC947]"/>
            <AiFillStar className="text-[#FFC947]"/>
            <AiFillStar className="text-[#FFC947]"/>
            <AiFillStar className="text-[#FFC947]"/>
            <AiFillStar className="text-[#FFC947]"/>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="mr-10 pb-16"><div className="bg-white px-10 py-8">
          <div className="flex items-center gap-4">
            <div>
              <img src={icon3} alt="" />
            </div>
            <div>
              <p className="text-[20px] font-semibold font-outfit">Eleanor Pena</p>
              <p className="text-primary text-[16px] font-medium font-inter">Medical Assistant</p>
            </div>
          </div>
          <p className="font-inter font-medium leading-6 mt-4">You might be raised on a farm. Sometimes language are difficult and difficult to find the right the adjective to go with noun.</p>
          <div className="flex gap-1 mt-3">
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="mr-10 pb-16"><div className="bg-white px-10 py-8">
          <div className="flex items-center gap-4">
            <div>
              <img src={icon} alt="" />
            </div>
            <div>
              <p className="text-[20px] font-semibold font-outfit">Eleanor Pena</p>
              <p className="text-primary text-[16px] font-medium font-inter">Medical Assistant</p>
            </div>
          </div>
          <p className="font-inter font-medium leading-6 mt-4">You might be raised on a farm. Sometimes language are difficult and difficult to find the right the adjective to go with noun.</p>
          <div className="flex gap-1 mt-3">
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
            <AiFillStar className="text-[#FFC947]" />
          </div>
        </div>
        </SwiperSlide>
      </Swiper>

</div>
  );
};

export default Home2Testimonial;