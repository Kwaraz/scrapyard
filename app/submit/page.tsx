'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import FakeCaptcha from '@/components/FakeCaptcha';
import Link from 'next/link';

// Define types for form data and response
type ScamFormData = {
  title: string;
  description: string;
  image: string;
  price: string;
  author: string;
  pickupAddress: string;
};

type SubmitResponse = {
  success: boolean;
  data?: any;
  error?: string;
};

export default function SubmitScamPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<ScamFormData>({
    title: '',
    description: '',
    image: '',
    price: '',
    author: '',
    pickupAddress: ''
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<SubmitResponse | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/test-db', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      setResponse({
        success: response.ok,
        ...(response.ok ? { data } : { error: data.error || 'Failed to submit scam' })
      });
      
      if (response.ok) {
        // Clear form on success
        setFormData({
          title: '',
          description: '',
          image: '',
          price: '',
          author: '',
          pickupAddress: ''
        });
        
        // Redirect after successful submission (optional)
        // setTimeout(() => router.push('/scams'), 2000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponse({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-red-500 mb-6">Submit Your Scam</h1>
        
        {response && (
          <div className={`p-4 mb-6 rounded-lg ${
            response.success 
              ? 'bg-green-100 text-green-700 border border-green-300' 
              : 'bg-red-100 text-red-700 border border-red-300'
          }`}>
            {response.success 
              ? 'Scam submitted successfully!' 
              : `Error: ${response.error}`}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className='text-gray-700'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href='/' className="text-blue-600, underline">go home</Link>
            <div className="md:col-span-2">
              <label className="block text-red-500 font-semibold mb-2" htmlFor="title">
                Title *
              </label>
              <input 
                type="text" 
                id="title"
                name="title" 
                value={formData.title} 
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                required
                placeholder="Enter scam title"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-red-500 font-semibold mb-2" htmlFor="description">
                Description *
              </label>
              <textarea 
                id="description"
                name="description" 
                value={formData.description} 
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                rows={4}
                required
                placeholder="Describe your amazing scam"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-red-500 font-semibold mb-2" htmlFor="image">
                Image URL *
              </label>
              <input 
                type="url" 
                id="image"
                name="image" 
                value={formData.image} 
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                required
                placeholder="https://example.com/image.jpg"
              />
            </div>
            
            <div>
              <label className="block text-red-500 font-semibold mb-2" htmlFor="price">
                Price *
              </label>
              <input 
                type="text" 
                id="price"
                name="price" 
                value={formData.price} 
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                required
                placeholder="$999.99"
              />
            </div>
            
            <div>
              <label className="block text-red-500 font-semibold mb-2" htmlFor="author">
                Author *
              </label>
              <input 
                type="text" 
                id="author"
                name="author" 
                value={formData.author} 
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                required
                placeholder="Your name"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-red-500 font-semibold mb-2" htmlFor="pickupAddress">
                Pickup Address *
              </label>
              <input 
                type="text" 
                id="pickupAddress"
                name="pickupAddress" 
                value={formData.pickupAddress} 
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                required
                placeholder="123 Fake Street, Scamville"
              />
            </div>
          </div>
          
          <FakeCaptcha/>
          <div className="mt-8 flex justify-end">
            <button 
              type="submit" 
              disabled={loading}
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 disabled:bg-red-300 disabled:cursor-not-allowed font-bold"
            >
              {loading ? 'Submitting...' : 'Submit Scam'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
