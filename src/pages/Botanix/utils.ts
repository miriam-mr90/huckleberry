import { CareLevel, LightType, ClimateType, Environment, CategoryCareLevel } from './interfaces'

const careLevelMap: Record<CareLevel, string> = {
  very_easy: 'Muy fácil',
  easy: 'Fácil',
  medium: 'Media',
  demanding: 'Exigente',
}

const lightTypeMap: Record<LightType, string> = {
  indirect: 'Indirecta',
  indirect_low: 'Indirecta o baja',
  indirect_bright: 'Indirecta brillante',
  full_sun: 'Pleno sol',
  direct_sun: 'Sol directo',
  partial_shade: 'Semisombra',
}

const climateTypeMap: Record<ClimateType, string> = {
  temperate: 'Templado',
  warm: 'Cálido',
  temperate_humid: 'Templado-húmedo',
  warm_dry: 'Cálido-seco',
  humid: 'Húmedo',
  humid_cool: 'Húmedo-fresco',
  warm_humid: 'Cálido-húmedo',
  dry_mediterranean: 'Seco-mediterráneo',
  varied: 'Variado',
  arid: 'Árido',
}

const categoryEnvironmentMap: Record<Environment, string> = {
  indoor: 'Interior',
  outdoor: 'Exterior',
  mixed: 'Mixto',
}

const categoryCareMap: Record<CategoryCareLevel, string> = {
  easy: 'Fácil',
  medium: 'Medio',
  demanding: 'Exigente',
}

export const getCareLevel = (key: CareLevel): string => careLevelMap[key] ?? '-'
export const getLightType = (key: LightType): string => lightTypeMap[key] ?? '-'
export const getClimateType = (key: ClimateType): string => climateTypeMap[key] ?? '-'
export const getCategoryEnvironment = (key: Environment): string => categoryEnvironmentMap[key] ?? '-'
export const getCategoryCareLevel = (key: CategoryCareLevel): string => categoryCareMap[key] ?? '-'
