import { AiFillLinkedin, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from 'react-icons/bs';
const bg = 'https://i.ibb.co/dbBkMKk/BG-4.png';
const Home3Footer = () => {
  return (
    <div>
      <div style={{backgroundImage:`url(${bg})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>
      <div className="w-4/5 mx-auto">
        <div className='flex justify-between gap-6 flex-wrap py-28'>
          <div className='w-[270px]'>
            <div className='flex mb-5'>
              <h5 className='italic '>Educarso</h5>
              <span className='text-accent text-[20px]'>.</span>
            </div>
            <p className=' opacity-70'>Donec bibendum, dui id ultrices molestie, neque neque porta felis,</p>
          </div>
          <div>
            <ul>
              <li className='uppercase text-[14px] font-bold text-accent'>services</li>
              <li className=' font-medium mt-4'>Email Marketing</li>
              <li className=' font-medium my-4'>Campaigns</li>
              <li className=' font-medium mb-4'>Branding</li>
              <li className=' font-medium'>Offline</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className='uppercase text-[14px] font-bold text-accent'>about</li>
              <li className=' font-medium my-4'>Our Story</li>
              <li className=' font-medium'>Benefits</li>
              <li className=' font-medium my-4'>Team</li>
              <li className=' font-medium'>Careers</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className='uppercase text-[14px] font-bold text-accent'>help</li>
              <li className=' font-medium my-4'>FAQs</li>
              <li className=' font-medium'>Contact Us</li>
            </ul>
          </div>
          <div className='w-[270px]'>
            <h4 className='font-bold text-[24px] '>Subscribe to our
              newsletter</h4>
            <div>
              <div className='relative mt-4'>
                <input className='w-full pl-10 pr-3 bg-[#ececec] outline-accent rounded-full py-2' type="text" placeholder='Enter your mail' />
                <AiOutlineMail className='absolute left-3 top-1/2 translate-y-[-50%] text-[#aaaaaa]' />
              </div>
              <button className=' rounded-full flex items-center gap-2 text-white justify-center mt-5 bg-accent w-full py-2'>Subscribe now</button>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="w-4/5 mx-auto">
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
    </div>
  );
};

export default Home3Footer;