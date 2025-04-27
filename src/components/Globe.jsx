import React from 'react'
import { NavLink } from 'react-router-dom'

function Globe() {
    return (
        <div className='lg:py-24 py-16 bg-[#F9F9FF]'>
            <div className='max-w-[1500px] w-full px-6 lg:px-20 mx-auto'>
                <div className='lg:grid lg:grid-cols-3 gap-x-16'>
                    <div className='col-span-2'>
                        <img src={'https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757586/FocZhPbwg0zBL9gBiDxCyEanWE_qw3rag.avif'} alt={'img'} className='w-full h-full' />
                    </div>

                    <div className='flex flex-col justify-between gap-6 max-w-[400px] w-full lg:max-w-fit mx-auto mt-12 lg:mt-0'>
                        <div className='text-center lg:text-start'>
                            <h2 className='lg:text-5xl text-3xl font-black text-darkTextColor font-satoshi !leading-[1.2]'>I work for clients around the globe</h2>
                            <p className='text-lg font-satoshi text-darkTextColor font-medium mt-6'>Etiam vitae tortor. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.</p>
                        </div>

                        <div>
                            <div className='flex xs:justify-between gap-4 xs:flex-row flex-col justify-center items-center xs:items-start'>
                                <div>
                                    <div className='font-satoshi font-black lg:text-[60px] text-[40px] leading-none text-btnColor'>48</div>
                                    <div className='font-satoshiLight text-darkTextColor font-semibold text-lg'>International clients</div>
                                </div>
                                <div>
                                    <div className='font-satoshi font-black lg:text-[60px] text-[40px] leading-none text-btnColor'>48</div>
                                    <div className='font-satoshiLight text-darkTextColor font-semibold text-lg'>International clients</div>
                                </div>
                            </div>

                            <div className='mt-8'>
                                <NavLink to='/' className='font-satoshi py-[9px] px-[22px] rounded-md bg-btnColor text-primeryColor block w-fit text-center cursor-pointer mx-auto lg:mx-0 font-medium'>Schedule intro call</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Globe