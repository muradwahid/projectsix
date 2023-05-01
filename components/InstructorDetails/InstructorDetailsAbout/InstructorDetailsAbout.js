import { AiOutlineStar } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { BsBookmarkDash } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/grid';
const bg = 'https://i.ibb.co/HCPttfL/BG-1.png';
const image = 'https://i.ibb.co/DLYppVT/Img.png';
const image2 = 'https://i.ibb.co/f8p0dJg/Img-1.png';
const image3 = 'https://i.ibb.co/yFnLhvf/Img-2.png';
const image4 = 'https://i.ibb.co/3MXcLbg/Img-3.png';
const image5 = 'https://i.ibb.co/GJ50B9w/Img-4.png';
const avater = 'https://i.ibb.co/Wnc03HY/frame.png';
const folder = 'https://i.ibb.co/YkkvvdR/folder-minus.png';
const imgAvatar = 'https://i.ibb.co/RS7Qgr4/Ellipse-29.png';
const imgAvatar2 = 'https://i.ibb.co/mBsSvTw/Ellipse-29-1.png';
const imgAvatar3 = 'https://i.ibb.co/rc0pnFq/Ellipse-29-2.png';
const imgAvatar4 = 'https://i.ibb.co/QrB5cMd/Ellipse-29-3.png';
const imgAvatar5 = 'https://i.ibb.co/tz70Lgm/Ellipse-29-4.png';
const quote = 'https://i.ibb.co/RYYvDbt/ooui-quotes-ltr.png';
const avatar = 'https://i.ibb.co/YtgnKxG/Ellipse-21.png';
const avatar2 = 'https://i.ibb.co/857VgGg/Ellipse-21-1.png';
const avatar3 = 'https://i.ibb.co/7kwHrvc/Ellipse-21-2.png';
const InstructorDetailsAbout = () => {
  return (
    <div className="md:w-[70%] w-full">
      <p className="text-[32px] font-bold tracking-[-1px] pb-6">About Me</p>
      <div className="border-t pt-8">
        <p className="text-[20px] font-medium leading-7 opacity-70">Hello there! My name is <span className="text-primary">Jay Phillips</span>. I am a web designer & developer, and I'm
          very passionate and dedicated to my work</p>
        <p className="text-[20px] font-medium leading-7 opacity-70 mt-4">With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success. Competently aggregate granular.</p>
      </div>
      <div className="flex items-center bg-[#F5F0EE] rounded-2xl px-16 py-12 gap-32 flex-wrap mt-12">
        <div className="flex gap-4 items-center">
          <div className="bg-[#B5E4CA] flex items-center justify-center h-[60px] w-[60px] rounded-full text-[24px]">
            <CiUser/>
          </div>
          <div>
            <p className="text-[20px] leading-8 font-bold tracking-[-1px]">50k</p>
            <p className="opacity-70">Total Students</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="bg-[#FFBC99] flex items-center justify-center h-[60px] w-[60px] rounded-full text-[24px]">
            <AiOutlineStar/>
          </div>
          <div>
            <p className="text-[20px] leading-8 font-bold tracking-[-1px]">100k</p>
            <p className="opacity-70">Total Reviews</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-[32px] leading-10 font-bold tracking-[-1px]">My Courses</p>
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
              <div className='popular-card relative instructorShadow rounded-3xl'>
                <div className='bg-white relative rounded-[18px] overflow-hidden poular-main-card'>
                  <div className=''>
                    <img className='w-full' src={image5} alt="" />
                    <div className='absolute top-5 left-5 bg-white text-[16px] p-2 rounded-full'>
                      <BsBookmarkDash />
                    </div>
                  </div>
                  <div>
                    <div className='px-6'>
                      <div className='flex items-center justify-between my-4'>
                        <p className='uppercase text-primary text-[14px] font-bold tracking-[-0.5px]'>english</p>
                        <div className='flex items-center gap-4'>
                          <div className='flex items-center'>
                            <div>
                              <img src={avater} alt="" />
                            </div>
                            <p className='text-[#0E0605] font-medium'>17</p>
                          </div>
                          <div className='flex items-center'>
                            <div>
                              <img src={folder} alt="" />
                            </div>
                            <p className='text-[#0E0605] font-medium'>10</p>
                          </div>
                        </div>
                      </div>
                      <div className='pb-8'>
                        <h5 className='pb-6'>Basic logo design color concept to final output</h5>
                        <div className='flex justify-between items-center'>
                          <div className='flex gap-3'>
                            <div>
                              <img src={imgAvatar5} alt="" />
                            </div>
                            <div>
                              <p className='font-bold'>Jacob Jones</p>
                              <div className='flex'>
                                <AiFillStar className='text-[#FFB60A]' />
                                <AiFillStar className='text-[#FFB60A]' />
                                <AiFillStar className='text-[#FFB60A]' />
                                <AiFillStar className='text-[#FFB60A]' />
                                <AiFillStar className='text-[#FFB60A]' />
                              </div>
                            </div>
                          </div>
                          <div>
                            <h5>$20</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-white px-6 pt-5 pb-3  rounded-2xl popular-card-hoverStyle absolute top-0 bottom-0'>
                  <div className='flex'>
                    <div className='bg-primary text-[16px] text-white p-2 rounded-full'>
                      <BsBookmarkDash />
                    </div>
                  </div>
                  <div className='flex items-center justify-between my-4'>
                    <p className='uppercase text-primary text-[14px] font-bold tracking-[-0.5px]'>english</p>
                    <div className='flex items-center gap-4'>
                      <div className='flex items-center'>
                        <div>
                          <img src={avater} alt="" />
                        </div>
                        <p className='text-[#0E0605] font-medium'>17</p>
                      </div>
                      <div className='flex items-center'>
                        <div>
                          <img src={folder} alt="" />
                        </div>
                        <p className='text-[#0E0605] font-medium'>10</p>
                      </div>
                    </div>
                  </div>

                  <div className='pb-3'>
                    <h5 className='pb-2'>Basic logo design color concept to final output</h5>
                    <p className='mb-2'>Appropriately myocardinate 24/365 schemas vis-a-vis an expanded array of testing procedures. </p>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-3'>
                        <div>
                          <img src={imgAvatar5} alt="" />
                        </div>
                        <div>
                          <p className='font-bold'>Jacob Jones</p>
                          <div className='flex'>
                            <AiFillStar className='text-[#FFB60A]' />
                            <AiFillStar className='text-[#FFB60A]' />
                            <AiFillStar className='text-[#FFB60A]' />
                            <AiFillStar className='text-[#FFB60A]' />
                            <AiFillStar className='text-[#FFB60A]' />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5>$20</h5>
                      </div>
                    </div>
                  </div>

                  <button className='bg-primary font-bold text-white w-full py-[10px] rounded-lg mt-4'>Enroll now</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mr-10 pb-16">
              <div className='popular-card relative instructorShadow rounded-3xl'>
                <div className='bg-white relative rounded-[18px] overflow-hidden poular-main-card'>
                  <div className=''>
                    <img className='w-full' src={image} alt="" />
                    <div className='absolute top-5 left-5 bg-white text-[16px] p-2 rounded-full'>
                      <BsBookmarkDash />
                    </div>
                  </div>
                  <div>
                    <div className='px-6'>
                      <div className='flex items-center justify-between my-4'>
                        <p className='uppercase text-primary text-[14px] font-bold tracking-[-0.5px]'>english</p>
                        <div className='flex items-center gap-4'>
                          <div className='flex items-center'>
                            <div>
                              <img src={avater} alt="" />
                            </div>
                            <p className='text-[#0E0605] font-medium'>17</p>
                          </div>
                          <div className='flex items-center'>
                            <div>
                              <img src={folder} alt="" />
                            </div>
                            <p className='text-[#0E0605] font-medium'>10</p>
                          </div>
                        </div>
                      </div>
                      <div className='pb-8'>
                        <h5 className='pb-6'>Basic fundamentals of interior & graphics design</h5>
                        <div className='flex justify-between items-center'>
                          <div className='flex gap-3'>
                            <div>
                              <img src={imgAvatar} alt="" />
                            </div>
                            <div>
                              <p className='font-bold'>Bessie Cooper</p>
                              <div className='flex'>
                                <AiFillStar className='text-[#FFB60A]' />
                                <AiFillStar className='text-[#FFB60A]' />
                                <AiFillStar className='text-[#FFB60A]' />
                                <AiFillStar className='text-[#FFB60A]' />
                                <AiFillStar className='text-[#FFB60A]' />
                              </div>
                            </div>
                          </div>
                          <div>
                            <h5>$20</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-white px-6 pt-5 pb-3 rounded-2xl popular-card-hoverStyle absolute top-0 bottom-0'>
                  <div className='flex'>
                    <div className='bg-primary text-[16px] text-white p-2 rounded-full'>
                      <BsBookmarkDash />
                    </div>
                  </div>
                  <div className='flex items-center justify-between my-4'>
                    <p className='uppercase text-primary text-[14px] font-bold tracking-[-0.5px]'>english</p>
                    <div className='flex items-center gap-4'>
                      <div className='flex items-center'>
                        <div>
                          <img src={avater} alt="" />
                        </div>
                        <p className='text-[#0E0605] font-medium'>17</p>
                      </div>
                      <div className='flex items-center'>
                        <div>
                          <img src={folder} alt="" />
                        </div>
                        <p className='text-[#0E0605] font-medium'>10</p>
                      </div>
                    </div>
                  </div>

                  <div className='pb-3'>
                    <h5 className='pb-2'>Basic fundamentals of interior & graphics design</h5>
                    <p className='mb-2'>Appropriately myocardinate 24/365 schemas vis-a-vis an expanded array of testing procedures. </p>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-3'>
                        <div>
                          <img src={imgAvatar} alt="" />
                        </div>
                        <div>
                          <p className='font-bold'>Bessie Cooper</p>
                          <div className='flex'>
                            <AiFillStar className='text-[#FFB60A]' />
                            <AiFillStar className='text-[#FFB60A]' />
                            <AiFillStar className='text-[#FFB60A]' />
                            <AiFillStar className='text-[#FFB60A]' />
                            <AiFillStar className='text-[#FFB60A]' />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5>$20</h5>
                      </div>
                    </div>
                  </div>

                  <button className='bg-primary font-bold text-white w-full py-[10px] rounded-lg mt-4'>Enroll now</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mr-10 pb-16">
              <div className='popular-card relative instructorShadow rounded-3xl'>
                <div className='bg-white relative rounded-[18px] overflow-hidden poular-main-card'>
                  <div className=''>
                    <img className='w-full' src={image4} alt="" />
                    <div className='absolute top-5 left-5 bg-white text-[16px] p-2 rounded-full'>
                      <BsBookmarkDash />
                    </div>
                  </div>
                  <div>
                    <div className='px-6'>
                      <div className='flex items-center justify-between my-4'>
                        <p className='uppercase text-primary text-[14px] font-bold tracking-[-0.5px]'>english</p>
                        <div className='flex items-center gap-4'>
                          <div className='flex items-center'>
                            <div>
                              <img src={avater} alt="" />
                            </div>
                            <p className='text-[#0E0605] font-medium'>17</p>
                          </div>
                          <div className='flex items-center'>
                            <div>
                              <img src={folder} alt="" />
                            </div>
                            <p className='text-[#0E0605] font-medium'>10</p>
                          </div>
                        </div>
                      </div>
                      <div className='pb-8'>
                        <h5 className='pb-6'>Financial security management
                          for all</h5>
                        <div className='flex justify-between items-center'>
                          <div className='flex gap-3'>
                            <div>
                              <img src={imgAvatar4} alt="" />
                            </div>
                            <div>
                              <p className='font-bold'>Esther Howard</p>
                              <div className='flex'>
                                <AiFillStar className='text-[#FFB60A]' />
                                <AiFillStar className='text-[#FFB60A]' />
                                <AiFillStar className='text-[#FFB60A]' />
                                <AiFillStar className='text-[#FFB60A]' />
                                <AiFillStar className='text-[#FFB60A]' />
                              </div>
                            </div>
                          </div>
                          <div>
                            <h5>$20</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-white px-6 pt-5 pb-3  rounded-2xl popular-card-hoverStyle absolute top-0 bottom-0'>
                  <div className='flex'>
                    <div className='bg-primary text-[16px] text-white p-2 rounded-full'>
                      <BsBookmarkDash />
                    </div>
                  </div>
                  <div className='flex items-center justify-between my-4'>
                    <p className='uppercase text-primary text-[14px] font-bold tracking-[-0.5px]'>english</p>
                    <div className='flex items-center gap-4'>
                      <div className='flex items-center'>
                        <div>
                          <img src={avater} alt="" />
                        </div>
                        <p className='text-[#0E0605] font-medium'>17</p>
                      </div>
                      <div className='flex items-center'>
                        <div>
                          <img src={folder} alt="" />
                        </div>
                        <p className='text-[#0E0605] font-medium'>10</p>
                      </div>
                    </div>
                  </div>

                  <div className='pb-3'>
                    <h5 className='pb-2'>Financial security management
                      for all</h5>
                    <p className='mb-2'>Appropriately myocardinate 24/365 schemas vis-a-vis an expanded array of testing procedures. </p>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-3'>
                        <div>
                          <img src={imgAvatar4} alt="" />
                        </div>
                        <div>
                          <p className='font-bold'>Bessie Cooper</p>
                          <div className='flex'>
                            <AiFillStar className='text-[#FFB60A]' />
                            <AiFillStar className='text-[#FFB60A]' />
                            <AiFillStar className='text-[#FFB60A]' />
                            <AiFillStar className='text-[#FFB60A]' />
                            <AiFillStar className='text-[#FFB60A]' />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5>$20</h5>
                      </div>
                    </div>
                  </div>

                  <button className='bg-primary font-bold text-white w-full py-[10px] rounded-lg mt-4'>Enroll now</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mr-10 pb-16">
              <div className='popular-card relative instructorShadow rounded-3xl'>
                <div className='bg-white relative rounded-[18px] overflow-hidden poular-main-card'>
                  <div className=''>
                    <img className='w-full' src={image} alt="" />
                    <div className='absolute top-5 left-5 bg-white text-[16px] p-2 rounded-full'>
                      <BsBookmarkDash />
                    </div>
                  </div>
                  <div>
                    <div className='px-6'>
                      <div className='flex items-center justify-between my-4'>
                        <p className='uppercase text-primary text-[14px] font-bold tracking-[-0.5px]'>english</p>
                        <div className='flex items-center gap-4'>
                          <div className='flex items-center'>
                            <div>
                              <img src={avater} alt="" />
                            </div>
                            <p className='text-[#0E0605] font-medium'>17</p>
                          </div>
                          <div className='flex items-center'>
                            <div>
                              <img src={folder} alt="" />
                            </div>
                            <p className='text-[#0E0605] font-medium'>10</p>
                          </div>
                        </div>
                      </div>
                      <div className='pb-8'>
                        <h5 className='pb-6'>Professional ceramic molding for beginners</h5>
                        <div className='flex justify-between items-center'>
                          <div className='flex gap-3'>
                            <div>
                              <img src={imgAvatar} alt="" />
                            </div>
                            <div>
                              <p className='font-bold'>Bessie Cooper</p>
                              <div className='flex'>
                                <AiFillStar className='text-[#FFB60A]' />
                                <AiFillStar className='text-[#FFB60A]' />
                                <AiFillStar className='text-[#FFB60A]' />
                                <AiFillStar className='text-[#FFB60A]' />
                                <AiFillStar className='text-[#FFB60A]' />
                              </div>
                            </div>
                          </div>
                          <div>
                            <h5>$20</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-white px-6 pt-5 pb-3  rounded-2xl popular-card-hoverStyle absolute top-0 bottom-0'>
                  <div className='flex'>
                    <div className='bg-primary text-[16px] text-white p-2 rounded-full'>
                      <BsBookmarkDash />
                    </div>
                  </div>
                  <div className='flex items-center justify-between my-4'>
                    <p className='uppercase text-primary text-[14px] font-bold tracking-[-0.5px]'>english</p>
                    <div className='flex items-center gap-4'>
                      <div className='flex items-center'>
                        <div>
                          <img src={avater} alt="" />
                        </div>
                        <p className='text-[#0E0605] font-medium'>17</p>
                      </div>
                      <div className='flex items-center'>
                        <div>
                          <img src={folder} alt="" />
                        </div>
                        <p className='text-[#0E0605] font-medium'>10</p>
                      </div>
                    </div>
                  </div>

                  <div className='pb-3'>
                    <h5 className='pb-2'>Professional ceramic molding for beginners</h5>
                    <p className='mb-2'>Appropriately myocardinate 24/365 schemas vis-a-vis an expanded array of testing procedures. </p>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-3'>
                        <div>
                          <img src={imgAvatar} alt="" />
                        </div>
                        <div>
                          <p className='font-bold'>Bessie Cooper</p>
                          <div className='flex'>
                            <AiFillStar className='text-[#FFB60A]' />
                            <AiFillStar className='text-[#FFB60A]' />
                            <AiFillStar className='text-[#FFB60A]' />
                            <AiFillStar className='text-[#FFB60A]' />
                            <AiFillStar className='text-[#FFB60A]' />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5>$20</h5>
                      </div>
                    </div>
                  </div>

                  <button className='bg-primary font-bold text-white w-full py-[10px] rounded-lg mt-4'>Enroll now</button>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>



        </div>
      </div>
      <div className="mt-8">
        <p className="text-[32px] leading-10 font-bold tracking-[-1px]">Happy learners says</p>
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
          </Swiper>



        </div>
      </div>
    </div>

  );
};

export default InstructorDetailsAbout;