'use client';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineXMark } from "react-icons/hi2";
import { GoTriangleDown } from "react-icons/go";
import Link from 'next/link';
const Home2NavBar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [home, setHome] = useState(false);
  const [pages, setPages] = useState(false);
  const [course, setCourse] = useState(false);
  const [blog, setBlog] = useState(false);
  const menuRef = useRef();
  useEffect(() => {
    let handler = e => {
      if (!menuRef.current.contains(e.target)) {
        setToggle(true);
      }
    }
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    }
  })


  const stickyNav = () => {
    if (window.scrollY >= 90) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
  })


  return (
    <div ref={menuRef} className={`fixed w-full z-50 transition-all duration-300 ${scrollNav ? 'bg-[#ffffffb0] backdrop-blur-[5px] navBarShadow py-4' : 'bg-transparent py-7'}`}>
      <div className='w-[80%] mx-auto flex items-center justify-between'>
        <div className='lg:block hidden'>
          <div className='flex items-center gap-6'>
            <h5 className={`italic `}><Link href='/'>Educarso</Link><span className={`text-primary `}>.</span></h5>
            <ul className='flex items-center gap-6 font-[500]'>
              <div className='relative submenuParent'>
                <Link href='/' className='flex items-center gap-1'>Home <GoTriangleDown /></Link>
                <div className='absolute bg-primary w-[130px] overflow-hidden grid top-12 left-[-30px] rounded-b-md submenu'>
                  <div className='grid'>
                    <Link className='text-white font-medium text-[14px] px-5 py-3 transition-all duration-200 hover:bg-white hover:text-primary' href='/'>Home-1</Link>
                    <Link className='text-white font-medium text-[14px] px-5 py-3 transition-all duration-200 hover:bg-white hover:text-primary' href='/home2'>Home-2</Link>
                    <Link className='text-white font-medium text-[14px] px-5 py-3 transition-all duration-200 hover:bg-white hover:text-primary' href='/home3'>Home-3</Link>
                  </div>
                </div>
              </div>
              <div className='relative submenuParent'>
                <li className='flex items-center gap-1 cursor-pointer'>Pages <GoTriangleDown /></li>
                <div className='absolute bg-primary w-[150px] overflow-hidden grid top-12 left-[-30px] rounded-b-md submenu'>
                  <div className='grid'>
                    <Link className='text-white font-medium text-[14px] px-5 py-3 transition-all duration-200 hover:bg-white hover:text-primary' href='/about'>About</Link>
                    <Link className='text-white font-medium text-[14px] px-5 py-3 transition-all duration-200 hover:bg-white hover:text-primary' href='/instructor'>Instructor</Link>
                    <Link className='text-white font-medium text-[14px] px-5 py-3 transition-all duration-200 hover:bg-white hover:text-primary' href='/instructorDetails'>Instructor Details</Link>
                  </div>
                </div>
              </div>
              <div className='relative submenuParent'>
                <li className='flex items-center gap-1 cursor-pointer'>Course <GoTriangleDown /></li>
                <div className='absolute bg-primary w-[150px] overflow-hidden grid top-12 left-[-30px] rounded-b-md submenu'>
                  <div className='grid'>
                    <Link className='text-white font-medium text-[14px] px-5 py-3 transition-all duration-200 hover:bg-white hover:text-primary' href='/coursesOne'>Course 1</Link>
                    <Link className='text-white font-medium text-[14px] px-5 py-3 transition-all duration-200 hover:bg-white hover:text-primary' href='/coursesTwo'>Course 2</Link>
                    <Link className='text-white font-medium text-[14px] px-5 py-3 transition-all duration-200 hover:bg-white hover:text-primary' href='/courseDetails'>Course Details</Link>
                  </div>
                </div>
              </div>
              <div className='relative submenuParent'>
                <li className='flex items-center gap-1'>Blog <GoTriangleDown /></li>
                <div className='absolute bg-primary w-[150px] overflow-hidden grid top-12 left-[-30px] rounded-b-md submenu'>
                  <div className='grid'>
                    <Link className='text-white font-medium text-[14px] px-5 py-3 transition-all duration-200 hover:bg-white hover:text-primary' href='/blog'>Blog</Link>
                    <Link className='text-white font-medium text-[14px] px-5 py-3 transition-all duration-200 hover:bg-white hover:text-primary' href='/blogDetails'>Blog Details</Link>
                  </div>
                </div>
              </div>
              <li><Link href='/contact'>Contacts</Link></li>
            </ul>
          </div>
        </div>
        <div className='cursor-pointer' onClick={() => setToggle(!toggle)}>
          {toggle ? <GiHamburgerMenu className='text-[20px] lg:hidden block' /> : <HiOutlineXMark className='text-[20px] lg:hidden block' />}
        </div>
        <div className='flex items-center gap-4'>
          <AiOutlineShoppingCart className='text-[20px]' />
          <button className='bg-white py-[10px] px-8 rounded-lg home3NavButton font-inter font-semibold'>Log in</button>
          <button className='bg-primary text-white py-[10px] px-8 rounded-lg home3NavButton font-inter font-semibold '>Sign up</button>
        </div>
      </div>
      <div className={`bg-primary absolute overflow-x-scroll h-[90vh] z-50 rounded-r-2xl ${!toggle ? 'block' : 'hidden'}`}>
        <div>
          <h5 className='italic pl-8 py-6'>Educarso<span className={`text-primary ${scrollNav && 'text-white'}`}>.</span></h5>
          <ul className='grid font-[500]'>
            <li onClick={() => setHome(!home)} className='transition-all duration-300 hover:bg-white py-2 pl-8 cursor-pointer hover:text-[#0E0605] pr-20 text-white flex items-center gap-1 justify-between'>Home <GoTriangleDown /></li>
            {
              home && <div className='grid text-white'>
                <Link className='py-2 pl-12 hover:bg-white hover:text-primary' href='/'>Home-1</Link>
                <Link className='py-2 pl-12 hover:bg-white hover:text-primary' href='/home2'>Home-2</Link>
                <Link className='py-2 pl-12 hover:bg-white hover:text-primary' href='/home3'>Home-3</Link>
              </div>
            }
            <li onClick={() => setPages(!pages)} className='transition-all duration-300 hover:bg-white py-2 pl-8 cursor-pointer hover:text-[#0E0605] pr-20 text-white flex items-center gap-1 justify-between'>Pages <GoTriangleDown /></li>
            {
              pages && <div className='grid text-white'>
                <Link className='py-2 pl-12 hover:bg-white hover:text-primary' href='/about'>About</Link>
                <Link className='py-2 pl-12 hover:bg-white hover:text-primary' href='/instructor'>Instructor</Link>
                <Link className='py-2 pl-12 hover:bg-white hover:text-primary' href='/instructorDetails'>Instructor Details</Link>
              </div>
            }
            <li onClick={() => setCourse(!course)} className='transition-all duration-300 hover:bg-white py-2 pl-8 cursor-pointer hover:text-[#0E0605] pr-20 text-white flex items-center gap-1 justify-between'>Course <GoTriangleDown /></li>
            {
              course && <div className='grid text-white'>
                <Link className='py-2 pl-12 hover:bg-white hover:text-primary' href='/coursesOne'>Course 1</Link>
                <Link className='py-2 pl-12 hover:bg-white hover:text-primary' href='/coursesTwo'>Course 2</Link>
                <Link className='py-2 pl-12 hover:bg-white hover:text-primary' href='/coursesDetails'>Course Details</Link>
              </div>
            }
            <li onClick={() => setBlog(!blog)} className='transition-all duration-300 hover:bg-white py-2 pl-8 cursor-pointer hover:text-[#0E0605] pr-20 text-white flex items-center gap-1 justify-between'>Blog <GoTriangleDown /></li>
            {
              blog && <div className='grid text-white'>
                <Link className='py-2 pl-12 hover:bg-white hover:text-primary' href='/blog'>Blog</Link>
                <Link className='py-2 pl-12 hover:bg-white hover:text-primary' href='/blogDetails'>Blog Details</Link>
              </div>
            }
            <li className='transition-all duration-300 hover:bg-white py-2 pl-8 cursor-pointer hover:text-[#0E0605] pr-20 text-white'>Contacts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home2NavBar;