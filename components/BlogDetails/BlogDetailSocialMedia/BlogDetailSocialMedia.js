import { AiOutlineHeart, AiOutlineTwitter } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward, IoLogoWhatsapp } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { RiDoubleQuotesL } from "react-icons/ri";
const icon = 'https://i.ibb.co/xhVJSDr/tag.png';
const BlogDetailSocialMedia = () => {
  return (
    <div className="lg:w-[60%] mb-12">
      <div className="flex items-center md:gap-9 gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <CiUser className="text-primary text-[22px]" />
          <p className="opacity-70">Chaeol Wallstairs</p>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <img src={icon} alt="" />
          </div>
          <p className="opacity-70">Education</p>
        </div>
        <div className="flex items-center gap-2">
          <IoCalendarOutline className="text-[20px] text-primary" />
          <p className="opacity-70">15 Aug 2023</p>
        </div>
      </div>
      <div>
        <h2 className="leading-[52px] tracking-[-0.03em] capitalize my-8">Using Social Media to
          Support Online Teaching</h2>
        <div>
          <img src="https://i.ibb.co/g7KXh88/Img-8.png" alt="" />
        </div>
        <div>
          <p className="text-[24px] font-bold leading-8 tracking-[-1px] mt-5">Learned From Doing One Of Those Social Media</p>
          <p className="opacity-70 mt-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop </p>
        </div>
        <div className="flex gap-4 blogCardShadow rounded-xl px-8 py-7 my-8">
          <div>
            <RiDoubleQuotesL className="text-[30px] text-primary" />
          </div>
          <div>
            <p className="text-[18px] font-medium italic">“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour”</p>
          </div>
        </div>
        <div>
          <p className="text-[24px] font-bold leading-8 tracking-[-1px] mt-5">Key Summary</p>
          <p className="opacity-70">By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for specific uses under certain conditions. Ownership remains with UXTheme, and you are required to abide by the following terms.</p>
          <ul className="blogList mt-4 ml-5">
            <li className="">You have rights for royalty free use of our resources for any or all of your personal and commercial projects.</li>
            <li className="my-4">You are not required to attribute or link to UXTheme in any of projects.</li>
            <li>We reserve the rights to change prices and revise the resources usage policy in any moment.</li>
          </ul>
        </div>

        <div className="flex items-center justify-between gap-4 flex-wrap my-8">
          <div className="flex gap-4">
            <div className="bg-primary h-[45px] w-[45px] rounded-full flex items-center justify-center">
              <IoIosArrowBack className="text-[20px] text-white" />
            </div>
            <div>
              <p className="opacity-70">Previous post</p>
              <h5>Kiwistech template...</h5>
            </div>
          </div>
          <div className="flex gap-4">

            <div>
              <p className="opacity-70 text-right">Previous post</p>
              <h5>Kiwistech template...</h5>
            </div>
            <div className="bg-primary h-[45px] w-[45px] rounded-full flex items-center justify-center">
              <IoIosArrowForward className="text-[20px] text-white" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 flex-wrap border-t border-b py-6">
          <div className="flex items-center gap-7">
            <p className="font-bold text-[14px] uppercase tracking-[-0.05px]">Share:</p>
            <FaFacebookF className='text-[18px]'/>
            <AiOutlineTwitter className='text-[18px]' />
            <IoLogoWhatsapp className='text-[18px]'/>
            <FaLinkedinIn className='text-[18px]'/>
        </div>
          <div className="text-[20px] flex items-center gap-7">
            <FiLink/>
            <AiOutlineHeart/>
        </div>

        </div>
      </div>
    </div>
  );
};

export default BlogDetailSocialMedia;