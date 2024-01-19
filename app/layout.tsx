import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/global.css'
import { Header } from '@/components'
import { cn } from '@/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo List',
  description: 'Todo List',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className="h-screen">
      <body className={cn(inter.className, 'text-black m-0 h-full box-border')}>
        <div className="flex flex-col h-full">
          <Header />
          <main className="flex flex-col grow overflow-auto mt-header">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
