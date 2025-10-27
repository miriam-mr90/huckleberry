export type CareLevel = 'easy' | 'very_easy' | 'medium' | 'demanding'

export type LightType =
  | 'indirect'
  | 'indirect_low'
  | 'indirect_bright'
  | 'full_sun'
  | 'direct_sun'
  | 'partial_shade'

export type ClimateType =
  | 'temperate'
  | 'warm'
  | 'temperate_humid'
  | 'warm_dry'
  | 'humid'
  | 'humid_cool'
  | 'warm_humid'
  | 'dry_mediterranean'
  | 'varied'
  | 'arid'

export type Environment = 'indoor' | 'outdoor' | 'mixed'

export type CategoryCareLevel = 'easy' | 'medium' | 'demanding'

export interface ICategory {
  environment: Environment
  care_level: CategoryCareLevel
  use: string
}

export interface IPlant {
  id: number
  common_name: string
  scientific_name: string
  care: CareLevel
  light: LightType
  climate: ClimateType
  characteristics: string[]
  category: ICategory
}
