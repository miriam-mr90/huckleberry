const isPrimaryColor = (key: string): boolean =>
  key === 'primary' || key === 'secondary'

export const getCSSVariableName = (key: string): string =>
  isPrimaryColor(key) ? `--${key}` : `--color-${key}`

export const getCSSVariableValue = (key: string): string =>
  isPrimaryColor(key) ? `hsl(var(--${key}))` : `var(--color-${key})`
