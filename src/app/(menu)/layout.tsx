import type { Metadata } from 'next';
import '../globals.css';
import { Manrope } from 'next/font/google';
import Navbar from '@/components/organism/Navbar';
import Footer from '@/components/organism/Footer';

const manrope = Manrope({
  weight: ['200', '300', '400', '500', '700', '800'],
  style: 'normal',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'StreamVibe',
  description: 'Stream with the vibe',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${manrope.className} bg-black-08`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
