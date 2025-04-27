import React, { lazy, Suspense } from 'react';
import Hero from '../components/Hero'
import HomeServices from '../components/HomeServices'
import HomeProces from '../components/HomeProces'
import Hustler from '../components/Hustler'
import Studies from '../components/Studies'
import HelpAndJoin from '../components/HelpAndJoin'
import Footer from '../components/Footer/Footer'

// Lazy Load HomeSlider and Globe
const HomeSlider = lazy(() => import('../components/HomeSlider'));
const Globe = lazy(() => import('../components/Globe'));

function HomePage() {
  return (
    <div className='pt-[73px]'>
      <Hero />
      <HomeServices />
      <HomeProces />

      <Suspense fallback={<div></div>}>
        <HomeSlider />
      </Suspense>
      
      <Suspense fallback={<div></div>}>
        <Globe />
      </Suspense>

      <Hustler />
      <Studies />
      <HelpAndJoin />
      <Footer />
    </div>
  )
}

export default HomePage
