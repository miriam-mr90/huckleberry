import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src="/src/assets/images/logo.png"
                  alt="Huckleberry Logo"
                  className="h-8 w-8"
                />
                <span className="text-xl font-bold text-gray-800">
                  My Huckleberry Project
                </span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/starwars"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Star Wars
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {/* This space can be used for additional navigation items like profile, settings, etc. */}
          </div>
          <div className="flex items-center sm:hidden">
            {/* Mobile menu button can be added here in the future */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
