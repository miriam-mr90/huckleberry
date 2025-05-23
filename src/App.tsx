import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo-client'

import Navigation from './components/Navigation'
import { Home } from './pages/Home'
import { StarWarsEncyclopedia } from './pages/StarWarsEncyclopedia'
import { RickAndMorty } from './pages/RickAndMorty'
import { NotFound } from './pages/NotFound'

export const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/starwars" element={<StarWarsEncyclopedia />} />
            <Route path="/rick-and-morty" element={<RickAndMorty />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  </ApolloProvider>
)
