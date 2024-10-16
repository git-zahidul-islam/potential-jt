import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/shared/Navbar'), {
  ssr: true,
  loading: () => <div className="h-[128px] bg-white/90 w-full animate-bounce duration-500"></div>,
});
const Banner = dynamic(() => import('@/components/Banner'),{
  ssr: true,
  loading: () => <div className="h-[100px] bg-green-500 w-full animate-bounce duration-700"></div>
})
const AboutMe = dynamic(() => import('@/components/AboutMe'),{
  ssr: true,
  loading: () => <div className="h-[100px] bg-green-500 w-full animate-bounce duration-700"></div>
})
const Services = dynamic(() => import('@/components/Services'),{
  ssr: true,
  loading: () => <div className="h-[100px] bg-green-500 w-full animate-bounce duration-700"></div>
})
const MyProject = dynamic(() => import('@/components/MyProject'),{
  ssr: true,
  loading: () => <div className="h-[100px] bg-green-500 w-full animate-bounce duration-700"></div>
})
const Testimonials = dynamic(() => import('@/components/Testimonials'),{
  ssr: true,
  loading: () => <div className="h-[100px] bg-green-500 w-full animate-bounce duration-700"></div>
})
const Footer = dynamic(() => import('@/shared/Footer'),{
  ssr: true,
  loading: () => <div className="h-[100px] bg-green-500 w-full animate-bounce duration-700"></div>
})

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <AboutMe/>
      <Services/>
      <MyProject/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
