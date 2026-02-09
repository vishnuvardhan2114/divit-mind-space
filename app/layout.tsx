import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SanityLive } from "@/sanity/lib/live";
import Provider from "@/components/provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divit MindSpace | Neurodivergent Care & Education",
  description: "Divit MindSpace operates at the intersection of healthcare and special education, offering diagnostic assessments, customized teaching, and training for adults.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-[##FAF9F5] antialiased`}
      >
        <SanityLive />
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
