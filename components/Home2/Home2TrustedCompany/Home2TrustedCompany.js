const logo = 'https://i.ibb.co/K7fSFM5/Logo-1.png';
const logo2 = 'https://i.ibb.co/sCKHvfw/Logo-2.png';
const logo3 = 'https://i.ibb.co/ZWFBGtp/Logo-3.png';
const logo4 = 'https://i.ibb.co/5nMFRcj/Logo-4.png';
const logo5 = 'https://i.ibb.co/9s9mhPQ/Logo-5.png';
const logo6 = 'https://i.ibb.co/7z5sWqd/Logo-6.png';
const Home2TrustedCompany = () => {
  return (
    <div className="w-4/5 mx-auto my-28">
      <p className="text-center font-inter uppercase tracking-[0.16em] font-semibold mb-7">Trusted By 1k+ Company Arround The World!</p>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 border-[#12141d33] border-t-2 border-b-2 py-3">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <img src={logo2} alt="" />
        </div>
        <div>
          <img src={logo3} alt="" />
        </div>
        <div>
          <img src={logo4} alt="" />
        </div>
        <div>
          <img src={logo5} alt="" />
        </div>
        <div>
          <img src={logo6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home2TrustedCompany;