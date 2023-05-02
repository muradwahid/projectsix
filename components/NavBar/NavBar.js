'use client';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineXMark } from "react-icons/hi2";
import { GoTriangleDown } from "react-icons/go";
import ButtonTypo from '../ButtonTypo/ButtonTypo';
import Link from 'next/link';
const NavBar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [home, setHome] = useState(false);
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
            <h5 className={`italic `}>Educarso<span className={`text-primary `}>.</span></h5>
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
              <li className='flex items-center gap-1 cursor-pointer'>Course <GoTriangleDown /></li>
              <div className='relative submenuParent'>
                <li className='flex items-center gap-1'>Blog <GoTriangleDown /></li>
                <div className='absolute bg-primary w-[150px] overflow-hidden grid top-12 left-[-30px] rounded-b-md submenu'>
                  <div className='grid'>
                    <Link className='text-white font-medium text-[14px] px-5 py-3 transition-all duration-200 hover:bg-white hover:text-primary' href='/blog'>Blog</Link>
                    <Link className='text-white font-medium text-[14px] px-5 py-3 transition-all duration-200 hover:bg-white hover:text-primary' href='/blogDetails'>Blog Details</Link>
                  </div>
                </div>
              </div>
              <li>Contacts</li>
            </ul>
          </div>
        </div>
        <div className='cursor-pointer' onClick={() => setToggle(!toggle)}>
          {toggle ? <GiHamburgerMenu className='text-[20px] lg:hidden block' /> : <HiOutlineXMark className='text-[20px] lg:hidden block' />}
        </div>
        <div className='flex items-center gap-4'>
          <AiOutlineShoppingCart className='text-[20px]' />
          <ButtonTypo bg={'bg-white'}>Log In</ButtonTypo>
          <ButtonTypo bg={'bg-black'} text={'text-white'}>Sign up</ButtonTypo>
        </div>
      </div>
      <div className={`bg-primary absolute h-[90vh] z-50 rounded-r-2xl ${!toggle ? 'block' : 'hidden'}`}>
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
            <li className='transition-all duration-300 hover:bg-white py-2 pl-8 cursor-pointer hover:text-[#0E0605] pr-20 text-white flex items-center gap-1 justify-between'>Pages <GoTriangleDown /></li>
            <li className='transition-all duration-300 hover:bg-white py-2 pl-8 cursor-pointer hover:text-[#0E0605] pr-20 text-white flex items-center gap-1 justify-between'>Course <GoTriangleDown /></li>
            <li className='transition-all duration-300 hover:bg-white py-2 pl-8 cursor-pointer hover:text-[#0E0605] pr-20 text-white flex items-center gap-1 justify-between'>Blog <GoTriangleDown /></li>
            <li className='transition-all duration-300 hover:bg-white py-2 pl-8 cursor-pointer hover:text-[#0E0605] pr-20 text-white'>Contacts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;