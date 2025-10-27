import * as Progress from '@radix-ui/react-progress'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import { CareLevel } from '../interfaces'

const getCareLevelProgress = (
  key: CareLevel
): { color: string; progress: number } => {
  const careLevelProgressMap: Record<
    CareLevel,
    { color: string; progress: number }
  > = {
    very_easy: {
      color: 'bg-green-400',
      progress: 20,
    },
    easy: {
      color: 'bg-green-500',
      progress: 40,
    },
    medium: {
      color: 'bg-yellow-500',
      progress: 60,
    },
    demanding: {
      color: 'bg-red-500',
      progress: 80,
    },
  }

  return careLevelProgressMap[key] ?? { color: 'gray-500', progress: 0 }
}

interface Props {
  value: CareLevel
}

export const ProgressBar = ({ value }: Props) => {
  const { progress, color } = getCareLevelProgress(value)

  return (
    <Progress.Root
      className="relative h-2 w-24 overflow-hidden rounded-full bg-gray-200"
      value={progress}
    >
      <motion.div
        className={cn('h-full rounded-full', color)}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.66, ease: [0.65, 0, 0.35, 1] }}
      />
    </Progress.Root>
  )
}
