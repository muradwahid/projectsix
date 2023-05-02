import Link from "next/link";

const image = 'https://i.ibb.co/XJjRbtp/Img-1.png';
const image2 = 'https://i.ibb.co/mSTGJ0t/Img-2.png';
const image3 = 'https://i.ibb.co/LtsBN41/Img-3.png';
const BlogDetailsSimillerPost = () => {
  return (
    <div className="w-4/5 mx-auto my-12">
      <p className="text-[14px] font-bold tracking-[-0.05px] uppercase text-primary">Similar post</p>
      <div className="flex justify-between gap-3 flex-wrap items-center">

          <h2 className="capitalize tracking-[-0.03em]">You may read</h2>
        <div className="">
          <button className="bg-[#0E0605] text-white px-5 py-2 rounded-md">View all post</button>
        </div>
      </div>
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
      </div>
    </div>
  );
};

export default BlogDetailsSimillerPost;