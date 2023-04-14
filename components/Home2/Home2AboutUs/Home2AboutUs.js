import { BsArrowUpRight } from "react-icons/bs";
const image = 'https://i.ibb.co/n69GBLF/Img-1.png';
const checkMark = 'https://i.ibb.co/fM6HKX1/Group-1000001396.png';
const Home2AboutUs = () => {
  return (
    <div className="flex gap-24 lg:w-full w-4/5 mx-auto lg:flex-row flex-col">
      <div className="lg:w-[55%] w-full">
        <img className="w-full" src={image} alt="" />
      </div>
      <div className="lg:w-[45%] w-full lg:mr-[10%]">
        <p className="text-primary font-semibold uppercase tracking-[0.16em] mb-4">about us</p>
        <div>
          <div className="leading-[48px] mb-6">
            <h2>Over <span className="text-primary">10 years</span> in</h2><h2>distance learning for</h2>
            <h2>skill development</h2>
          </div>
          <p className="opacity-70">Donec bibendum, dui id ultrices molestie, neque neque
            porta felis, id viverra ligula justo interdum mi. Monotonectally negotiate leveraged imperatives vis-a-vis standardized users. </p>
          <div className="mt-6">
            <div className="flex items-center gap-4">
              <img className="h-[20px]" src={checkMark} alt="" />
              <p className="font-[600] tracking-[-0.5px]">9/10 Average Satisfaction Rate</p>
            </div>
            <div className="flex items-center gap-4 my-2">
              <img className="h-[20px]" src={checkMark} alt="" />
              <p className="font-[600] tracking-[-0.5px]">96% Completitation Rate</p>
            </div>
            <div className="flex items-center gap-4">
              <img className="h-[20px]" src={checkMark} alt="" />
              <p className="font-[600] tracking-[-0.5px]">Friendly Environment & Expert Teacher</p>
            </div>
          </div>
          <button className="text-[16px] mt-8 shadow-button transition-all duration-300 hover:shadow-md text-[#fff] flex items-center gap-2 bg-secondary px-5 py-[10px] rounded-md font-[600] "><span>Find courses</span>
            <BsArrowUpRight />
          </button>
        </div>
        <div className="flex justify-end -mt-7">
          <img src="https://i.ibb.co/PjSXQG8/Element.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home2AboutUs;