import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Partner() {
  const partnerHeadingRef = useRef(null);
  const vendorParaRef = useRef(null);
  const marketModelParaRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      partnerHeadingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: partnerHeadingRef.current,
          start: 'top 85%',
        },
      }
    );

    gsap.fromTo(
      vendorParaRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: vendorParaRef.current,
          start: 'top 85%',
        },
      }
    );

    gsap.fromTo(
      marketModelParaRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: marketModelParaRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <div className="bg-[#F9F9FF] lg:py-24 py-16">
      <div className="max-w-[1500px] w-full px-6 lg:px-20 mx-auto space-y-8">
        <h2
          ref={partnerHeadingRef}
          className="lg:text-5xl text-3xl font-bold text-darkTextColor font-satoshi !leading-[1.2] text-center"
        >
          We're Not a Vendor. <span>We're a Partner</span>
        </h2>
        <div className="space-y-6 max-w-[700px] w-full mx-auto">
          <div
            ref={vendorParaRef}
            className="bg-primeryColor rounded-md p-6 text-lg font-satoshiLight font-semibold text-darkTextColor text-center"
          >
            <p>
              That word —vendor—it's everywhere in financial services. Approved vendors. Corporate
              partners. Endless paperwork and 12-month minimums. We think it's outdated.
            </p>
          </div>
          <div
            ref={marketModelParaRef}
            className="space-y-2 bg-primeryColor rounded-md p-6 text-lg font-satoshiLight font-semibold text-darkTextColor text-center"
          >
            <p>We believe in a free market model.</p>
            <p className="text-btnColor">
              No contracts. No commitments. Just repeat if you like the results.
            </p>
            <p>
              We don't "lock you in." We <span className="text-btnColor">earn</span> the right to run your next campaign.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
