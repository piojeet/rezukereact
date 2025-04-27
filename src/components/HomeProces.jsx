import React from 'react';
import { NavLink } from 'react-router-dom';

const steps = [
    {
        title: 'Intro call',
        time: '10 min',
        desc: 'A brief conversation to understand your needs and goals.'
    },
    {
        title: 'Intro call',
        time: '10 min',
        desc: 'A brief conversation to understand your needs and goals.'
    },
    {
        title: 'Intro call',
        time: '10 min',
        desc: 'A brief conversation to understand your needs and goals.'
    }
];

function HomeProces() {
    return (
        <div className='lg:py-24 py-16'>
            <div className='max-w-[1500px] w-full px-6 lg:px-20 mx-auto'>
                <h2 className='lg:text-5xl text-3xl font-black text-darkTextColor font-satoshi text-center !leading-[1.2]'>Obvious yet proven process</h2>
                <p className='text-xl font-satoshi font-medium text-darkTextColor text-center max-w-[400px] w-full mx-auto mt-4'>My simple yet powerful workflow to offer you the best results.</p>
                <div className='grid lg:grid-cols-[.75fr_.9fr_1.4fr] mt-[50px] grid-cols-1 gap-y-10'>
                    {steps.map((step, i) => (
                        <div key={i}>
                            <div className='font-satoshi text-5xl font-bold text-btnColor'>{i + 1}</div>
                            <div className='w-full bg-lightColor h-0.5 my-6'>
                                <div className='w-[90%] bg-btnColor h-full relative'>
                                    <span className='absolute -right-2 top-1/2 block -translate-y-1/2'>
                                        <img src={'https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757584/caret-right-fill_aygvke.svg'} alt="arrow" />
                                    </span>
                                </div>
                            </div>
                            <div className='w-[90%]'>
                                <div className='flex items-center justify-between'>
                                    <div className='font-satoshi text-[22px] font-bold text-darkTextColor'>{step.title}</div>
                                    <div className='font-satoshi font-semibold text-darkTextColor text-lg opacity-70'>{step.time}</div>
                                </div>
                                <p className='text-lg font-medium font-satoshi text-darkTextColor mt-4'>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mt-10'>
                    <NavLink to='/' className='font-satoshi font-medium py-[9px] px-[22px] rounded-md bg-btnColor text-primeryColor block w-fit text-center mx-auto cursor-pointer'>Schedule intro call</NavLink>
                </div>
            </div>
        </div>
    );
}

export default HomeProces;
