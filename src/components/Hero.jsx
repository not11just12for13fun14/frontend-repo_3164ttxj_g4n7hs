import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0B0B10] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-2 w-2 animate-pulse rounded-full bg-fuchsia-400" />
            Generative AI Engineer • Futurist • Tinkerer
          </div>
          <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
            Building intelligent experiences with code, models and imagination
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            I design, train and deploy AI systems that feel alive. Inspired by Stark-tech ethos: sleek, powerful, a little bit audacious.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-6 py-3 text-sm font-semibold shadow-lg shadow-fuchsia-700/30 transition hover:brightness-110">Explore Projects</a>
            <a href="#contact" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 transition">Contact</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
