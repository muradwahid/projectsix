import Footer from "@/components/Footer/Footer";
import InstructorDetailsAbout from "@/components/InstructorDetails/InstructorDetailsAbout/InstructorDetailsAbout";
import InstructorDetailsProfile from "@/components/InstructorDetails/InstructorDetailsProfile/InstructorDetailsProfile";
import NavBar from "@/components/NavBar/NavBar";
import TopBanner from "@/components/TopBanner/TopBanner";

const index = () => {
  return (
    <div>
      <NavBar />
      <TopBanner tittle={"Instructor Profile"} path={'Instructor Profile'} />
      <div className="flex md:flex-row flex-col gap-6 w-4/5 mx-auto my-16">
        <div>
          <InstructorDetailsProfile />
        </div>
        <InstructorDetailsAbout/>
      </div>
      <Footer/>
    </div>
  );
};

export default index;