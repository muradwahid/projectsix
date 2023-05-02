import Link from 'next/link';
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
const image = 'https://i.ibb.co/XJjRbtp/Img-1.png';
const image2 = 'https://i.ibb.co/mSTGJ0t/Img-2.png';
const image3 = 'https://i.ibb.co/LtsBN41/Img-3.png';
const bgImage = 'https://i.ibb.co/rb5Q2PF/BG-6.png';
const BlogDetailsPopularTopics = () => {
  return (
    <div className="lg:w-[40%] w-full">
      <div className="relative">
        <input type="text" className="w-full bg-[#FAFAFA] placeholder:text-[#938F8F] px-6 py-[10px] outline-primary rounded-md" placeholder="Type to search" id="" />
        <HiOutlineMagnifyingGlass className="absolute right-4 top-1/2 translate-y-[-50%] text-[20px]"/>
      </div>
      <div className='grid gap-4 mt-8'>
        <h5 className="uppercase">Popular topics</h5>
        <div>
          <div className='flex items-center gap-3 w-full sm:flex-row flex-col'>
            <div className=''>
              <img src={image} className="sm:w-[170px] sm:h-[120px] w-full" alt="" />
            </div>
            <div className='w-[284px]'>
              <div className='flex items-center gap-8'>
                <div className='flex items-center text-[15px] gap-1 opacity-70 text-[#0E0605]'>
                  <span className='text-[30px] mt-[-20px]'>.</span>
                  <p>05 Feb, 2022</p>
                </div>
                <div className='flex items-center gap-1 text-[15px] opacity-70 text-[#0E0605]'>
                  <span className='text-[30px] mt-[-20px]'>.</span>
                  <p>5 min</p>
                </div>
              </div>
              <div>
                <h5 className='tracking-[-1px] mb-1 my-2 text-[18px]' >Eco-Education in Our Lives: We Can Change the Future</h5>
                <Link href='/' className='text-primary underline mb-3 text-[15px]'>Read more</Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='flex items-center gap-3 w-full sm:flex-row flex-col'>
            <div className=''>
              <img src={image2} className="sm:w-[170px] sm:h-[120px] w-full" alt="" />
            </div>
            <div className='w-[284px]'>
              <div className='flex items-center gap-8'>
                <div className='flex items-center text-[15px] gap-1 opacity-70 text-[#0E0605]'>
                  <span className='text-[30px] mt-[-20px]'>.</span>
                  <p>05 Feb, 2022</p>
                </div>
                <div className='flex items-center gap-1 text-[15px] opacity-70 text-[#0E0605]'>
                  <span className='text-[30px] mt-[-20px]'>.</span>
                  <p>5 min</p>
                </div>
              </div>
              <div>
                <h5 className='tracking-[-1px] mb-1 my-2 text-[18px]' >4 New Zoom Features Enhance Virtual Teaching Learning</h5>
                <Link href='/' className='text-primary underline mb-3 text-[15px]'>Read more</Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='flex items-center gap-3 w-full sm:flex-row flex-col'>
            <div className=''>
              <img src={image3} className="sm:w-[170px] sm:h-[120px] w-full" alt="" />
            </div>
            <div className='w-[284px]'>
              <div className='flex items-center gap-8'>
                <div className='flex items-center text-[15px] gap-1 opacity-70 text-[#0E0605]'>
                  <span className='text-[30px] mt-[-20px]'>.</span>
                  <p>05 Feb, 2022</p>
                </div>
                <div className='flex items-center gap-1 text-[15px] opacity-70 text-[#0E0605]'>
                  <span className='text-[30px] mt-[-20px]'>.</span>
                  <p>5 min</p>
                </div>
              </div>
              <div>
                <h5 className='tracking-[-1px] mb-1 my-2 text-[18px]' >Education Is About Create Leaders For Tomorrow</h5>
                <Link href='/' className='text-primary underline mb-3 text-[15px]'>Read more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-12 py-10 rounded-3xl my-10' style={{backgroundImage:`url(${bgImage})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}>
        <p className='uppercase text-primary text-[14px] font-bold tracking-[-0.05px] leading-[20px]'>join us today</p>
        <p className='text-[32px] font-bold leading-[36px] tracking-[-0.03em] capitalize text-white mt-3'>Unlimited courses for year end</p>
        <button className='font-medium tracking-[-0.5px] text-white bg-primary px-5 py-2 rounded-md mt-5'>Get started now</button>
      </div>
      <div>
        <p className='uppercase text-[14px] font-bold tracking-[-0.5px]'>tag</p>
        <div className='flex gap-3 flex-wrap mt-4'>
          <p className='bg-[#F5F0EE] font-medium leading-[26px] px-3 py-1 rounded-md'>Learning</p>
          <p className='bg-[#F5F0EE] font-medium leading-[26px] px-3 py-1 rounded-md'>Course</p>
          <p className='bg-[#F5F0EE] font-medium leading-[26px] px-3 py-1 rounded-md'>Kids</p>
          <p className='bg-[#F5F0EE] font-medium leading-[26px] px-3 py-1 rounded-md'>Business</p>
          <p className='bg-[#F5F0EE] font-medium leading-[26px] px-3 py-1 rounded-md'>Education</p>
          <p className='bg-[#F5F0EE] font-medium leading-[26px] px-3 py-1 rounded-md'>Online</p>
          <p className='bg-[#F5F0EE] font-medium leading-[26px] px-3 py-1 rounded-md'>Edutech</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPopularTopics;