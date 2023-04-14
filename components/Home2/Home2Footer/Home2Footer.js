import { AiFillLinkedin, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from 'react-icons/bs';
const Home2Footer = () => {
  return (
    <div className="w-4/5 mx-auto">
      <div className='flex justify-between gap-6 flex-wrap py-28'>
        <div className='w-[270px]'>
          <div className='flex mb-5'>
            <h5 className='italic '>Educarso</h5>
            <span className='text-primary text-[20px]'>.</span>
          </div>
          <p className=' opacity-70'>Donec bibendum, dui id ultrices molestie, neque neque porta felis,</p>
        </div>
        <div>
          <ul>
            <li className='uppercase text-[14px] font-bold text-primary'>services</li>
            <li className=' font-medium mt-4'>Email Marketing</li>
            <li className=' font-medium my-4'>Campaigns</li>
            <li className=' font-medium mb-4'>Branding</li>
            <li className=' font-medium'>Offline</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className='uppercase text-[14px] font-bold text-primary'>about</li>
            <li className=' font-medium my-4'>Our Story</li>
            <li className=' font-medium'>Benefits</li>
            <li className=' font-medium my-4'>Team</li>
            <li className=' font-medium'>Careers</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className='uppercase text-[14px] font-bold text-primary'>help</li>
            <li className=' font-medium my-4'>FAQs</li>
            <li className=' font-medium'>Contact Us</li>
          </ul>
        </div>
        <div className='w-[270px]'>
          <h4 className='font-bold text-[24px] '>Subscribe to our
            newsletter</h4>
          <div>
            <div className='relative mt-4'>
              <input className='w-full pl-10 pr-3 bg-[#ececec] outline-primary rounded-[6px] py-2' type="text" placeholder='Enter your mail' />
              <AiOutlineMail className='absolute left-3 top-1/2 translate-y-[-50%] text-[#aaaaaa]' />
            </div>
            <button className=' rounded-[6px] flex items-center gap-2 text-white justify-center mt-5 bg-primary w-full py-2'><span>Subscribe now</span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path></svg></button>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between py-3'>
        <div>
          <p className='opacity-70'>©2023- Educarso.</p>
        </div>
        <div className='flex items-center gap-3'>
          <AiOutlineTwitter className='text-[#BAA299] text-[18px]' />
          <AiFillLinkedin className='text-[#BAA299] text-[18px]' />
          <BsFacebook className='text-[#BAA299] text-[18px]' />
        </div>
      </div>
    </div>
  );
};

export default Home2Footer;