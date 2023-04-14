import { BsArrowUpRight } from "react-icons/bs";

const bg = 'https://i.ibb.co/KG7bwy6/Mask-Group-1.png';
const image = 'https://i.ibb.co/429kf6F/Img-11.png';
const image2 = 'https://i.ibb.co/3TCd0BQ/Img-12.png';
const image3 = 'https://i.ibb.co/qxLvq4G/Img-13.png';
const image4 = 'https://i.ibb.co/F5db33Y/Img-14.png';
const shape = 'https://i.ibb.co/gv5jCrF/Combined-Shape-2.png';
const Home3Blogs = () => {
  return (
    <div className=" py-20 mt-24 relative" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      <img src={shape} className='absolute left-0 bottom-0' alt="" />
      <div className="w-4/5 mx-auto">
        <div className="flex items-center justify-between gap-5 flex-wrap">
          <div class="flex gap-3">
            <h2 class="tracking-[-0.03em] font-inter font-[800]">Our latest</h2>
            <div class="relative">
              <img class="absolute z-[-10] bottom-3" src="https://i.ibb.co/rdwGdyP/Element-5.png" alt="" />
              <h2 class="font-inter font-[800] text-accent"> blogs</h2>
            </div>
          </div>
          <button class="font-inter flex items-center gap-3 rounded-full shadow-button bg-[#1F2148] text-white font-semibold py-2 px-6">View blog</button>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1  gap-5 mt-8">
          <div className="flex gap-4 items-center bg-white px-4 py-4 rounded-xl home3BlogShadow">
            <div className="">
              <img className="w-full h-full" src={image} alt="" />
            </div>
            <div className="w-[70%]">
              <ul className="list-disc ml-5 text-[#1F2148] opacity-50 uppercase font-inter text-[14px] font-medium flex items-center gap-12">
                <li>05 FEB, 2022</li>
                <li>5 MIN</li>
              </ul>
              <h5 className="font-[700] my-1 leading-7">Eco-Education in Our Lives: We Can Change the Future</h5>
              <button className="flex items-center gap-3 text-accent font-inter font-semibold border-b border-accent"><span>Read more</span> <BsArrowUpRight /></button>
            </div>
          </div>
          <div className="flex gap-4 items-center bg-white px-4 py-4 rounded-xl home3BlogShadow">
            <div className="">
              <img className="w-full h-full" src={image2} alt="" />
            </div>
            <div className="w-[70%]">
              <ul className="list-disc ml-5 text-[#1F2148] opacity-50 uppercase font-inter text-[14px] font-medium flex items-center gap-12">
                <li>05 FEB, 2022</li>
                <li>5 MIN</li>
              </ul>
              <h5 className="font-[700] my-1 leading-7">Eco-Education in Our Lives: We Can Change the Future</h5>
              <button className="flex items-center gap-3 text-accent font-inter font-semibold border-b border-accent"><span>Read more</span> <BsArrowUpRight /></button>
            </div>
          </div>
          <div className="flex gap-4 items-center bg-white px-4 py-4 rounded-xl home3BlogShadow">
            <div className="">
              <img className="w-full h-full" src={image3} alt="" />
            </div>
            <div className="w-[70%]">
              <ul className="list-disc ml-5 text-[#1F2148] opacity-50 uppercase font-inter text-[14px] font-medium flex items-center gap-12">
                <li>05 FEB, 2022</li>
                <li>5 MIN</li>
              </ul>
              <h5 className="font-[700] my-1 leading-7">Eco-Education in Our Lives: We Can Change the Future</h5>
              <button className="flex items-center gap-3 text-accent font-inter font-semibold border-b border-accent"><span>Read more</span> <BsArrowUpRight /></button>
            </div>
          </div>
          <div className="flex gap-4 items-center bg-white px-4 py-4 rounded-xl home3BlogShadow">
            <div className="">
              <img className="w-full h-full" src={image4} alt="" />
            </div>
            <div className="w-[70%]">
              <ul className="list-disc ml-5 text-[#1F2148] opacity-50 uppercase font-inter text-[14px] font-medium flex items-center gap-12">
                <li>05 FEB, 2022</li>
                <li>5 MIN</li>
              </ul>
              <h5 className="font-[700] my-1 leading-7">Eco-Education in Our Lives: We Can Change the Future</h5>
              <button className="flex items-center gap-3 text-accent font-inter font-semibold border-b border-accent"><span>Read more</span> <BsArrowUpRight /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home3Blogs;