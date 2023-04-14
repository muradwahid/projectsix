const image = 'https://i.ibb.co/px6RSs7/Img-2.png';
const logo = 'https://i.ibb.co/7j0Rjz1/discover.png';
const logo1 = 'https://i.ibb.co/LRt6bFk/sms-notification.png';
const logo2 = 'https://i.ibb.co/VDjJZd5/people.png';
const logo3 = 'https://i.ibb.co/H4ct8FG/graph.png';
const Home2ChooseUs = () => {
  return (
    <div className="w-4/5 mx-auto">
      <div className="flex lg:flex-row flex-col-reverse gap-20">
        <div className="lg:w-[50%]">
          <p className="text-primary font-semibold tracking-[0.16em] uppercase mb-6">Why choose us</p>
          <div className="leading-[48px] mb-6">
            <h2>The place where</h2>
            <h2>you can achieve</h2>
          </div>
          <p className="opacity-70 mb-10">Donec bibendum, dui id ultrices molestie, neque neque
            porta felis, id viverra ligula justo interdum mi.</p>
          <div className="flex gap-8">
            <div className="flex flex-col gap-8">
            <div className="flex gap-2">
              <div className='h-[24px] w-[34px]'>
                <img className='h-full w-full'  src={logo} alt="" />
              </div>
              <p className="font-semibold tracking-[-0.5px] font-outfit">Get all courses from a single platform.</p>
            </div>
            <div className="flex gap-2">
              <div className='h-[24px] w-[34px]'>
                <img  className='h-full w-full' src={logo2} alt="" />
              </div>
                <p className="font-semibold tracking-[-0.5px] font-outfit">Collaborate on real projects to learn things.</p>
            </div>
            </div>

            <div className=" flex flex-col gap-8">
            <div className="flex gap-2">
              <div className='h-[24px] w-[34px]'>
                <img  className='h-full w-full' src={logo1} alt="" />
              </div>
              <p className="font-semibold tracking-[-0.5px] font-outfit">Get all courses from a single platform.</p>
            </div>
            <div className="flex gap-2">
              <div className='h-[24px] w-[34px]'>
                <img  className='h-full w-full' src={logo3} alt="" />
              </div>
                <p className="font-semibold tracking-[-0.5px] font-outfit">Collaborate on real projects to learn things.</p>
            </div>

            </div>
          </div>
          <div className="flex mt-10"><button className="bg-primary font-semibold shadow-button text-white py-[8px] px-4 rounded-lg mt-4 flex items-center gap-2"><span>Get started</span> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path></svg></button></div>
        </div>
        <div className="lg:w-[50%]">
          <img className="w-full" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home2ChooseUs;