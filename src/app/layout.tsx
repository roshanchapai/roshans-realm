import type {Metadata} from 'next';
import { Inter } from 'next/font/google'; // Changed font to Inter
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' }) // Use Inter

export const metadata: Metadata = {
  title: "Roshan's Realm - Portfolio", // Updated title
  description: "Personal portfolio of Roshan showcasing skills, projects, and interests.", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}> {/* Use Inter font variable */}
        {children}
        <Toaster /> {/* Add Toaster component */}
      </body>
    </html>
  );
}
