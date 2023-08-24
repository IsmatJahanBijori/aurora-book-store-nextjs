import Image from 'next/image'
import { Inter } from 'next/font/google'
import ReviewSection from './Home/ReviewSection'
import ContactUs from './Home/ContactUs'
// import BookGallery from './Home/TrendingBookGallery'
import TrendingBookGallery from './Home/TrendingBookGallery'
import Banner from './Home/Banner'
// import { ParallaxProvider } from 'react-scroll-parallax'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    
      <main
        className={`flex min-h-screen flex-col  justify-between bg-slate-200 p-10 ${inter.className}`}
      >
      
        <Banner />
        <TrendingBookGallery />
        <ReviewSection />
        <ContactUs />
      </main>

  )

}

{/** return (
    <main
      className={`flex min-h-screen flex-col  justify-between p-10 ${inter.className}`}
    >
      
      <TrendingBookGallery />
      <ReviewSection />
      <ContactUs />
    </main>
  ) */}