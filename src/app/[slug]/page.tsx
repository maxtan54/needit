import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { getRestaurantBySlug } from "@/lib/db/queries/restaurants";
import { incrementScanCount } from "@/lib/actions/restaurants";
import { isMobileDevice } from "@/utils/isMobile";
import MenuViewer from "./MenuViewer";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const restaurant = await getRestaurantBySlug(slug);

  if (!restaurant) {
    return { title: "Menu not found" };
  }

  return {
    title: `${restaurant.name} — Menu`,
    description: restaurant.description ?? `Digital menu for ${restaurant.name}`,
  };
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;
  const restaurant = await getRestaurantBySlug(slug);

  if (!restaurant || !restaurant.isActive) {
    notFound();
  }

  void incrementScanCount(restaurant.id);

  if (restaurant.redirectUrl) {
    redirect(restaurant.redirectUrl);
  }

  const isMobile = await isMobileDevice();

  return <MenuViewer restaurant={restaurant} isMobile={isMobile} />;
}
