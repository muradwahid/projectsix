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
import NavBar from '@/components/NavBar/NavBar'
export default function Home() {
  return (
    <main>
      <NavBar/>
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
