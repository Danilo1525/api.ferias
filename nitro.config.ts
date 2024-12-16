//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  compatibilityDate: "2024-12-15",
  experimental: {
    database: true
  },
  routeRules: {
    '/api/**': { cors: true,headers:{
      origin: '*',
      'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS'
      'access-control-allow-headers': 'Content-Type, Authorization'
    }}
  }
});