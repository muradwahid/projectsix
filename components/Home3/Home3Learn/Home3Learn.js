import { BsFillPlayFill } from "react-icons/bs";

const image = 'https://i.ibb.co/8DMz6d5/Img-10.png';
const shape = 'https://i.ibb.co/Wxj65XF/Combined-Shape.png';
const textShape = 'https://i.ibb.co/b3T9Tgd/Vector.png';
const Home3Learn = () => {
  return (
    <div>
      <div className="leading-[56px] text-center mt-28">
        <h2 className="text-[#12141D] font-inter font-[800]">Learn anytime </h2>
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-[#12141D] font-inter font-[800]">from </h2>
          <div className="relative">
            <img src={textShape} className='absolute z-[-10]' alt="" />
            <h2 className="text-accent font-inter font-[800]">anywhere</h2>
          </div>
        </div>
      </div>
      <div>
        <div className="w-4/5 mx-auto bg-white relative home3CategoryShadow p-5 rounded-xl mt-14">
          <img src={shape} className='absolute -left-11 -top-16 z-[-10]' alt="" />
          <img className="h-[80vh] w-full" src={image} alt="" />
          <label htmlFor="my-modal-3" className="">
            <div className=" absolute cursor-pointer bg-white h-[50px] w-[50px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex items-center justify-center rounded-full">

              <BsFillPlayFill className="text-accent text-[20px]" />

            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Home3Learn;