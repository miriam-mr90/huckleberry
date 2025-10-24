import { motion } from 'framer-motion'
import { CodePreview } from './CodePreview'

export const Hero = () => {
  return (
    <div className="flex flex-wrap justify-between items-center gap-8 py-8 md:py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-5 md:flex-1 w-full"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 flex flex-col">
          Welcome to my
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent pb-2">
            Playground
          </span>
        </h1>

        <p className="text-lg leading-relaxed text-muted-foreground">
          My personal playground for building small features, exploring ideas,
          and having fun along the way. A space for testing and experimentation
          ✨
          <br />
          No big frameworks, no deadlines, just curiosity.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="md:flex-1 w-full"
      >
        <CodePreview />
      </motion.div>
    </div>
  )
}
