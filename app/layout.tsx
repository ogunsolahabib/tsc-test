import type { Metadata } from 'next'
import './globals.css'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import { poppins } from './fonts'
import { CookiesProvider } from 'next-client-cookies/server'
import Providers from './components/shared/Providers'


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
      <Providers>
        <body className={poppins.className + ' bg-tsc-gradient lg:bg-black'}>
          <Header />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  )
}
