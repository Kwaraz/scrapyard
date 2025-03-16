import Image from "next/image";
import FakeGutPainAd from "@/components/FakeGutPainAd";
import Spline from '@splinetool/react-spline/next';


export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen bg-[#000000] p-8 pb-20 gap-10 font-[family-name:var(--font-geist-sans)]">
    

      <div className="w-full h-[600px]">
      <Spline
        scene="https://prod.spline.design/5J1PkrJBiPBm-0zS/scene.splinecode" 
      />
      </div>
      <header className="w-full flex justify-center pt-8">
        {/* ScamYard Logo */}
        
      </header>

      <main className="flex flex-col gap-[32px] items-center text-center">
        <h1 className="text-4xl font-bold text-red-500 drop-shadow-md">Welcome to ScamYards!</h1>
        
        <p className="text-2xl text-red-500 max-w-2xl font-semibold px-4">
          Tired of paying reasonable prices? Have you ever wanted to overpay for an item, or click on a link and get a virus? ScamYards will scr'h'appily simulate that experience for you!
        </p>

        <div className="flex gap-6 items-center flex-col sm:flex-row mt-6">
          <a
            className="rounded-full border-2 border-solid border-transparent transition-colors flex items-center justify-center bg-red-500 text-white gap-2 hover:bg-red-600 font-bold text-lg h-12 px-8 w-64 sm:w-auto"
            href="/browse"
          >
            Get Scammed Now!
          </a>
          <a
            className="rounded-full border-2 border-solid border-yellow-400 bg-yellow-400 text-black transition-colors flex items-center justify-center hover:bg-yellow-500 font-bold text-lg h-12 px-8 w-64 sm:w-auto"
            href="submit"
          >
            Become a Scammer
          </a>
          <a
            className="rounded-full border-2 border-solid border-transparent transition-colors flex items-center justify-center bg-red-500 text-white gap-2 hover:bg-red-600 font-bold text-lg h-12 px-8 w-64 sm:w-auto"
            href="/news"
          >
            Breaking News
          </a>
        </div>
      </main>
    
      <footer className="w-full pt-12 pb-4 flex gap-[24px] flex-wrap items-center justify-center text-red-500">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 font-medium"
          href="#"
        >
          About Us
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 font-medium"
          href="#"
        >
          Testimonials
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 font-medium"
          href="#"
        >
          Contact (Don't bother)
        </a>
      </footer>
    </div>
  );
}
