import React, { useEffect, useRef, useState } from 'react';
import { BsListUl } from 'react-icons/bs';
import { RiArrowDownSLine } from 'react-icons/ri';
import { TbCategory2 } from 'react-icons/tb';
import { BsBookmarkDash } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import ButtonTypo from "@/components/ButtonTypo/ButtonTypo";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiXMark } from 'react-icons/hi2';
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
const CoursesTwoShowResult = ({toggle,setToggle}) => {
  const [category, setCategory] = useState(false);
  const menuRef = useRef();
  useEffect(() => {
    let handler = e => {
      if (!menuRef.current.contains(e.target)) {
        setCategory(false);
      }
    }
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    }
  })
  return (
    <div className='md:w-[70%] w-full'>
      <div className="flex items-center justify-between gap-5 flex-wrap">
        
        <div className="flex gap-3 items-center">
          <div onClick={() => setToggle(!toggle)} className='text-[20px] bg-primary p-1 rounded-full cursor-pointer text-white md:hidden block'>
            {
              !toggle?<GiHamburgerMenu />:<HiXMark/>}
          </div>
          <p className="opacity-70 font-medium">Showing 1-9 of 16 results</p>
        </div>
        <div ref={menuRef} className="flex items-center gap-5">
          <p className="font-semibold opacity-70">Sort by:</p>
          <div className="bg-[#FAFAFA] px-4 py-2 rounded-md flex items-center gap-2 relative cursor-pointer">
            <p onClick={() => setCategory(!category)} className="opacity-60">Most popular</p>
            <RiArrowDownSLine className="text-[18px] opacity-60" />
            <div className={`absolute top-14 left-0 bg-white border w-[150px] px-4 py-3 rounded-md grid gap-3 z-10 ${category ? 'block' : 'hidden'}`}>
              <p className="font-medium text-[15px]">Most popular</p>
              <p className="font-medium text-[15px]">Most popular</p>
              <p className="font-medium text-[15px]">Most popular</p>
              <p className="font-medium text-[15px]">Most popular</p>
            </div>
          </div>
        </div>
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-6 mt-7'>
        <div className='popular-card relative courses-card'>
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
        <div className='popular-card relative courses-card'>
          <div className='bg-white relative rounded-[18px] overflow-hidden poular-main-card'>
            <div className=''>
              <img className='w-full' src={image2} alt="" />
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
                  <h5 className='pb-6'>Increasing engagement with Facebook</h5>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-3'>
                      <div>
                        <img src={imgAvatar2} alt="" />
                      </div>
                      <div>
                        <p className='font-bold'>Jerome Bell</p>
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
              <h5 className='pb-2'>Increasing engagement with Facebook</h5>
              <p className='mb-2'>Appropriately myocardinate 24/365 schemas vis-a-vis an expanded array of testing procedures. </p>
              <div className='flex justify-between items-center'>
                <div className='flex gap-3'>
                  <div>
                    <img src={imgAvatar2} alt="" />
                  </div>
                  <div>
                    <p className='font-bold'>Jerome Bell</p>
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
        <div className='popular-card relative courses-card'>
          <div className='bg-white relative rounded-[18px] overflow-hidden poular-main-card'>
            <div className=''>
              <img className='w-full' src={image3} alt="" />
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
                  <h5 className='pb-6'>Introduction to color theory
                    & basic layout.</h5>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-3'>
                      <div>
                        <img src={imgAvatar3} alt="" />
                      </div>
                      <div>
                        <p className='font-bold'>Courtney Henry</p>
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
              <h5 className='pb-2'>Introduction to color theory
                & basic layout.</h5>
              <p className='mb-2'>Appropriately myocardinate 24/365 schemas vis-a-vis an expanded array of testing procedures. </p>
              <div className='flex justify-between items-center'>
                <div className='flex gap-3'>
                  <div>
                    <img src={imgAvatar3} alt="" />
                  </div>
                  <div>
                    <p className='font-bold'>Courtney Henry</p>
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
        <div className='popular-card relative courses-card'>
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
        <div className='popular-card relative courses-card'>
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
        <div className='popular-card relative courses-card'>
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
      </div>
      <div className='flex gap-3 justify-center border-t-2 border-b-2 py-3 mt-8 mb-20'>
        <div className='flex items-center justify-center border h-10 w-10 rounded-full'>
          <IoIosArrowBack className='text-[20px]' />
        </div>
        <div className='flex items-center bg-primary border-primary justify-center text-white h-10 w-10 rounded-full'>
          <p>1</p>
        </div>
        <div className='flex items-center justify-center border h-10 w-10 rounded-full'>
          <p>2</p>
        </div>
        <div className='flex items-center justify-center border h-10 w-10 rounded-full'>
          <p>3</p>
        </div>
        <div className='flex items-center justify-center border h-10 w-10 rounded-full'>
          <IoIosArrowForward className='text-[20px]' />
        </div>
      </div>
    </div>
  );
};

export default CoursesTwoShowResult;