/**
 * To make this feature work both locally and in production (GitHub Pages),
 * I fetch plant data from a unified endpoint `/api/plants`.
 *
 * - Locally, the data comes from json-server running on http://localhost:4001/plants.
 * - In production, the data comes from the static JSON file /db_botanix.json in /public.
 *
 * In both cases, the data is returned as a plain array, so the frontend
 * can consume it consistently without any transformation.
 */

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { BOTANIX_API_URL } from '@/config'

const queryClient = new QueryClient()

export const BotanixPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BotanixContent />
    </QueryClientProvider>
  )
}

export const BotanixContent = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['plants'],
    queryFn: async () => {
      const res = await fetch(BOTANIX_API_URL)
      if (!res.ok) throw new Error('Failed to fetch plants')
      return res.json()
    },
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading plants</div>

  return (
    <div className="page-container">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <ul>
        {data.map(
          (plant: {
            id: number
            common_name: string
            climate: string
            care: string
          }) => (
            <li key={plant.id}>
              {plant.common_name} - {plant.climate} - {plant.care}
            </li>
          )
        )}
      </ul>
    </div>
  )
}
