import { FiAirplay } from "react-icons/fi";
import { BsHeadphones } from "react-icons/bs";
import ButtonTypo from "@/components/ButtonTypo/ButtonTypo";
const aboutImage = 'https://i.ibb.co/pbhbLZ4/Img-1.png';
const image = 'https://i.ibb.co/ZTLph8h/Group-185.png';
const image2 = 'https://i.ibb.co/6ZTjkhJ/Group-187.png';
const image3 = 'https://i.ibb.co/YymtcR7/Group-188.png';
const image4 = 'https://i.ibb.co/yYJR6Qc/Group-186.png';
const image5 = 'https://i.ibb.co/YZ2sLFL/askimat.png';
const image6 = 'https://i.ibb.co/ZTLph8h/Group-185.png'
const HomeAbout = () => {
  return (
    <div className='w-4/5 mx-auto'>
      <div className='flex justify-between lg:flex-row flex-col mt-32'>
        <div className='lg:w-[55%] h-full'>
          <img className='w-full h-full' src={aboutImage} alt="" />
        </div>
        <div className='lg:w-[40%] lg:mt-0 mt-8'>
          <p className='uppercase text-[14px] font-bold text-primary mb-8 '>About Us</p>
          <h2 className='leading-[48px]'>The highest result
            of education is tolerance</h2>
          <p className='my-5'>Donec bibendum, dui id ultrices molestie, neque neque
            porta felis, id viverra ligula justo interdum mi. </p>
          <div className='border-t pt-8'>
            <div className='flex items-center gap-3'>
              <div className='bg-[#B5E4CA] p-[14px] rounded-full text-[18px]'>
                <FiAirplay />
              </div>
              <div>
                <h5>Flexible Classes</h5>
                <p>Created by our talented designer</p>
              </div>
            </div>
            <div className='flex items-center gap-3 mt-5'>
              <div className='bg-[#FFBC99] p-[14px] rounded-full text-[18px]'>
                <BsHeadphones />
              </div>
              <div>
                <h5>Educator Support</h5>
                <p>We are not tolerant about taste</p>
              </div>
            </div>
            <div className='flex mt-8'>
              <ButtonTypo bg={'bg-primary'} text={'text-white'}>Get started</ButtonTypo>
            </div>
          </div>
        </div>
      </div>
      <div className='my-[112px]'>
        <p className='text-[14px] font-bold text-primary text-center'>Trusted By 1k+ Company Arround The World!</p>
        <div className='flex justify-between items-center flex-wrap gap-4 my-12'>
          <img src={image} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" />
          <img src={image6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;