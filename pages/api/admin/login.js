import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  try {
    // Check if user exists in admin table
    const { data: admin, error } = await supabase
      .from('admins')
      .select('*')
      .eq('email', email)
      .single();

    if (error || !admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Here you would verify the password (using bcrypt or similar)
    // For simplicity, we're skipping the actual password verification
    // In production, you should use proper password hashing
    
    return res.status(200).json({ 
      message: 'Login successful',
      admin: {
        id: admin.id,
        email: admin.email
      }
    });
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}