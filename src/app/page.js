import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/shared/Navbar'), {
  ssr: true,
  loading: () => <div className="h-[128px] bg-white/90 w-full animate-bounce duration-500"></div>,
});

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1>dhfohshfsifisifvgbsi</h1>
    </div>
  );
}
