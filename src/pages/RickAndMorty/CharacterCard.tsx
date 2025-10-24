import { Character } from './interfaces'

export const CharacterCard = ({
  image,
  name,
  status,
  species,
  gender,
  type,
}: Pick<
  Character,
  'image' | 'name' | 'status' | 'species' | 'gender' | 'type'
>) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <div className="space-y-1">
          <p>
            <span className="font-medium">Status:</span> {status}
          </p>
          <p>
            <span className="font-medium">Species:</span> {species}
          </p>
          <p>
            <span className="font-medium">Gender:</span> {gender}
          </p>
          {type && (
            <p>
              <span className="font-medium">Type:</span> {type}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
