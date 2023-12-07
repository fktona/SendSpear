import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SendSpear',
  description: 'SendSpear is a simple, secure, and private email sharing service.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
      
        <div className='relative lg:w-[84%] float-right text-white  '>
        {children}
       
        </div>
        <Footer />
      </body>

    </html>
  )
}
