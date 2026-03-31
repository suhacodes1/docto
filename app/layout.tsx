import "./global.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import AOSProvider from "./components/AOSProvider";
import "aos/dist/aos.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Digital Paradigm",
  description: "Smarter Digital Systems for Healthcare",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <AOSProvider>
          <main className="overflow-x-clip">
            <TopBar />
            <Navbar />
            {children}
            <Footer />
          </main>
        </AOSProvider>
      </body>
    </html>
  );
}
