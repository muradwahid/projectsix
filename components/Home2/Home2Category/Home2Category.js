import { BsArrowUpRight } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";
const icon = 'https://i.ibb.co/QrTyT21/mdi-user-check-outline.png';
const icon2 = 'https://i.ibb.co/qmnybVz/iconoir-brain-research.png';
const icon3 = 'https://i.ibb.co/0KMYKVw/iconoir-design-nib.png';
const icon4 = 'https://i.ibb.co/BcVmnFr/material-symbols-business-center-outline.png';
const icon5 = 'https://i.ibb.co/bHpBPBt/material-symbols-code-sharp.png';
const icon6 = 'https://i.ibb.co/pXXYbBr/la-blogger.png';

const Home2Category = () => {
  return (
      <div className="w-4/5 mx-auto my-28">
        <p className="uppercase text-primary mb-5">category</p>
        <div className="flex lg:flex-row flex-col lg:gap-32 gap-4">
          <div className="md:w-[470px]">
            <h2 className="leading-[55px]">Online <span className="text-primary">classes for</span> remote learning.</h2>
          </div>
          <div className="w-[380px]">
            <p className="opacity-70">Proactively engage distinctive models without
              emerging process improvements.</p>
            <button className="text-[16px] border-b border-primary flex items-center gap-3 text-primary font-[600] mt-6"><span>All categories</span>
              <BsArrowUpRight />
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
          <div className="bg-[#F9F9FD] flex items-center gap-4 px-6 py-8">
            <div className="bg-primary h-[45px] w-[45px] flex items-center justify-center rounded-full">
              <img src={icon} alt="" />
            </div>
            <div>
              <p className="text-[20px] text-[#12141D] font-[700] mb-1">Personal Development</p>
              <span className="text-[16px] text-[#12141D] opacity-70 font-[500]">12 Course</span>
            </div>
          </div>
          <div className="bg-[#F9F9FD] flex items-center gap-4 px-6 py-8">
            <div className="bg-primary h-[45px] w-[45px] flex items-center justify-center rounded-full">
              <img src={icon2} alt="" />
            </div>
            <div>
              <p className="text-[20px] text-[#12141D] font-[700] mb-1">Human Research</p>
              <span className="text-[16px] text-[#12141D] opacity-70 font-[500]">12 Course</span>
            </div>
          </div>
          <div className="bg-[#F9F9FD] flex items-center gap-4 px-6 py-8">
            <div className="bg-primary h-[45px] w-[45px] flex items-center justify-center rounded-full">
              <img src={icon3} alt="" />
            </div>
            <div>
              <p className="text-[20px] text-[#12141D] font-[700] mb-1">Art & Design</p>
              <span className="text-[16px] text-[#12141D] opacity-70 font-[500]">12 Course</span>
            </div>
          </div>
          <div className="bg-[#F9F9FD] flex items-center gap-4 px-6 py-8">
            <div className="bg-primary h-[45px] w-[45px] flex items-center justify-center rounded-full">
              <img src={icon4} alt="" />
            </div>
            <div>
              <p className="text-[20px] text-[#12141D] font-[700] mb-1">Business Management</p>
              <span className="text-[16px] text-[#12141D] opacity-70 font-[500]">12 Course</span>
            </div>
          </div>
          <div className="bg-[#F9F9FD] flex items-center gap-4 px-6 py-8">
            <div className="bg-primary h-[45px] w-[45px] flex items-center justify-center rounded-full">
              <img src={icon5} alt="" />
            </div>
            <div>
              <p className="text-[20px] text-[#12141D] font-[700] mb-1">Web Development</p>
              <span className="text-[16px] text-[#12141D] opacity-70 font-[500]">12 Course</span>
            </div>
          </div>
          <div className="bg-[#F9F9FD] flex items-center gap-4 px-6 py-8">
            <div className="bg-primary h-[45px] w-[45px] flex items-center justify-center rounded-full">
              <img src={icon6} alt="" />
            </div>
            <div>
              <p className="text-[20px] text-[#12141D] font-[700] mb-1">Lifestyle</p>
              <span className="text-[16px] text-[#12141D] opacity-70 font-[500]">12 Course</span>
            </div>
          </div>
        </div>

      </div>
  );
};

export default Home2Category;