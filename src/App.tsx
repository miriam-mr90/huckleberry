import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo-client'

import { Navigation } from '@/components/navigation'
import { Home } from '@pages/Home'
import { StarWarsEncyclopedia } from '@pages/StarWarsEncyclopedia'
import { RickAndMorty } from '@pages/RickAndMorty'
import { NotFound } from '@pages/NotFound'
import { BotanixPage } from './pages/Botanix'
import { Footer } from '@components/Footer'
import { ThemesPage } from '@pages/Themes'

/** Dynamically set the router basename depending on the environment:
 * - On GitHub Pages, detects the subpath automatically (e.g., /huckleberry).
 * - On Vercel or other root deployments, uses "/" as the base.
 */
const basename = import.meta.env.PROD
  ? window.location.pathname.replace(/\/$/, '') // GitHub Pages
  : '/' // Vercel

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
            <Route path="/themes" element={<ThemesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </ApolloProvider>
)
