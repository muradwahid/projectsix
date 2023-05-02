import BlogDetailSocialMedia from "@/components/BlogDetails/BlogDetailSocialMedia/BlogDetailSocialMedia";
import BlogDetailsPopularTopics from "@/components/BlogDetails/BlogDetailsPopularTopics/BlogDetailsPopularTopics";
import BlogDetailsSimillerPost from "@/components/BlogDetails/BlogDetailsSimillerPost/BlogDetailsSimillerPost";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import TopBanner from "@/components/TopBanner/TopBanner";
const index = () => {
  return (
    <div>
      <NavBar />
      <TopBanner tittle={'Single Blogs'} path={'Single Blogs'} />
      <div className="w-full">
        <div className="w-4/5 mx-auto flex lg:flex-row flex-col gap-10 mt-24">
          <BlogDetailSocialMedia />
          <BlogDetailsPopularTopics/>
        </div>
      </div>
      <BlogDetailsSimillerPost/>
      <Footer/>
    </div>
  );
};

export default index;