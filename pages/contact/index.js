import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import TopBanner from "@/components/TopBanner/TopBanner";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { HiMail } from "react-icons/hi";

const index = () => {
  return (
    <main>
      <NavBar />
      <TopBanner tittle={'Contact'} path={'Contact'} />
      <section className="w-4/5 mx-auto flex gap-12 justify-between md:flex-row flex-col my-16">
        <div>
          <p className="text-primary text-[14px] tracking-[-0.5px] font-bold uppercase leading-[20px] mb-3">contact us</p>
          <div className="leading-[48px] tracking-[-0.03em] capitalize">
            <h2>We want to </h2>
            <h2>hear from you</h2>
          </div>
          <div>
            <div className="flex gap-3 mt-4">
              <div>
                <div className="bg-primary flex p-2 rounded-full mt-2">
                  <IoLocationSharp className="text-white" />
                </div>
              </div>
              <div>
                <p className="text-[24px] font-bold capitalize mb-1">Visit us</p>
                <p className="opacity-70">34 Madison Street,</p>
                <p className="opacity-70">NY, USA 10005</p>
              </div>
          </div>
            <div className="flex gap-3 my-4">
              <div>
                <div className="bg-primary flex p-2 rounded-full mt-2">
                  <BsFillTelephoneFill className="text-white" />
                </div>
              </div>
              <div>
                <p className="text-[24px] font-bold capitalize mb-1">Call us</p>
                <p className="opacity-70">+1-492-4918-395</p>
                <p className="opacity-70">+14-394-409-591</p>
              </div>
          </div>
            <div className="flex gap-3">
              <div>
                <div className="bg-primary flex p-2 rounded-full mt-2">
                  <HiMail className="text-white" />
                </div>
              </div>
              <div>
                <p className="text-[24px] font-bold capitalize mb-1">Email us</p>
                <p className="opacity-70">info@mail.com</p>
                <p className="opacity-70">support@mail.com</p>
              </div>
          </div>
          </div>
        </div>
        <div>
          <form className="detailsForms md:w-[75%] rounded-xl bg-white px-7 py-10 mt-8">
  
            <div className="flex gap-6">
              <input className="bg-[#0e06050a] w-full py-2 px-4 rounded-md outline-primary" type="text" name="" placeholder="Name*" id="" />
              <input className="bg-[#0e06050a] w-full py-2 px-4 rounded-md outline-primary" type="email" placeholder="Email*" name="" id="" />
            </div>
            <div className="flex gap-6 my-4">
              <input className="bg-[#0e06050a] w-full py-2 px-4 rounded-md outline-primary" type="text" name="" placeholder="Phone*" id="" />
              <input className="bg-[#0e06050a] w-full py-2 px-4 rounded-md outline-primary" type="email" placeholder="Website*" name="" id="" />
            </div>
            <textarea className="bg-[#0e06050a] w-full py-2 px-4 rounded-md outline-primary" name="" id="" rows="6" placeholder="Review summary*"></textarea>
            <input type="submit" value="Send messages" className="bg-primary text-white font-semibold px-8 mt-3 py-2 rounded-md" />
          </form>
        </div>
      </section>
      <Footer/>
    </main>
  );
};

export default index;