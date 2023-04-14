
const image = 'https://i.ibb.co/mqJNZwV/Img-10.png';
const image2 = 'https://i.ibb.co/gRPrT73/Img-11.png';
const image3 = 'https://i.ibb.co/rmWqz0V/Img-12.png';
const Home2LatestBlog = () => {
  return (
    <div className="relative">
      <div className="w-[40px] text-[17px] absolute bottom-8 right-20 text-[#BAA299] "><div className="flex gap-1"><span>+</span><span>+</span><span>+</span><span>+</span></div><div className="mt-[-10px] flex gap-1"><span>+</span><span>+</span><span>+</span><span>+</span></div></div>
      <div className="w-4/5 mx-auto lg:my-28 md:my-24 my-20">
        <div className="flex justify-between items-center gap-3 flex-wrap">
          <div>
            <p className="font-inter font-semibold tracking-[0.16em] text-primary uppercase">news & update</p>
            <h2 className="font-outfit">Our latest blogs</h2>
          </div>
          <div>
            <button className="font-inter flex items-center gap-3 rounded-md shadow-button bg-primary text-white font-semibold py-2 px-6"><span>View all</span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path></svg></button>
          </div>
        </div>

        <div className=" mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <div>
              <img className='w-full' src={image} alt="" />
            </div>
            <div className="py-3">
              <ul className="list-disc flex gap-9 ml-4">
                <li className="uppercase text-[14px] font-semibold tracking-[0.16em] font-inter text-primary ">05 Feb, 2022</li>
                <li className="uppercase text-[14px] font-semibold tracking-[0.16em] font-inter text-primary">5 min</li>
              </ul>
              <p className="text-[24px] font-[700] font-outfit leading-[30px] my-4">New Features Enhance Virtual
                Teaching Learning</p>
              
              <div>
                <button className="font-inter text-primary border-b border-primary mb-7 flex items-center gap-3 font-semibold"><span>Read more</span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path></svg></button>
              </div>

            </div>
          </div>
          <div>
            <div>
              <img className='w-full' src={image2} alt="" />
            </div>
            <div className="py-3">
              <ul className="list-disc flex gap-9 ml-4">
                <li className="uppercase text-[14px] font-semibold tracking-[0.16em] font-inter text-primary ">05 Feb, 2022</li>
                <li className="uppercase text-[14px] font-semibold tracking-[0.16em] font-inter text-primary">5 min</li>
              </ul>
              <p className="text-[24px] font-[700] font-outfit leading-[30px] my-4">4 New Zoom Features Enhance Virtual Teaching Learning</p>
              
              <div>
                <button className="font-inter text-primary border-b border-primary mb-7 flex items-center gap-3 font-semibold"><span>Read more</span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path></svg></button>
              </div>

            </div>
          </div>
          <div>
            <div>
              <img className='w-full' src={image3} alt="" />
            </div>
            <div className="py-3">
              <ul className="list-disc flex gap-9 ml-4">
                <li className="uppercase text-[14px] font-semibold tracking-[0.16em] font-inter text-primary ">05 Feb, 2022</li>
                <li className="uppercase text-[14px] font-semibold tracking-[0.16em] font-inter text-primary">5 min</li>
              </ul>
              <p className="text-[24px] font-[700] font-outfit leading-[30px] my-4">Using Social Media to Support
                Online Teaching</p>
              
              <div>
                <button className="font-inter text-primary border-b border-primary mb-7 flex items-center gap-3 font-semibold"><span>Read more</span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path></svg></button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2LatestBlog;