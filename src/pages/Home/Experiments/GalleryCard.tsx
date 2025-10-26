import hucklelabImg from '@/assets/images/experiments/hucklelab.png'
import { Link } from '@/components/Link'

export type Tag = 'react' | 'graphql' | 'tailwind_css' | 'scss' | 'json_server'

interface Props {
  title: string
  description: string
  tags?: Tag[]
  image?: string
  link?: string
}

export const GalleryCard = ({
  title,
  description,
  tags,
  image,
  link,
}: Props) => {
  const tagLabels: Record<Tag, string> = {
    react: 'React',
    graphql: 'GraphQL',
    tailwind_css: 'Tailwind CSS',
    scss: 'SCSS',
    json_server: 'JSON Server',
  }

  return (
    <Link
      to={link ?? '#'}
      className="rounded-3xl overflow-hidden shadow-lg bg-white flex flex-col"
    >
      <div className="relative">
        <img
          className="w-full filter brightness-90 saturate-75"
          src={image || hucklelabImg}
          alt={title}
        />

        <div className="absolute top-0 left-0 w-full h-full bg-white/20 pointer-events-none" />

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
      </div>
      <div className="-mt-16 relative z-10 flex flex-col justify-between flex-grow">
        <div className="w-full px-6 pt-4 pb-2">
          <div className="font-bold text-xl mb-2 text-brand-dark">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        {tags && (
          <div className="px-6 py-4">
            {tags.map((tag) => (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {tagLabels[tag]}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
