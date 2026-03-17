import type { Metadata } from "next";
import { Playfair_Display, Outfit, Cinzel_Decorative } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const cinzel = Cinzel_Decorative({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Maharaja Amruttulya | Royal Tea Experience",
  description:
    "Experience the royal taste of Maharaja Amruttulya — premium tea crafted for connoisseurs. Authentic Amruttulya chai with the finest ingredients.",
  keywords: ["Maharaja Amruttulya", "premium tea", "royal chai", "Amruttulya", "franchise"],
  openGraph: {
    title: "Maharaja Amruttulya | Royal Tea Experience",
    description: "Experience the royal taste of premium Maharaja Amruttulya chai.",
    type: "website",
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
        className={`${playfair.variable} ${outfit.variable} ${cinzel.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
