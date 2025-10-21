import { useQuery } from '@apollo/client'
import { CharactersResponse } from './interfaces'
import { GET_CHARACTERS } from './queries'

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

      {loading && <div className="text-center">Loading...</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.characters.results.map((character) => (
          <div
            key={character.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
              <div className="space-y-1">
                <p>
                  <span className="font-medium">Status:</span>{' '}
                  {character.status}
                </p>
                <p>
                  <span className="font-medium">Species:</span>{' '}
                  {character.species}
                </p>
                <p>
                  <span className="font-medium">Gender:</span>{' '}
                  {character.gender}
                </p>
                {character.type && (
                  <p>
                    <span className="font-medium">Type:</span> {character.type}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
