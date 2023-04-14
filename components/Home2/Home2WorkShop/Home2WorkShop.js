import { BsArrowUpRight, BsFillPlayFill } from "react-icons/bs";

const bg = 'https://i.ibb.co/GQ6XB7K/BG-1.png';
const image = 'https://i.ibb.co/R63tDVz/Img-5.png';
const Home2WorkShop = () => {
  return (
    <div className="" style={{backgroundImage:`url(${bg})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>
      <div className="flex lg:flex-row flex-col lg:gap-32 gap-12 w-4/5 mx-auto pb-32 pt-44">
        <div className="relative">
          <img className="lg:w-[530px] lg:h-[340px] w-full home2ImageShadow" src={image} alt="" />
            <label htmlFor="my-modal-3" className="">
          <div className=" absolute cursor-pointer bg-white h-[50px] w-[50px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex items-center justify-center rounded-full">
              
              <BsFillPlayFill className="text-primary text-[20px]" />
            
          </div>
            </label>
            
        </div>
        <div>
          <p className="font-inter text-primary font-semibold tracking-[0.16em] mb-6">FREE WORKSHOP</p>
          <div className="leading-[48px] mb-6">
            <h2 className="text-white">Join Our Free</h2>
            <h2 className="text-white">Workshops</h2>
          </div>
          <p className="text-white opacity-70 font-inter">Donec bibendum, dui id ultrices molestie, neque neque <br />
            porta felis, id viverra ligula justo interdum mi.</p>
          <div className='flex mt-8'>
            <button className="font-inter flex items-center gap-3 rounded-md bg-primary text-white font-medium py-2 px-6"><span>More upcoming workshop</span><BsArrowUpRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2WorkShop;