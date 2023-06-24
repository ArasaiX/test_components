import { HeaderCustom } from './components/HeaderCustom'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My first app',
  description: 'Testing...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <HeaderCustom />
        {children}
      </body>
    </html>
  )
}
