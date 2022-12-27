'use client'

import { createTheme, useMediaQuery } from '@mui/material'
import { dark } from '@mui/material/styles/createPalette'
import { Roboto } from '@next/font/google'
import { useMemo, useState } from 'react'

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export const useCustomTheme = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [darkMode, setDarkMode] = useState(true)

  const customTheme = useMemo(() => {
    console.log({ darkMode })

    return createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
      },
      typography: {
        fontFamily: roboto.style.fontFamily,
      },
    })
  }, [darkMode])

  return {
    customTheme,
    prefersDarkMode,
    darkMode,
    setDarkMode,
  }
}
