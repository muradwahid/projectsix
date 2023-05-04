import { AiFillStar } from "react-icons/ai";

const CourseDetailsFeedBack = () => {
  return (
    <div>
      <h4 className="font-bold underline mb-6 mt-10">Course Feedback</h4>
      <div className="flex md:flex-row flex-col gap-7">
        <div className="bg-[#F5F0EE] py-20 rounded-2xl md:w-[40%]">
          <h2 className="leading-[48px] tracking-[-1px] text-center mb-3 text-primary">4.8</h2>
          <div className="flex items-center justify-center gap-2">
            <AiFillStar className="text-[#FFB60A] text-[18px]" />
            <div className="flex items-center gap-1">
              <strong>5.0</strong>
              <p className="opacity-70">(15 ratings)</p>
            </div>
          </div>
        </div>
        <div className="bg-[#F5F0EE] px-8 py-10 rounded-2xl md:w-[60%]">
          <div>
            <div className="flex items-center justify-between">
              <div className="w-[55%] rounded-full h-[5px] bg-[#FF6158]">
                <div className="h-full rounded-full"></div>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex items-center">
                  <AiFillStar className="text-[#FFB60A] text-[18px]" />
                  <AiFillStar className="text-[#FFB60A] text-[18px]" />
                  <AiFillStar className="text-[#FFB60A] text-[18px]" />
                  <AiFillStar className="text-[#FFB60A] text-[18px]" />
                  <AiFillStar className="text-[#FFB60A] text-[18px]" />
                </div>
                <p className="dm-sans opacity-70">70%</p>
              </div>
            </div>
            <div className="flex items-center justify-between my-4">
              <div className="w-[55%] h-[5px] bg-white rounded-full">
                <div className="h-full rounded-full bg-[#FF6158] w-4/5"></div>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex items-center">
                  <AiFillStar className="text-[#FFB60A] text-[18px]" />
                  <AiFillStar className="text-[#FFB60A] text-[18px]" />
                  <AiFillStar className="text-[#FFB60A] text-[18px]" />
                  <AiFillStar className="text-[#FFB60A] text-[18px]" />
                  <AiFillStar className="text-[#ffb60a1a] text-[18px]" />
                </div>
                <p className="dm-sans opacity-70">15%</p>
              </div>
            </div>
            <div className="flex items-center justify-between my-4">
              <div className="w-[55%] h-[5px] bg-white rounded-full">
                <div className="h-full rounded-full bg-[#FF6158] w-[60%]"></div>
              </div>
              <div className="flex items-center gap-1 ">
                <div className="flex items-center">
                  <AiFillStar className="text-[#FFB60A] text-[18px]" />
                  <AiFillStar className="text-[#FFB60A] text-[18px]" />
                  <AiFillStar className="text-[#FFB60A] text-[18px]" />
                  <AiFillStar className="text-[#ffb60a1a] text-[18px]" />
                  <AiFillStar className="text-[#ffb60a1a] text-[18px]" />
                </div>
                <p className="dm-sans opacity-70">20%</p>
              </div>
            </div>
            <div className="flex items-center justify-between my-4">
              <div className="w-[55%] h-[5px] bg-white rounded-full">
                <div className="h-full rounded-full bg-[#FF6158] w-[40%]"></div>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex items-center">
                  <AiFillStar className="text-[#FFB60A] text-[18px]" />
                  <AiFillStar className="text-[#FFB60A] text-[18px]" />
                  <AiFillStar className="text-[#ffb60a1a] text-[18px]" />
                  <AiFillStar className="text-[#ffb60a1a] text-[18px]" />
                  <AiFillStar className="text-[#ffb60a1a] text-[18px]" />
                </div>
                <p className="dm-sans opacity-70">3%</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="w-[55%] h-[5px] bg-white rounded-full">
                <div className="h-full rounded-full bg-[#FF6158] w-[25%]"></div>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex items-center">
                  <AiFillStar className="text-[#FFB60A] text-[18px]" />
                  <AiFillStar className="text-[#FFB60A] text-[18px]" />
                  <AiFillStar className="text-[#ffb60a1a] text-[18px]" />
                  <AiFillStar className="text-[#ffb60a1a] text-[18px]" />
                  <AiFillStar className="text-[#ffb60a1a] text-[18px]" />
                </div>
                <p className="dm-sans opacity-70">2%</p>
              </div>
            </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsFeedBack;