const logo = 'https://i.ibb.co/1sJpdBm/Icon.png';
const logo2 = 'https://i.ibb.co/qyH3WKH/Icon-1.png';
const logo3 = 'https://i.ibb.co/2gqZzz9/Icon-2.png';
const firstArrow = 'https://i.ibb.co/3msNpBY/Arrow.png';
const secondArrow = 'https://i.ibb.co/ZY17Dw4/Vector-12.png';
const AboutPurchaseCourse = () => {
  return (
    <div className="w-4/5 mx-auto my-24 lg:flex justify-between gap-7 md:grid md:grid-cols-2 grid-cols-1">
      <div>
        <div className="flex items-center gap-20">
          <div className="bg-primary p-5 rounded-full shadow-md">
            <img className="h-7 w-7" src={logo} alt="" />
          </div>
          <div>
            <img src={firstArrow} alt="" />
          </div>
        </div>
        <h4 className="tracking-[-1px] font-bold leading-8 mt-4 mb-2">Choose any courses</h4>
        <p className="opacity-70 w-[270px]">Conveniently revolutionize intuitive testing procedures vis-a-vis best-of-breed internal .</p>
      </div>
      <div className="md:my-0 my-4">
        <div className="flex items-center gap-20">
          <div className="bg-[#525FE1] p-5 rounded-full shadow-md">
            <img className="h-7 w-7" src={logo2} alt="" />
          </div>
          <div>
            <img src={firstArrow} alt="" />
          </div>
        </div>
        <h4 className="tracking-[-1px] font-bold leading-8 mt-4 mb-2">Purchase your course</h4>
        <p className="opacity-70 w-[270px]">Conveniently revolutionize intuitive testing procedures vis-a-vis best-of-breed internal .</p>
      </div>
      <div>
        <div className="flex">
          <div className="bg-[#FFA41B] p-5 rounded-full shadow-md">
            <img className="h-7 w-7" src={logo3} alt="" />
          </div>
        </div>
        <h4 className="tracking-[-1px] font-bold leading-8 mt-4 mb-2">Great start! Learn</h4>
        <p className="opacity-70 w-[270px]">Conveniently revolutionize intuitive testing procedures vis-a-vis best-of-breed internal .</p>
      </div>
    </div>
  );
};

export default AboutPurchaseCourse;