import Navbar from "@/components/Navbar/Navbar";
import "../globals.css";
import { Inter } from 'next/font/google';

export const metadata = {
  title: "Shop clothes, shoes any many more!",
  description: "Our store has all kinds of clothing wear you need. Buy shoes, gloves, shirts and 10k+ items",
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
