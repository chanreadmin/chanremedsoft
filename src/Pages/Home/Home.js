import React from 'react'
import CarouselHero from '../../Components/CarouselHero'
import HomeAbout from './HomeAbout'
import Footer from './FooterSection'
import ProductShow from '../../Components/ProductShow'
import Aboutus from '../../Components/Aboutus'
function Home() {
  return (
    <div>
      <CarouselHero/>
      <HomeAbout/>
      <Aboutus/>
      <ProductShow/>
      <Footer/>
    </div>
  )
}

export default Home