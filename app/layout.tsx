import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import styles from './layout.module.css'

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
})

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
      <body className={poppins.className + ' ' + styles.rootLayout}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
