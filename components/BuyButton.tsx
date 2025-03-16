'use client';

export default function BuyButton() {
  return (
    <button 
      className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 font-bold animate-pulse w-full sm:w-auto"
      onClick={() => alert('This is a simulated scam! In a real scenario, clicking this button might lead to financial loss or identity theft.')}
    >
      BUY NOW - DON'T MISS OUT!
    </button>
  );
}
