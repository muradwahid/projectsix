import { AiFillStar, AiOutlineMail } from "react-icons/ai";
const image = 'https://i.ibb.co/FwRDn34/Img-13.png';
const logo ='https://i.ibb.co/nD8CmSx/trustpilot.png'
const bg = 'https://i.ibb.co/DrZ1ztV/Mask-Group.png';
const shape = 'https://i.ibb.co/tsFTXtf/Element-2.png';
const avatar = 'https://i.ibb.co/C26WM33/Frame-443-1.png';
const Home3Hero = () => {
  return (
    <div className="" style={{backgroundImage:`url(${bg})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}>
      <div className="w-4/5 mx-auto flex justify-between lg:flex-row flex-col pt-36">
        <div className="lg:w-[48%] lg:text-left text-center">
          <div className="font-inter font-[900] leading-[72px]">
            <h1>Easiest</h1>
            <div className="flex gap-3 lg:justify-start justify-center"><h1>way to</h1> <div className="relative">
              <h1 className="">learn</h1>
              <img className="absolute top-[-6px] left-[-8px] bottom-0 z-[-10]" src={shape} alt="" />
            </div></div>
            <h1>new things</h1>
          </div>
          <p className="text-[20px] text-[#1f2148b3] font-inter leading-[30px] mt-6 mb-8">Method allows developers to make bank <br /> transfers, move money, and pay debts on behalf.</p>
          <div>
            <button className="bg-[#1F2148] home3HeroShadow text-white font-semibold font-inter px-8 py-3 rounded-full">Find courses</button>
          </div>

          <div className='flex items-center gap-2 lg:justify-start justify-center mt-12'>
            <div><img src={logo} alt="" /></div>
            <div className='flex'>
              <AiFillStar className='text-[18px] text-[#F59E0B]' />
              <AiFillStar className='text-[18px] text-[#F59E0B]' />
              <AiFillStar className='text-[18px] text-[#F59E0B]' />
              <AiFillStar className='text-[18px] text-[#F59E0B]' />
              <AiFillStar className='text-[18px] text-[#F59E0B]' />
            </div>
            <p className='font-medium font-inter'>4900+ 5 Stars</p>
          </div>
        </div>
        <div className="lg:w-[50%] lg:-mr-[5%] md:block hidden relative">
          <img className="w-full" src={image} alt="" />

          <div className="bg-white px-4 py-3 rounded-md absolute top-[45%] home3HeroSkew">
            <p className="text-[28px] text-[#13AAA1] font-[900]">15K</p>
            <p className="font-inter text-[11.85px] font-[500]">Instructor</p>
            </div>

          <div className="bg-white absolute flex items-center justify-between py-2 px-5 left-[7%] gap-5 rounded-xl lg:bottom-[5%] bottom-[10%]">
            <div>
              <img src={avatar} alt="" />
            </div>
            <div className="">
              <h4 className="font-semibold">3k+</h4>
              <span className="text-[16px] text-[#12141D] opacity-70">Trained Teacher</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home3Hero;