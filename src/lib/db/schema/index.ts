import { pgTable, text, uuid, boolean, integer, timestamp } from "drizzle-orm/pg-core";

export const restaurants = pgTable("restaurants", {
  id: uuid("id").defaultRandom().primaryKey(),
  // Required
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  pdfMenuUrl: text("pdf_menu_url").notNull(),
  // Optional metadata
  logoUrl: text("logo_url"),
  description: text("description"),
  address: text("address"),
  phone: text("phone"),
  email: text("email"),
  primaryColor: text("primary_color"),
  redirectUrl: text("redirect_url"),
  // Operational
  isActive: boolean("is_active").default(true).notNull(),
  scanCount: integer("scan_count").default(0).notNull(),
  // Timestamps
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Restaurant = typeof restaurants.$inferSelect;
export type NewRestaurant = typeof restaurants.$inferInsert;
