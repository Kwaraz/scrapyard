import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from '@/src/db';
import { scamsTable, SelectScam } from '@/src/db/schema';
import { eq } from 'drizzle-orm';

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
  
  return (
    <div className="min-h-screen bg-[#2980b9] p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 sm:h-80 md:h-96">
          <img 
            src={scam.image} 
            alt={scam.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-3xl font-bold text-red-500">{scam.title}</h1>
            <div className="text-2xl font-bold text-red-500">${scam.price}</div>
          </div>
          
          <div className="prose max-w-none text-gray-700 mb-8">
            <p className="text-lg">{scam.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-md font-bold text-gray-700 mb-2">Author</h3>
              <p className="text-gray-700">{scam.author}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-md font-bold text-gray-700 mb-2">Pickup Address</h3>
              <p className="text-gray-700">{scam.pickupAddress}</p>
            </div>
          </div>
          
          <div className="flex justify-between">
            <Link 
              href="/browse" 
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
            >
              Back to All Scams
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
