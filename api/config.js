module.exports = async (req, res) => {
  // Only allow GET
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const SUPABASE_URL = process.env.SUPABASE_URL || '';
  const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || '';
  const BUCKET_NAME = process.env.BUCKET_NAME || 'salarysync';
  const SHARED_PREFIX = process.env.SHARED_PREFIX || 'shared';
  const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || '').split(',').map(s => s.trim()).filter(Boolean);

  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
    BUCKET_NAME,
    SHARED_PREFIX,
    ADMIN_EMAILS,
  });
};
