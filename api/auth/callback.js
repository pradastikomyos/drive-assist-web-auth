// api/auth/callback.js

export default function handler(req, res) {
  console.log('Callback handler called');
  console.log('Query params:', req.query);
  console.log('Method:', req.method);

  const { 
    access_token, 
    refresh_token, 
    error, 
    error_description,
    code,
    state 
  } = req.query;

  console.log('Parsed params:', {
    access_token,
    refresh_token,
    error,
    error_description,
    code,
    state
  });

  if (error) {
    console.error('OAuth error:', error, error_description);
    // FIX: Menggunakan template literal yang benar
    return res.redirect(`/?error=${error}&error_description=${error_description || ''}`);
  }

  if (access_token) {
    console.log('Access token found, redirecting with token');
    // FIX: Menggunakan template literal yang benar
    return res.redirect(`/?access_token=${access_token}&refresh_token=${refresh_token || ''}`);
  }

  if (code) {
    console.log('Authorization code found, redirecting with code');
    // FIX: Menggunakan template literal yang benar
    return res.redirect(`/?code=${code}&state=${state || ''}`);
  }

  // Default redirect with all query params
  console.log('No specific params found, redirecting with all query params');
  const queryString = new URLSearchParams(req.query).toString();
  // FIX: Menggunakan template literal yang benar
  res.redirect(`/?${queryString}`);
}
