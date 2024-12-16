export default defineEventHandler(async event => {
  const db = useDatabase();
  await db.sql`
      CREATE TABLE IF NOT EXISTS mensagens (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "autor" TEXT,
        "mensagem" TEXT,
        "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
  const body = await readBody(event);
  const { autor, mensagem } = body;
  await db.sql`INSERT INTO mensagens (autor, mensagem) VALUES (${autor}, ${mensagem});`;
  return body;
});
