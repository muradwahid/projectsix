import { useState } from "react";
import { AiFillCheckCircle, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import CourseDetailsFeedBack from "../CourseDetailsFeedBack/CourseDetailsFeedBack";
import CourseDetailsLeaveThought from "../CourseDetailsLeaveThought/CourseDetailsLeaveThought";
import CourseDetailsReviews from "../CourseDetailsReviews/CourseDetailsReviews";
const task = 'https://i.ibb.co/s53kwbC/task-square.png';
const image = 'https://i.ibb.co/d5Z3m5q/Img-15.png';
const CourseDetailsOverview = () => {
  const [lessonOne, setLessonOne] = useState(false)
  const [lessonTwo, setLessonTwo] = useState(false)
  const [lessonThree, setLessonThree] = useState(false)
  const [lessonFour, setLessonFour] = useState(false)
  const [lessonFive, setLessonFive] = useState(false)
  return (
    <div className="w-4/5 mx-auto my-20">
      <div className="courseDetailsOverview">
        <div className="md:block hidden">
          <div className="flex w-full items-center justify-between h-[45px] border-b-[3px]">
            <p className="font-bold cursor-pointer  border-b-[3px] px-10 border-primary pb-5 text-primary">Overview</p>
            <p className='font-bold cursor-pointer  px-10 pb-5'>Content</p>
            <p className='font-bold cursor-pointer  px-10 pb-5'>Instructor</p>
            <p className='font-bold cursor-pointer  px-10 pb-5'>Reviews</p>
          </div>
        </div>
        <div className="md:hidden block">
          <select name="" id="" className="bg-slate-200 px-4 py-2 rounded-md">
            <option value="" defaultChecked>Overview</option>
            <option value="" defaultChecked>Content</option>
            <option value="" defaultChecked>Instructor</option>
            <option value="" defaultChecked>Reviews</option>
          </select>
        </div>
        <div className="mt-8">
          <h4 className="font-bold underline">Course Description</h4>
          <p className="opacity-70 leading-8 mt-5">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>

        </div>
        <div className="mt-10">
          <h4 className="font-bold underline">What You’ll Learn?</h4>
          <div className="grid gap-3 mt-4">
            <div className="flex items-center gap-3">
              <AiFillCheckCircle className="text-primary text-[18px]" />
              <p className="text-[18px] font-bold">Learn to use Python professionally, learning both Python 2 & Python 3!</p>
            </div>
            <div className="flex items-center gap-3">
              <AiFillCheckCircle className="text-primary text-[18px]" />
              <p className="text-[18px] font-bold">Build 6 beautiful real-world projects for your portfolio (not boring toy apps)</p>
            </div>
            <div className="flex items-center gap-3">
              <AiFillCheckCircle className="text-primary text-[18px]" />
              <p className="text-[18px] font-bold">Understand the Theory behind Vue.js and use it in Real Projects</p>
            </div>
          </div>
          <p className="opacity-70 leading-8 mt-5">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
        </div>
        <div className="my-10">
          <h4 className="font-bold underline">Requirements</h4>
          <ul className="blogList text-[18px] leading-[30px] ml-5 mt-5">
            <li>You will need a copy of Adobe XD 2019 or above.
              A free trial can be downloaded from Adobe</li>
            <li className="my-3">No previous design experience is needed</li>
            <li>No previous Adobe XD skills are needed.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold underline mb-5">Course Content</h4>
          <div>
            <div>
              <div onClick={() => setLessonOne(!lessonOne)} className="flex items-center justify-between mb-3 cursor-pointer">
                <p className="text-[20px] font-bold text-[#252D33]">Lesson 1: Organising Content for the Best Results</p>
                <IoIosArrowDropdownCircle className="text-[20px]" />
              </div>
              <div className={`${lessonOne ? 'block' : 'hidden'}`}>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70"> 1.1: Organising Content for the Best Results - Visual Hierarchy</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(42 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70">1.2: Progressive Disclosure: Organising Content for the Best Results</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(40 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70">  1.3: Two-Panel Selector: Organising Content for the Best Results</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(42 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70"> 1.4: Organising Content for the Best Results - Visual Hierarchy</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(42 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70">1.5: Progressive Disclosure: Organising Content for the Best Results</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(40 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70"> 1.6: Two-Panel Selector: Organising Content for the Best Results</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(42 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70"> 1.7: Discussion Forum</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(6 mins)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div onClick={() => setLessonTwo(!lessonTwo)} className="flex items-center justify-between mb-3 cursor-pointer">
                <p className="text-[20px] font-bold text-[#252D33]">Lesson 2: Affording Fluid Navigation</p>
                <IoIosArrowDropdownCircle className="text-[20px]" />
              </div>
              <div className={`${lessonTwo ? 'block' : 'hidden'}`}>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70"> 1.1: Organising Content for the Best Results - Visual Hierarchy</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(42 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70">1.2: Progressive Disclosure: Organising Content for the Best Results</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(40 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70">  1.3: Two-Panel Selector: Organising Content for the Best Results</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(42 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70"> 1.4: Organising Content for the Best Results - Visual Hierarchy</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(42 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70">1.5: Progressive Disclosure: Organising Content for the Best Results</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(40 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70"> 1.6: Two-Panel Selector: Organising Content for the Best Results</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(42 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70"> 1.7: Discussion Forum</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(6 mins)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div onClick={() => setLessonThree(!lessonThree)} className="flex items-center justify-between mb-3 cursor-pointer">
                <p className="text-[20px] font-bold text-[#252D33]">Lesson 3: Implementing Page Structure</p>
                <IoIosArrowDropdownCircle className="text-[20px]" />
              </div>
              <div className={`${lessonThree ? 'block' : 'hidden'}`}>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70"> 1.1: Organising Content for the Best Results - Visual Hierarchy</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(42 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70">1.2: Progressive Disclosure: Organising Content for the Best Results</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(40 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70">  1.3: Two-Panel Selector: Organising Content for the Best Results</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(42 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70"> 1.4: Organising Content for the Best Results - Visual Hierarchy</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(42 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70">1.5: Progressive Disclosure: Organising Content for the Best Results</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(40 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70"> 1.6: Two-Panel Selector: Organising Content for the Best Results</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(42 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70"> 1.7: Discussion Forum</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(6 mins)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div onClick={() => setLessonFour(!lessonFour)} className="flex items-center justify-between mb-3 cursor-pointer">
                <p className="text-[20px] font-bold text-[#252D33]">Lesson 4: Simplifying Data Entry</p>
                <IoIosArrowDropdownCircle className="text-[20px]" />
              </div>
              <div className={`${lessonFour ? 'block' : 'hidden'}`}>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70"> 1.1: Organising Content for the Best Results - Visual Hierarchy</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(42 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70">1.2: Progressive Disclosure: Organising Content for the Best Results</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(40 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70">  1.3: Two-Panel Selector: Organising Content for the Best Results</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(42 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70"> 1.4: Organising Content for the Best Results - Visual Hierarchy</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(42 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70">1.5: Progressive Disclosure: Organising Content for the Best Results</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(40 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70"> 1.6: Two-Panel Selector: Organising Content for the Best Results</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(42 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70"> 1.7: Discussion Forum</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(6 mins)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div onClick={() => setLessonFive(!lessonFive)} className="flex items-center justify-between mb-3 cursor-pointer">
                <p className="text-[20px] font-bold text-[#252D33]">Lesson 5: Social Aspects of UI Design</p>
                <IoIosArrowDropdownCircle className="text-[20px]" />
              </div>
              <div className={`${lessonFive ? 'block' : 'hidden'}`}>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70"> 1.1: Organising Content for the Best Results - Visual Hierarchy</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(42 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70">1.2: Progressive Disclosure: Organising Content for the Best Results</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(40 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70">  1.3: Two-Panel Selector: Organising Content for the Best Results</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(42 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70"> 1.4: Organising Content for the Best Results - Visual Hierarchy</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(42 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70">1.5: Progressive Disclosure: Organising Content for the Best Results</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(40 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70"> 1.6: Two-Panel Selector: Organising Content for the Best Results</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(42 mins)</span>
                  </div>
                </div>
                <div className="border-b-[2px] py-3">
                  <div className="flex items-center gap-2 flex-wrap cursor-pointer">
                    <img src={task} alt="" />
                    <p className="font-inter font-medium 2xl:text-[20px] text-[18px] opacity-70"> 1.7: Discussion Forum</p>
                    <span className="text-[#EF7A4E] font-inter font-medium 2xl:text-[20px] text-[18px] ">(6 mins)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#0E0605] px-10 py-14 rounded-3xl mt-14">
          <div className="flex items-center md:flex-row flex-col gap-8">
            <img className="" src={image} alt="" />
            <div>
              <p className="text-white opacity-70 mb-1">Designer</p>
              <p className="text-[24px] font-bold text-white tracking-[-1px]">Jay Phillips</p>
              <div className="text-white border-t border-b border-[#ffffff26] py-4 my-3">
                <p className="mb-1"><strong>Call:</strong>  (+987) 987 654 321</p>
                <p><strong>Email:</strong>  phillips.example@gmail.com</p>
              </div>
              <div className="text-white text-[18px] flex gap-6 my-8">
                <AiOutlineTwitter />
                <BsLinkedin />
                <BsFacebook/>
              </div>
              <div>
                <button className="text-white bg-primary font-semibold px-6 py-2 rounded-md">Contact with me</button>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[#ffffffb3] mt-6">Hello there! My name is <span className="text-primary">Jay Phillips</span>. I am a web designer & developer, and I'm
              very passionate and dedicated to my work.</p>
            <p className="text-[#ffffffb3] mt-5">
              With 20 years experience as a professional a graphic designer, I have acquired the skills
              and knowledge necessary to make your project a success.</p>
          </div>
        </div>
        <CourseDetailsFeedBack />
        <CourseDetailsReviews />
        <CourseDetailsLeaveThought/>
      </div>
    </div>
  );
};

export default CourseDetailsOverview;