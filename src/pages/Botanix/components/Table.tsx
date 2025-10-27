import { ArrowUpAZ, ArrowUpZA } from 'lucide-react'

import { CareLevel, IPlant } from '../interfaces'
import {
  getCategoryCareLevel,
  getCategoryEnvironment,
  getClimateType,
  getLightType,
} from '../utils'
import { ProgressBar } from './Progressbar'
import { Tag } from './Tag'
import { useState, useMemo } from 'react'
import { cn } from '@/lib/utils'

export const Table = ({ plants }: { plants: IPlant[] }) => {
  const headers = [
    {
      key: 'common_name',
      label: 'Nombre común',
      sortable: true,
    },
    {
      key: 'scientific_name',
      label: 'Nombre científico',
      sortable: false,
    },
    {
      key: 'care',
      label: 'Cuidado',
      sortable: true,
    },
    {
      key: 'light',
      label: 'Luz',
      sortable: false,
    },
    {
      key: 'climate',
      label: 'Clima',
      sortable: false,
    },
    {
      key: 'category',
      label: 'Categoría',
      sortable: false,
    },
  ]

  const [sorting, setSorting] = useState<{
    key: string
    direction: 'asc' | 'desc'
  }>({ key: '', direction: 'asc' })

  const handleSort = (key: string) => {
    setSorting((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }))
  }

  const careOrder: CareLevel[] = ['very_easy', 'easy', 'medium', 'demanding']

  const sortFunctions: Record<string, (plant: IPlant) => string | number> = {
    common_name: (p) => p.common_name.toLowerCase(),
    care: (p) => careOrder.indexOf(p.care),
  }

  const sortedPlants = useMemo(() => {
    if (!sorting.key) return plants

    const getValue = sortFunctions[sorting.key]
    if (!getValue) return plants

    const dir = sorting.direction === 'asc' ? 1 : -1

    return [...plants].sort((a, b) => {
      const aValue = getValue(a)
      const bValue = getValue(b)

      return aValue < bValue ? -1 * dir : aValue > bValue ? 1 * dir : 0
    })
  }, [plants, sorting])

  return (
    <table>
      <thead className="text-left text-gray-600 border-b border-gray-200">
        <tr>
          {headers.map((header) => (
            <th key={header.key} className="px-2 pt-2 pb-4">
              <div
                className={cn(
                  'flex items-center gap-1',
                  header.sortable && 'cursor-pointer'
                )}
                onClick={() => header.sortable && handleSort(header.key)}
              >
                {header.label}
                {header.sortable &&
                  (sorting.key === header.key ? (
                    sorting.direction === 'asc' ? (
                      <ArrowUpAZ className="w-4 h-4" />
                    ) : (
                      <ArrowUpZA className="w-4 h-4" />
                    )
                  ) : (
                    <ArrowUpAZ className="w-4 h-4 opacity-30" />
                  ))}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedPlants.map((plant) => (
          <TableRow key={plant.id} plant={plant} />
        ))}
      </tbody>
    </table>
  )
}

type TableCell = {
  key: string
  content: React.ReactNode
}
const TableRow = ({ plant }: { plant: IPlant }) => {
  const cells: TableCell[] = [
    { key: 'common_name', content: plant.common_name },
    { key: 'scientific_name', content: plant.scientific_name },
    {
      key: 'care',
      content: <ProgressBar value={plant.care} />,
    },
    { key: 'light', content: getLightType(plant.light) },
    { key: 'climate', content: getClimateType(plant.climate) },
    {
      key: 'category',
      content: (
        <ul className="flex flex-wrap gap-0.5 items-center">
          <Tag
            element="li"
            value={getCategoryEnvironment(plant.category.environment)}
          />
          <Tag
            element="li"
            value={getCategoryCareLevel(plant.category.care_level)}
          />
          <Tag element="li" value={plant.category.use} />
        </ul>
      ),
    },
  ]

  return (
    <tr className="border-b border-gray-200">
      {cells.map((cell) => (
        <td key={cell.key} className="px-2 py-3">
          {cell.content}
        </td>
      ))}
    </tr>
  )
}
