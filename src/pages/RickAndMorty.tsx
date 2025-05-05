import { useQuery, gql } from '@apollo/client'
import { CharactersResponse } from '../types/rick-and-morty'

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        image
        created
      }
    }
  }
`

export const RickAndMorty = () => {
  const { loading, error, data } = useQuery<CharactersResponse>(
    GET_CHARACTERS,
    {
      variables: { page: 1 },
    }
  )

  if (loading) return <div className="p-4">Loading...</div>
  if (error)
    return <div className="p-4 text-red-500">Error: {error.message}</div>

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Rick and Morty Characters</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
