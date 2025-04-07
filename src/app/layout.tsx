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
  description: "Website về câu lạc bộ bóng bàn",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/Logo_HaNoiSPL.png" type="image/png" />
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
