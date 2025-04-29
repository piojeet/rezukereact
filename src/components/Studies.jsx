import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const studiesData = [
  {
    id: 1,
    img: 'https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757584/Deliveroo_pzuqoc.svg',
    number: 48,
    label: 'International clients',
    title: 'How I improved Delivero onboarding experience',
    description: 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Vestibulum fringilla pede sit amet augue...',
    link: '/',
  },
  {
    id: 2,
    img: 'https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757584/Deliveroo_pzuqoc.svg',
    number: 48,
    label: 'International clients',
    title: 'How I improved Delivero onboarding experience',
    description: 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Vestibulum fringilla pede sit amet augue...',
    link: '/',
  },
  {
    id: 3,
    img: 'https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757584/Deliveroo_pzuqoc.svg',
    number: 48,
    label: 'International clients',
    title: 'How I improved Delivero onboarding experience',
    description: 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Vestibulum fringilla pede sit amet augue...',
    link: '/',
  },
];



function Studies() {

  useEffect(() => {
    gsap.from(".studies--heading", {
      scrollTrigger: {
        trigger: ".studies--heading",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power2.out",
    });
  
    gsap.from(".studies--para", {
      scrollTrigger: {
        trigger: ".studies--para",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
  
    const cards = gsap.utils.toArray(".study-card");
  
    cards.forEach((card, index) => {
      // Scroll animation
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 0.5,
        delay: index * 0.1,
        ease: "power2.out",
      });
  
      // Hover animation
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          duration: 0.3,
          ease: "power2.out",
        });
      });
  
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, []);
  
  

  return (
    <div className="bg-[#F9F9FF] lg:py-24 py-16">
      <div className="max-w-[1500px] w-full px-6 lg:px-20 mx-auto">
        <div className="flex items-center justify-between md:flex-row flex-col gap-4">
          <h2 className="lg:text-5xl text-3xl font-bold text-darkTextColor font-satoshi !leading-[1.2] studies--heading">
            My featured case studies
          </h2>
          <div className='studies--para'>
            <NavLink
              to="/buy"
              className="font-satoshi font-medium py-[9px] px-[22px] rounded-md bg-LightBtnColor text-btnColor transition-all duration-200 ease-linear hover:bg-btnColor hover:text-primeryColor block w-fit"
            >
              See all case studies
            </NavLink>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 mt-12 gap-5">
          {studiesData.map((study) => (
            <NavLink
              key={study.id}
              to={study.link}
              className="bg-primeryColor rounded-[12px_12px_100px_12px] hover:-translate-y-3 relative shadow-[rgba(0,0,0,0.06)_0px_2px_30px] block h-full md:p-[40px_50px_40px_40px] p-5 study-card"
            >
              <div>
                <img src={study.img} alt="study" />
              </div>
              <div className="lg:mt-[80px] mt-10">
                <div>
                  <span className="font-satoshi font-black lg:text-[60px] text-[40px] leading-none text-btnColor">
                    {study.number}
                  </span>{' '}
                  <span className="font-satoshiLight text-darkTextColor font-semibold text-lg">
                    {study.label}
                  </span>
                </div>
                <h3 className="lg:text-3xl text-2xl font-satoshi font-extrabold !leading-[1.2] my-6">
                  {study.title}
                </h3>
                <p className="text-lg font-satoshi font-medium text-darkTextColor">
                  {study.description}
                </p>
                <div className="mt-12">
                  <span className="block w-fit text-lg font-satoshi font-medium text-btnColor hover:underline">
                    Read more
                  </span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Studies;
