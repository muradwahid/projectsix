import { AiFillLinkedin, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from 'react-icons/bs';
const footerBg = 'https://i.ibb.co/xzX8Hmr/Group-1000001372.png';
const Footer = () => {
  return (
    <div>
      <div className='w-[90%] mx-auto rounded-[22px]' style={{ backgroundImage: `url(${footerBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className='flex justify-between gap-6 flex-wrap px-12 py-28'>
          <div className='w-[270px]'>
            <div className='flex mb-5'>
              <h5 className='italic text-white'>Educarso</h5>
              <span className='text-primary text-[20px]'>.</span>
            </div>
            <p className='text-white opacity-70'>Donec bibendum, dui id ultrices molestie, neque neque porta felis,</p>
          </div>
          <div>
            <ul>
              <li className='uppercase text-[14px] font-bold text-primary'>services</li>
              <li className='text-white font-medium mt-2'>Email Marketing</li>
              <li className='text-white font-medium my-2'>Campaigns</li>
              <li className='text-white font-medium mb-2'>Branding</li>
              <li className='text-white font-medium'>Offline</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className='uppercase text-[14px] font-bold text-primary'>about</li>
              <li className='text-white font-medium my-2'>Our Story</li>
              <li className='text-white font-medium'>Benefits</li>
              <li className='text-white font-medium my-2'>Team</li>
              <li className='text-white font-medium'>Careers</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className='uppercase text-[14px] font-bold text-primary'>help</li>
              <li className='text-white font-medium my-2'>FAQs</li>
              <li className='text-white font-medium'>Contact Us</li>
            </ul>
          </div>
          <div className='w-[270px]'>
            <h4 className='font-bold text-[24px] text-white'>Subscribe to our
              newsletter</h4>
            <div>
              <div className='relative mt-4'>
                <input className='w-full pl-10 pr-3 rounded-[6px] py-2' type="text" placeholder='Enter your mail' />
                <AiOutlineMail className='absolute left-3 top-1/2 translate-y-[-50%] text-[#aaaaaa]' />
              </div>
              <button className='text-white rounded-[6px] mt-5 bg-primary w-full py-2'>Subscribe now</button>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[85%] mx-auto flex items-center justify-between py-3'>
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

export default Footer;