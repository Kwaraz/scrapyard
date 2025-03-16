import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const scamsTable = sqliteTable('scams', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  description: text('description').notNull(),
  image: text('image').notNull(), // URL to the scam image
  price: text('price').notNull(), // Using text to allow for currency symbols
  author: text('author').notNull(),
  pickupAddress: text('pickup_address').notNull(),
  createdAt: text('created_at')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
});


export type InsertScam = typeof scamsTable.$inferInsert;
export type SelectScam = typeof scamsTable.$inferSelect;
