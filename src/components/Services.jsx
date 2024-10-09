import Image from "next/image";
// images import
import uiux from '../assets/services/Vector.png'
import webDesign from '../assets/services/Layer_1.png'
import appDesign from '../assets/services/Group 18.png'
import graphic from '../assets/services/Vector (1).png'


const Services = () => {
    return (
        <section className="md:w-[80%] w-full mx-auto md:px-0 px-2 md:pb-16 pb-6">
            <div>
                <h1 className="md:text-[65px] text-[40px] text-center font-semibold text-black/95">Services</h1>
                <p className="md:text-xl text-lg font-normal text-[#000000f2] md:w-[70%] w-full mx-auto text-center">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>

                <div className="md:mt-8 mt-4 grid md:grid-cols-4 grid-cols-2 gap-5">
                    <div className="bg-[#F8F8F8] rounded-md space-y-3 px-3 py-8">
                        <Image src={uiux} alt="skill images" width={67} height={67}></Image>
                        <h4 className="md:text-2xl text-xl font-semibold">UI</h4>
                        <p className="text-base text-black/70">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                    </div>
                    <div className="bg-[#F8F8F8] rounded-md space-y-3 px-3 py-8">
                        <Image src={webDesign} alt="skill images" width={67} height={67}></Image>
                        <h4 className="md:text-2xl text-xl font-semibold">Web Design</h4>
                        <p className="text-base text-black/70">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                    </div>
                    <div className="bg-[#F8F8F8] rounded-md space-y-3 px-3 py-8">
                        <Image src={appDesign} alt="skill images" width={47} height={47}></Image>
                        <h4 className="md:text-2xl text-xl font-semibold">App Design</h4>
                        <p className="text-base text-black/70">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                    </div>
                    <div className="bg-[#F8F8F8] rounded-md space-y-3 px-3 py-8">
                        <Image src={graphic} alt="skill images" width={67} height={67}></Image>
                        <h4 className="md:text-2xl text-xl font-semibold">Graphic Design</h4>
                        <p className="text-base text-black/70">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;