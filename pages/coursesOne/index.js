import CoursesOneCourse from "@/components/CoursesOne/CoursesOneCourse/CoursesOneCourse";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import TopBanner from "@/components/TopBanner/TopBanner";

const index = () => {
  return (
    <div>
      <NavBar />
      <TopBanner tittle={'Courses'} path={'Courses list'} />
      <CoursesOneCourse/>
      <Footer/>
    </div>
  );
};

export default index;