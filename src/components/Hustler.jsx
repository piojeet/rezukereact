import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
function Hustler() {

    useEffect(() => {
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
            y: 100,
            duration: 0.5,
            ease: "power2.out"
        });
    }, [])

    return (
        <div className='lg:py-24 py-16 bg-[#F9F9FF] relative overflow-hidden'>
            <div className='max-w-[1500px] w-full px-6 lg:px-20 mx-auto grid xl:grid-cols-2 gap-4 grid-cols-1 gap-y-8'>
                <div className='lg:max-w-[60ch] w-full relative z-20 lg:text-start hustler--box'>
                    <h2 className='lg:text-5xl text-3xl font-bold text-darkTextColor font-satoshi !leading-[1.2]'>No Risk, <span className='text-btnColor'>All Reward</span></h2>
                    <div className='flex flex-col gap-6 mt-10 w-fit mx-auto lg:mx-0'>
                        <div className='flex items-center gap-4'>
                            <div className='text-btnColor'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg>
                            </div>
                            <div className='font-medium font-satoshi md:text-xl text-darkTextColor'>50% upfront bassed on projected attendess.</div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='text-btnColor'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg>
                            </div>
                            <div className='font-medium font-satoshi md:text-xl text-darkTextColor'>Final true-up billing post-event.</div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='text-btnColor'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg>
                            </div>
                            <div className='font-medium font-satoshi md:text-xl text-darkTextColor'>Guarantee: 90% of attendees match your criterial-or we add replacements to your next seminar free.</div>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <NavLink to='/' className='font-satoshi py-[9px] px-[22px] rounded-md bg-btnColor text-primeryColor block w-fit text-center cursor-pointer lg:mx-0 font-medium'>Get Your Quote Today</NavLink>
                    </div>
                </div>

                <div>
                    <div className='bg-white max-w-[500px] w-full xl:ml-auto rounded-xl mx-auto hustler--box-img'>
                        <div className='flex items-end justify-between p-[12px_12px_15px_25px]'>
                            <h3 className='text-lg font-semibold font-satoshi text-darkTextColor'>Event Pricing</h3>
                            <div className='flex flex-col items-center font-satoshi font-semibold text-btnColor text-sm'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                    </svg>
                                </span>
                                <div>GUARANTEE</div>
                            </div>
                        </div>

                        <div className='pb-7 px-[25px]'>
                            <div className='flex items-center justify-between border-b border-lightColor/10 pb-1 mb-4'>
                                <div className='text-darkTextColor font-satoshiLight font-semibold opacity-80'>Initial Payment</div>
                                <div className='font-satoshi font-semibold text-darkTextColor'>50%</div>
                            </div>
                            <div className='flex items-center justify-between border-b border-lightColor/10 pb-1 mb-4'>
                                <div className='text-darkTextColor font-satoshiLight font-semibold opacity-80'>Final Payment</div>
                                <div className='font-satoshi font-semibold text-darkTextColor'>50%</div>
                            </div>
                            <div className='flex items-center justify-between border-b border-lightColor/10 pb-1 mb-4'>
                                <div className='text-darkTextColor font-satoshiLight font-semibold opacity-80'>Attendee Match</div>
                                <div className='font-satoshi font-semibold text-darkTextColor'>90%</div>
                            </div>

                            <div className='h-2 w-full bg-[linear-gradient(90deg,rgba(46,137,217,0.83)_0%,rgba(197,168,224,0.53)_100%)] rounded-full my-6'></div>
                            <div className='text-center text-sm font-satoshiLight font-semibold text-darkTextColor'>Risk-free engagement with guaranteed result</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='absolute bottom-0 right-0 h-full hidden lg:block hustler--box-img'>
                <img src={'https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757585/m0whxCj8GP9pbS23yaa6jp5WTdE_cfcoas.avif'} alt={'img'} className='block h-full' />
            </div> */}
        </div>
    )
}

export default Hustler