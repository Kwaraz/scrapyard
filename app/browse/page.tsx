import Link from 'next/link';
import { db } from '@/src/db';
import { scamsTable, SelectScam } from '@/src/db/schema';

export default async function BrowseScamsPage() {
  // Fetch all scams from the database
  const scams = await db.select().from(scamsTable);
  const randomPrice = (Math.random() * 1.55 + 0.01).toFixed(2);
  
  return (
    <div className="min-h-screen bg-[#2980b9] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Browse Scams</h1>
        <h1 className="text-xl font-bold text-white mb-8 text-center">Notice the low prices? Try clicking on the items!</h1>
        
        {scams.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <p className="text-xl text-gray-700">No scams available yet. Be the first to add one!</p>
            <Link 
              href="/submit" 
              className="mt-4 inline-block bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
            >
              Submit a Scam
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scams.map((scam: SelectScam) => (
              <Link key={scam.id} href={`/browse/${scam.id}`}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={scam.image} 
                      alt={scam.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-red-500 mb-2">{scam.title}</h2>
                    <p className="text-gray-700 text-sm">${randomPrice}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
