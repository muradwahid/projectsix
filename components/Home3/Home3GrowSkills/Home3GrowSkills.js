const image = 'https://i.ibb.co/fXRSQVv/Img-21.png';
const logo = 'https://i.ibb.co/025btPW/discover.png';
const logo1 = 'https://i.ibb.co/wptzwD7/sms-notification.png';
const logo2 = 'https://i.ibb.co/c87Vx0n/people.png';
const logo3 = 'https://i.ibb.co/K5srccD/graph.png';
const shape = 'https://i.ibb.co/g7vrvzz/Element-2.png';
const bgShape = 'https://i.ibb.co/gSL7pK8/Ellipse-5.png';
const Home3GrowSkills = () => {
  return (
    <div className="overflow-hidden mt-28">
      <div className="w-4/5 mx-auto">
        <div className="flex lg:flex-row flex-col-reverse gap-20">
          <div className="lg:w-[50%]">
            <div className="leading-[56px] mb-6">
              <h2 className='text-[#12141D] font-[800]'>Grow your skill, </h2>
              <h2 className='text-[#12141D] font-[800]'>define your</h2>
              <div className="relative">
                <img className="absolute z-[-10] -top-3 -left-3" src={shape} alt="" />
                <h2 className='text-accent font-[800]'>bright future</h2>
              </div>
            </div>
            <p className="opacity-70 mb-10">Donec bibendum, dui id ultrices molestie, neque neque
              porta felis, id viverra ligula justo interdum mi.</p>
            <div className="flex gap-8">
              <div className="flex flex-col gap-8">
                <div className="flex gap-2">
                  <div className='h-[24px] w-[34px]'>
                    <img className='h-full w-full' src={logo} alt="" />
                  </div>
                  <p className="font-semibold tracking-[-0.5px] font-outfit">Get all courses from a single platform.</p>
                </div>
                <div className="flex gap-2">
                  <div className='h-[24px] w-[34px]'>
                    <img className='h-full w-full' src={logo2} alt="" />
                  </div>
                  <p className="font-semibold tracking-[-0.5px] font-outfit">Collaborate on real projects to learn things.</p>
                </div>
              </div>

              <div className=" flex flex-col gap-8">
                <div className="flex gap-2">
                  <div className='h-[24px] w-[34px]'>
                    <img className='h-full w-full' src={logo1} alt="" />
                  </div>
                  <p className="font-semibold tracking-[-0.5px] font-outfit">Get all courses from a single platform.</p>
                </div>
                <div className="flex gap-2">
                  <div className='h-[24px] w-[34px]'>
                    <img className='h-full w-full' src={logo3} alt="" />
                  </div>
                  <p className="font-semibold tracking-[-0.5px] font-outfit">Collaborate on real projects to learn things.</p>
                </div>

              </div>
            </div>
            <div className="flex mt-10"><button className="bg-[#12141D] font-semibold shadow-button font-inter text-white py-[8px] px-6 rounded-full mt-4 gap-2">Get started now</button></div>
          </div>
          <div className="lg:w-[50%] relative">
            <img className="w-full" src={image} alt="" />
            <img src={bgShape} className='absolute top-0 -right-32' alt="" />
          </div>
        </div>
      </div>
   </div>
  );
};

export default Home3GrowSkills;