import Link from "next/link";
import { useState } from "react";
import { BiRectangle } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";

const CourseTwoSideBarRes = () => {
  const [category, setCategory] = useState(false);
  const [instructor, setInstructor] = useState(false);
  const [level, setLevel] = useState(false);
  const [language, setLanguage] = useState(false);
  return (
    <div className="w-[280px]">
      <div className="bg-[#FAFAFA] px-5 py-7 rounded-2xl">
        <div onClick={() => setCategory(!category)} className="flex items-center justify-between border-b pb-4 cursor-pointer">
          <p className="text-[20px] font-bold tracking-[-0.02em]">Categories</p>
          <IoIosArrowUp className={`text-[20px] transition-all duration-300 ${category && 'rotate-[180deg]'}`} />
        </div>
        <div className={`mt-4 grid gap-4 ${!category ? 'block' : 'hidden'}`}>
          <div className="opacity-70 flex items-center gap-3">
            <BiRectangle className="text-[18px]" />
            <p>Art (10)</p>
          </div>
          <div className="opacity-70 flex items-center gap-3">
            <BiRectangle className="text-[18px]" />
            <p>Development (15)</p>
          </div>
          <div className="opacity-70 flex items-center gap-3">
            <BiRectangle className="text-[18px]" />
            <p>Human Research (08)</p>
          </div>
          <div className="opacity-70 flex items-center gap-3">
            <BiRectangle className="text-[18px]" />
            <p>Business (3)</p>
          </div>
          <div className="opacity-70 flex items-center gap-3">
            <BiRectangle className="text-[18px]" />
            <p>Academic (12)</p>
          </div>
          <div className="opacity-70 flex items-center gap-3">
            <BiRectangle className="text-[18px]" />
            <p>Marketing</p>
          </div>
          <Link href='/' className="text-primary underline font-semibold tracking-[-1px]">Show more</Link>
        </div>
      </div>
      <div className="bg-[#FAFAFA] px-5 py-7 rounded-2xl my-6">
        <div className="flex items-center justify-between border-b pb-4 cursor-pointer">
          <p className="text-[20px] font-bold tracking-[-0.02em]">Filter by price</p>
        </div>
        <div className={`mt-4 grid gap-4`}>
          <div className="">
            <div className="radio-slider">
              <div className="radio-slider-child"></div>
            </div>
            <div className="opacity-70 flex mt-1 justify-between items-center">
              <p>$0.00</p>
              <p>$150.00</p>
            </div>
          </div>
          <Link href='/' className="text-primary underline font-semibold tracking-[-1px]">Apply</Link>
        </div>
      </div>
      <div className="bg-[#FAFAFA] px-5 py-7 rounded-2xl">
        <div onClick={() => setInstructor(!instructor)} className="flex items-center justify-between border-b pb-4 cursor-pointer">
          <p className="text-[20px] font-bold tracking-[-0.02em]">Instructor</p>
          <IoIosArrowUp className={`text-[20px] transition-all duration-300 ${instructor && 'rotate-[180deg]'}`} />
        </div>
        <div className={`mt-4 grid gap-4 ${!instructor ? 'block' : 'hidden'}`}>
          <div className="opacity-70 flex items-center gap-3">
            <BiRectangle className="text-[18px]" />
            <p>Jane Seymour (10)</p>
          </div>
          <div className="opacity-70 flex items-center gap-3">
            <BiRectangle className="text-[18px]" />
            <p>Saso White (15)</p>
          </div>
          <div className="opacity-70 flex items-center gap-3">
            <BiRectangle className="text-[18px]" />
            <p>John Smith (08)</p>
          </div>
          <div className="opacity-70 flex items-center gap-3">
            <BiRectangle className="text-[18px]" />
            <p>Edward Nathan (3)</p>
          </div>
          <Link href='/' className="text-primary underline font-semibold tracking-[-1px]">Show more</Link>
        </div>
      </div>

      <div className="bg-[#FAFAFA] px-5 py-7 rounded-2xl my-6">
        <div onClick={() => setLevel(!level)} className="flex items-center justify-between border-b pb-4 cursor-pointer">
          <p className="text-[20px] font-bold tracking-[-0.02em]">Level</p>
          <IoIosArrowUp className={`text-[20px] transition-all duration-300 ${level && 'rotate-[180deg]'}`} />
        </div>
        <div className={`mt-4 grid gap-4 ${!level ? 'block' : 'hidden'}`}>
          <div className="opacity-70 flex items-center gap-3">
            <BiRectangle className="text-[18px]" />
            <p>Beginner (10)</p>
          </div>
          <div className="opacity-70 flex items-center gap-3">
            <BiRectangle className="text-[18px]" />
            <p>Intermediate (15)</p>
          </div>
          <div className="opacity-70 flex items-center gap-3">
            <BiRectangle className="text-[18px]" />
            <p>Advanced (08)</p>
          </div>
          <Link href='/' className="text-primary underline font-semibold tracking-[-1px]">Show more</Link>
        </div>
      </div>
      <div className="bg-[#FAFAFA] px-5 py-7 rounded-2xl">
        <div onClick={() => setLanguage(!language)} className="flex items-center justify-between border-b pb-4 cursor-pointer">
          <p className="text-[20px] font-bold tracking-[-0.02em]">Language</p>
          <IoIosArrowUp className={`text-[20px] transition-all duration-300 ${language && 'rotate-[180deg]'}`} />
        </div>
        <div className={`mt-4 grid gap-4 ${!language ? 'block' : 'hidden'}`}>
          <div className="opacity-70 flex items-center gap-3">
            <BiRectangle className="text-[18px]" />
            <p>English (10)</p>
          </div>
          <div className="opacity-70 flex items-center gap-3">
            <BiRectangle className="text-[18px]" />
            <p>French (15)</p>
          </div>
          <div className="opacity-70 flex items-center gap-3">
            <BiRectangle className="text-[18px]" />
            <p>German (08)</p>
          </div>
          <Link href='/' className="text-primary underline font-semibold tracking-[-1px]">Show more</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseTwoSideBarRes;