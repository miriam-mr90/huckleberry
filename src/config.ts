export const BOTANIX_API_URL =
  import.meta.env.MODE === 'development'
    ? '/api/plants' // dev → Vite proxy
    : `${import.meta.env.BASE_URL}db_botanix.json`; // production → static file
