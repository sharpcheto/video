
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Video Content Expert | Social Media Marketing',
  description: 'Professional video content creator specializing in short-form videos for Instagram, TikTok, and Facebook. Helping brands grow through engaging content.',
  keywords: 'video content, social media marketing, Instagram, TikTok, Facebook, short videos, brand marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
