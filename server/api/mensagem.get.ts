export default defineEventHandler(async () => {
    const db = useDatabase();
  
    // Criação da tabela de mensagens
    await db.sql`
      CREATE TABLE IF NOT EXISTS mensagens (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "autor" TEXT,
        "mensagem" TEXT,
        "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
  
    // Consulta as mensagens
    const { rows } = await db.sql`SELECT * FROM mensagens`;
  
    return {
      rows,
    };
  });
  