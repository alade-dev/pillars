import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pillars — NYSC CDS | Breast Cancer Awareness Nigeria",
  description:
    "Pillars is an NYSC Community Development Service project empowering Nigerian women through free breast cancer screenings, self-examination training, and health education. Aligned with SDG 3: Good Health & Well-being.",
  keywords: [
    "Pillars",
    "breast cancer awareness Nigeria",
    "NYSC CDS",
    "free breast screening",
    "SDG 3",
    "breast self-examination",
    "community health Nigeria",
    "NYSC Community Development Service",
    "early detection breast cancer",
  ],
  openGraph: {
    title: "Pillars — Early Detection Saves Lives",
    description:
      "NYSC CDS project empowering Nigerian women through breast cancer awareness, free screenings, and early detection education.",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
