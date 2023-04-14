import { BsArrowUpRight } from "react-icons/bs";

const shape = 'https://i.ibb.co/5FfCTt7/Element-3.png';
const logo = 'https://i.ibb.co/S03jnFc/la-blogger-1.png';
const logo2 = 'https://i.ibb.co/sVnTyYb/iconoir-brain-research-1.png';
const logo3 = 'https://i.ibb.co/r3DcTQD/iconoir-design-nib-1.png';
const logo4 = 'https://i.ibb.co/ph8HPPw/material-symbols-code-sharp-1.png';
const logo5 = 'https://i.ibb.co/ynVCNpM/mdi-user-check-outline-1.png';
const logo6 = 'https://i.ibb.co/DDfN9Gv/material-symbols-business-center-outline-1.png';
const logo7 = 'https://i.ibb.co/hRzD470/ph-currency-dollar-bold.png';
const Home3Category = () => {
  return (
    <div className="w-4/5 mx-auto my-28">
      <div className="flex items-center gap-2 justify-center font-inter font-[800]">
        <h2 className="font-[800]">Browse top</h2>
        <div className="relative">
          <img className="absolute z-[-10]" src={shape} alt="" />
          <h2 className="font-[800] text-accent">categories</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-20 gap-5">
        <div className="home3CategoryShadow bg-white rounded-lg py-8">
          <div className="flex justify-center mb-3">
            <img src={logo} alt="" />
          </div>
          <div>
            <h5 className="font-inter font-[700] text-center mb-1">Lifestyle</h5>
            <p className="text-center font-inter font-[500] text-[#1F2148] opacity-70">12 Course</p>
          </div>
        </div>
        <div className="home3CategoryShadow bg-white rounded-lg py-8">
          <div className="flex justify-center mb-3">
            <img src={logo2} alt="" />
          </div>
          <div>
            <h5 className="font-inter font-[700] text-center mb-1">Human Research</h5>
            <p className="text-center font-inter font-[500] text-[#1F2148] opacity-70">12 Course</p>
          </div>
        </div>
        <div className="home3CategoryShadow bg-white rounded-lg py-8">
          <div className="flex justify-center mb-3">
            <img src={logo3} alt="" />
          </div>
          <div>
            <h5 className="font-inter font-[700] text-center mb-1">Art & Design</h5>
            <p className="text-center font-inter font-[500] text-[#1F2148] opacity-70">12 Course</p>
          </div>
        </div>
        <div className="home3CategoryShadow bg-white rounded-lg py-8">
          <div className="flex justify-center mb-3">
            <img src={logo4} alt="" />
          </div>
          <div>
            <h5 className="font-inter font-[700] text-center mb-1">Web Development</h5>
            <p className="text-center font-inter font-[500] text-[#1F2148] opacity-70">12 Course</p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5">
        <div className="home3CategoryShadow bg-white rounded-lg py-8">
          <div className="flex justify-center mb-3">
            <img src={logo5} alt="" />
          </div>
          <div>
            <h5 className="font-inter font-[700] text-center mb-1">Personal Development</h5>
            <p className="text-center font-inter font-[500] text-[#1F2148] opacity-70">12 Course</p>
          </div>
        </div>
        <div className="home3CategoryShadow bg-white rounded-lg py-8">
          <div className="flex justify-center mb-3">
            <img src={logo6} alt="" />
          </div>
          <div>
            <h5 className="font-inter font-[700] text-center mb-1">Business Studies</h5>
            <p className="text-center font-inter font-[500] text-[#1F2148] opacity-70">12 Course</p>
          </div>
        </div>
        <div className="home3CategoryShadow bg-white rounded-lg py-8">
          <div className="flex justify-center mb-3">
            <img src={logo7} alt="" />
          </div>
          <div>
            <h5 className="font-inter font-[700] text-center mb-1">Finance Management</h5>
            <p className="text-center font-inter font-[500] text-[#1F2148] opacity-70">12 Course</p>
          </div>
        </div>
      </div>


      <div className="pt-10">
        <div className="divider"><button className="text-[16px] border-b-2 border-[#1F2148] mx-4 -mt-6 flex items-center gap-3 text-[#1F2148] font-[600] "><span>All categories</span>
          <BsArrowUpRight />
        </button></div>
      </div>
    </div>
  );
};

export default Home3Category;