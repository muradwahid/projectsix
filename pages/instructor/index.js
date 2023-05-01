import Footer from "@/components/Footer/Footer";
import InstructorInstructors from "@/components/Instructor/InstructorInstructors";
import NavBar from "@/components/NavBar/NavBar";
import TopBanner from "@/components/TopBanner/TopBanner";

const index = () => {
  return (
    <div>
      <NavBar />
      <TopBanner tittle={'Instructor'} path={'Instructor'} />
      <InstructorInstructors/>
      <Footer/>
    </div>
  );
};

export default index;