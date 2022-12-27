'use client'
import Image from 'next/image'
import { Button, Grid, Stack, Typography, useTheme } from '@mui/material'
import { useCustomTheme } from '../theme/theme'
import { useEffect } from 'react'

export default function Home() {
  const theme = useTheme()
  const { prefersDarkMode, darkMode, setDarkMode } = useCustomTheme()

  useEffect(() => {
    console.log({ darkMode })
    console.log({ prefersDarkMode })
    setDarkMode(true)
  }, [])

  return (
    <Grid
      container
      height='100vh'
      alignItems='left'
      justifyContent='center'
      direction='column'
      p={theme.spacing(5)}
    >
      <Typography variant='h1' gutterBottom>
        h1 Using MUI with NextJs
      </Typography>
      <Typography variant='h2' gutterBottom>
        h2 Using MUI with NextJs
      </Typography>
      <Typography variant='h3' gutterBottom>
        h3 Using MUI with NextJs
      </Typography>
      <Typography variant='h4' gutterBottom>
        h4 Using MUI with NextJs
      </Typography>
      <Typography variant='h5' gutterBottom>
        h5 Using MUI with NextJs
      </Typography>
      <Typography variant='h6' gutterBottom>
        h6 Using MUI with NextJs
      </Typography>
      <Stack direction='row' columnGap={1}>
        <Button variant='text'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outline</Button>
        <Button onClick={() => setDarkMode(true)}>Use Dark</Button>
      </Stack>
    </Grid>
  )
}
