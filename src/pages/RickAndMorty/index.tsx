import { useQuery } from '@apollo/client'
import { CharactersResponse } from './interfaces'
import { GET_CHARACTERS } from './queries'
import { CharacterCard } from './CharacterCard'

export const RickAndMorty = () => {
  const { loading, error, data } = useQuery<CharactersResponse>(
    GET_CHARACTERS,
    {
      variables: { page: 1 },
    }
  )

  if (error)
    return <div className="p-4 text-red-500">Error: {error.message}</div>

  return (
    <div className="container mx-auto p-4 sm:px-6">
      <h1 className="text-3xl font-bold mb-6">Rick and Morty Characters</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div className="bg-card rounded-lg overflow-hidden shadow-card animate-pulse">
                <div className="aspect-square bg-muted" />
                <div className="p-4 space-y-3">
                  <div className="h-5 bg-muted rounded w-3/4" />
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="h-4 bg-muted rounded w-5/6" />
                  </div>
                </div>
              </div>
            ))
          : data?.characters.results.map((character, index) => (
              <CharacterCard
                image={character.image}
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                type={character.type}
              />
            ))}
      </div>
    </div>
  )
}
