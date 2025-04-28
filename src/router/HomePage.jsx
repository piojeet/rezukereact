import React, { lazy, Suspense } from 'react';
import Hero from '../components/Hero'

// Lazy Load HomeSlider and Globe
const HelpAndJoin = lazy(() => import('../components/HelpAndJoin'))
const Studies = lazy(() => import('../components/Studies'))
const Hustler = lazy(() => import('../components/Hustler'))
const HomeProces = lazy(() => import('../components/HomeProces'))
const HomeServices = lazy(() => import('../components/HomeServices'))
const HomeSlider = lazy(() => import('../components/HomeSlider'));
const Globe = lazy(() => import('../components/Globe'));

function HomePage() {
  return (
    <div className='pt-[73px]'>
      <Hero />

      <Suspense fallback={<div></div>}>
        <HomeServices />
      </Suspense>

      <Suspense fallback={<div></div>}>
        <HomeProces />
      </Suspense>


      <Suspense fallback={<div></div>}>
        <HomeSlider />
      </Suspense>

      <Suspense fallback={<div></div>}>
        <Globe />
      </Suspense>

      <Suspense fallback={<div></div>}>
        <Hustler />
      </Suspense>

      <Suspense fallback={<div></div>}>
        <Studies />
      </Suspense>

      <Suspense fallback={<div></div>}>
         <HelpAndJoin />
      </Suspense>
     
    </div>
  )
}

export default HomePage
