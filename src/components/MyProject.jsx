import Image from "next/image";
// images import
import pro1p1 from '../assets/projects/pro1p1.png'
import pro1p2 from '../assets/projects/pro1p2.png'
import pro2p1 from '../assets/projects/pro2p1.png'
import pro2p2 from '../assets/projects/pro2p2.png'
import pro3p1 from '../assets/projects/pro3p1.png'
import pro3p2 from '../assets/projects/pro3p2.png'


const MyProject = () => {
    return (
        <section className="md:w-[80%] w-full mx-auto md:px-0 px-2 md:py-16 py-6">
            <div>
                <h1 className="md:text-[65px] text-[40px] text-center font-semibold text-black/95">Services</h1>
                <p className="md:text-xl text-lg font-normal text-[#000000f2] md:w-[70%] w-full mx-auto text-center">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>

                <div className="flex justify-center items-center gap-3">
                    <p className="px-5 py-1 border border-[#545454ca] rounded-md">All</p>
                    <p className="px-5 py-1 border border-[#545454ca] rounded-md">UI/UX</p>
                    <p className="px-5 py-1 border border-[#545454ca] rounded-md bg-[#FD6F00]">Web Design</p>
                    <p className="px-5 py-1 border border-[#545454ca] rounded-md">App Design</p>
                    <p className="px-5 py-1 border border-[#545454ca] rounded-md">Graphic Design</p>
                </div>

                <div className="md:mt-8 mt-4 grid md:grid-cols-3 grid-cols-1 gap-5">
                    <div className="rounded-md space-y-3 px-3 py-8">
                        <div className="bg-[#FFEBDB] flex">
                            <Image className="z-20 shadow" src={pro1p1} alt="skill images" width={270} height={350}></Image>
                            <Image className="z-10 shadow-sm" src={pro1p2} alt="skill images" width={270} height={490}></Image>
                        </div> 
                        <h4 className="md:text-xl text-lg font-normal text-[#FD6F00]">Web Design</h4>
                        <p className="md:text-2xl text-xl  text-black/90">AirCalling Landing Page Design </p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default MyProject;