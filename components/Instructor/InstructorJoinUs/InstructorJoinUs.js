
import ButtonTypo from "@/components/ButtonTypo/ButtonTypo";
import { BsFillTelephoneFill } from "react-icons/bs";
const image = 'https://i.ibb.co/smRq6nG/Group-1000001365.png';
const InstructorJoinUs = () => {
  return (
    <div className='w-[90%] mx-auto my-[112px] rounded-[22px]' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className='w-[80%] mx-auto flex items-center justify-between lg:flex-row flex-col py-[70px]'>
        <div>
          <p className='text-primary text-[14px] font-bold uppercase mb-4'>Join us today</p>
          <h3 className='text-white'>Have enough skills for become a mentor?</h3>
        </div>
        <div className=''>
          <div>
            <ButtonTypo bg={'bg-primary'} ><div className='flex items-center gap-2'>
              <BsFillTelephoneFill className='text-white' />
              <span className='text-white'>Join us today</span>
            </div></ButtonTypo>
          </div>
        </div>
      </div>
    </div>
  )
};

export default InstructorJoinUs;