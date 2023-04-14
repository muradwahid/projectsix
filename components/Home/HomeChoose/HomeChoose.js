const quote = 'https://i.ibb.co/0FqzMB9/quotes.png';
const avater = 'https://i.ibb.co/71mWk80/Ellipse-21.png';
const HomeChoose = () => {
  return (
    <div className='bg-[#0E0605] pt-32 mt-[112px] pb-28'>
      <div className='w-4/5 mx-auto flex justify-between lg:flex-row flex-col gap-4 border-b border-[#6b5653] pb-8'>
        <div className='lg:w-1/2'>
          <p className='text-primary font-bold uppercase text-[14px] mb-4'>why choose us</p>
          <h2 className='text-white lg:w-[470px] leading-[48px] mb-4'>Creating A Community Of
            Life Long Learners</h2>
          <p className='text-white opacity-70 leading-7'>Donec bibendum, dui id ultrices molestie, neque neque porta felis, id viverra ligula justo interdum mi. Nunc malesuada, risus consec maximus consequat, purus enim ultricies nisi,</p>
        </div>
        <div className='flex gap-x-20'>
          <div>
            <div className='mb-14'>
              <h2 className='font-medium text-white'>52k+</h2>
              <p className='text-primary text-[14px] uppercase font-bold tracking-[-0.5px]'>enrolled students</p>
            </div>
            <div>
              <h2 className='font-medium text-white'>125+</h2>
              <p className='text-primary text-[14px] uppercase font-bold tracking-[-0.5px]'>winning award</p>
            </div>
          </div>
          <div>
            <div className='mb-14'>
              <h2 className='font-medium text-white'>348+</h2>
              <p className='text-primary text-[14px] uppercase font-bold tracking-[-0.5px]'>academic programs</p>
            </div>

            <div>
              <h2 className='font-medium text-white'>37k+</h2>
              <p className='text-primary text-[14px] uppercase font-bold tracking-[-0.5px]'>certified students</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-4/5 mx-auto flex items-center'>
        <div className=''>
          <img className='w-[800px] h-[400px] ' src={quote} alt="" />
        </div>
        <div className='ml-[-100px] mt-32'>
          <h3 className='italic text-[40px] font-[400] tracking-[-0.03em] text-white'>You might he raised on a .rm. sommimes languages are difficult and difficult to the right
            the adjective to go with noun.</h3>
          <div className='flex items-center justify-between mt-10'>
            <div className='flex items-center gap-4'>
              <div>
                <img src={avater} alt="" />
              </div>
              <div>
                <h5 className='text-white tracking-[-1px]'>Felipe M.</h5>
                <p className='text-white opacity-70'>UI/UX Designer</p>
              </div>
            </div>
            <div className="flex gap-4 items-center mt-10">
              <div className="bg-white h-[10px] w-[10px] rounded-full">
                <span className="z-50"></span>
              </div>
              <div className="border border-white rounded-full p-[10px]">
                <p className="bg-primary h-[7px] w-[7px] rounded-full"></p>
              </div>
              <div className="bg-white h-[10px] w-[10px]  rounded-full"><span className="z-50"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeChoose;