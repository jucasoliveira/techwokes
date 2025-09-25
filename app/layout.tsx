import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Wokes - Engineering List",
  description: "A comprehensive list of woke engineers in the tech industry",
  openGraph: {
    title: "Tech Wokes - Engineering List",
    description: "A comprehensive list of woke engineers in the tech industry",
    url: "https://techwokes.com",
    siteName: "Tech Wokes",
    images: [
      {
        url: "/woke.png",
        width: 1200,
        height: 630,
        alt: "Tech Wokes - Engineering List",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Wokes - Engineering List",
    description: "A comprehensive list of woke engineers in the tech industry",
    images: ["/woke.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
