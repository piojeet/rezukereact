import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Struggle = () => {
    const struggleHeadingRef = useRef(null);
    const struggleTextRefs = useRef([]);
    const struggleRowRefs = useRef([]);
    const seminarHighlightRef = useRef(null);


    const channels = [
        {
            title: 'Cold Calling',
            conversion: '0.5% conversation',
            note: 'Risky in Canada due to anti-spam laws.',
        },
        {
            title: 'Email Bleasts',
            conversion: '1% conversation',
            note: 'Spam fines up to $10M per violation.',
        },
        {
            title: 'Social Ads',
            conversion: '1% conversation',
            note: 'Costly, regulated, low conversation rate.',
        },
        {
            title: 'Direct Mail',
            conversion: '1% conversation',
            note: 'Costly, low engagement.',
        },
        {
            title: 'Seminars',
            conversion: '10-25% conversation',
            note: 'When done right',
            highlight: true,
        },
    ];

    useEffect(() => {
        gsap.fromTo(
            struggleHeadingRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: struggleHeadingRef.current,
                    start: 'top 80%',
                },
            }
        );

        struggleTextRefs.current.forEach((el, i) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    delay: i * 0.2,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                    },
                }
            );
        });

        struggleRowRefs.current.forEach((el, i) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                    },
                }
            );
        });

        if (seminarHighlightRef.current) {
            gsap.fromTo(
              seminarHighlightRef.current,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.6,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: seminarHighlightRef.current,
                  start: 'top 80%',
                },
              }
            );
          }
    }, []);

    return (
        <div className='lg:py-24 py-16 lg:pb-0 pb-0'>
            <div className='max-w-[1500px] w-full px-6 lg:px-20 mx-auto'>
                <h2
                    ref={struggleHeadingRef}
                    className='lg:text-5xl text-3xl font-black text-darkTextColor font-satoshi text-center !leading-[1.2]'
                >
                    The Seminar <span className='text-btnColor'>Struggle</span>
                </h2>

                <p
                    ref={(el) => (struggleTextRefs.current[0] = el)}
                    className='text-xl font-satoshi font-medium text-darkTextColor text-center mt-4'
                >
                    What Financial Advisors Hate Most About Seminars
                </p>

                <p
                    ref={(el) => (struggleTextRefs.current[1] = el)}
                    className='font-satoshi font-medium text-darkTextColor text-center mt-4'
                >
                    <div>Cold leads. NO-shows. Rooms full of people with no money.</div>
                    <div>Most seminar companies don't care about your result--just filling seats.</div>
                </p>

                <div className='max-w-[800px] w-full mx-auto space-y-4 mt-11 text-sm'>
                    <div className='grid grid-cols-[1fr_0.5fr_1fr] bg-LightBtnColor/5 font-satoshi font-semibold py-1.5 px-4 rounded-md gap-x-4'>
                        <div>Channel</div>
                        <div>Conversion</div>
                        <div>Note</div>
                    </div>

                    {channels.map((channel, i) => (
                        <div
                            key={i}
                            ref={(el) => (struggleRowRefs.current[i] = el)}
                            className={`grid grid-cols-[1fr_0.5fr_1fr] py-3 px-4 border-b border-LightBtnColor/5 border-l-2 rounded-md gap-x-4 ${channel.highlight
                                    ? 'border-l-btnColor text-btnColor bg-[#f8f8ff]'
                                    : 'border-l-LightBtnColor text-darkTextColor'
                                }`}
                        >
                            <div className='font-satoshi font-semibold'>{channel.title}</div>
                            <div className='font-satoshiLight font-semibold'>{channel.conversion}</div>
                            <div className='font-satoshiLight font-semibold'>{channel.note}</div>
                        </div>
                    ))}
                </div>

                <div
                    ref={seminarHighlightRef}
                    className='text-xl font-satoshi font-bold py-1.5 px-4 bg-[#f8f8ff] w-fit mx-auto mt-8 rounded-full'
                >
                    <span className='text-btnColor'>Seminars win.</span> The real question is: <span className='text-btnColor'>How do you make them work?</span>
                </div>

            </div>
        </div>
    );
};

export default Struggle;
