import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo-client'

import Navigation from '@components/navigation/Navigation'
import { Home } from '@pages/Home'
import { StarWarsEncyclopedia } from '@pages/StarWarsEncyclopedia'
import { RickAndMorty } from '@pages/RickAndMorty'
import { NotFound } from '@pages/NotFound'
import { BotanixPage } from './pages/Botanix'
import { Footer } from '@components/Footer'

const basename = process.env.NODE_ENV === 'production' ? '/huckleberry' : '/'

export const App = () => (
  <ApolloProvider client={client}>
    <Router basename={basename}>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/starwars" element={<StarWarsEncyclopedia />} />
            <Route path="/rick-and-morty" element={<RickAndMorty />} />
            <Route path="/botanix" element={<BotanixPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </ApolloProvider>
)
