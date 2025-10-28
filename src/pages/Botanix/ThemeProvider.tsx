import React, { useEffect } from 'react'

interface ThemeProviderProps {
  theme: Record<string, string>
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  useEffect(() => {
    const root = document.documentElement

    for (const [key, value] of Object.entries(theme)) {
      root.style.setProperty(key, value)
    }
  }, [theme])

  return <>{children}</>
}
