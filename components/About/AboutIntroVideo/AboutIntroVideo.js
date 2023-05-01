import { BiPlay } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";
const bgImage = 'https://i.ibb.co/MnbwP41/BG-6.png';
const AboutIntroVideo = () => {
  return (
    <div>
      <div className="md:w-[70%] w-full mx-auto -mb-52">
        <div className="text-center">
          <p className="uppercase text-primary text-[14px] font-bold mb-4">intro video</p>
          <div className="leading-[48px] tracking-[-0.03em]">
            <h2>Learn Anytime</h2>
            <h2>From Anywhere</h2>
          </div>
          <div className="relative mt-12">
            <img src="	https://i.ibb.co/8DMz6d5/Img-10.png" alt="" />
            <label htmlFor="my-modal-3">
              <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex items-center justify-center rounded-full  w-[65px] h-[65px] bg-white shadow cursor-pointer">
                <BiPlay className="text-primary text-[28px]" />
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="pt-[300px]" style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: "no-repeat", backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <div className='w-4/5 mx-auto flex justify-between lg:flex-row flex-col gap-4 pb-8'>
          <div className='lg:w-1/2'>
            <p className='text-primary font-bold uppercase text-[14px] mb-4'>Best Online Learning Platform</p>
            <h2 className=' lg:w-[500px] leading-[48px] mb-4 border-b pb-3'>One Platfrom & Many Courses For You</h2>
            <div className="mt-3 ">
              <div className="flex items-center gap-3">
                <BsCheckCircleFill />
                <p className="font-medium tracking-[-0.5px]">9/10 Average Satisfaction Rate</p>
              </div>
              <div className="flex items-center gap-3 my-2">
                <BsCheckCircleFill />
                <p className="font-medium tracking-[-0.5px]">9/10 Average Satisfaction Rate</p>
              </div>
              <div className="flex items-center gap-3">
                <BsCheckCircleFill />
                <p className="font-medium tracking-[-0.5px]">9/10 Average Satisfaction Rate</p>
              </div>
            </div>

          </div>
          <div className='flex gap-x-20'>
            <div>
              <div className='mb-14'>
                <h2 className='font-medium '>52k+</h2>
                <p className='text-primary text-[14px] uppercase font-bold tracking-[-0.5px]'>enrolled students</p>
              </div>
              <div>
                <h2 className='font-medium '>125+</h2>
                <p className='text-primary text-[14px] uppercase font-bold tracking-[-0.5px]'>winning award</p>
              </div>
            </div>
            <div>
              <div className='mb-14'>
                <h2 className='font-medium '>348+</h2>
                <p className='text-primary text-[14px] uppercase font-bold tracking-[-0.5px]'>academic programs</p>
              </div>

              <div>
                <h2 className='font-medium '>37k+</h2>
                <p className='text-primary text-[14px] uppercase font-bold tracking-[-0.5px]'>certified students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default AboutIntroVideo;