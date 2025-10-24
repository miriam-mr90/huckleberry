import { ShapesBackground } from './ShapesBackground'
import { Hero } from './Hero'
import { ExperimentsSection } from './Experiments/Section'

export const Home = () => {
  return (
    <div className="container">
      <ShapesBackground />
      <Hero />
      <ExperimentsSection />
    </div>
  )
}
