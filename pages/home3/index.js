import Home2VideoModal from "@/components/Home2/Home2VideoModal/Home2VideoModal";
import Home3AboutUs from "@/components/Home3/Home3AboutUs/Home3AboutUs";
import Home3Blogs from "@/components/Home3/Home3Blogs/Home3Blogs";
import Home3Category from "@/components/Home3/Home3Category/Home3Category";
import Home3Counter from "@/components/Home3/Home3Counter/Home3Counter";
import Home3Course from "@/components/Home3/Home3Course/Home3Course";
import Home3Footer from "@/components/Home3/Home3Footer/Home3Footer";
import Home3GrowSkills from "@/components/Home3/Home3GrowSkills/Home3GrowSkills";
import Home3Hero from "@/components/Home3/Home3Hero/Home3Hero";
import Home3Instructor from "@/components/Home3/Home3Instructor/Home3Instructor";
import Home3Learn from "@/components/Home3/Home3Learn/Home3Learn";
import Home3Nav from "@/components/Home3/Home3Nav/Home3Nav";
import Home3Testimonial from "@/components/Home3/Home3Testimonial/Home3Testimonial";
import Home3TrustedCompany from "@/components/Home3/Home3TrustedCompany/Home3TrustedCompany";

const index = () => {
  return (
    <div>
      <Home3Nav/>
      <Home2VideoModal/>
      <Home3Hero />
      <Home3Category />
      <Home3AboutUs />
      <Home3Counter />
      <Home3Course />
      <Home3GrowSkills />
      <Home3Learn />
      <Home3Testimonial />
      <Home3Instructor />
      <Home3TrustedCompany />
      <Home3Blogs />
      <Home3Footer/>
    </div>
  );
};

export default index;