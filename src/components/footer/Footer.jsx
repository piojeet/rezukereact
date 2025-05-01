import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div className="bg-[#282943] lg:py-24 py-16 lg:pb-0 pb-0">
            <div className="max-w-[1500px] w-full px-6 lg:px-20 mx-auto">
                <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 flex-wrap'>
                    <div>
                        <div className='lg:text-xl text-lg font-satoshiLight font-semibold text-primeryColor'>smartSeminars.io</div>
                        <div className='flex flex-col gap-5 mt-6'>
                            <p className='text-primeryColor opacity-70 font-satoshi font-medium text-lg'>Transforming finacial seminars with data-driven targeting and guaranteed results</p>
                        </div>
                    </div>
                    <div>
                        <div className='lg:text-xl text-lg font-satoshiLight font-semibold text-primeryColor uppercase'>navigation</div>
                        <ul className='flex flex-col gap-5 mt-6'>
                            <li><NavLink to={'/'} className={'font-satoshi font-medium text-primeryColor opacity-70 hover:opacity-100'}>Home</NavLink></li>
                            <li><NavLink to={'/'} className={'font-satoshi font-medium text-primeryColor opacity-70 hover:opacity-100'}>About</NavLink></li>
                            <li><NavLink to={'/'} className={'font-satoshi font-medium text-primeryColor opacity-70 hover:opacity-100'}>Contact</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <div className='lg:text-xl text-lg font-satoshiLight font-semibold text-primeryColor uppercase'>resources</div>
                        <ul className='flex flex-col gap-5 mt-6'>
                            <li><NavLink to={'/'} className={'font-satoshi font-medium text-primeryColor opacity-70 hover:opacity-100'}>Blog</NavLink></li>
                            <li><NavLink to={'/'} className={'font-satoshi font-medium text-primeryColor opacity-70 hover:opacity-100'}>Privacy Policy</NavLink></li>
                            <li><NavLink to={'/'} className={'font-satoshi font-medium text-primeryColor opacity-70 hover:opacity-100'}>Terms of Service</NavLink></li>
                        </ul>
                    </div>




                    <div className=''>
                        <div className='mb-2 rounded-[12px_12px_100px_12px]'>
                            <div>
                                <h4 className='text-xl font-satoshiLight font-semibold text-primeryColor uppercase'>get in touch</h4>
                                <div className='flex flex-col gap-4 py-6 border-b border-lightColor'>
                                    <div><a href="mailto:templates@wavesdesign.io" className='flex gap-[6px] items-center text-base font-satoshi font-normal text-primeryColor'>
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 9L13.5 12L18 9" stroke="#424BD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M3 13.5H5" stroke="#424BD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M1 10.5H5" stroke="#424BD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M5 7.5V7C5 5.89543 5.89543 5 7 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H7C5.89543 19 5 18.1046 5 17V16.5" stroke="#424BD0" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </span>
                                        <span className='inline-block hover:opacity-100 opacity-70'>templates@wavesdesign.io</span></a></div>
                                    <div><a href="tel:+1 800 000 000" className='flex gap-[6px] items-center text-base font-satoshi font-normal text-primeryColor'>
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.1183 14.702L14.0001 15.5C11.2184 14.1038 9.50009 12.5 8.50009 10L9.27004 5.8699L7.81461 2L4.06369 2C2.93614 2 2.04823 2.93178 2.21663 4.04668C2.63704 6.83 3.87662 11.8765 7.50009 15.5C11.3053 19.3052 16.7858 20.9564 19.8021 21.6127C20.9669 21.8662 22.0001 20.9575 22.0001 19.7655L22.0001 16.1812L18.1183 14.702Z" stroke="#424BD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <span>USA:</span>
                                        <span className='inline-block hover:opacity-100 opacity-70'>+1 800 000 000</span>
                                    </a></div>
                                    <div><a href="tel:+1 800 000 000" className='flex gap-[6px] items-center text-base font-satoshi font-normal text-primeryColor'>
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.1183 14.702L14.0001 15.5C11.2184 14.1038 9.50009 12.5 8.50009 10L9.27004 5.8699L7.81461 2L4.06369 2C2.93614 2 2.04823 2.93178 2.21663 4.04668C2.63704 6.83 3.87662 11.8765 7.50009 15.5C11.3053 19.3052 16.7858 20.9564 19.8021 21.6127C20.9669 21.8662 22.0001 20.9575 22.0001 19.7655L22.0001 16.1812L18.1183 14.702Z" stroke="#424BD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <span>Canada</span>
                                        <span className='inline-block hover:opacity-100 opacity-70'>+1 800 000 000</span>
                                    </a></div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <ul className='flex items-center gap-x-4 text-primeryColor'>
                                <li><a href="#" className='opacity-70 block hover:opacity-100'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                    </svg>
                                </a></li>
                                <li><a href="#" className='opacity-70 block hover:opacity-100'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                                    </svg>
                                </a></li>
                                <li><a href="#" className='opacity-70 block hover:opacity-100'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                    </svg>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between items-center py-10 border-t border-white/20 lg:mt-[120px] mt-16 flex-col lg:flex-row gap-4'>
                    <div className='font-satoshi font-medium text-primeryColor opacity-70'>@ 2025 smartSeminars.io All rights reserved.</div>
                    <ul className='flex items-center gap-x-6 gap-y-2 font-satoshi font-medium flex-wrap justify-center'>
                        <li><NavLink to="" className={'font-satoshi font-medium text-primeryColor opacity-70 hover:opacity-100'}>Privacy Policy</NavLink></li>
                        <li><NavLink to="" className={'font-satoshi font-medium text-primeryColor opacity-70 hover:opacity-100'}>Terms of Service</NavLink></li>
                        <li><NavLink to="" className={'font-satoshi font-medium text-primeryColor opacity-70 hover:opacity-100'}>Cookie Policy</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer