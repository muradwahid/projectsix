import { AiFillStar, AiOutlineTwitter } from "react-icons/ai";
import { BiPlay } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const bg = 'https://i.ibb.co/CvbJmch/BG-7.png';
const logo = 'https://i.ibb.co/HTtNY0V/document-text.png';
const logo2 = 'https://i.ibb.co/dDLDW8G/smileys.png';
const logo3 = 'https://i.ibb.co/zfqSsW4/timer.png';
const logo4 = 'https://i.ibb.co/xsv3Pt8/chart.png';
const logo5 = 'https://i.ibb.co/tzR3vf6/tabler-language.png';
const CourseDetailsHero = () => {
  return (
    <div className="lg:h-[115vh]" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className="sm:pt-40 pt-32 w-4/5 mx-auto flex justify-between lg:flex-row flex-col">
        <div className="md:ml-20">
          <div className="flex items-center flex-wrap md:gap-8 gap-7">
            <p className="font-medium">Home</p>
            <ul className="list-disc font-medium flex items-center flex-wrap gap-8">
              <li>Course Details</li>
              <li className="text-primary">User Experience Design...</li>
            </ul>
          </div>
            <div className="leading-[48px] my-5">
              <h3 className="text-[40px]">User Experience Design </h3>
            <h3 className="text-[40px]">Essentials - Adobe XD </h3>
            <h3 className="text-[40px]">UI UX Design</h3>
          </div>
          <div className="leading-7">
            <p className="opacity-70">Use XD to get a job in UI Design, User Interface, User</p>
            <p className="opacity-70">Experience design, UX design & Web Design</p>
          </div>
          <div className="flex gap-5 flex-wrap mt-5">
            <p className="font-[500] font-inter bg-white px-3 py-1 rounded-lg">Ui/Ux</p>
            <p className="font-[500] font-inter bg-white px-3 py-1 rounded-lg">Best Seller</p>
            <p className="font-[500] font-inter bg-white px-3 py-1 rounded-lg">Popular</p>
          </div>
          <div className="mt-9">
            <p className="text-[14px] font-bold tracking-[-0.5px] text-primary mb-2">Instructor</p>
            <div className=" flex items-center gap-16">
              <div className="flex items-center gap-3">
                <div className="">
                  <img src="https://i.ibb.co/7S9KGZW/Ellipse-14.png" alt="" />
                </div>
                <div>
                  <h5 className="tracking-[-1px] mb-1">Peterson</h5>
                  <p className="opacity-70">UI/UX Designer</p>
                </div>
              </div>
                <div className="flex gap-2 items-center">
                  <AiFillStar className="text-[#FFB60A]" />
                  <strong>5.0</strong>
                  <p>(15 ratings)</p>
                </div>
</div>
          </div>
        </div>
        <div className="md:w-[370px] w-full lg:py-0 py-12 lg:ml-0 md:ml-20">
          <div>
            <div className="relative">
              <img className="w-full" src="https://i.ibb.co/103xtxy/Img-14.png" alt="" />
              <label htmlFor="my-modal-3">
                <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white p-2 rounded-full shadow-md cursor-pointer">
                  <BiPlay className="text-primary text-[28px]" />
                </div>
              </label>
            </div>
            <div className="bg-white px-8 py-8 rounded-b-2xl courseDetailsShadow ">
              <div className="flex items-center gap-5">
                <p className="text-[30px] font-bold tracking-[-1px] leading-10 capitalize">$15.00</p>
                <p className="font-medium opacity-70"><del>$18.00</del></p>
              </div>
              <div>
                <div className="flex items-center justify-between border-b py-3">
                  <div className="flex items-center gap-2 ">
                    <div><img src={logo} alt="" /></div>
                    <p className="text-[18px] font-medium leading-6 opacity-70">Lessons</p>
                  </div>
                  <p className="text-[18px] font-medium leading-6">20</p>
                </div>
                <div className="flex items-center justify-between border-b py-3">
                  <div className="flex items-center gap-2 ">
                    <div><img src={logo2} alt="" /></div>
                    <p className="text-[18px] font-medium leading-6 opacity-70">Quizzes</p>
                  </div>
                  <p className="text-[18px] font-medium leading-6">03</p>
                </div>
                <div className="flex items-center justify-between border-b py-3">
                  <div className="flex items-center gap-2 ">
                    <div><img src={logo3} alt="" /></div>
                    <p className="text-[18px] font-medium leading-6 opacity-70">Duration</p>
                  </div>
                  <p className="text-[18px] font-medium leading-6">12h</p>
                </div>
                <div className="flex items-center justify-between border-b py-3">
                  <div className="flex items-center gap-2 ">
                    <div><img src={logo4} alt="" /></div>
                    <p className="text-[18px] font-medium leading-6 opacity-70">Skill level</p>
                  </div>
                  <p className="text-[18px] font-medium leading-6">Beginner</p>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-2 ">
                    <div><img src={logo5} alt="" /></div>
                    <p className="text-[18px] font-medium leading-6 opacity-70">Language</p>
                  </div>
                  <p className="text-[18px] font-medium leading-6">English</p>
                </div>
              </div>
              <div>
                <button className="font-semibold text-white bg-primary w-full py-2 rounded-md my-4">Enroll now</button>
                <button className="font-semibold text-white bg-[#0E0605] w-full py-2 rounded-md">Add to cart</button>
              </div>
              <div className="flex items-center justify-between mt-8">
                <p className="uppercase text-[14px] tracking-[-0.5px] font-semibold">Share:</p>
                <div className="text-[18px] flex items-center gap-5">
                  <FaFacebookF />
                  <AiOutlineTwitter />
                  <IoLogoWhatsapp/>
                  <FaLinkedinIn/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsHero;