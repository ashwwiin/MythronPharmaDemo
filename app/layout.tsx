import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mythronpharma.com"),
  title: "Mythron Pharma | Innovation in Therapeutic Solutions",
  description: "Mythron Pharma is a precision-focused bioscience startup dedicated to addressing complex health needs through innovative therapeutic solutions.",
  keywords: ["pharmaceutical", "bioscience", "metabolic health", "reproductive wellness", "Bangalore startup", "precision medicine"],
  openGraph: {
    title: "Mythron Pharma | Innovation in Therapeutic Solutions",
    description: "High-precision therapeutic solutions for metabolic and reproductive disorders.",
    type: "website",
    url: "https://mythronpharma.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mythron Pharma",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-primary/20 selection:text-primary`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

