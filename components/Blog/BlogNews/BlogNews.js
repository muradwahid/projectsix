import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const image = 'https://i.ibb.co/XJjRbtp/Img-1.png';
const image2 = 'https://i.ibb.co/mSTGJ0t/Img-2.png';
const image3 = 'https://i.ibb.co/LtsBN41/Img-3.png';
const image4 = 'https://i.ibb.co/ZdQ7Y6H/Img-6.png';
const image5 = 'https://i.ibb.co/hd691Ph/Img.png';
const image6 = 'https://i.ibb.co/VYXJ3YX/Img-7.png';
const BlogNews = () => {
  return (
    <div className='w-4/5 mx-auto mt-20'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-4'>
        <div>
          <div>
            <img src={image} className="w-full" alt="" />
          </div>
          <div className='pr-2'>
            <div className='flex items-center gap-8'>
              <div className='flex items-center gap-1 opacity-70 my-3 text-[#0E0605]'>
                <span className='text-[30px] mt-[-20px]'>.</span>
                <p>05 Feb, 2022</p>
              </div>
              <div className='flex items-center gap-1 opacity-70 text-[#0E0605]'>
                <span className='text-[30px] mt-[-20px]'>.</span>
                <p>5 min</p>
              </div>
            </div>
            <div>
              <h5 className='tracking-[-1px] mb-3' >New Features Enhance Virtual
                Teaching Learning</h5>
              <Link href='/' className='text-primary underline mb-3'>Read more</Link>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={image2} className="w-full" alt="" />
          </div>
          <div className='pr-2'>
            <div className='flex items-center gap-8'>
              <div className='flex items-center gap-1 opacity-70 my-3 text-[#0E0605]'>
                <span className='text-[30px] mt-[-20px]'>.</span>
                <p>05 Feb, 2022</p>
              </div>
              <div className='flex items-center gap-1 opacity-70 text-[#0E0605]'>
                <span className='text-[30px] mt-[-20px]'>.</span>
                <p>5 min</p>
              </div>
            </div>
            <div>
              <h5 className='tracking-[-1px] mb-3' >4 New Zoom Features Enhance Virtual Teaching Learning</h5>
              <Link href='/' className='text-primary underline mb-3'>Read more</Link>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={image3} className="w-full" alt="" />
          </div>
          <div className='pr-2'>
            <div className='flex items-center gap-8'>
              <div className='flex items-center gap-1 opacity-70 my-3 text-[#0E0605]'>
                <span className='text-[30px] mt-[-20px]'>.</span>
                <p>05 Feb, 2022</p>
              </div>
              <div className='flex items-center gap-1 opacity-70 text-[#0E0605]'>
                <span className='text-[30px] mt-[-20px]'>.</span>
                <p>5 min</p>
              </div>
            </div>
            <div>
              <h5 className='tracking-[-1px] mb-3' >Using Social Media to Support
                Online Teaching</h5>
              <Link href='/' className='text-primary underline mb-3'>Read more</Link>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={image4} className="w-full" alt="" />
          </div>
          <div className='pr-2'>
            <div className='flex items-center gap-8'>
              <div className='flex items-center gap-1 opacity-70 my-3 text-[#0E0605]'>
                <span className='text-[30px] mt-[-20px]'>.</span>
                <p>05 Feb, 2022</p>
              </div>
              <div className='flex items-center gap-1 opacity-70 text-[#0E0605]'>
                <span className='text-[30px] mt-[-20px]'>.</span>
                <p>5 min</p>
              </div>
            </div>
            <div>
              <h5 className='tracking-[-1px] mb-3' >Education Is About Create Leaders For Tomorrow</h5>
              <Link href='/' className='text-primary underline mb-3'>Read more</Link>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={image5} className="w-full" alt="" />
          </div>
          <div className='pr-2'>
            <div className='flex items-center gap-8'>
              <div className='flex items-center gap-1 opacity-70 my-3 text-[#0E0605]'>
                <span className='text-[30px] mt-[-20px]'>.</span>
                <p>05 Feb, 2022</p>
              </div>
              <div className='flex items-center gap-1 opacity-70 text-[#0E0605]'>
                <span className='text-[30px] mt-[-20px]'>.</span>
                <p>5 min</p>
              </div>
            </div>
            <div>
              <h5 className='tracking-[-1px] mb-3' >4 New Zoom Features Enhance Virtual Teaching Learning</h5>
              <Link href='/' className='text-primary underline mb-3'>Read more</Link>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={image6} className="w-full" alt="" />
          </div>
          <div className='pr-2'>
            <div className='flex items-center gap-8'>
              <div className='flex items-center gap-1 opacity-70 my-3 text-[#0E0605]'>
                <span className='text-[30px] mt-[-20px]'>.</span>
                <p>05 Feb, 2022</p>
              </div>
              <div className='flex items-center gap-1 opacity-70 text-[#0E0605]'>
                <span className='text-[30px] mt-[-20px]'>.</span>
                <p>5 min</p>
              </div>
            </div>
            <div>
              <h5 className='tracking-[-1px] mb-3' >Using Social Media to Support
                Online Teaching</h5>
              <Link href='/' className='text-primary underline mb-3'>Read more</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-3 justify-center border-t-2 border-b-2 py-3 mt-8 mb-20'>
        <div className='flex items-center justify-center border h-10 w-10 rounded-full'>
          <IoIosArrowBack className='text-[20px]'/>
        </div>
        <div className='flex items-center bg-primary border-primary justify-center text-white h-10 w-10 rounded-full'>
          <p>1</p>
          </div>
        <div className='flex items-center justify-center border h-10 w-10 rounded-full'>
          <p>2</p>
          </div>
        <div className='flex items-center justify-center border h-10 w-10 rounded-full'>
          <p>3</p>
          </div>
        <div className='flex items-center justify-center border h-10 w-10 rounded-full'>
          <IoIosArrowForward className='text-[20px]' />
        </div>
      </div>
    </div>
  );
};

export default BlogNews;