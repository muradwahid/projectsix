
import { HiXMark } from "react-icons/hi2";
const shape = 'https://i.ibb.co/LSxmbtN/Group-1.png';
const Home2Comunnity = () => {
  return (
    <div className="bg-secondary py-28 relative">
      <HiXMark className="text-[26px] text-[#ffffff65] absolute left-[6%] top-[17%]"/>
      <div className="w-[40px] absolute text-[17px] text-[#ffffff65] bottom-[8%] right-[5%]">
        <div className="flex gap-1">
          <span>+</span>
          <span>+</span>
          <span>+</span>
          <span>+</span>
        </div>
        <div className="mt-[-10px] flex gap-1">
          <span>+</span>
          <span>+</span>
          <span>+</span>
          <span>+</span>
        </div>
      </div>

      <p className="text-[] tracking-[0.16em] font-semibold text-white text-center mb-8">Creating a community Of life long learners</p>
      <div className="w-4/5 mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 border-[#ffffff33] border-t border-b py-6">
        <div>
          <h2 className="text-white">52k+</h2>
          <p className="text-medium tracking-[0.16em] uppercase text-white opacity-80">Enrolled Students</p>
        </div>
        <div>
          <h2 className="text-white">348+</h2>
          <p className="text-medium tracking-[0.16em] uppercase text-white opacity-80">academic programs</p>
        </div>
        <div>
          <h2 className="text-white">125+</h2>
          <p className="text-medium tracking-[0.16em] uppercase text-white opacity-80">winning award</p>
        </div>
        <div>
          <h2 className="text-white">37k+</h2>
          <p className="text-medium tracking-[0.16em] uppercase text-white opacity-80">certified students</p>
        </div>
      </div>
    </div>
  );
};

export default Home2Comunnity;