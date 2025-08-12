# Drive Assist - Web Auth Callback

This is a minimal web application deployed on Vercel to handle OAuth callbacks for the Drive Assist Flutter app.

## Purpose

Solves the localhost limitation for OAuth authentication by providing a stable, production-ready callback URL that works on physical devices and in production environments.

## Features

- ✅ OAuth callback handling for Supabase authentication
- ✅ Beautiful loading and success/error states
- ✅ Deep link back to Flutter app after authentication
- ✅ Security headers and HTTPS by default
- ✅ Global CDN for fast loading worldwide

## Deployment

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel --prod
   ```

4. Note the deployed URL (e.g., `https://drive-assist-auth.vercel.app`)

## Configuration

After deployment, update your Supabase project:

1. Go to Supabase Dashboard > Authentication > URL Configuration
2. Update Redirect URLs to include:
   - `https://your-vercel-url.vercel.app/auth/callback`
   - `https://your-vercel-url.vercel.app/`

## Flutter Integration

Update your Flutter app's OAuth call:

```dart
await Supabase.instance.client.auth.signInWithOAuth(
  OAuthProvider.google,
  redirectTo: 'https://your-vercel-url.vercel.app/auth/callback',
);
```

## Deep Link Setup

Ensure your Flutter app has the correct URL scheme configured:
- Android: `io.supabase.flutterquickstart`
- iOS: `io.supabase.flutterquickstart`

## Security

The application includes security headers:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Strict-Transport-Security
- Content-Security-Policy
