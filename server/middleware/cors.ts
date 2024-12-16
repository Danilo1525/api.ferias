export default defineEventHandler((event) => {
    // Configurar os cabeçalhos CORS
    setResponseHeaders(event, {
      'Access-Control-Allow-Origin': '*', // Permitir todas as origens (substitua '*' pelo domínio específico em produção)
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', // Métodos HTTP permitidos
      'Access-Control-Allow-Headers': 'Content-Type, Authorization', // Cabeçalhos permitidos
    });
  
    // Se for uma requisição OPTIONS (preflight), retorne status 204
    if (event.method === 'OPTIONS') {
      event.node.res.statusCode = 204; // Sem conteúdo
      event.node.res.end();
    }
  });
  