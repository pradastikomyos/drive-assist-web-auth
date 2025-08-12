export default function handler(req, res) {
  console.log('Callback handler called');
  console.log('Query params:', req.query);
  console.log('Method:', req.method);
  
  // Handle OAuth callback
  const { 
    access_token, 
    refresh_token, 
    error, 
    error_description,
    code,
    state 
  } = req.query;

  // Log all parameters for debugging
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
    return res.redirect(/?error=&error_description=);
  }

  if (access_token) {
    console.log('Access token found, redirecting with token');
    return res.redirect(/?access_token=&refresh_token=);
  }

  if (code) {
    console.log('Authorization code found, redirecting with code');
    return res.redirect(/?code=&state=);
  }

  // Default redirect with all query params
  console.log('No specific params found, redirecting with all query params');
  const queryString = new URLSearchParams(req.query).toString();
  res.redirect(/?);
}
