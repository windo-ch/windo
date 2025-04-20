import { sql } from '@vercel/postgres';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData = req.body;
    
    // Store submission in database
    await sql`
      INSERT INTO form_submissions (data, created_at)
      VALUES (${JSON.stringify(formData)}, ${new Date().toISOString()})
    `;
    
    // Log successful submission (for debugging)
    console.log('Form submission stored:', {
      timestamp: new Date().toISOString(),
      formId: formData._meta?.sessionId || 'unknown'
    });
    
    return res.status(200).json({ 
      success: true,
      message: 'Form submission stored successfully' 
    });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ 
      error: 'Failed to store form submission',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 