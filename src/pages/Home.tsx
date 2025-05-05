export const Home = () => {
  return (
    <div className="page-container">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to our Project
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          This is a simple React application built with TypeScript, Tailwind
          CSS, Jest, and Prettier. Navigate to the Star Wars Encyclopedia to see
          a list of characters.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/starwars"
            className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            View Star Wars Encyclopedia
          </a>
        </div>
      </div>
    </div>
  )
}
