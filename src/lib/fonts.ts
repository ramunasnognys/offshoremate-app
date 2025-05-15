import { Anton, Inter } from 'next/font/google'

export const headingFont = Anton({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

export const bodyFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})