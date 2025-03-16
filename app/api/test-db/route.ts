import { NextResponse } from 'next/server';
import { db } from '@/src/db';
import { scamsTable } from '@/src/db/schema';
import { NextRequest } from 'next/server'; // Add this import

export async function POST(request: NextRequest) { // Add the type here
  try {
    // Get form data from request
    const body = await request.json();
    
    // Validate required fields
    if (!body.title || !body.description || !body.image || 
        !body.price || !body.author || !body.pickupAddress) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    // Insert data from the form
    const result = await db.insert(scamsTable).values({
      title: body.title,
      description: body.description,
      image: body.image,
      price: body.price,
      author: body.author,
      pickupAddress: body.pickupAddress
    });
    
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
