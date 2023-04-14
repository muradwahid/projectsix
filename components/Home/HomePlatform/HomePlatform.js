import ButtonTypo from "@/components/ButtonTypo/ButtonTypo";
import { AiFillCheckCircle } from "react-icons/ai";
const image = 'https://i.ibb.co/MkmbPLc/Img.png';
const HomePlatform = () => {
  return (
    <div className='w-4/5 mx-auto flex justify-between gap-6 lg:flex-row flex-col-reverse'>
      <div className='lg:w-[45%]'>
        <div className='leading-[48px]'>
          <p className='text-[14px] uppercase text-primary font-bold'>best online learning platform</p>
        </div>
        <h2>One Platfrom & Many Courses For You</h2>
        <p>Donec bibendum, dui id ultrices molestie, neque neque
          porta felis, id viverra ligula justo interdum mi. Monotonectally negotiate leveraged imperatives vis-a-vis standardized users. </p>

        <div className='border-t pt-8 mt-8'>
          <p className='flex items-center gap-2 font-semibold'> <AiFillCheckCircle /> <span>9/10 Average Satisfaction Rate</span></p>
          <p className='flex items-center gap-2 font-semibold my-3'> <AiFillCheckCircle /> <span>96% Completitation Rate</span></p>
          <p className='flex items-center gap-2 font-semibold'> <AiFillCheckCircle /> <span>Friendly Environment & Expert Teacher</span></p>
        </div>
        <div className='flex mt-8'>
          <ButtonTypo bg={'bg-primary'} text={'text-white'}>Explore our courses</ButtonTypo>
        </div>
      </div>
      <div >
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default HomePlatform;