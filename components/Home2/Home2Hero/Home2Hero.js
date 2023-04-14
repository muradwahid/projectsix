import { BsArrowUpRight } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { FiBook } from "react-icons/fi";
const rightImage = 'https://i.ibb.co/p4w9JzW/Img.png';
const bgImage = 'https://i.ibb.co/MhjmwLD/BG.png';
const groupImage = 'https://i.ibb.co/kGhgSty/Frame-443.png';
const groupImage2 = 'https://i.ibb.co/JCH58LL/Avatar.png';
const Home2Hero = () => {
  return (
    <div className="" style={{backgroundImage:`url(${bgImage})`,backgroundRepeat:'no-repeat' ,backgroundSize:'cover'}}>
      <div className="w-4/5 mx-auto flex justify-between lg:flex-row flex-col lg:gap-10 gap-24 pt-40 pb-24">
        <div className="lg:w-[50%]">
          <div className="leading-[64px] font-800 mb-5">
            <h1>Classical</h1>
            <h1 className="text-secondary">Education</h1>
            <h1>For The Future</h1>
          </div>
          
          <p className="text-[20px] font-[400] leading-[30px] w-[400px] text-[#12141db3]">It is long established fact that reader
            distracted by the readable content.</p>
          <div className="mt-8">
            <button className="text-[16px] shadow-button transition-all duration-300 hover:shadow-md text-[#224034] tracking-[-1px] flex items-center gap-2 bg-white px-5 py-[10px] rounded-md font-[600]"><span>Find courses</span>
              <BsArrowUpRight/>
            </button>
          </div>
          <div className="flex items-center gap-5 mt-11">
            <div>
              <img src={groupImage} alt="" />
            </div>
            <div>
              <p className="text-[#12141D] text-[24px] leading-[36px] font-bold">29k+</p>
              <p className="text-[#12141db3] text-[16px]">Happy Students</p>
            </div>
            <div>
              <p className="text-[#12141D] text-[24px] leading-[36px] font-bold">4.8/5</p>
              <div className="flex">
                <AiFillStar className="text-[#FFC947]"/>
                <AiFillStar className="text-[#FFC947]"/>
                <AiFillStar className="text-[#FFC947]"/>
                <AiFillStar className="text-[#FFC947]"/>
                <AiFillStar className="text-[#CBBDBF]"/>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-[6%]">
          <div className="mr-[-18px] relative">
            <img src={rightImage} alt="" />
            <div className="absolute right-[4%] top-0">
              <img src="https://i.ibb.co/PjSXQG8/Element.png" alt="" />
            </div>
            <div className="flex items-center bg-primary rounded-xl px-3 md:px-5 py-3 lg:w-[246px] md:w-[270px] max-w-[260px] absolute left-7 top-[50%]">
              <div className="bg-white md:w-[50px] w-[45px] md:h-[50px] h-[45px] rounded-full flex items-center justify-center mr-4">
                <FiBook className="md:text-[18px]"/>
              </div>
              <div>
                <h5 className="text-white md:text-[24px] text-[16px]">20% OFF</h5>
                <span className="md:text-[18px] text-[14px] text-white">For all courses</span>
              </div>
            </div>

            <div className="bg-white absolute w-[200px] md:w-[240px] h-[130px] md:h-[160px] md:py-7 py-2 px-7 rounded-xl top-[-10%] lg:left-[40%] md:left-[35%] left-[40%]">
              <div>
                <img src={groupImage2} alt="" />
              </div>
              <div className="mt-3 ">
                <h4 className="font-semibold">3k+</h4>
                <span className="text-[16px] text-[#12141D] opacity-70">Trained Teacher</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2Hero;