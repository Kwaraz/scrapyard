'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FakeTrojanPage() {
  const [count, setCount] = useState(300);
  const [scanProgress, setScanProgress] = useState(0);
  const [threats, setThreats] = useState(0);
  const [scanComplete, setScanComplete] = useState(false);
  
  // Simulated scan effect
  useEffect(() => {
    if (scanProgress < 100) {
      const timer = setTimeout(() => {
        setScanProgress(prev => prev + 1);
        
        // Randomly add "threats" during scan
        if (Math.random() > 0.9 && threats < 37) {
          setThreats(prev => prev + Math.floor(Math.random() * 3) + 1);
        }
      }, 50);
      
      return () => clearTimeout(timer);
    } else {
      setScanComplete(true);
    }
  }, [scanProgress, threats]);
  
  // Countdown timer
  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(prev => prev - 1);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [count]);
  
  return (
    <div className="relative">
      {/* Educational Warning Banner */}
      <div className="bg-blue-700 text-white text-center p-3 sticky top-0 z-50">
        <p className="font-bold">EDUCATIONAL SIMULATION ONLY: This is a demonstration of how malware appears. No real threats exist.</p>
        <Link href="/browse" className="underline">Return to Safe Content</Link>
      </div>
      
      <div className="bg-blue-900 min-h-screen text-white p-4">
        <div className="max-w-4xl mx-auto bg-gray-900 p-6 border-2 border-red-600 rounded-lg shadow-lg">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="bg-red-600 text-white p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-red-500 blink">CRITICAL ALERT: Trojan Detected!</h1>
          </div>
          
          <div className="mb-6 text-center">
            <p className="text-xl font-bold text-yellow-300">Your computer has been infected with ZEUS TROJAN</p>
            <p className="text-lg">Your personal and financial information is at risk</p>
          </div>
          
          {!scanComplete ? (
            <div className="mb-8">
              <p className="text-center mb-2">Scanning system for malware...</p>
              <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                <div 
                  className="bg-green-500 h-4 rounded-full" 
                  style={{ width: `${scanProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-center">Scanning: {scanProgress < 30 ? 'System Memory' : scanProgress < 60 ? 'Registry' : 'Hard Drive'}</p>
              <p className="text-red-500 font-bold text-center mt-2">Threats detected: {threats}</p>
            </div>
          ) : (
            <div className="border-2 border-red-500 p-4 bg-black mb-8">
              <p className="text-red-500 font-bold text-lg">SCAN COMPLETE - INFECTION FOUND</p>
              <ul className="text-red-300 ml-4 mt-2">
                <li>• ZEUS_TROJAN.dll detected in system32</li>
                <li>• Keylogger detected in startup</li>
                <li>• Network security compromised</li>
                <li>• Personal data at risk of theft</li>
              </ul>
            </div>
          )}
          
          <div className="bg-black p-4 border border-yellow-500 mb-8">
            <p className="text-center text-yellow-300 font-bold">Windows Defender has been disabled by malware</p>
            <p className="text-center">Your antivirus cannot remove this infection</p>
          </div>
          
          <div className="text-center mb-6">
            <p className="text-xl font-bold">Call Microsoft Support immediately:</p>
            <p className="text-2xl md:text-4xl font-bold text-green-400">1-800-123-4567</p>
            <p className="text-sm mt-2">Support Code: MS-EDUCATIONPAGE</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 items-center mb-8">
            <div className="bg-red-900 p-3 rounded text-center">
              <p className="font-bold">Time remaining before damage:</p>
              <p className="text-2xl font-bold">{Math.floor(count/60)}:{(count%60).toString().padStart(2, '0')}</p>
            </div>
            
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-xl animate-pulse">
              Remove Virus Now
            </button>
          </div>
          
          <div className="bg-gray-800 p-4 border border-gray-600 text-sm">
            <p>IP Address: 192.168.1.{Math.floor(Math.random() * 255)}</p>
            <p>System: Windows {Math.floor(Math.random() * 5) + 8}</p>
            <p>Location: {["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"][Math.floor(Math.random() * 5)]}, United States</p>
          </div>
        </div>
        
        {/* Educational footer */}
        <div className="mt-8 bg-blue-700 p-4 rounded-lg max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-2">⚠️ EDUCATIONAL NOTICE ⚠️</h2>
          <p>This is a simulation of a common scam. Real malware pages use these tactics to:</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Create false urgency with countdowns</li>
            <li>Display fake virus scans</li>
            <li>Impersonate Microsoft or other trusted companies</li>
            <li>Pressure you to call fake support numbers</li>
            <li>Attempt to extract payment or install actual malware</li>
          </ul>
          <p className="mt-3 font-bold">Always close these pages and NEVER call the provided numbers!</p>
          <Link href="/" className="block mt-4 bg-white text-blue-800 text-center py-2 rounded font-bold">
            Return to Safe Content
          </Link>
        </div>
      </div>
    </div>
  );
}
