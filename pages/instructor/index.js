import Footer from "@/components/Footer/Footer";
import InstructorInstructors from "@/components/Instructor/InstructorInstructors";
import InstructorJoinUs from "@/components/Instructor/InstructorJoinUs/InstructorJoinUs";
import InstructorTestimonial from "@/components/Instructor/InstructorTestimonial/InstructorTestimonial";
import NavBar from "@/components/NavBar/NavBar";
import TopBanner from "@/components/TopBanner/TopBanner";

const index = () => {
  return (
    <div>
      <NavBar />
      <TopBanner tittle={'Instructor'} path={'Instructor'} />
      <InstructorInstructors />
      <InstructorJoinUs />
      <InstructorTestimonial/>
      <Footer/>
    </div>
  );
};

export default index;