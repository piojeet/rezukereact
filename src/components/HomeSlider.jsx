import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const slides = [
  {
    title: "2x+",
    subtitle: "lower dropout rate",
    description: "Etiam vitae tortor. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Morbi ac felis. Fusce convallis metus id felis luctus adipiscing. Nulla porta dolor.",
    icon: 'https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757584/Deliveroo_pzuqoc.svg',
    user: 'https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757585/fNcMyKR6JXkBlZwfXyLOmodsDc-CpuXSuTe_pbw9vo.avif',
    view: '30M+',
    viewText: 'Performance Data Tracked'
  },
  {
    title: "2x",
    subtitle: "lower dropout rate",
    description: "Etiam vitae tortor. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Morbi ac felis. Fusce convallis metus id felis luctus adipiscing. Nulla porta dolor.",
    icon: 'https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757584/Deliveroo_pzuqoc.svg',
    user: 'https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757585/fNcMyKR6JXkBlZwfXyLOmodsDc-CpuXSuTe_pbw9vo.avif',
    view: '8M+',
    viewText: 'Targeted Ad Impressions'
  }
];

function HomeSlider() {
  // useEffect(() => {
  //   const nextBtn = document.querySelector('.swiper-btn-next');
  //   const prevBtn = document.querySelector('.swiper-btn-prev');

  //   function animateButton(btn) {
  //     btn.style.transform = "scale(0.8)";
  //     btn.style.transition = "transform 0.2s ease";

  //     setTimeout(() => {
  //       btn.style.transform = "scale(1)";
  //     }, 200);
  //   }

  //   if (nextBtn && prevBtn) {
  //     nextBtn.addEventListener('click', () => animateButton(nextBtn));
  //     prevBtn.addEventListener('click', () => animateButton(prevBtn));
  //   }

  //   return () => {
  //     if (nextBtn && prevBtn) {
  //       nextBtn.removeEventListener('click', () => animateButton(nextBtn));
  //       prevBtn.removeEventListener('click', () => animateButton(prevBtn));
  //     }
  //   };
  // }, []);


  useEffect(() => {
    gsap.from(".slider--heading", {
      scrollTrigger: {
        trigger: ".slider--heading",
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      duration: 0.5,
      delay: 0.2,
      ease: "power2.out"
    });
  }, [])

  return (
    <div className='lg:py-24 py-16 bg-btnColor'>
      <div className='max-w-[1500px] w-full px-6 lg:px-20 mx-auto'>
        <div className='lg:flex items-center justify-between'>
          <h2 className='lg:text-5xl text-3xl font-black text-primeryColor font-satoshi text-center !leading-[1.2] slider--heading'>Don’t just take my word for it</h2>

          {/* <div className="lg:flex gap-4 mt-4 hidden">
            <button className="swiper-btn-prev w-[64px] h-[64px] bg-primeryColor flex items-center justify-center rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6l6 6" /></svg>
            </button>
            <button className="swiper-btn-next w-[64px] h-[64px] bg-primeryColor flex items-center justify-center rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6l-6 6" /></svg>
            </button>
          </div> */}
        </div>

        <div className="mt-12">
          <div
            className='grid md:grid-cols-2 gap-x-6 gap-y-6'
          // modules={[Navigation]}
          // navigation={{
          //   nextEl: '.swiper-btn-next',
          //   prevEl: '.swiper-btn-prev',
          // }}
          // loop={true}
          // spaceBetween={30}
          // speed={1000}
          // className="mySwiper"
          >
            {slides.map((slide, index) => (
              <div key={index}>
                <div className='h-full'>
                  <div className='bg-primeryColor lg:rounded-[200px_12px_12px_12px] rounded-[150px_12px_12px_12px] content-end lg:p-12 p-10 h-full'>
                    <div className='pb-4 border-b border-btnColor mb-9'>
                      <span className='lg:text-[80px] text-[50px] font-satoshi font-black text-btnColor'>{slide.title}</span>  <span className='ml-4 font-semibold lg:text-2xl text-xl font-satoshiLight text-btnColor'>{slide.subtitle}</span>
                    </div>
                    <p className='lg:text-xl text-lg font-satoshiLight font-medium text-darkTextColor mb-10'>{slide.description}</p>
                    <div>
                      <img src={slide.icon} alt="icon" />
                    </div>
                  </div>
                  {/* <div className='rounded-[12px_12px_200px_12px] overflow-hidden hidden lg:block'>
                    <img src={slide.user} alt="user" className='w-full h-full object-cover' />
                  </div> */}


                </div>
              </div>
            ))}
          </div>

          <div className='grid md:grid-cols-2 gap-x-6 gap-y-6 mt-12'>
            {slides.map((item, i) => (
              <div key={i} className='py-8 backdrop-blur-[50px] bg-[rgba(255,255,255,0.04)] flex flex-col justify-center items-center gap-y-8 rounded-lg'>
                <div className='text-primeryColor md:text-6xl text-4xl font-bold font-satoshi'>{item.view}</div>
                <div className='text-primeryColor text-lg font-satoshi font-medium'>{item.viewText}</div>
              </div>
            ))}
          </div>

        </div>

        {/* <div className="flex gap-4 mt-4 lg:hidden justify-end w-full">
          <button className="swiper-btn-prev w-[50px] h-[50px] bg-primeryColor flex items-center justify-center rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6l6 6" /></svg>
          </button>
          <button className="swiper-btn-next w-[50px] h-[50px] bg-primeryColor flex items-center justify-center rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6l-6 6" /></svg>
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default HomeSlider;
