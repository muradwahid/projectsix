const bg = 'https://i.ibb.co/Q9MV9Dq/BG-4.png';
const image = 'https://i.ibb.co/qrcxY8T/Group-1000001604.png';
const Home2RegisterToday = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-4/5 mx-auto flex items-center lg:flex-row flex-col lg:gap-24 gap-10 pt-20">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="lg:pb-0 pb-8">
          <h2 className="text-white leading-[48px] font-outfit">Education is about<br className="lg:block hidden" /> <span className="text-primary">creating leader</span> for<br className="lg:block hidden" /> tomorrow</h2>
          <p className="font-inter text-white opacity-70 mt-6 mb-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Vitae quisque id a, ac urna. Sagittis, ornare ut nibh porta</p>

          <div>
            <button className="font-work-sans flex items-center gap-3 rounded-lg bg-[#FF8181] text-white font-[600] py-2 px-6"><span>Register today</span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path></svg></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2RegisterToday;