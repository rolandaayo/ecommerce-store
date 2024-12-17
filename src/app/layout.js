import { Inter } from "next/font/google";
import { Goldman } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext'

const inter = Inter({ subsets: ["latin"] });
const goldman = Goldman({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Oxtoyin | Clothing Store",
  description: "Oxtoyin is a clothing store that sells a wide range of products for men, women, and children.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
        <Toaster />
      </body>
    </html>
  );
}
