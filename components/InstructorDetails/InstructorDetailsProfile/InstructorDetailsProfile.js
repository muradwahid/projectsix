import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const image = 'https://i.ibb.co/cNsW8Yf/Img-4.png';
const InstructorDetailsProfile = () => {
  return (
    <div className="bg-[#0E0605] p-10 rounded-3xl">
      <div>
        <img className="w-full" src={image} alt="" />
      </div>
      <div>
        <p className="text-white opacity-70 mt-6">Designer</p>
        <h4 className="text-white">Jay Phillips</h4>
        <div className="border-t border-b border-[#ffffff26] py-4 my-4">
          <p className="text-white 2xl:text-[16px] text-[15px]"><strong>Call:</strong>  (+987) 987 654 321</p>
          <p  className="text-white 2xl:text-[16px] text-[15px]"><strong>Email:</strong>  phillips.example@gmail.com</p>
        </div>
        <div className="text-white flex items-center text-[20px] gap-8 mb-8 mt-7">
          <AiOutlineTwitter />
          <AiFillLinkedin />
          <BsFacebook/>
        </div>
        <button className="bg-primary text-white px-5 py-2 rounded-md">Contact with me</button>
      </div>
    </div>
  );
};

export default InstructorDetailsProfile;