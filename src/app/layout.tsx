import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster
import NavigationBar from '@/components/navigation-bar'; // Import NavigationBar

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Chilean Terrains Catalog', // Updated Title
  description: 'Browse terrains for sale in Chile.', // Updated Description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <NavigationBar /> {/* Add NavigationBar component here */}
        <div className="flex-grow">
          {children}
        </div>
        <Toaster /> {/* Add Toaster component here */}
      </body>
    </html>
  );
}
