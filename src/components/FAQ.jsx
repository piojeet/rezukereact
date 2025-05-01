import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
    {
        question: 'Why seminars and not other marketing strategies?',
        answer: 'Seminars provide a personal touch, build trust, and engage directly with potential clients, making them more effective in certain niches.',
    },
    {
        question: 'What is the best way to promote a seminar?',
        answer: 'Using a mix of email marketing, social media, and local partnerships works best for seminar promotion.',
    },
    {
        question: 'How do seminars convert better?',
        answer: 'They allow real-time interaction, which builds credibility and helps close deals faster.',
    },
];

function FAQ() {
    const [openIndexes, setOpenIndexes] = useState(Array(faqs.length).fill(false));
    const faqHeadingRef = useRef(null);
    const faqSubtextRef = useRef(null);
    const accordionRefs = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            faqHeadingRef.current,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: faqHeadingRef.current,
                start: 'top 80%',
              },
            }
          );
          
          gsap.fromTo(
            faqSubtextRef.current,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              delay: 0.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: faqSubtextRef.current,
                start: 'top 80%',
              },
            }
          );
          

        gsap.from(accordionRefs.current, {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: accordionRefs.current[0],
                start: 'top 85%',
            },
        });
    }, []);

    const toggleAccordion = (index) => {
        setOpenIndexes((prev) =>
            prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
        );
    };

    return (
        <div className='lg:py-24 pb-4 lg:pb-4 py-16 bg-[#F9F9FF] relative'>
            <div className='max-w-[1500px] w-full px-6 lg:px-20 mx-auto'>
                <h2
                    ref={faqHeadingRef}
                    className='process-heading lg:text-5xl text-3xl font-black text-darkTextColor font-satoshi text-center !leading-[1.2]'
                >
                    Frequently Asked Questions
                </h2>
                <p
                    ref={faqSubtextRef}
                    className='process-subtext text-xl font-satoshi font-medium text-darkTextColor text-center mt-4'
                >
                    Find answers to common questions about our seminar marketing system
                </p>
                <div className='space-y-6 max-w-[800px] w-full mx-auto mt-10'>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            ref={(el) => (accordionRefs.current[index] = el)}
                            className='shadow-[0px_5px_10px_rgba(0,0,0,0.1)] rounded-lg'
                        >
                            <div
                                className='flex items-center justify-between p-6 cursor-pointer'
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className='flex items-center gap-3'>
                                    <span className='inline-flex w-[32px] h-[32px] bg-btnColor/20 rounded-full items-center justify-center text-btnColor'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                                            <path d="M12 19l0 .01" />
                                        </svg>
                                    </span>
                                    <div className='text-lg font-satoshiLight font-semibold text-darkTextColor'>
                                        {faq.question}
                                    </div>
                                </div>
                                <div
                                    className={`transition-transform duration-300 ${openIndexes[index] ? 'rotate-180' : ''
                                        }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M6 9l6 6l6 -6" />
                                    </svg>
                                </div>
                            </div>

                            <div
                                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${openIndexes[index] ? 'max-h-[1000px] pb-6' : 'max-h-0 pb-0'
                                    }`}
                            >
                                <p className='font-satoshiLight font-semibold text-darkTextColor opacity-70 leading-[1.7]'>
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQ;
