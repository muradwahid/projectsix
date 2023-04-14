import { AiOutlineStar, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaPinterestP, FaGoogle } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
const image = 'https://i.ibb.co/HH4rxDg/Img-1.png';
const image2 = 'https://i.ibb.co/ySM4ZKR/Img-2.png';
const image3 = 'https://i.ibb.co/5ntv7qD/Img-3.png';
const image4 = 'https://i.ibb.co/GWXZSft/Img-4.png';
const avatarIcon = 'https://i.ibb.co/5MCs6Tx/frame.png';
const Home2Instructor = () => {
  return (
    <div className='w-4/5 mx-auto my-[112px] relative'>
      <div className="w-[40px] text-[17px] absolute top-0 -left-12 text-[#BAA299] "><div className="flex gap-1"><span>+</span><span>+</span><span>+</span><span>+</span></div><div className="mt-[-10px] flex gap-1"><span>+</span><span>+</span><span>+</span><span>+</span></div></div>
      <img src='https://i.ibb.co/V3Fr0xj/Element-1.png' className="absolute -right-24 bottom-0" alt="" />
      <div className='mb-8 font-outfit'>
        <div className='text-center'>
          <p className='text-[14px] font-bold text-primary uppercase'>our expert instructors</p>
          <h2 className='tracking-[-0.03em]'>Expert Instructors</h2>
        </div>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
        <div className='parentHoverStyle'>
          <div className='relative'>
            <img className='w-full' src={image} alt="" />
            <div className='absolute top-0 bg-[#4732BAc2] h-full px-6 childHoverStyle'>
              <p className='text-[20px] text-white kaushan-script-font mt-[40%]'>" On he a was on that can offers of didn't back by exploration, attached understanding. "</p>
              <div className='flex items-center gap-4 text-[18px] text-white mt-3'>
                <AiOutlineTwitter />
                <FaLinkedinIn />
                <FaGoogle />
                <FaPinterestP />
              </div>
            </div>
          </div>
          <div className='my-4'>
            <p className='opacity-70'>Designer</p>
            <h5>Jay Phillips</h5>
          </div>
          <div>
            <div className='flex itemcenter justify-between border-t border-b py-1'>
              <div className='flex items-center gap-1'>
                <div>
                  <img src={avatarIcon} alt=""></img>
                </div>
                <div className='flex items-center gap-1'>
                  <p className='opacity-70 font-medium'>Students</p>
                  <span className='font-medium'>50k</span>
                </div>
              </div>


              <div className='flex items-center gap-1'>
                <div>
                  <AiOutlineStar className='text-primary' />
                </div>
                <div className='flex items-center gap-1'>
                  <p className='opacity-70 font-medium'>Review</p>
                  <span className='font-medium'>100k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='parentHoverStyle'>
          <div className='relative '>
            <img className=' w-full' src={image2} alt="" />
            <div className='absolute top-0 bg-[#4732BAc2] h-full px-6 childHoverStyle'>
              <p className='text-[20px] text-white kaushan-script-font mt-[40%]'>" On he a was on that can offers of didn't back by exploration, attached understanding. "</p>
              <div className='flex items-center gap-4 text-[18px] text-white mt-3'>
                <AiOutlineTwitter />
                <FaLinkedinIn />
                <FaGoogle />
                <FaPinterestP />
              </div>
            </div>
          </div>
          <div className='my-4'>
            <p className='opacity-70'>Developer</p>
            <h5>Eleanor Pena</h5>
          </div>
          <div>
            <div className='flex itemcenter justify-between border-t border-b py-1'>
              <div className='flex items-center gap-1'>
                <div>
                  <img src={avatarIcon} alt=""></img>
                </div>
                <div className='flex items-center gap-1'>
                  <p className='opacity-70 font-medium'>Students</p>
                  <span className='font-medium'>50k</span>
                </div>
              </div>


              <div className='flex items-center gap-1'>
                <div>
                  <AiOutlineStar className='text-primary' />
                </div>
                <div className='flex items-center gap-1'>
                  <p className='opacity-70 font-medium'>Review</p>
                  <span className='font-medium'>100k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='parentHoverStyle'>
          <div className='relative '>
            <img className=' w-full' src={image3} alt="" />
            <div className='absolute top-0 bg-[#4732BAc2] h-full px-6 childHoverStyle'>
              <p className='text-[20px] text-white kaushan-script-font mt-[40%]'>" On he a was on that can offers of didn't back by exploration, attached understanding. "</p>
              <div className='flex items-center gap-4 text-[18px] text-white mt-3'>
                <AiOutlineTwitter />
                <FaLinkedinIn />
                <FaGoogle />
                <FaPinterestP />
              </div>
            </div>
          </div>
          <div className='my-4'>
            <p className='opacity-70'>Marketer</p>
            <h5>Jacob Jones</h5>
          </div>
          <div>
            <div className='flex itemcenter justify-between border-t border-b py-1'>
              <div className='flex items-center gap-1'>
                <div>
                  <img src={avatarIcon} alt=""></img>
                </div>
                <div className='flex items-center gap-1'>
                  <p className='opacity-70 font-medium'>Students</p>
                  <span className='font-medium'>50k</span>
                </div>
              </div>


              <div className='flex items-center gap-1'>
                <div>
                  <AiOutlineStar className='text-primary' />
                </div>
                <div className='flex items-center gap-1'>
                  <p className='opacity-70 font-medium'>Review</p>
                  <span className='font-medium'>100k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='parentHoverStyle'>
          <div className='relative '>
            <img className=' w-full' src={image4} alt="" />
            <div className='absolute top-0 bg-[#4732BAc2] h-full px-6 childHoverStyle'>
              <p className='text-[20px] text-white kaushan-script-font mt-[40%]'>" On he a was on that can offers of didn't back by exploration, attached understanding. "</p>
              <div className='flex items-center gap-4 text-[18px] text-white mt-3'>
                <AiOutlineTwitter />
                <FaLinkedinIn />
                <FaGoogle />
                <FaPinterestP />
              </div>
            </div>
          </div>
          <div className='my-4'>
            <p className='opacity-70'>Content Creator</p>
            <h5>Cameron Williamson</h5>
          </div>
          <div>
            <div className='flex itemcenter justify-between border-t border-b py-1'>
              <div className='flex items-center gap-1'>
                <div>
                  <img src={avatarIcon} alt=""></img>
                </div>
                <div className='flex items-center gap-1'>
                  <p className='opacity-70 font-medium'>Students</p>
                  <span className='font-medium'>50k</span>
                </div>
              </div>


              <div className='flex items-center gap-1'>
                <div>
                  <AiOutlineStar className='text-primary' />
                </div>
                <div className='flex items-center gap-1'>
                  <p className='opacity-70 font-medium'>Review</p>
                  <span className='font-medium'>100k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='flex justify-center items-center mt-16'>
          <button className="font-inter flex items-center gap-3 rounded-md shadow-button bg-primary text-white font-semibold py-2 px-6"><span>View all members</span><BsArrowUpRight /></button>
        </div>
      </div>
    </div>
  );
};

export default Home2Instructor;