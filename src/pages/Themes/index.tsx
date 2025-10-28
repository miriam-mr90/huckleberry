import { ThemeProvider as BotanixThemeProvider } from '../Botanix/ThemeProvider'
import { botanixTheme } from '../Botanix/botanix.theme'
import { ColorCard, type ColorConfig } from './ColorCard'

const COLOR_CONFIGS: ColorConfig[] = [
  { key: 'primary', label: 'Primary' },
  { key: 'secondary', label: 'Secondary' },
  { key: 'neutral-light', label: 'Neutral Light' },
  { key: 'neutral', label: 'Neutral' },
  { key: 'neutral-dark', label: 'Neutral Dark' },
  { key: 'neutral-text', label: 'Neutral Text' },
  { key: 'success', label: 'Success' },
  { key: 'warning', label: 'Warning' },
  { key: 'error', label: 'Error' },
  { key: 'info', label: 'Info' },
]

export const ThemesPage = () => (
  <BotanixThemeProvider theme={botanixTheme}>
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Botanix</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COLOR_CONFIGS.map((config) => (
          <ColorCard
            key={config.key}
            config={config}
            textColor="var(--color-neutral-text)"
          />
        ))}
      </div>
    </div>
  </BotanixThemeProvider>
)
