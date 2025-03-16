'use client';

import { useState, useRef, useEffect } from 'react';

export default function FakeCaptcha() {
  const [isOpen, setIsOpen] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState({ x: 200, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [success, setSuccess] = useState(false);
  const draggableRef = useRef<HTMLDivElement>(null);
  
  // Reset target when attempts increase
  useEffect(() => {
    if (attempts > 0 && attempts < 3) {
      setTarget({
        x: Math.floor(Math.random() * 250) + 50,
        y: Math.floor(Math.random() * 150) + 50,
      });
      setPosition({ x: 0, y: 0 });
    }
  }, [attempts]);
  
  // Handle mouse/touch events for dragging
  const handleMouseDown = () => {
    setIsDragging(true);
  };
  
  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    let clientX, clientY;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    const container = draggableRef.current?.parentElement;
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    const x = Math.min(Math.max(0, clientX - rect.left - 25), rect.width - 50);
    const y = Math.min(Math.max(0, clientY - rect.top - 25), rect.height - 50);
    
    setPosition({ x, y });
    
    // Check if getting close to target, then move it unless 3rd attempt
    const distance = Math.sqrt(Math.pow(x - target.x, 2) + Math.pow(y - target.y, 2));
    if (distance < 50 && attempts < 2) {
      // Move target away
      setTarget({
        x: Math.floor(Math.random() * 250) + 50,
        y: Math.floor(Math.random() * 150) + 50,
      });
    }
    
    // Allow success on 3rd attempt when close
    if (distance < 30 && attempts === 2) {
      setSuccess(true);
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
    if (!success && Math.abs(position.x - target.x) < 30 && Math.abs(position.y - target.y) < 30) {
      if (attempts < 2) {
        setAttempts(attempts + 1);
      } else {
        setSuccess(true);
      }
    }
  };
  
  const resetCaptcha = () => {
    setIsOpen(false);
    setAttempts(0);
    setPosition({ x: 0, y: 0 });
    setTarget({ x: 200, y: 100 });
    setSuccess(false);
  };
  
  return (
    <div className="flex flex-col items-center my-6">
      {/* reCAPTCHA-style button */}
      <div 
        className="border border-gray-300 rounded-md shadow-sm p-3 w-full max-w-[300px] bg-white cursor-pointer relative" 
        onClick={() => setIsOpen(true)}
      >
        <div className="flex items-center">
          <div className="w-6 h-6 border border-gray-300 rounded-sm flex items-center justify-center mr-3">
            <div className="w-3 h-3 bg-white border border-blue-500"></div>
          </div>
          <span className="text-gray-700 text-sm">I'm not a robot</span>
          <div className="ml-auto">
            <div className="w-10 h-10 flex flex-col items-center">
              <div className="text-[8px] text-gray-500 mb-1">scamCAPTCHA</div>
              <div className="flex space-x-[1px]">
                <div className="bg-blue-500 w-2 h-2"></div>
                <div className="bg-red-500 w-2 h-2"></div>
                <div className="bg-yellow-500 w-2 h-2"></div>
                <div className="bg-green-500 w-2 h-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[9px] text-gray-400 mt-1 text-right pr-10">
          Privacy - Terms
        </div>
      </div>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[350px] p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">Security Check</h3>
              <button 
                onClick={resetCaptcha}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            {!success ? (
              <>
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-600">
                    Drag the robot to the target zone
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Attempt {attempts + 1} of 3
                  </p>
                </div>
                
                <div 
                  className="relative h-[200px] bg-gray-100 rounded-lg border border-gray-300 mb-4 select-none touch-none"
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onTouchMove={handleMouseMove}
                  onTouchEnd={handleMouseUp}
                >
                  {/* Target zone */}
                  <div 
                    className="absolute w-[50px] h-[50px] rounded-full border-2 border-dashed border-blue-500 flex items-center justify-center"
                    style={{ left: `${target.x}px`, top: `${target.y}px` }}
                  >
                    <span className="text-xs text-blue-500">Drop</span>
                  </div>
                  
                  {/* Draggable element */}
                  <div
                    ref={draggableRef}
                    className="absolute w-[50px] h-[50px] bg-gray-800 rounded-md flex items-center justify-center cursor-move text-white text-2xl"
                    style={{ left: `${position.x}px`, top: `${position.y}px` }}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                  >
                    🤖
                  </div>
                </div>
                
                <div className="text-center">
                  <button 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
                    disabled
                  >
                    Verify
                  </button>
                </div>
                <div className="mt-3 text-sm text-gray-700">
                  <p>Fake websites use fake captchas to redirect you to sketchy pages, but this is just a scrappy annoyance C:</p>
                  <p className="mt-1">PS: click the X to go back, you can press Submit without verifying</p>
                </div>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="text-green-500 text-5xl mb-3">✓</div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Verification Complete</h4>
                <p className="text-sm text-gray-600 mb-4">You've proven you're not human!</p>
                <button 
                  onClick={resetCaptcha}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Close
                </button>
                
                <div className="mt-4 text-xs text-gray-400 italic">
                  This was an educational simulation of frustrating CAPTCHA experiences.
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
