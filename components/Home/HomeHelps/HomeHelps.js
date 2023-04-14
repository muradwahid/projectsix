import ButtonTypo from "@/components/ButtonTypo/ButtonTypo";
import { BsFillTelephoneFill } from "react-icons/bs";
const image = 'https://i.ibb.co/smRq6nG/Group-1000001365.png';
const HomeHelps = () => {
  return (
    <div className='w-[90%] mx-auto my-[112px] rounded-[22px]' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className='w-[80%] mx-auto flex items-center justify-between lg:flex-row flex-col py-[70px]'>
        <div>
          <p className='text-primary text-[14px] font-bold uppercase mb-4'>let us help</p>
          <h3 className='text-white'>Finding your right courses</h3>
        </div>
        <div className='flex gap-3 sm:flex-row flex-col'>
          <div>
            <ButtonTypo>View all members</ButtonTypo>
          </div>
          <div>
            <ButtonTypo bg={'bg-primary'} ><div className='flex items-center gap-2'>
              <BsFillTelephoneFill className='text-white' />
              <span className='text-white'>+9655 654 4496</span>
            </div></ButtonTypo>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHelps;