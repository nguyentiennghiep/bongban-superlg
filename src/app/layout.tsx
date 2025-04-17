import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "./fonts.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "HanoiSpl",
  description: "Website chính thức của Giải bóng bàn Hanoi Super League",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/x-icon" />
      </head>
      <body
        className={`${roboto.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <main className="min-h-screen bg-gray-100">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
