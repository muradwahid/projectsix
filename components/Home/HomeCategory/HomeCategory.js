"use client"
import ButtonTypo from '@/components/ButtonTypo/ButtonTypo';
import { BiPen } from "react-icons/bi";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
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
        <div className='grid xl:grid-cols-4 xl:gap-8 lg:grid-cols-4 lg:gap-5 md:grid-cols-2 gap-4 grid-cols-1 mt-6'>
          <div className={`bg-[#F5F0EE] px-6 py-7 rounded-xl transition-all duration-300 category hover:bg-primary hover:text-white cursor-pointer ${Style.category}`}>
            <div className=' bg-white flex items-center justify-center h-[50px] w-[50px] rounded-full mb-10'>
              <BiPen className='text-[#BAA299] text-[24px]' />
            </div>
            <div>
              <h5 className='mb-2'>Graphics Design</h5>
              <p>Donec bibendum, dui id ultrices molestie, neque.</p>
            </div>
          </div>
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
          <div className={`bg-[#F5F0EE] px-6 py-7 rounded-xl transition-all duration-300 category hover:bg-primary hover:text-white cursor-pointer ${Style.category}`}>
            <div className=' bg-white flex items-center justify-center h-[50px] w-[50px] rounded-full mb-10'>
              <img src={iconArt} alt="" />
            </div>
            <div>
              <h5 className='mb-2'>Digital Painting</h5>
              <p>Donec bibendum, dui id ultrices molestie, neque.</p>
            </div>
          </div>
          <div className={`bg-[#F5F0EE] px-6 py-7 rounded-xl transition-all duration-300 category hover:bg-primary hover:text-white cursor-pointer ${Style.category}`}>
            <div className=' bg-white flex items-center justify-center h-[50px] w-[50px] rounded-full mb-10'>
              <img src={iconData} alt="" />
            </div>
            <div>
              <h5 className='mb-2'>Data Science</h5>
              <p>Donec bibendum, dui id ultrices molestie, neque.</p>
            </div>
          </div>
        </div>
        <div className='flex gap-4 items-center justify-center mt-10'>
          <div className='bg-black h-[10px] w-[10px] rounded-full'>
            <span className='z-50'></span>
          </div>
          <div className='border border-black rounded-full p-[10px]'>
            <p className='bg-primary h-[7px] w-[7px] rounded-full'></p>
          </div>
          <div className='bg-black h-[10px] w-[10px] rounded-full'>
            <span className='z-50'></span>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default HomeCategory;