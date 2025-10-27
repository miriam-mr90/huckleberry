import { cn } from '@/lib/utils'
import hucklelabImg from '@/assets/images/experiments/hucklelab.png'

export type Tag =
  | 'react'
  | 'graphql'
  | 'tailwind_css'
  | 'scss'
  | 'json_server'
  | 'freamer_motion'

interface Props {
  title: string
  description: string
  tags?: Tag[]
  image?: string
  link?: string
  status?: string
}

export const ExperimentCard = ({
  title,
  description,
  tags,
  image,
  link,
  status,
}: Props) => {
  const tagColors: Record<Tag, string> = {
    react: 'bg-blue-100 text-blue-800',
    graphql: 'bg-pink-100 text-pink-800',
    tailwind_css: 'bg-green-100 text-green-800',
    scss: 'bg-yellow-100 text-yellow-800',
    json_server: 'bg-gray-100 text-gray-800',
    freamer_motion: 'bg-purple-100 text-purple-800',
  }

  const tagLabels: Record<Tag, string> = {
    react: 'React',
    graphql: 'GraphQL',
    tailwind_css: 'Tailwind CSS',
    scss: 'SCSS',
    json_server: 'JSON Server',
    freamer_motion: 'Framer Motion',
  }

  return (
    <div className="pt-6 px-6 py-4 rounded border border-gray-100 shadow-sm bg-white flex flex-col">
      <div className="pb-4">
        <div className="flex justify-between">
          <div
            className="w-14 h-14 rounded bg-cover bg-center"
            style={{
              backgroundImage: `url(${image || hucklelabImg})`,
            }}
          />
          {status && (
            <span className="inline-block rounded-xl px-3 py-1 text-xs text-muted-foreground border border-gray-200 h-fit">
              {status}
            </span>
          )}
        </div>
        <h4 className="font-semibold mt-6 mb-1 text-brand-highlight">
          {title}
        </h4>
        <p className="text-muted-foreground text-base">{description}</p>
      </div>
      {tags && (
        <div className="py-2 mt-auto flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                'inline-block rounded-xl px-3 py-1 text-xs',
                tagColors[tag]
              )}
            >
              {tagLabels[tag]}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
