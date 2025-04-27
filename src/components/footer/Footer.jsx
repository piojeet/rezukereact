import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div className="bg-[#F9F9FF] lg:py-24 py-16 lg:pb-0 pb-0">
            <div className="max-w-[1500px] w-full px-6 lg:px-20 mx-auto">
                <div className='flex justify-between gap-8 flex-wrap lg:flex-nowrap'>
                    <div>
                        <div className='lg:text-xl text-lg font-satoshiLight font-semibold text-darkTextColor'>Main pages</div>
                        <ul className='flex flex-col gap-5 mt-6'>
                            <li><NavLink to={'/'} className={'font-satoshi font-medium text-darkTextColor lg:text-xl'}>Home</NavLink></li>
                            <li><NavLink to={'/'} className={'font-satoshi font-medium text-darkTextColor lg:text-xl'}>Home</NavLink></li>
                            <li><NavLink to={'/'} className={'font-satoshi font-medium text-darkTextColor lg:text-xl'}>Home</NavLink></li>
                            <li><NavLink to={'/'} className={'font-satoshi font-medium text-darkTextColor lg:text-xl'}>Home</NavLink></li>
                            <li><NavLink to={'/'} className={'font-satoshi font-medium text-darkTextColor lg:text-xl'}>Home</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <div className='lg:text-xl text-lg font-satoshiLight font-semibold text-darkTextColor'>Main pages</div>
                        <ul className='flex flex-col gap-5 mt-6'>
                        <li><NavLink to={'/'} className={'font-satoshi font-medium text-darkTextColor lg:text-xl'}>Home</NavLink></li>
                            <li><NavLink to={'/'} className={'font-satoshi font-medium text-darkTextColor lg:text-xl'}>Home</NavLink></li>
                            <li><NavLink to={'/'} className={'font-satoshi font-medium text-darkTextColor lg:text-xl'}>Home</NavLink></li>
                            <li><NavLink to={'/'} className={'font-satoshi font-medium text-darkTextColor lg:text-xl'}>Home</NavLink></li>
                            <li><NavLink to={'/'} className={'font-satoshi font-medium text-darkTextColor lg:text-xl'}>Home</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <div className='lg:text-xl text-lg font-satoshiLight font-semibold text-darkTextColor'>Main pages</div>
                        <ul className='flex flex-col gap-5 mt-6'>
                        <li><NavLink to={'/'} className={'font-satoshi font-medium text-darkTextColor lg:text-xl'}>Home</NavLink></li>
                            <li><NavLink to={'/'} className={'font-satoshi font-medium text-darkTextColor lg:text-xl'}>Home</NavLink></li>
                            <li><NavLink to={'/'} className={'font-satoshi font-medium text-darkTextColor lg:text-xl'}>Home</NavLink></li>
                            <li><NavLink to={'/'} className={'font-satoshi font-medium text-darkTextColor lg:text-xl'}>Home</NavLink></li>
                            <li><NavLink to={'/'} className={'font-satoshi font-medium text-darkTextColor lg:text-xl'}>Home</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <div className='lg:text-xl text-lg font-satoshiLight font-semibold text-darkTextColor'>Main pages</div>
                        <ul className='flex flex-col gap-5 mt-6'>
                        <li><NavLink to={'/'} className={'font-satoshi font-medium text-darkTextColor lg:text-xl'}>Home</NavLink></li>
                            <li><NavLink to={'/'} className={'font-satoshi font-medium text-darkTextColor lg:text-xl'}>Home</NavLink></li>
                            <li><NavLink to={'/'} className={'font-satoshi font-medium text-darkTextColor lg:text-xl'}>Home</NavLink></li>
                            <li><NavLink to={'/'} className={'font-satoshi font-medium text-darkTextColor lg:text-xl'}>Home</NavLink></li>
                            <li><NavLink to={'/'} className={'font-satoshi font-medium text-darkTextColor lg:text-xl'}>Home</NavLink></li>
                        </ul>
                    </div>



                    <div className='w-[435px] mx-auto'>
                        <div className='bg-primeryColor p-[40px_32px] mb-6 rounded-[12px_12px_100px_12px] shadow-[rgba(0,0,0,0.06)_0px_2px_30px]'>
                            <div>
                                <h4 className='text-xl font-satoshiLight font-semibold text-darkTextColor'>Let's talk</h4>
                                <div className='flex flex-col gap-4 py-6 border-b border-lightColor'>
                                    <div><a href="mailto:templates@wavesdesign.io" className='flex gap-[6px] items-center text-lg font-satoshi font-normal text-darkTextColor'>
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 9L13.5 12L18 9" stroke="#424BD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M3 13.5H5" stroke="#424BD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M1 10.5H5" stroke="#424BD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M5 7.5V7C5 5.89543 5.89543 5 7 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H7C5.89543 19 5 18.1046 5 17V16.5" stroke="#424BD0" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </span>
                                        <span>templates@wavesdesign.io</span></a></div>
                                    <div><a href="tel:+1 800 000 000" className='flex gap-[6px] items-center text-lg font-satoshi font-normal text-darkTextColor'>
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.1183 14.702L14.0001 15.5C11.2184 14.1038 9.50009 12.5 8.50009 10L9.27004 5.8699L7.81461 2L4.06369 2C2.93614 2 2.04823 2.93178 2.21663 4.04668C2.63704 6.83 3.87662 11.8765 7.50009 15.5C11.3053 19.3052 16.7858 20.9564 19.8021 21.6127C20.9669 21.8662 22.0001 20.9575 22.0001 19.7655L22.0001 16.1812L18.1183 14.702Z" stroke="#424BD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <span>+1 800 000 000</span>
                                    </a></div>
                                    <div><a href="" className='flex gap-[6px] items-center text-lg font-satoshi font-normal text-darkTextColor'>
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="#424BD0" strokeWidth="1.5" />
                                                <path d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z" fill="#424BD0" stroke="#424BD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <span>Califronia, Santa Monica</span>
                                    </a></div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <NavLink to='/' className='font-satoshi font-medium py-[9px] px-[22px] rounded-md bg-btnColor text-primeryColor block w-fit text-center lg:mx-0 mx-auto'>About me</NavLink>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between items-center py-10 border-t border-lightColor lg:mt-[120px] mt-16 flex-col lg:flex-row gap-4'>
                    <div><img src={'https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757584/logo_jpcuty.svg'} alt={'img'} /></div>
                    <p className='font-satoshi font-medium text-darkTextColor lg:text-lg text-sm text-center'>Template designed by <a href="#" className='text-darkTextColor hover:underline'>Wavesdesign</a>, powered by no-code tool Framer</p>
                </div>
            </div>
        </div>
    )
}

export default Footer