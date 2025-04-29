import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clientLogos = [
    "https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757587/Slack_n1k2go.svg",
    "https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757587/Slack_n1k2go.svg",
    "https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757587/Slack_n1k2go.svg",
    "https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757587/Slack_n1k2go.svg",
    "https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757587/Slack_n1k2go.svg"
]
function Hero() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const elements = containerRef.current.querySelectorAll(".animate-item");

        elements.forEach((el, index) => {
            gsap.from(el, {
                opacity: 0,
                y: 40,
                duration: 0.8,
                delay: index * 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });
        });
    }, []);

    const boxRef = useRef(null);

    useEffect(() => {
        gsap.from(boxRef.current, {
            scale: 0,
            //   opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: boxRef.current,
                start: "top 80%", // when top of box hits 80% of viewport
                toggleActions: "play none none reverse",
            },
        });
    }, []);

    useEffect(() => {
        const items = sectionRef.current.querySelectorAll(".client-animate");
    
        gsap.from(items, {
          opacity: 0,
          y: 30,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }, []);

    return (
        <div className='pb-[50px]'>
            <div className='max-w-[1500px] w-full px-6 lg:px-20 mx-auto relative'>
                <div className='flex items-center justify-between lg:gap-6 gap-[7vw] py-10 relative z-30 flex-col-reverse lg:flex-row'>
                    <div className='max-w-[620px] w-full' ref={containerRef}>
                        <img src={'https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757586/Group_3_lew1tc.svg'} alt={'img'} className='block w-fit mx-auto lg:mx-0' />
                        <h1 className='2xl:text-7xl lg:text-[40px] text-[32px] font-satoshi font-extrabold text-darkTextColor leading-tight my-4 text-center lg:text-left animate-item'>Boost your business through online <span className='text-btnColor'>marketing</span></h1>
                        <p className='lg:text-2xl text-xl leading-[130%] font-medium font-satoshi text-darkTextColor text-center lg:text-left animate-item'>Hey there! I’m John Parker. Digital business consultant focussed on online marketing and advertising.</p>
                        <div className='mt-8 mb-4 animate-item'>
                            <NavLink
                                to="/"
                                aria-label="Claim Your Spot Now"
                                className="font-satoshi font-medium py-[9px] px-[22px] rounded-md bg-btnColor text-primeryColor block w-fit text-center mx-auto lg:mx-0"
                            >
                                Claim Your Spot Now-Only 2-3 Advisors Per Area.
                            </NavLink>
                        </div>

                        <p className='font-satoshi font-medium text-darkTextColor leading-[130%] text-center lg:text-left animate-item'>Trusted by advisors sick of tire-kickers and empty promises.</p>
                        <p className='font-satoshi font-medium text-darkTextColor leading-[130%] mt-4 text-center lg:text-left animate-item'>90% match your ideal client-guaranteed. No contracts, no commitments -just repeat if you like the results.</p>
                    </div>
                    <div className='max-w-[550px] w-[90%]'>
                        <NavLink to={'/'} >
                            <img src={'https://res.cloudinary.com/dwf7aydzq/image/upload/v1745761851/speaker_glkrvz.webp'} alt={'img'} className='w-full max-w-[550px] h-auto' />
                        </NavLink>
                    </div>
                </div>

                <div className='absolute top-0 right-0 3xl:w-[20vw] lg:w-[35vw] w-[60vw] aspect-square origin-top-right' ref={boxRef} style={{ backgroundImage: `url('https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757586/Ellipse_hwro6l.svg')` }}>
                </div>

                <div className='flex items-center justify-between py-12 pb-4 flex-wrap gap-6' ref={sectionRef}>
                    <div className='font-medium font-satoshi text-darkTextColor text-2xl client-animate'>Clients include:</div>

                    <div className='flex items-center lg:gap-[3vw] flex-wrap gap-y-6 gap-x-6'>
                        {clientLogos.map((src, i) => (
                        <img src={src} key={i} className="client-animate" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
