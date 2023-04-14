import Link from 'next/link';
const ButtonTypo = ({ children, link, bg, text }) => {
  return (
    <div className={`${bg ? bg : 'bg-white'} px-[22px] py-[8px] font-[600] rounded-[4px]`} >
      <Link href={`${link ? link : ''}`} className={`${text ? text : 'text-[#0E0605]'} text-[16px]`}>{children}</Link>
    </div>
  );
};
export default ButtonTypo;