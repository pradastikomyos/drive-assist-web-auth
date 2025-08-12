export default function handler(req, res) {
  // Handle OAuth callback
  const { access_token, refresh_token, error, error_description } = req.query;
  
  if (error) {
    return res.redirect(`/?error=${error}&error_description=${error_description}`);
  }
  
  if (access_token) {
    return res.redirect(`/?access_token=${access_token}&refresh_token=${refresh_token || ''}`);
  }
  
  // Default redirect
  res.redirect('/');
}
