import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GNJ ',
  description: 'Cyber security website',
  generator: 'Koncept solution',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
