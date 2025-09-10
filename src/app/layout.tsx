import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nan King - Authentic Chinese Restaurant",
  description: "Experience authentic Chinese cuisine at Nan King. Serving delicious vegetarian Chinese dishes, soups, rice, noodles, and specialties. Open 11:30 AM – 2:00 PM | 6:00 PM – 11:30 PM",
  keywords: ["Nan King", "Chinese Restaurant", "Authentic Chinese Food", "Vegetarian Chinese", "Chinese Noodles", "Chinese Rice", "Chinese Soup"],
  authors: [{ name: "Nan King Restaurant" }],
  openGraph: {
    title: "Nan King - Authentic Chinese Restaurant",
    description: "Experience authentic Chinese cuisine with traditional flavors and modern presentation",
    siteName: "Nan King Chinese Restaurant",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nan King - Authentic Chinese Restaurant",
    description: "Experience authentic Chinese cuisine with traditional flavors and modern presentation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
