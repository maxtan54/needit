import "server-only";
import { db } from "@/lib/db";
import { restaurants } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function getRestaurantBySlug(slug: string) {
  const [restaurant] = await db.select().from(restaurants)
    .where(eq(restaurants.slug, slug)).limit(1);
  return restaurant ?? null;
}
