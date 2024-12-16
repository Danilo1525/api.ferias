import { neon } from "@neondatabase/serverless";

export default defineEventHandler(async () => {
    const sql = neon(process.env.DATABASE_URL);
    // Criação da tabela de mensagens
    await sql`
      CREATE TABLE IF NOT EXISTS mensagens (
      "id" SERIAL PRIMARY KEY,  -- SERIAL é o equivalente ao AUTOINCREMENT no PostgreSQL
      "autor" TEXT,
      "mensagem" TEXT,
      "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `;
  
    // Consulta as mensagens
    const rows = await sql`SELECT * 
FROM mensagens 
ORDER BY created_at DESC;`;
  
    return rows;
  });
  