
export const dynamic = 'force-dynamic';


// Then, update your app/browse/[id]/page.tsx file:
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from '@/src/db';
import { scamsTable, SelectScam } from '@/src/db/schema';
import { eq } from 'drizzle-orm';
import BuyButton from '@/components/BuyButton';

interface ScamDetailPageProps {
  params: {
    id: string;
  };
}

export default async function ScamDetailPage({ params }: ScamDetailPageProps) {
  const id = parseInt(params.id);
  
  // Handle invalid ID
  if (isNaN(id)) {
    notFound();
  }
  
  // Fetch the specific scam
  const [scam] = await db.select().from(scamsTable).where(eq(scamsTable.id, id));
  
  // Handle not found
  if (!scam) {
    notFound();
  }
  
  // Generate a random fake discount percentage
  const discount = Math.floor(Math.random() * 70) + 20; // Between 20% and 90%
  const originalPrice = (parseFloat(scam.price) * (100 / (100 - discount))).toFixed(2);
  
  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border-2 border-red-500">
        {/* Warning banner */}
        <div className="bg-yellow-400 text-black p-2 text-center font-bold text-sm">
          ⚠️ EDUCATIONAL PURPOSES ONLY: This listing demonstrates common online scam tactics ⚠️
        </div>
        
        <div className="relative h-64 sm:h-80 md:h-96">
          <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 z-10 font-bold rounded-bl-lg">
            HOT DEAL!
          </div>
          <img 
            src={scam.image} 
            alt={scam.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
            <h1 className="text-3xl font-bold text-red-500">{scam.title}</h1>
            <div className="text-right">
              <div className="text-gray-600 line-through text-lg">${originalPrice}</div>
              <div className="text-2xl font-bold text-red-500">${scam.price} <span className="text-sm bg-red-500 text-white px-2 py-1 rounded-full">SAVE {discount}%!</span></div>
              <div className="text-sm text-yellow-600 mt-1">🔥 12 people viewing this right now!</div>
            </div>
          </div>
          
          <div className="prose max-w-none text-gray-700 mb-8 border-l-4 border-red-300 pl-4 py-2 bg-red-50">
            <p className="text-lg">{scam.description}</p>
          </div>
          
          <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg mb-8 text-black">
            <div className="text-sm">
              <span className="font-bold">Limited time offer!</span> Expires in <span className="text-red-500 font-bold">23:59:41</span>
            </div>
            <div className="text-sm">
              <span className="font-bold">Only 2 left in stock!</span> 🏃‍♂️ Act fast!
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-md font-bold text-gray-700 mb-2">Seller Information</h3>
              <p className="text-gray-700">{scam.author} <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full ml-2">Super Duper Trusted no cap!</span></p>
              <p className="text-sm text-gray-500 mt-1">Member since: March 2025</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-md font-bold text-gray-700 mb-2">Pickup Address</h3>
              <p className="text-gray-700">{scam.pickupAddress}</p>
              <p className="text-sm text-gray-500 mt-1">Cash only, no questions asked</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between gap-4 items-center">
            <Link 
              href="/browse" 
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
            >
              ← Back to All Scams
            </Link>
            
            <BuyButton />
          </div>
          
          <div className="mt-8 text-xs text-gray-400 text-center">
            This page is for educational purposes only, demonstrating common tactics used in online scams.
          </div>
        </div>
      </div>
    </div>
  );
}
