import CourseDetailsHero from "@/components/CourseDetails/CourseDetailsHero/CourseDetailsHero";
import CourseDetailsOverview from "@/components/CourseDetails/CourseDetailsOverview/CourseDetailsOverview";
import Footer from "@/components/Footer/Footer";
import Home2VideoModal from "@/components/Home2/Home2VideoModal/Home2VideoModal";
import NavBar from "@/components/NavBar/NavBar";

const index = () => {
  return (
    <main>
      <NavBar />
      <CourseDetailsHero />
      <Home2VideoModal />
      <CourseDetailsOverview />

      <Footer/>
    </main>
  );
};

export default index;