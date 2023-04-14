import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/grid';
const shape = 'https://i.ibb.co/b3T9Tgd/Vector.png';
const quote = 'https://i.ibb.co/RYYvDbt/ooui-quotes-ltr.png';
const avatar = 'https://i.ibb.co/YtgnKxG/Ellipse-21.png';
const avatar2 = 'https://i.ibb.co/857VgGg/Ellipse-21-1.png';
const avatar3 = 'https://i.ibb.co/7kwHrvc/Ellipse-21-2.png';
const Home3Testimonial = () => {
  return (
    <div className="bg-[#FBF4FF] mb-32 pb-12 pt-60 -mt-44">
      <div className="w-4/5 mx-auto">
        <div className="flex justify-between gap-5 flex-wrap">
          <div className="leading-[56px] w-[500px] relative">
            <h2 className="text-[#1F2148] font-[800] font-inter">What our</h2>
            <div className="flex items-center gap-2">
              <div className="relative z-10">
                <img src={shape} alt="" className="absolute -z-[10] bottom-0" />
                <h2 className="text-accent font-[800] font-inter z-[-10]">students</h2>
              </div>
              <h2 className="text-[#1F2148] font-[800] font-inter">saying</h2>
            </div>
            <img className="absolute right-0 top-1/2 translate-y-[-50%]" src="https://i.ibb.co/QmTsRMS/Vector-2.png" alt="" />
          </div>
          <div className="flex items-end">
            <button className="bg-[#1F2148] font-inter font-semibold text-white px-6 py-2 rounded-full">View all review</button>
          </div>
        </div>

        <div className="mt-16 home3Carousel">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            autoplay={true}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide className="mr-10 pb-16">
              <div className="bg-white px-6 py-6 rounded-xl">
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
            <SwiperSlide className="mr-10 pb-16">
              <div className="bg-white px-6 py-6 rounded-xl">
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
              <div className="bg-white px-6 py-6 rounded-xl">
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
              <div className="bg-white px-6 py-6 rounded-xl">
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
              <div className="bg-white px-6 py-6 rounded-xl">
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
            <SwiperSlide className="mr-10 pb-16">
              <div className="bg-white px-6 py-6 rounded-xl">
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
          </Swiper>



        </div>
      </div>
    </div>
  );
};

export default Home3Testimonial;