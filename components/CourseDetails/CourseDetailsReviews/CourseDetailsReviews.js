import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/grid';
const quote = 'https://i.ibb.co/RYYvDbt/ooui-quotes-ltr.png';
const avatar = 'https://i.ibb.co/YtgnKxG/Ellipse-21.png';
const avatar2 = 'https://i.ibb.co/857VgGg/Ellipse-21-1.png';
const avatar3 = 'https://i.ibb.co/7kwHrvc/Ellipse-21-2.png';
const CourseDetailsReviews = () => {
  return (
    <div className='mt-12'>
      <h4 className="font-bold underline">Reviews</h4>
      <div>
        <div className="mt-8 about-carousel">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 40
              },
              768: {
                slidesPerView: 2,
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
              <div className="bg-white px-6 py-6 rounded-xl aboutCarouselShadow">
                <p className="text-[#1F2148] font-inter italic font-medium leading-7">“To be able to take course at my own pace & rhythm has been an amazing experience. I can learn my schedule...”</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-3">
                    <div>
                      <img src={avatar2} alt="" />
                    </div>
                    <div>
                      <p className="text-[#1F2148] text-[20px] font-[700] leading-[30px]">Cody Fisher</p>
                      <p className="font-inter text-[#1f2148b3]">Freelance Designer</p>
                    </div>
                  </div>
                  <div>
                    <img src={quote} alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mr-10 pb-16">
              <div className="bg-white px-6 py-6 rounded-xl aboutCarouselShadow">
                <p className="text-[#1F2148] font-inter italic font-medium leading-7">“To be able to take course at my own pace & rhythm has been an amazing experience. I can learn my schedule...”</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-3">
                    <div>
                      <img src={avatar3} alt="" />
                    </div>
                    <div>
                      <p className="text-[#1F2148] text-[20px] font-[700] leading-[30px]">Arlene McCoy</p>
                      <p className="font-inter text-[#1f2148b3]">Freelance Designer</p>
                    </div>
                  </div>
                  <div>
                    <img src={quote} alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mr-10 pb-16">
              <div className="bg-white px-6 py-6 rounded-xl aboutCarouselShadow">
                <p className="text-[#1F2148] font-inter italic font-medium leading-7">“To be able to take course at my own pace & rhythm has been an amazing experience. I can learn my schedule...”</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-3">
                    <div>
                      <img src={avatar2} alt="" />
                    </div>
                    <div>
                      <p className="text-[#1F2148] text-[20px] font-[700] leading-[30px]">Cody Fisher</p>
                      <p className="font-inter text-[#1f2148b3]">Freelance Designer</p>
                    </div>
                  </div>
                  <div>
                    <img src={quote} alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mr-10 pb-16">
              <div className="bg-white px-6 py-6 rounded-xl aboutCarouselShadow">
                <p className="text-[#1F2148] font-inter italic font-medium leading-7">“To be able to take course at my own pace & rhythm has been an amazing experience. I can learn my schedule...”</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-3">
                    <div>
                      <img src={avatar} alt="" />
                    </div>
                    <div>
                      <p className="text-[#1F2148] text-[20px] font-[700] leading-[30px]">Jerome Bell</p>
                      <p className="font-inter text-[#1f2148b3]">Freelance Designer</p>
                    </div>
                  </div>
                  <div>
                    <img src={quote} alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>



        </div>
      </div>
    </div>
  );
};

export default CourseDetailsReviews;