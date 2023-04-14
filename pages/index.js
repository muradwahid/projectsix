import Footer from '@/components/Footer/Footer'
import HomeCategory from '@/components/Home/HomeCategory/HomeCategory'
import HomeChoose from '@/components/Home/HomeChoose/HomeChoose'
import HomeHelps from '@/components/Home/HomeHelps/HomeHelps'
import HomeAbout from '@/components/Home/HomeHero/HomeAbout/HomeAbout'
import HomeHero from '@/components/Home/HomeHero/HomeHero'
import HomeInstructors from '@/components/Home/HomeInstructors/HomeInstructors'
import HomeNews from '@/components/Home/HomeNews/HomeNews'
import HomePlatform from '@/components/Home/HomePlatform/HomePlatform'
import HomePopularCourses from '@/components/Home/HomePopularCourses/HomePopularCourses'
export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeAbout />
      <HomeCategory />
      <HomePopularCourses />
      <HomePlatform/>
      <HomeChoose />
      <HomeInstructors />
      <HomeHelps />
      <HomeNews />
      <Footer/>
    </main>
  )
}
