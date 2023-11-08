import type { Metadata } from 'next'
import './globals.css'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import { poppins } from './fonts'


export const metadata: Metadata = {
  title: 'Three Sides Cube',
  description: 'Nominations for Cube of the Month',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className + ' bg-tsc-gradient'}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
