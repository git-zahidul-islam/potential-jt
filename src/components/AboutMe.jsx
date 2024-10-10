"use client";
import Image from "next/image";
import bannerImage from "../assets/aboutMe/aboutme.png";
import { useState, useEffect, useRef } from "react";

const AboutMe = () => {
  const [progress, setProgress] = useState({
    ui: '0%',
    websiteDesign: '0%',
    appDesign: '0%',
    graphicDesign: '0%',
  });

  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setProgress({
          ui: '92%',
          websiteDesign: '85%',
          appDesign: '96%',
          graphicDesign: '90%',
        });
      }, 100); // Delay to allow transition to be visible

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section id="about-me" ref={sectionRef} className="md:w-[80%] w-full mx-auto md:px-0 px-2 md:pb-16 pb-6">
      <div className="flex md:flex-row flex-col-reverse gap-2">
        <div className="md:w-[50%] w-full flex flex-col justify-center items-center space-y-5 relative">
          <Image
            src={bannerImage}
            alt="banner image"
            width={420}
            height={510}
          />
          <div className="h-[60px] w-[40%] bg-[#FD6F00] opacity-70 absolute top-12 right-30"></div>
        </div>

        {/* About me details */}
        <div className="md:space-y-4 space-y-2 md:w-[50%] w-full">
          <h1 className="md:text-4xl text-2xl font-bold text-[#000000]">
            About Me
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>

          {/* Progress Bars */}
          <div className="space-y-4">
            {/* UI */}
            <div className="space-y-2">
              <p className="text-xl font-semibold">UI</p>
              <div className="relative w-full bg-[#EDECEC] rounded-full h-3">
                <div
                  className="bg-[#FD6F00] h-3 rounded-full transition-all"
                  style={{ width: progress.ui, transitionDuration: '7s' }}
                ></div>
                <div
                  className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-[#FD6F00] bg-[#EDECEC] transition-all"
                  style={{
                    left: `calc(${progress.ui} - 12px)`, // Adjust circle position by 50% of its width (6px)
                    transitionDuration: '7s',
                  }}
                ></div>
              </div>
            </div>

            {/* Website Design */}
            <div className="space-y-2">
              <p className="text-xl font-semibold">Website Design</p>
              <div className="relative w-full bg-[#EDECEC] rounded-full h-3">
                <div
                  className="bg-[#FD6F00] h-3 rounded-full transition-all"
                  style={{ width: progress.websiteDesign, transitionDuration: '7s' }}
                ></div>
                <div
                  className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-[#FD6F00] bg-[#EDECEC] transition-all"
                  style={{
                    left: `calc(${progress.websiteDesign} - 12px)`, // Adjust circle position
                    transitionDuration: '7s',
                  }}
                ></div>
              </div>
            </div>

            {/* App Design */}
            <div className="space-y-2">
              <p className="text-xl font-semibold">App Design</p>
              <div className="relative w-full bg-[#EDECEC] rounded-full h-3">
                <div
                  className="bg-[#FD6F00] h-3 rounded-full transition-all"
                  style={{ width: progress.appDesign, transitionDuration: '7s' }}
                ></div>
                <div
                  className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-[#FD6F00] bg-[#EDECEC] transition-all"
                  style={{
                    left: `calc(${progress.appDesign} - 12px)`, // Adjust circle position
                    transitionDuration: '7s',
                  }}
                ></div>
              </div>
            </div>

            {/* Graphic Design */}
            <div className="space-y-2">
              <p className="text-xl font-semibold">Graphic Design</p>
              <div className="relative w-full bg-[#EDECEC] rounded-full h-3">
                <div
                  className="bg-[#FD6F00] h-3 rounded-full transition-all"
                  style={{ width: progress.graphicDesign, transitionDuration: '7s' }}
                ></div>
                <div
                  className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-[#FD6F00] bg-[#EDECEC] transition-all"
                  style={{
                    left: `calc(${progress.graphicDesign} - 12px)`, // Adjust circle position
                    transitionDuration: '7s',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
