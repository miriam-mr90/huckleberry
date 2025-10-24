import { ExperimentCard, Tag } from './ExperimentCard'

interface Experiment {
  title: string
  description: string
  tags?: Tag[]
  image?: string
  link?: string
  status?: string
}

export const ExperimentsSection = () => {
  const experiments: Experiment[] = [
    {
      title: 'Rick and Morty',
      description:
        'A character gallery that displays characters from the Rick and Morty API using GraphQL queries.',
      tags: ['react', 'graphql', 'tailwind_css'],
      image: '/images/experiments/rick-and-morty.jpg',
      status: '✔️ Finished',
    },
    {
      title: 'Star Wars',
      description:
        'A static encyclopedia displaying famous characters from the Star Wars universe.',
      tags: ['react', 'tailwind_css'],
      image: '/images/experiments/star-wars.jpg',
      status: '🚧 Work in progress',
    },
  ]

  return (
    <div className="py-6 md:py-8 lg:py-12">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl font-bold mb-2">Recent Experiments</h2>
        <p className="text-lg text-muted-foreground">
          A little collection of small features I've been tinkering with
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiments.map((item) => (
          <ExperimentCard
            key={item.title}
            title={item.title}
            description={item.description}
            tags={item.tags}
            image={item.image}
            link={item.link}
            status={item.status}
          />
        ))}
      </div>
    </div>
  )
}
