import { neon } from "@neondatabase/serverless";

export default defineEventHandler(async event => {
  useRuntimeConfig(event).apiToken
  const sql = neon(process.env.DATABASE_URL);

  // Ajustando a criação da tabela para PostgreSQL
  await sql`
    CREATE TABLE IF NOT EXISTS mensagens (
      "id" SERIAL PRIMARY KEY,  -- SERIAL é o equivalente ao AUTOINCREMENT no PostgreSQL
      "autor" TEXT,
      "mensagem" TEXT,
      "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  const body = await readBody(event);
  console.log(body)
  const { autor, mensagem } = body;

  // Inserindo dados na tabela
  await sql`
    INSERT INTO mensagens (autor, mensagem) 
    VALUES (${autor}, ${mensagem});
  `;

  return body;
});
