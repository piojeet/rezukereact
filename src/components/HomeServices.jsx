import React from 'react';
import { NavLink } from 'react-router-dom';

function HomeServices() {
    const servicescontent = [
        { id: 1, title: 'Google Ads', disc: 'Mauris sollicitudin fermentum libero. Vivamus aliquet elit ac nisl. In hac habitasse platea dictumst.', linktitle: 'Read more', link: '/', img: 'https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757586/google-circle_on1sgf.svg' },
        { id: 2, title: 'SEO Optimization', disc: 'Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue.', linktitle: 'Read more', link: '/', img: 'https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757586/google-circle_on1sgf.svg' },
        { id: 3, title: 'Content Marketing', disc: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.', linktitle: 'Read more', link: '/', img: 'https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757586/google-circle_on1sgf.svg' },
        { id: 4, title: 'Social Media', disc: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.', linktitle: 'Read more', link: '/', img: 'https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757586/google-circle_on1sgf.svg' },
        { id: 5, title: 'Email Campaigns', disc: 'Donec ullamcorper nulla non metus auctor fringilla.', linktitle: 'Read more', link: '/', img: 'https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757586/google-circle_on1sgf.svg' }
    ];

    return (
        <div className='bg-[#F9F9FF] lg:py-24 py-16'>
            <div className='max-w-[1500px] w-full px-6 lg:px-20 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-7'>
                    <div>
                        <h2 className='lg:text-5xl text-3xl font-bold text-darkTextColor font-satoshi !leading-[1.2]'>Amazing services</h2>
                        <p className='font-normal font-satoshi text-xl text-darkTextColor mt-[16px] mb-[25px]'>My consulting services are designed to elevate your business. I provide tailored solutions to meet your unique needs.</p>
                        <NavLink to='/' className='font-satoshi font-medium py-[9px] px-[22px] rounded-md bg-btnColor text-primeryColor block w-fit text-center'>Let’s talk</NavLink>
                    </div>

                    {servicescontent.map(item => (
                        <div key={item.id} className='md:p-[40px_52px_40px_40px] p-[30px_42px_30px_30px] bg-primeryColor rounded-ee-[100px] rounded-lg group hover:bg-btnColor transition-all duration-200 origin-bottom-left hover:-rotate-2'>
                            <div className='flex items-center gap-4 mb-[32px]'>
                                <img src={item.img} alt={item.title} className='w-[43px] group-hover:invert transition-all duration-200' />
                                <div className='md:text-[28px] text-[24px] font-satoshi font-bold text-darkTextColor transition-all duration-200 group-hover:text-primeryColor'>{item.title}</div>
                            </div>
                            <p className='font-satoshi font-medium md:text-lg text-darkTextColor transition-all duration-200 group-hover:text-primeryColor'>{item.disc}</p>
                            <div className='mt-5'>
                                <NavLink to={item.link} className='text-lg font-satoshi text-darkTextColor hover:underline transition-all duration-200 group-hover:text-primeryColor'>{item.linktitle}</NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomeServices;
