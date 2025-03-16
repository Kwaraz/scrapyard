'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FakeGutPainAd() {
  const [pulsate, setPulsate] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPulsate(prev => !prev);
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative max-w-sm mx-auto border-2 border-yellow-500 bg-white p-3 shadow-lg rounded-lg overflow-hidden">
      {/* Educational notice - small but visible */}
      <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 z-10">
        SIMULATION
      </div>
      
      <div className="text-center mb-2">
        <h3 className="text-red-600 font-bold text-xl">DOCTORS SHOCKED!</h3>
        <p className="text-sm text-gray-700">Local man discovers weird trick to</p>
        <p className="text-lg font-bold">ELIMINATE GUT PAIN FOREVER</p>
      </div>
      
      <div className="relative">
        <img 
          src="https://img.freepik.com/premium-photo/working-man-holding-stomach-because-stomachache_826454-818.jpg?w=2000" 
          alt="Man with stomach pain" 
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="absolute -top-1 -left-1 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
          NEW
        </div>
      </div>
      
      <div className="my-2 text-center">
        <p className="text-sm">This <span className="font-bold">one simple pill</span> eliminates:</p>
        <div className="flex justify-around text-xs font-bold mt-1">
          <span>✓ Bloating</span>
          <span>✓ Indigestion</span>
          <span>✓ Cramps</span>
        </div>
      </div>
      
      <div className="text-center text-sm mb-2">
        <p className="font-bold text-gray-800">72% OFF TODAY ONLY</p>
        <p className="text-xs text-gray-500">Offer expires: March 15, 2025</p>
      </div>
      
      <Link href="/trojan">
        <button 
          className={`w-full py-3 text-white font-bold rounded-lg text-lg ${
            pulsate ? 'bg-green-600 scale-105' : 'bg-green-500'
          } transition-all duration-300`}
        >
          CLAIM YOUR BOTTLE NOW →
        </button>
      </Link>
      
      <p className="text-[10px] text-gray-400 text-center mt-2">
        *This is an educational simulation demonstrating deceptive advertising tactics.
      </p>
    </div>
  );
}
