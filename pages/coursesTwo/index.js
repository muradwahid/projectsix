import CoursesTwoShowResult from "@/components/CoursesTwo/CoursesTwoShowResult/CoursesTwoShowResult";
import CoursesTwoSideBar from "@/components/CoursesTwo/CoursesTwoSideBar/CoursesTwoSideBar";
import CourseTwoSideBarRes from "@/components/CoursesTwo/CourseTwoSideBarRes/CourseTwoSideBarRes";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import TopBanner from "@/components/TopBanner/TopBanner";
import { useEffect, useRef, useState } from "react";

const index = () => {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef();
  useEffect(() => {
    let handler = e => {
      if (!menuRef.current.contains(e.target)) {
        setToggle(false);
      }
    }
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    }
  })
  return (
    <main className="">
      <NavBar />
      <TopBanner tittle={"Courses"} path={'Course list'} />
      <section className="w-4/5 mx-auto my-12">
        <div className="w-full flex gap-20 relative">
          <div className={`md:block hidden`}>
            <CoursesTwoSideBar  />
          </div>
          <div ref={menuRef} className={`z-10 bg-white top-10 left-[-60px] ${toggle?'block absolute':'hidden'}`}>
            <CourseTwoSideBarRes/>
          </div>
          <CoursesTwoShowResult toggle={toggle} setToggle={setToggle} />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default index;