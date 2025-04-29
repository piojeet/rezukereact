import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
function HelpAndJoin() {

    useEffect(()=> {
        gsap.from(".help--box", {
            scrollTrigger: {
              trigger: ".help--box",
              start: "top 80%",
            },
            opacity: 0,
            y: 50,
            duration: 0.5,
            ease: "power2.out",
          });
    },[])

    return (
        <div className="bg-btnColor lg:py-24 py-16 bg-no-repeat bg-contain bg-center bg-fixed" style={{ backgroundImage: `url(${'https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757585/20250409_122315_efpvmc.avif'})` }}>
            <div className="max-w-[1500px] w-full px-6 lg:px-20 mx-auto">
                <div className='flex flex-col items-center gap-6 help--box'>
                    <div className='w-fit mx-auto'>
                        <svg width="130" height="40" viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="44.7144" width="40" height="40" rx="20" fill="#F9F9FF" />
                            <path d="M40.7144 2.05128C40.7144 0.91839 39.796 0 38.6631 0C17.7046 0 0.714355 16.9902 0.714355 37.9487C0.714355 39.0816 1.63275 40 2.76564 40H36.7144C38.9235 40 40.7144 38.2091 40.7144 36V2.05128Z" fill="white" />
                            <path d="M89.2858 2.05128C89.2858 0.91839 90.2042 0 91.337 0C112.296 0 129.286 16.9902 129.286 37.9487C129.286 39.0816 128.367 40 127.234 40H93.2858C91.0766 40 89.2858 38.2091 89.2858 36V2.05128Z" fill="white" />
                        </svg>
                    </div>
                    <h2 className='lg:text-5xl text-3xl font-black text-primeryColor font-satoshi !leading-[1.2] text-center'>Need help? <br />
                        Let’s talk today!</h2>
                    <p className='text-xl text-primeryColor font-satoshi font-medium text-center'>Join my international network of successful clients.</p>
                    <div>
                        <NavLink
                            to="/buy"
                            className="font-satoshi font-medium py-[9px] px-[22px] rounded-md bg-primeryColor text-btnColor transition-all duration-200 ease-linear block w-fit mx-auto"
                        >
                            Schedule intro call
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpAndJoin