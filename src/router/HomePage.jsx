import React, { lazy, Suspense } from 'react';
import Hero from '../components/Hero'

// Lazy Load HomeSlider and Globe
const HelpAndJoin = lazy(() => import('../components/HelpAndJoin'))
// const Studies = lazy(() => import('../components/Studies'))
const Hustler = lazy(() => import('../components/Hustler'))
const HomeProces = lazy(() => import('../components/HomeProces'))
const Struggle = lazy(() => import('../components/Struggle'))
const HomeSlider = lazy(() => import('../components/HomeSlider'));
const FAQ = lazy(() => import('../components/FAQ'));
const Partner = lazy(() => import('../components/Partner'));

function HomePage() {
  return (
    <div className='pt-[73px]'>
      <Hero />

      <Suspense fallback={<div></div>}>
        <Struggle />
      </Suspense>

      <Suspense fallback={<div></div>}>
        <HomeProces />
      </Suspense>

      <Suspense>
        <Partner />
      </Suspense>

      <Suspense fallback={<div></div>}>
        <HomeSlider />
      </Suspense>

      <Suspense fallback={<div></div>}>
        <FAQ />
      </Suspense>

      <Suspense fallback={<div></div>}>
        <Hustler />
      </Suspense>

      {/* <Suspense fallback={<div></div>}>
        <Studies />
      </Suspense> */}

      <Suspense fallback={<div></div>}>
        <HelpAndJoin />
      </Suspense>

    </div>
  )
}

export default HomePage
