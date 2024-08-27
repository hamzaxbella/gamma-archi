import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import './globals.css'
import Smoothscroll from "@/components/Smoothscroll"
export const metadata: Metadata = {
  title: "Kara aya architecture",
  description: "Atelier d'architecture a tangier, maroc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  
  return (
    <html lang="en">
      <body > 
        <Header />
        <main className="relative">
          <Smoothscroll>
            {children}
          </Smoothscroll>
          <section className='bg-background  w-full h-20 main-radius absolute left-0 z-20 -bottom-[4.90rem]'></section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
