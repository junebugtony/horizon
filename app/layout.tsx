import './globals.css';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: "Project Horizon",
  description: "Welcome to Horizon"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className='relative overflow-hidden'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}