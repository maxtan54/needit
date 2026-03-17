CREATE TABLE "restaurants" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"pdf_menu_url" text NOT NULL,
	"logo_url" text,
	"description" text,
	"address" text,
	"phone" text,
	"email" text,
	"primary_color" text,
	"is_active" boolean DEFAULT true NOT NULL,
	"scan_count" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "restaurants_slug_unique" UNIQUE("slug")
);
