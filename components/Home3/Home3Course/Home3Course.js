import { AiFillStar } from "react-icons/ai";
import { BsBookmarkDash } from "react-icons/bs";

const image = 'https://i.ibb.co/xGFhGTZ/Img-15.png';
const image2 = 'https://i.ibb.co/RDkKyZX/Img-16.png';
const image3 = 'https://i.ibb.co/jLMBfkJ/Img-17.png';
const image4 = 'https://i.ibb.co/wdsKRQ7/Img-18.png';
const image5 = 'https://i.ibb.co/r5R4xTV/Img-19.png';
const image6 = 'https://i.ibb.co/bdTHjkj/Img-20.png';
const avatar = 'https://i.ibb.co/2P9Pd7X/Ellipse-29.png'
const avatar2 = 'https://i.ibb.co/L1Zrkft/Avatar-1.png';
const avatar3 = 'https://i.ibb.co/brfqSVT/Ellipse-29-1.png';
const avatar4 = 'https://i.ibb.co/JvTmVTq/Ellipse-29-2.png';
const avatar5 = 'https://i.ibb.co/BfkPGMt/Ellipse-29-3.png';
const avatar6 = 'https://i.ibb.co/7zX50bF/Ellipse-29-4.png';
const folder = 'https://i.ibb.co/YkkvvdR/folder-minus.png';
const shape = 'https://i.ibb.co/Z68bHZB/Frame-476.png';
const Home3Course = () => {
  return (
    <div className="bg-[#E3F5F4] relative mt-24 py-24">
      <img src={shape} className='absolute right-0 -top-12' alt="" />
      <div className="">
        <div className="flex items-center gap-2 justify-center flex-wrap">
          <h2 className="font-inter text-[#1F2148] font-[800]">Enroll unlimited</h2>
          <div className="relative z-20">
            <img className="absolute -z-10 bottom-0" src="https://i.ibb.co/mXyKhbQ/Element-5.png" alt="" />
            <h2 className="font-[800] text-accent">course</h2>
          </div>
        </div>
        <div className="flex items-end font-bold gap-8 text-center justify-center">
          <div className="text-accent font-bold">
            <p className="text-right text-[12px]">8</p>
            <p>ALL</p>
          </div>
          <p>Trending</p>
          <p>Featured</p>
          <p>Popular</p>
        </div>
      </div>
      <div className="w-4/5 mx-auto">
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 cursor-pointer mt-8'>
        
          <div className='bg-white rounded-xl relative overflow-hidden popular-card flex'>
            <button className="home3Button absolute font-inter font-semibold bg-accent z-50 px-6 text-white py-2 rounded-full bottom-3 left-3">Enroll now</button>
            <div className=''>
              <img className='w-[300px] h-full object-cover' src={image} alt="" />
              <div className='absolute top-5 left-5 bg-white text-[16px] p-2 rounded-full'>
                <BsBookmarkDash/>
              </div>

            </div>
            <div className="px-6 py-6">
              <div className=''>
                <div className='flex items-center justify-between'>
                  <p className='uppercase text-[#1F2148] opacity-70 text-[14px] font-[600] tracking-[0.16em] mb-1'>Art & Design</p>
                  <div className='flex items-center gap-4'>
                    <div className='flex items-center'>
                      <div>
                        <img src='https://i.ibb.co/Wnc03HY/frame.png' alt="" />
                      </div>
                      <p className='text-[#0E0605] font-medium'>17</p>
                    </div>
                    <div className='flex items-center'>
                      <div>
                        <img src={folder} alt="" />
                      </div>
                      <p className='text-[#0E0605] font-medium'>10</p>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <h5 className='pb-4'>Basic fundamentals of interior & graphics design</h5>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-3'>
                      <div>
                        <img src={avatar} alt="" />
                      </div>
                      <div>
                        <p className='font-bold'>Dianne Russell</p>
                        <div className='flex'>
                          <AiFillStar className='text-[#FFB60A]' />
                          <AiFillStar className='text-[#FFB60A]' />
                          <AiFillStar className='text-[#FFB60A]' />
                          <AiFillStar className='text-[#FFB60A]' />
                          <AiFillStar className='text-[#FFB60A]' />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className='text-accent'>$15</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-xl relative overflow-hidden popular-card flex'>
            <button className="home3Button absolute font-inter font-semibold bg-accent z-50 px-6 text-white py-2 rounded-full bottom-3 left-3">Enroll now</button>
            <div className=''>
              <img className='w-[300px] h-full object-cover' src={image2} alt="" />
              <div className='absolute top-5 left-5 bg-white text-[16px] p-2 rounded-full'>
                <BsBookmarkDash/>
              </div>

            </div>
            <div className="px-6 py-6">
              <div className=''>
                <div className='flex items-center justify-between'>
                  <p className='uppercase text-[#1F2148] opacity-70 text-[14px] font-[600] tracking-[0.16em] mb-1'>Art & Design</p>
                  <div className='flex items-center gap-4'>
                    <div className='flex items-center'>
                      <div>
                        <img src='https://i.ibb.co/Wnc03HY/frame.png' alt="" />
                      </div>
                      <p className='text-[#0E0605] font-medium'>17</p>
                    </div>
                    <div className='flex items-center'>
                      <div>
                        <img src={folder} alt="" />
                      </div>
                      <p className='text-[#0E0605] font-medium'>10</p>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <h5 className='pb-4'>Basic fundamentals of interior & graphics design</h5>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-3'>
                      <div>
                        <img src={avatar2} alt="" />
                      </div>
                      <div>
                        <p className='font-bold'>Kristin Watson</p>
                        <div className='flex'>
                          <AiFillStar className='text-[#FFB60A]' />
                          <AiFillStar className='text-[#FFB60A]' />
                          <AiFillStar className='text-[#FFB60A]' />
                          <AiFillStar className='text-[#FFB60A]' />
                          <AiFillStar className='text-[#FFB60A]' />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className='text-accent'>$15</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-xl relative overflow-hidden popular-card flex'>
            <button className="home3Button absolute font-inter font-semibold bg-accent z-50 px-6 text-white py-2 rounded-full bottom-3 left-3">Enroll now</button>
            <div className=''>
              <img className='w-[300px] h-full object-cover' src={image3} alt="" />
              <div className='absolute top-5 left-5 bg-white text-[16px] p-2 rounded-full'>
                <BsBookmarkDash/>
              </div>

            </div>
            <div className="px-6 py-6">
              <div className=''>
                <div className='flex items-center justify-between'>
                  <p className='uppercase text-[#1F2148] opacity-70 text-[14px] font-[600] tracking-[0.16em] mb-1'>Art & Design</p>
                  <div className='flex items-center gap-4'>
                    <div className='flex items-center'>
                      <div>
                        <img src='https://i.ibb.co/Wnc03HY/frame.png' alt="" />
                      </div>
                      <p className='text-[#0E0605] font-medium'>17</p>
                    </div>
                    <div className='flex items-center'>
                      <div>
                        <img src={folder} alt="" />
                      </div>
                      <p className='text-[#0E0605] font-medium'>10</p>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <h5 className='pb-4'>Basic fundamentals of interior & graphics design</h5>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-3'>
                      <div>
                        <img src={avatar3} alt="" />
                      </div>
                      <div>
                        <p className='font-bold'>Esther Howard</p>
                        <div className='flex'>
                          <AiFillStar className='text-[#FFB60A]' />
                          <AiFillStar className='text-[#FFB60A]' />
                          <AiFillStar className='text-[#FFB60A]' />
                          <AiFillStar className='text-[#FFB60A]' />
                          <AiFillStar className='text-[#FFB60A]' />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className='text-accent'>$15</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-xl relative overflow-hidden popular-card flex'>
            <button className="home3Button absolute font-inter font-semibold bg-accent z-50 px-6 text-white py-2 rounded-full bottom-3 left-3">Enroll now</button>
            <div className=''>
              <img className='w-[300px] h-full object-cover' src={image4} alt="" />
              <div className='absolute top-5 left-5 bg-white text-[16px] p-2 rounded-full'>
                <BsBookmarkDash/>
              </div>

            </div>
            <div className="px-6 py-6">
              <div className=''>
                <div className='flex items-center justify-between'>
                  <p className='uppercase text-[#1F2148] opacity-70 text-[14px] font-[600] tracking-[0.16em] mb-1'>Art & Design</p>
                  <div className='flex items-center gap-4'>
                    <div className='flex items-center'>
                      <div>
                        <img src='https://i.ibb.co/Wnc03HY/frame.png' alt="" />
                      </div>
                      <p className='text-[#0E0605] font-medium'>17</p>
                    </div>
                    <div className='flex items-center'>
                      <div>
                        <img src={folder} alt="" />
                      </div>
                      <p className='text-[#0E0605] font-medium'>10</p>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <h5 className='pb-4'>Basic fundamentals of interior & graphics design</h5>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-3'>
                      <div>
                        <img src={avatar4} alt="" />
                      </div>
                      <div>
                        <p className='font-bold'>Robert Fox</p>
                        <div className='flex'>
                          <AiFillStar className='text-[#FFB60A]' />
                          <AiFillStar className='text-[#FFB60A]' />
                          <AiFillStar className='text-[#FFB60A]' />
                          <AiFillStar className='text-[#FFB60A]' />
                          <AiFillStar className='text-[#FFB60A]' />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className='text-accent'>$15</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-xl relative overflow-hidden popular-card flex'>
            <button className="home3Button absolute font-inter font-semibold bg-accent z-50 px-6 text-white py-2 rounded-full bottom-3 left-3">Enroll now</button>
            <div className=''>
              <img className='w-[300px] h-full object-cover' src={image5} alt="" />
              <div className='absolute top-5 left-5 bg-white text-[16px] p-2 rounded-full'>
                <BsBookmarkDash/>
              </div>

            </div>
            <div className="px-6 py-6">
              <div className=''>
                <div className='flex items-center justify-between'>
                  <p className='uppercase text-[#1F2148] opacity-70 text-[14px] font-[600] tracking-[0.16em] mb-1'>Art & Design</p>
                  <div className='flex items-center gap-4'>
                    <div className='flex items-center'>
                      <div>
                        <img src='https://i.ibb.co/Wnc03HY/frame.png' alt="" />
                      </div>
                      <p className='text-[#0E0605] font-medium'>17</p>
                    </div>
                    <div className='flex items-center'>
                      <div>
                        <img src={folder} alt="" />
                      </div>
                      <p className='text-[#0E0605] font-medium'>10</p>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <h5 className='pb-4'>Basic fundamentals of interior & graphics design</h5>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-3'>
                      <div>
                        <img src={avatar5} alt="" />
                      </div>
                      <div>
                        <p className='font-bold'>Eleanor Pena</p>
                        <div className='flex'>
                          <AiFillStar className='text-[#FFB60A]' />
                          <AiFillStar className='text-[#FFB60A]' />
                          <AiFillStar className='text-[#FFB60A]' />
                          <AiFillStar className='text-[#FFB60A]' />
                          <AiFillStar className='text-[#FFB60A]' />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className='text-accent'>$15</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-xl relative overflow-hidden popular-card flex'>
            <button className="home3Button absolute font-inter font-semibold bg-accent z-50 px-6 text-white py-2 rounded-full bottom-3 left-3">Enroll now</button>
            <div className=''>
              <img className='w-[300px] h-full object-cover' src={image6} alt="" />
              <div className='absolute top-5 left-5 bg-white text-[16px] p-2 rounded-full'>
                <BsBookmarkDash/>
              </div>

            </div>
            <div className="px-6 py-6">
              <div className=''>
                <div className='flex items-center justify-between'>
                  <p className='uppercase text-[#1F2148] opacity-70 text-[14px] font-[600] tracking-[0.16em] mb-1'>Art & Design</p>
                  <div className='flex items-center gap-4'>
                    <div className='flex items-center'>
                      <div>
                        <img src='https://i.ibb.co/Wnc03HY/frame.png' alt="" />
                      </div>
                      <p className='text-[#0E0605] font-medium'>17</p>
                    </div>
                    <div className='flex items-center'>
                      <div>
                        <img src={folder} alt="" />
                      </div>
                      <p className='text-[#0E0605] font-medium'>10</p>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <h5 className='pb-4'>Basic fundamentals of interior & graphics design</h5>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-3'>
                      <div>
                        <img src={avatar6} alt="" />
                      </div>
                      <div>
                        <p className='font-bold'>Courtney Henry</p>
                        <div className='flex'>
                          <AiFillStar className='text-[#FFB60A]' />
                          <AiFillStar className='text-[#FFB60A]' />
                          <AiFillStar className='text-[#FFB60A]' />
                          <AiFillStar className='text-[#FFB60A]' />
                          <AiFillStar className='text-[#FFB60A]' />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className='text-accent'>$15</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-14">
          <button className="font-inter font-semibold bg-[#1F2148] px-6 text-white py-2 rounded-full">View all course</button>
        </div>
      </div>
    </div>
  );
};

export default Home3Course;