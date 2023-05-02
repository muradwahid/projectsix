import BlogNews from "@/components/Blog/BlogNews/BlogNews";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import TopBanner from "@/components/TopBanner/TopBanner";

const index = () => {
  return (
    <div>
      <NavBar />
      <TopBanner tittle={'Blogs'} path={'Blog'} />
      <BlogNews/>
      <Footer/>
    </div>
  );
};

export default index;