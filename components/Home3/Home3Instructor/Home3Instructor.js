import { AiOutlineStar, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaPinterestP, FaGoogle } from "react-icons/fa";
const image = 'https://i.ibb.co/HH4rxDg/Img-1.png';
const image2 = 'https://i.ibb.co/ySM4ZKR/Img-2.png';
const image3 = 'https://i.ibb.co/5ntv7qD/Img-3.png';
const image4 = 'https://i.ibb.co/GWXZSft/Img-4.png';
const avatarIcon = 'https://i.ibb.co/fYXcJC6/frame.png';
const shape = 'https://i.ibb.co/31PQvxH/Combined-Shape-1.png';
const shape2 = 'https://i.ibb.co/fx6skQM/Element-4.png';

const Home3Instructor = () => {
  return (
    <div className="relative">
      <img className='absolute bottom-5 left-10' src={shape2} alt="" />
      <img className='absolute right-0 top-14' src={shape} alt="" />
      <div className='w-4/5 mx-auto mt-[112px] mb-[80px]'>
        <div className='mb-8 font-outfit'>
          <div className='text-center'>
            <div className="flex gap-3 justify-center mb-12">
              <h2 className='tracking-[-0.03em] font-inter font-[800]'>Expert</h2>
              <div className="relative">
                <img className="absolute z-[-10]" src="https://i.ibb.co/b3T9Tgd/Vector.png" alt="" />
                <h2 className="font-inter font-[800] text-accent"> Instructors</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
          <div className='parentHoverStyle'>
            <div className='relative'>
              <img className='w-full' src={image} alt="" />
              <div className='absolute top-0 home3OverLay cursor-pointer h-full px-6 childHoverStyle'>
                <p className='text-[20px] text-white kaushan-script-font mt-[40%]'>" On he a was on that can offers of didn't back by exploration, attached understanding. "</p>
                <div className='flex items-center text-[18px] text-white mt-3'>
                  <div className="p-3 transition-all duration-300 rounded-full hover:bg-accent">
                    <AiOutlineTwitter />
                  </div>
                  <div className="p-3 transition-all duration-300 rounded-full hover:bg-accent">

                    <FaLinkedinIn />
                  </div>
                  <div className="p-3 transition-all duration-300 rounded-full hover:bg-accent">

                    <FaGoogle />
                  </div>
                  <div className="p-3 transition-all duration-300 rounded-full hover:bg-accent">

                    <FaPinterestP />
                  </div>
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
                    <AiOutlineStar className='text-accent' />
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
              <div className='absolute top-0 home3OverLay cursor-pointer h-full px-6 childHoverStyle'>
                <p className='text-[20px] text-white kaushan-script-font mt-[40%]'>" On he a was on that can offers of didn't back by exploration, attached understanding. "</p>
                <div className='flex items-center text-[18px] text-white mt-3'>
                  <div className="p-3 transition-all duration-300 rounded-full hover:bg-accent">
                    <AiOutlineTwitter />
                  </div>
                  <div className="p-3 transition-all duration-300 rounded-full hover:bg-accent">

                    <FaLinkedinIn />
                  </div>
                  <div className="p-3 transition-all duration-300 rounded-full hover:bg-accent">

                    <FaGoogle />
                  </div>
                  <div className="p-3 transition-all duration-300 rounded-full hover:bg-accent">

                    <FaPinterestP />
                  </div>
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
                    <AiOutlineStar className='text-accent' />
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
              <div className='absolute top-0 home3OverLay cursor-pointer h-full px-6 childHoverStyle'>
                <p className='text-[20px] text-white kaushan-script-font mt-[40%]'>" On he a was on that can offers of didn't back by exploration, attached understanding. "</p>
                <div className='flex items-center text-[18px] text-white mt-3'>
                  <div className="p-3 transition-all duration-300 rounded-full hover:bg-accent">
                    <AiOutlineTwitter />
                  </div>
                  <div className="p-3 transition-all duration-300 rounded-full hover:bg-accent">

                    <FaLinkedinIn />
                  </div>
                  <div className="p-3 transition-all duration-300 rounded-full hover:bg-accent">

                    <FaGoogle />
                  </div>
                  <div className="p-3 transition-all duration-300 rounded-full hover:bg-accent">

                    <FaPinterestP />
                  </div>
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
                    <AiOutlineStar className='text-accent' />
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
              <div className='absolute top-0 home3OverLay cursor-pointer h-full px-6 childHoverStyle'>
                <p className='text-[20px] text-white kaushan-script-font mt-[40%]'>" On he a was on that can offers of didn't back by exploration, attached understanding. "</p>
                <div className='flex items-center text-[18px] text-white mt-3'>
                  <div className="p-3 transition-all duration-300 rounded-full hover:bg-accent">
                    <AiOutlineTwitter />
                  </div>
                  <div className="p-3 transition-all duration-300 rounded-full hover:bg-accent">

                    <FaLinkedinIn />
                  </div>
                  <div className="p-3 transition-all duration-300 rounded-full hover:bg-accent">

                    <FaGoogle />
                  </div>
                  <div className="p-3 transition-all duration-300 rounded-full hover:bg-accent">

                    <FaPinterestP />
                  </div>
                </div>
              </div>
            </div>
            <div className='my-4'>
              <p className='opacity-70'>Content Creator</p>
              <h5>Cameron Williamson</h5>
            </div>
            <div>
              <div className='flex items-center justify-between border-t border-b py-1'>
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
                    <AiOutlineStar className='text-accent' />
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
            <button className="font-inter flex items-center gap-3 rounded-full shadow-button bg-[#1F2148] text-white font-semibold py-2 px-6">View all members</button>
          </div>
        </div>
      </div>
</div>
  );
};

export default Home3Instructor;