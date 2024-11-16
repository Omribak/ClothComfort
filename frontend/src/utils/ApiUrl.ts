export const ApiUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'https://your-app-url.com';
