'use client';

//import { useState } from 'react';
import { useState, ChangeEvent, FormEvent } from 'react';



export default function SubmitScamPage() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        price: '',
        author: '',
        pickupAddress: ''
      });
    
      const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
          const response = await fetch('/api/scams', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          
          if (response.ok) {
            alert('Scam submitted successfully!');
            // Optionally reset the form
            setFormData({
              title: '',
              description: '',
              image: '',
              price: '',
              author: '',
              pickupAddress: ''
            });
          } else {
            alert('Failed to submit scam');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred');
        }
      };
      

  return (
    <div className="min-h-screen bg-[#2980b9] p-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Submit Your Scam</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-red-500 mb-1">Title</label>
            <input 
              type="text" 
              name="title" 
              value={formData.title} 
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-red-500 mb-1">Image URL</label>
            <input 
              type="text" 
              name="image" 
              value={formData.image} 
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-red-500 mb-1">Description</label>
            <textarea 
              name="description" 
              value={formData.description} 
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows={3}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-red-500 mb-1">Price</label>
            <input 
              type="text" 
              name="price" 
              value={formData.price} 
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-red-500 mb-1">Author</label>
            <input 
              type="text" 
              name="author" 
              value={formData.author} 
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-red-500 mb-1">Pickup Address</label>
            <input 
              type="text" 
              name="pickupAddress" 
              value={formData.pickupAddress} 
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <button 
            type="submit" 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Submit Scam
          </button>
        </form>
      </div>
    </div>
  );
}
