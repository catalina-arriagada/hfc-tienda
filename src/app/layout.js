import "./globals.css";
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hair Fashion Colors Tinturas Chile - Vegan & Cruelty-Free",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
