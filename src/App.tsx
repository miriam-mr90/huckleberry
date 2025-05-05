import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navigation from './components/Navigation'
import { Home } from './pages/Home'
import { StarWarsEncyclopedia } from './pages/StarWarsEncyclopedia'
import { NotFound } from './pages/NotFound'

const queryClient = new QueryClient()

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/starwars" element={<StarWarsEncyclopedia />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  </QueryClientProvider>
)
