import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
function Hustler() {

    useEffect(()=> {
        gsap.from(".hustler--box", {
            scrollTrigger: {
                trigger: ".hustler--box",
                start: "top 80%",
            },
            opacity: 0,
            y: 50,
            duration: 0.5,
            ease: "power2.out"
        });
        gsap.from(".hustler--box-img", {
            scrollTrigger: {
                trigger: ".hustler--box-img",
                start: "top 80%",
            },
            opacity: 0,
            x: 300,
            duration: 1,
            ease: "power2.out"
        });
    },[])

    return (
        <div className='lg:py-24 py-16 bg-primeryColor relative overflow-hidden'>
            <div className='max-w-[1500px] w-full px-6 lg:px-20 mx-auto'>
                <div className='lg:max-w-[60ch] w-full relative z-20 text-center lg:text-start hustler--box'>
                    <h2 className='lg:text-5xl text-3xl font-bold text-darkTextColor font-satoshi !leading-[1.2]'>Been called good communicator, hustler, sometimes genius.</h2>
                    <div className='flex flex-col gap-6 mt-10 w-fit mx-auto lg:mx-0'>
                        <div className='flex items-center gap-4'>
                            <div>
                                <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="16" cy="16" r="16" fill="#424BD0" />
                                    <path d="M10.75 16.75L13.75 19.75L21.25 12.25" stroke="white" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className='font-medium font-satoshi lg:text-xl text-lg text-darkTextColor'>average response rate 1 hour</div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div>
                                <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="16" cy="16" r="16" fill="#424BD0" />
                                    <path d="M10.75 16.75L13.75 19.75L21.25 12.25" stroke="white" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className='font-medium font-satoshi text-xl text-darkTextColor'>proven track of results</div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div>
                                <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="16" cy="16" r="16" fill="#424BD0" />
                                    <path d="M10.75 16.75L13.75 19.75L21.25 12.25" stroke="white" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className='font-medium font-satoshi text-xl text-darkTextColor'>dedicated and honest</div>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <NavLink to='/' className='font-satoshi py-[9px] px-[22px] rounded-md bg-btnColor text-primeryColor block w-fit text-center cursor-pointer mx-auto lg:mx-0 font-medium'>About me</NavLink>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-0 right-0 h-full hidden lg:block hustler--box-img'>
                <img src={'https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757585/m0whxCj8GP9pbS23yaa6jp5WTdE_cfcoas.avif'} alt={'img'} className='block h-full' />
            </div>
        </div>
    )
}

export default Hustler