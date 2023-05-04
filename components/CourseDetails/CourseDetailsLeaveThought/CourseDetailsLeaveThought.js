import { AiFillStar } from "react-icons/ai";

const CourseDetailsLeaveThought = () => {
  return (
    <div>
      <h4 className="font-bold underline mt-7">Leave Your Thought</h4>
      <div className="flex items-center gap-3 mt-6">
        <p className="opacity-70">Give Ratting:</p>
        <div className="flex items-center">
          <AiFillStar className="text-[#ffb60a1a] text-[18px]" />
          <AiFillStar className="text-[#ffb60a1a] text-[18px]" />
          <AiFillStar className="text-[#ffb60a1a] text-[18px]" />
          <AiFillStar className="text-[#ffb60a1a] text-[18px]" />
          <AiFillStar className="text-[#ffb60a1a] text-[18px]" />
        </div>
      </div>
      <form className="detailsForms md:w-[75%] rounded-xl bg-white px-7 py-10 mt-8">
        <input className="bg-[#0e06050a] w-full py-2 px-4 rounded-md outline-primary" type="text" name="" placeholder="Review title*" id="" />
        <div className="flex gap-6 my-4">
          <input className="bg-[#0e06050a] w-full py-2 px-4 rounded-md outline-primary" type="text" name="" placeholder="Phone*" id="" />
          <input className="bg-[#0e06050a] w-full py-2 px-4 rounded-md outline-primary" type="email" placeholder="Email*" name="" id="" />
        </div>
        <textarea className="bg-[#0e06050a] w-full py-2 px-4 rounded-md outline-primary" name="" id="" rows="6" placeholder="Review summary*"></textarea>
        <input type="submit" value="Submit review" className="bg-primary text-white font-semibold px-8 mt-3 py-2 rounded-md" />
      </form>
    </div>
  );
};

export default CourseDetailsLeaveThought;