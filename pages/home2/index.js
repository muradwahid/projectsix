import Home2AboutUs from '@/components/Home2/Home2AboutUs/Home2AboutUs';
import Home2Category from '@/components/Home2/Home2Category/Home2Category';
import Home2ChooseUs from '@/components/Home2/Home2ChooseUs/Home2ChooseUs';
import Home2Comunnity from '@/components/Home2/Home2Comunnity/Home2Comunnity';
import Home2Footer from '@/components/Home2/Home2Footer/Home2Footer';
import Home2Hero from '@/components/Home2/Home2Hero/Home2Hero';
import Home2Instructor from '@/components/Home2/Home2Instructor/Home2Instructor';
import Home2LatestBlog from '@/components/Home2/Home2LatestBlog/Home2LatestBlog';
import Home2NavBar from '@/components/Home2/Home2NavBar/Home2NavBar';
import Home2PopularCourses from '@/components/Home2/Home2PopularCourses/Home2PopularCourses';
import Home2RegisterToday from '@/components/Home2/Home2RegisterToday/Home2RegisterToday';
import Home2Testimonial from '@/components/Home2/Home2Testimonial/Home2Testimonial';
import Home2TrustedCompany from '@/components/Home2/Home2TrustedCompany/Home2TrustedCompany';
import Home2VideoModal from '@/components/Home2/Home2VideoModal/Home2VideoModal';
import Home2WorkShop from '@/components/Home2/Home2WorkShop/Home2WorkShop';
import Head from 'next/head';

const index = () => {
  return (
    <div className='font-inter'>
      <Head>
        <title>Home-two</title>
      </Head>
      <Home2NavBar/>
      <Home2VideoModal/>
      <Home2Hero />
      <Home2Category />
      <Home2AboutUs />
      <Home2Comunnity />  
      <Home2PopularCourses />
      <Home2ChooseUs />
      <Home2TrustedCompany />
      <Home2Instructor />
      <Home2WorkShop />
      <Home2Testimonial />
      <Home2LatestBlog />
      <Home2RegisterToday />
      <Home2Footer/>
    </div>
  );
};

export default index;