import { env } from "env.mjs"

export const sharedMetadata = {
  metadataBase: new URL(env.LIVE_URL || "https://brightbazar.shop"),
  openGraph: {
    title: "Bright Bazar",
    description: "Bright Bazar is a store for fashion, electronics, sports, beauty, and furniture.",
    images: ["/opengraph-image.jpg"],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Bright Bazar",
    description: "Bright Bazar is a store for fashion, electronics, sports, beauty, and furniture.",
    creator: "Bright Bazar",
    images: ["/opengraph-image.jpg"],
  },
}
