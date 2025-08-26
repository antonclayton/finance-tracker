import type { Metadata } from "next";
import "./globals.css";
import { Inter, Nunito_Sans, Zilla_Slab } from "next/font/google";
import { Navbar } from "@/components/navbar/Navbar";
import styles from "@/app/layout.module.css";

export const metadata: Metadata = {
  title: "Finance Tracker",
  description: "Basic Finance Tracker",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "400",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  weight: "500",
});

const zillaSlab = Zilla_Slab({
  variable: "--font-zilla-slab",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${styles.container}${nunitoSans.variable} ${inter.variable} ${zillaSlab.variable}`}
      >
        <Navbar />
        {/* All your page content will be rendered inside this main tag */}
        <main className={styles.pageContent}>{children}</main>
      </body>
    </html>
  );
}
