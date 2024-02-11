import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Provedor de internet",
  description: "100% fibra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
    <html lang="pt-Br">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body className={inter.className}>
      <div>
        <Header/>
      </div>
      {children}
      <div>
        <Footer/>
      </div>
      </body>
    </html>
  );
}
