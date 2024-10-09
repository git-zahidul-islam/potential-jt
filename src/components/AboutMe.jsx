import Image from "next/image";
import bannerImage from "../assets/aboutMe/aboutme.png";

const AboutMe = () => {
  return (
    <section className="md:w-[80%] w-full mx-auto md:px-0 px-2 md:pb-16 pb-6">
      <div className="flex md:flex-row flex-col-reverse gap-2">
        <div className="md:w-[50%] w-full flex flex-col justify-center items-center space-y-5 relative">
          <Image
            src={bannerImage}
            alt="banner image"
            width={420}
            height={510}
          ></Image>
          <div className="h-[60px] w-[40%] bg-[#FD6F00] opacity-70 absolute top-12 right-30"></div>
        </div>

        {/* about me details */}
        <div className="md:space-y-4 space-y-2 md:w-[50%] w-full">
          <h1 className="md:text-4xl text-2xl font-bold text-[#000000]">
            About Me
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>

          {/* progressbar */}
          <div className="space-y-4">
            {/* ui */}
            <div className="space-y-2">
              <p className="text-xl font-semibold">Ui</p>
              <div className="relative w-full bg-[#EDECEC] rounded-full h-3">
                <div
                  className="bg-[#FD6F00] h-3 rounded-full"
                  style={{ width: `92%` }}
                ></div>
                <div
                  className={`absolute top-1/2 left-[88%] transform translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-[#FD6F00] bg-[#EDECEC]`}
                ></div>
              </div>
            </div>
            {/* Website Design */}
            <div className="space-y-2">
              <p className="text-xl font-semibold">Website Design</p>
              <div className="relative w-full bg-[#EDECEC] rounded-full h-3">
                <div
                  className="bg-[#FD6F00] h-3 rounded-full"
                  style={{ width: `85%` }}
                ></div>
                <div
                  className={`absolute top-1/2 left-[80%] transform translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-[#FD6F00] bg-[#EDECEC]`}
                ></div>
              </div>
            </div>
            {/* App Design  */}
            <div className="space-y-2">
              <p className="text-xl font-semibold">App Design </p>
              <div className="relative w-full bg-[#EDECEC] rounded-full h-3">
                <div
                  className="bg-[#FD6F00] h-3 rounded-full"
                  style={{ width: `96%` }}
                ></div>
                <div
                  className={`absolute top-1/2 left-[90%] transform translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-[#FD6F00] bg-[#EDECEC]`}
                ></div>
              </div>
            </div>
            {/* Graphic Design  */}
            <div className="space-y-2">
              <p className="text-xl font-semibold">Ui</p>
              <div className="relative w-full bg-[#EDECEC] rounded-full h-3">
                <div
                  className="bg-[#FD6F00] h-3 rounded-full"
                  style={{ width: `90%` }}
                ></div>
                <div
                  className={`absolute top-1/2 left-[84%] transform translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-[#FD6F00] bg-[#EDECEC]`}
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
