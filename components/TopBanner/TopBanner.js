import { BsDot } from "react-icons/bs";
const bgImage = 'https://i.ibb.co/xhjzvc9/BG-5.png';
const topBanner = ({tittle,path}) => {
  return (
    <div className="h-[360px]" style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex items-center justify-center pt-[180px]">
        <div className="w-4/5 mx-auto">
          <h2 className="text-center">{tittle}</h2>
          <div className="flex gap-3 items-center justify-center">
            <p className="font-medium">Home</p>
            <div className="text-primary flex items-center">
              <BsDot className="text-[22px]" />
              <p>{path}</p>
            </div>
          </div>
        </div>
</div>
    </div>
  );
};

export default topBanner;