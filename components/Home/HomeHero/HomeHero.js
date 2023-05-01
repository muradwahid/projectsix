import { AiFillStar, AiOutlineMail } from "react-icons/ai";
const image = 'https://i.ibb.co/nD8CmSx/trustpilot.png';
function HomeHero() {
  return (
    <section className={`backgroundImageStyle lg:h-[125vh] lg:pt-0 pt-20`}>
      <div className='w-4/5 mx-auto'>
        <div className='lg:pt-[40vh] pt-[8vh] lg:w-1/2 lg:text-left text-center leading-[65px]'>
          <div className=''>
            <h1 className='font-[700]'>Committed to</h1>
            <h1 className='font-[700]'>learn excellence</h1>
            <h1 className='text-primary font-[700]'> in education</h1>
          </div>
          <div className=' mb-12 flex flex-col lg:items-start items-center justify-center'>
            <p className='leading-7 text-[18px] my-7'>It is long established that a reader will be distracted
              by <br /> thereadable popular and best content.</p>
            <div className='flex md:w-[470px] w-full relative'>
              <AiOutlineMail className='absolute top-1/2 translate-y-[-50%] left-5 text-[#0E0605]' />
              <input className='h-[50px] md:w-[75%] w-full rounded-l-md pl-11' type="text" name="" placeholder='Enter your mail' id="" />
              <button className='bg-primary h-[50px] w-[115px] font-[500] rounded-r-md text-white flex items-center justify-center  sm:text-[16px] text-[12px]'><span>Get started</span></button>
            </div>
          </div>
          <div className='flex items-center gap-2 lg:justify-start justify-center flex-wrap'>
            <div><img src={image} alt="" /></div>
            <div className='flex'>
              <AiFillStar className='text-[18px] text-[#F59E0B]' />
              <AiFillStar className='text-[18px] text-[#F59E0B]' />
              <AiFillStar className='text-[18px] text-[#F59E0B]' />
              <AiFillStar className='text-[18px] text-[#F59E0B]' />
              <AiFillStar className='text-[18px] text-[#F59E0B]' />
            </div>
            <p className='font-medium'>4900+ 5 Stars</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;