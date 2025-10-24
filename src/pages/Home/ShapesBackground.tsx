import { motion } from 'framer-motion'

export const ShapesBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-cyan-50/30 dark:from-purple-950/10 dark:via-blue-950/10 dark:to-cyan-950/10" />

      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-purple-200/20 to-blue-200/20 dark:from-purple-800/10 dark:to-blue-800/10 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/4 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-200/20 to-cyan-200/20 dark:from-blue-800/10 dark:to-cyan-800/10 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-200/20 to-teal-200/20 dark:from-cyan-800/10 dark:to-teal-800/10 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/3 left-1/2 w-32 h-32 border-2 border-purple-200/30 dark:border-purple-700/20 rounded rotate-12"
        animate={{
          rotate: [12, 25, 12],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/3 w-24 h-24 border-2 border-blue-200/30 dark:border-blue-700/20 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-2/3 right-1/4 w-20 h-20 border-2 border-cyan-200/30 dark:border-cyan-700/20 rotate-45"
        animate={{
          rotate: [45, 60, 45],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-br from-purple-300/10 to-blue-300/10 dark:from-purple-600/5 dark:to-blue-600/5  rotate-12"
        animate={{
          rotate: [12, -12, 12],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/2 w-12 h-12 border-2 border-teal-200/30 dark:border-teal-700/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
