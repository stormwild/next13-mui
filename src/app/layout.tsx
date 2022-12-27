'use client'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { ReactNode } from 'react'
import { useCustomTheme } from '../theme/theme'

interface RootProp {
  children: ReactNode
}

export default function RootLayout({ children }: RootProp) {
  const { customTheme } = useCustomTheme()

  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <body>{children}</body>
      </ThemeProvider>
    </html>
  )
}
