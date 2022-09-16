import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { FC } from 'react'

export const Theme: FC = ({ children }) => {
  const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: 'whitesmoke',
          },
        },
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
