import Link from 'next/link';
import { db } from '@/src/db';
import { scamsTable, SelectScam } from '@/src/db/schema';
import Image from 'next/image';

export default async function BrowseScamsPage() {
  // Fetch all scams from the database
  const scams = await db.select().from(scamsTable);
  
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <header className="border-b pb-4 mb-6">
        <h1 className="text-3xl font-bold text-blue-600">ScamDeals Marketplace</h1>
        <p className="text-gray-500 mt-1">scAmazing offers updated daily!</p>
        <Link className="text-blue-800 underline"href="/">go home</Link>
      </header>
      
      <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 mb-6">
        <p className="text-yellow-800 font-medium">Notice the low prices? Try clicking on the items!</p>
      </div>
        
      {scams.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-medium text-gray-700">No products available yet. Be the first to add one!</h2>
          <div className="mt-6">
            <Link href="/submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              Submit a Product
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {scams.map((scam: SelectScam) => {
            // Parse original price (removing $ if present)
            const originalPrice = parseFloat(scam.price.replace(/[$,]/g, ''));
            const Reveiws = Math.floor(Math.random() * (1500 - 23 + 1)) + 23;
            // Calculate discount: more expensive items get higher discounts
            // Base minimum discount is 20%
            const priceBasedMinDiscount = Math.min(20 + Math.floor(originalPrice / 10), 70);
            const discountPercent = Math.floor(Math.random() * (99 - priceBasedMinDiscount) + priceBasedMinDiscount);
            
            // Calculate discounted price
            const discountedPrice = (originalPrice * (1 - discountPercent / 100)).toFixed(2);
            
            return (
              <Link href={`/browse/${scam.id}`} key={scam.id} className="group cursor-pointer">
                <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-full h-48 bg-gray-200 overflow-hidden relative">
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-sm">
                      HOT DEAL
                    </div>
                    
                    <img
                      src={scam.image} 
                      alt={scam.title} 
                      style={{objectFit: 'cover'}}
                    />
                  
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-800">{scam.title}</h3>
                    <div className="mt-2">
                      <span className="text-sm line-through text-gray-500 mr-2">${originalPrice.toFixed(2)}</span>
                      <span className="text-xl font-bold text-red-600">${discountedPrice}</span>
                      <div className="text-xs text-green-600 mt-1">Save {discountPercent}% today only!</div>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="flex text-yellow-400">★★★★★</div>
                      <span className="ml-1 text-xs text-gray-500">({Reveiws} reviews)</span>
                    </div>
                    <div className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-center">
                      Add to Cart
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
