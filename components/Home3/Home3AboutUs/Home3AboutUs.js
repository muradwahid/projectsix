
const check = 'https://i.ibb.co/f83HNdp/Mask-group-1.png';
const image = 'https://i.ibb.co/TwkC7Fq/Img-14.png';
const Home3AboutUs = () => {
  return (
    <div className='w-4/5 mx-auto flex justify-between gap-6 lg:flex-row flex-col'>
      <div className="-ml-[6%] lg:w-[50%]">
        <img className="w-full" src={image} alt="" />
      </div>
      <div className='lg:w-[45%]'>
        <div className="leading-[56px]">
          <div className="flex items-center gap-2">
            <h2 className="font-[800]">Over</h2>
            <div className="relative">
              <img className="absolute z-[-10]" src="https://i.ibb.co/Wg7hkSB/Element-4.png" alt="" />
              <h2 className="text-accent font-[800]">10 years</h2>
            </div>
          </div>
          <h2 className="font-[800]">in distance learning for skill development</h2>
        </div>
        <p className="mt-4">Donec bibendum, dui id ultrices molestie, neque neque
          porta felis, id viverra ligula justo interdum mi. Monotonectally negotiate leveraged imperatives vis-a-vis standardized users. </p>

        <div className='mt-8'>
          <p className='flex items-center gap-2 font-semibold'> <img src={check} alt="" /> <span>9/10 Average Satisfaction Rate</span></p>
          <p className='flex items-center gap-2 font-semibold my-3'> <img src={check} alt="" /><span>96% Completitation Rate</span></p>
          <p className='flex items-center gap-2 font-semibold'> <img src={check} alt="" /><span>Friendly Environment & Expert Teacher</span></p>
        </div>
        <div className='flex mt-8'>
          <button className="bg-[#1F2148] text-white font-[600] font-inter px-6 py-2 rounded-full">More about us</button>
        </div>
      </div>

    </div>
  );
};

export default Home3AboutUs;