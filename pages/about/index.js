import AboutAboutUs from "@/components/About/AboutAboutUs/AboutAboutUs";
import AboutBuildCareer from "@/components/About/AboutBuildCareer/AboutBuildCareer";
import AboutIntroVideo from "@/components/About/AboutIntroVideo/AboutIntroVideo";
import AboutPurchaseCourse from "@/components/About/AboutPurchaseCourse/AboutPurchaseCourse";
import AboutTestimonial from "@/components/About/AboutTestimonial/AboutTestimonial";
import Footer from "@/components/Footer/Footer";
import Home2VideoModal from "@/components/Home2/Home2VideoModal/Home2VideoModal";
import NavBar from "@/components/NavBar/NavBar";
import TopBanner from "@/components/TopBanner/TopBanner";

const index = () => {
  return (
    <div>
      <NavBar />
      <TopBanner tittle={'About Us'} path={'About us'} />
      <AboutAboutUs />
      <AboutPurchaseCourse/>
      <AboutIntroVideo />
      <Home2VideoModal />
      <AboutTestimonial />
      <AboutBuildCareer/>
      <Footer/>
    </div>
  );
};

export default index;