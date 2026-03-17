"use server";
import { db } from "@/lib/db";
import { restaurants } from "@/lib/db/schema";
import { eq, sql } from "drizzle-orm";

export async function incrementScanCount(restaurantId: string) {
  await db.update(restaurants)
    .set({ scanCount: sql`${restaurants.scanCount} + 1` })
    .where(eq(restaurants.id, restaurantId));
}
