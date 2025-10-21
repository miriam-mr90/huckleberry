// Static list of Star Wars characters
const starWarsCharacters = [
  {
    id: 1,
    name: 'Luke Skywalker',
    role: 'Jedi Knight',
    description: 'Farm boy turned galactic hero, son of Anakin Skywalker.',
  },
  {
    id: 2,
    name: 'Darth Vader',
    role: 'Sith Lord',
    description: 'Former Jedi Knight who turned to the dark side of the Force.',
  },
  {
    id: 3,
    name: 'Princess Leia',
    role: 'Rebel Leader',
    description: 'Princess of Alderaan and leader of the Rebel Alliance.',
  },
  {
    id: 4,
    name: 'Han Solo',
    role: 'Smuggler',
    description: 'Smuggler and captain of the Millennium Falcon.',
  },
  {
    id: 5,
    name: 'Obi-Wan Kenobi',
    role: 'Jedi Master',
    description:
      'Wise Jedi Master who trained Anakin and later Luke Skywalker.',
  },
  {
    id: 6,
    name: 'Yoda',
    role: 'Jedi Grand Master',
    description: 'Ancient and powerful Jedi Master known for his wisdom.',
  },
]

export const StarWarsEncyclopedia = () => {
  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Star Wars Encyclopedia
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          A collection of famous characters from the Star Wars universe.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {starWarsCharacters.map((character) => (
            <div
              key={character.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900">
                {character.name}
              </h2>
              <p className="text-sm text-gray-500 mt-1">{character.role}</p>
              <p className="mt-4 text-gray-600">{character.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
