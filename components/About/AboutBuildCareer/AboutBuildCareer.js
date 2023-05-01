const bgImage = 'https://i.ibb.co/CMGk8Cp/BG-8.png';
const bgImage2 = 'https://i.ibb.co/WcqMmWH/BG-5.png';
const AboutBuildCareer = () => {
  return (
    <div className="w-4/5 mb-32 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10">
      <div className="sm:px-20 sm:py-12 px-8 py-6 rounded-3xl" style={{backgroundImage:`url(${bgImage})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}>
        <p className="text-[14px] uppercase text-white font-bold tracking-[-0.5px]">Build your career</p>
        <p className="text-[32px] my-3 font-bold text-white capitalize tracking-[-0.03em]">Do you want to tech here?</p>
        <p className="text-white mb-4">Conveniently revolutionize intuitive testing procedures vis-a-vis best-of-breed internal .</p>
        <button className="bg-[#0E0605] text-white px-6 py-2 rounded-md">Get Started</button>
      </div>
      <div className="sm:px-20 sm:py-12 px-8 py-6 rounded-3xl" style={{backgroundImage:`url(${bgImage2})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}>
        <p className="text-[14px] uppercase text-primary font-bold tracking-[-0.5px]">Build your career</p>
        <p className="text-[32px] my-3 font-bold text-black capitalize tracking-[-0.03em]">Do you want to tech here?</p>
        <p className="text-black mb-4">Conveniently revolutionize intuitive testing procedures vis-a-vis best-of-breed internal .</p>
        <button className="bg-[#0E0605] text-white px-6 py-2 rounded-md">Get Started</button>
      </div>
    </div>
  );
};

export default AboutBuildCareer;