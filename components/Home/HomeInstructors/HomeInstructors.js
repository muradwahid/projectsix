import ButtonTypo from "@/components/ButtonTypo/ButtonTypo";
import { AiOutlineStar, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaPinterestP, FaGoogle } from "react-icons/fa";
const image = 'https://i.ibb.co/3Rc2rSB/Img-1.png';
const image2 = 'https://i.ibb.co/NLSYYDS/Img-2.png';
const image3 = 'https://i.ibb.co/nrVjwSp/Img-3.png';
const image4 = 'https://i.ibb.co/hLKJnNq/Img-4.png';
const avatarIcon = 'https://i.ibb.co/5MCs6Tx/frame.png';
const HomeInstructors = () => {
  return (
    <div className='w-4/5 mx-auto mt-[112px]'>
      <div className='flex items-center justify-between gap-4 lg:flex-row flex-col mb-8'>
        <div className='lg:w-[470px]'>
          <p className='text-[14px] font-bold text-primary uppercase'>our expert instructors</p>
          <h2 className='tracking-[-0.03em]'>Expert Instructors</h2>
        </div>
        <div className='lg:w-[490px]'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quisque id a, ac urna. Sagittis, ornare ut nibh porta adipiscing ut elit.</p>
        </div>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
        <div className='parentHoverStyle'>
          <div className='relative rounded-[20px]'>
            <img className='rounded-[20px] w-full' src={image} alt="" />
            <div className='absolute top-0 bg-[#ff6058c2] rounded-2xl h-full px-6 childHoverStyle'>
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
          <div className='relative rounded-[20px]'>
            <img className='rounded-[20px] w-full' src={image2} alt="" />
            <div className='absolute top-0 bg-[#ff6058c2] rounded-2xl h-full px-6 childHoverStyle'>
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
            <h5>Wade Warren</h5>
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
          <div className='relative rounded-[20px]'>
            <img className='rounded-[20px] w-full' src={image3} alt="" />
            <div className='absolute top-0 bg-[#ff6058c2] rounded-2xl h-full px-6 childHoverStyle'>
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
          <div className='relative rounded-[20px]'>
            <img className='rounded-[20px] w-full' src={image4} alt="" />
            <div className='absolute top-0 bg-[#ff6058c2] rounded-2xl h-full px-6 childHoverStyle'>
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
            <h5>Leslie Alexander</h5>
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
          <ButtonTypo bg={'bg-primary'} text={'text-white'}>View all instructor</ButtonTypo>
        </div>
      </div>
    </div>
  );
};

export default HomeInstructors;