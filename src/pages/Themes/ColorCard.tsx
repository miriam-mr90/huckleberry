import { getCSSVariableName, getCSSVariableValue } from './utils'

export interface ColorConfig {
  key: string
  label: string
}

interface Props {
  config: ColorConfig
  textColor: string
}

export const ColorCard = ({ config, textColor }: Props) => {
  const colorValue = getCSSVariableValue(config.key)
  const variableName = getCSSVariableName(config.key)

  return (
    <div className="rounded-lg bg-white p-4 flex items-center gap-4 border border-neutral-dark">
      <div
        className="w-12 h-12 rounded-full flex-shrink-0"
        style={{ backgroundColor: colorValue }}
      />
      <div className="flex flex-col justify-center">
        <h2
          className="font-semibold text-base mb-0.5"
          style={{ color: textColor }}
        >
          {config.label}
        </h2>
        <p className="text-sm text-gray-500">
          Variable: <code className="text-xs">{variableName}</code>
        </p>
      </div>
    </div>
  )
}
