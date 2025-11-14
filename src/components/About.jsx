import { motion } from 'framer-motion'
import { Award, Rocket, Shield } from 'lucide-react'

export default function About() {
  const items = [
    { icon: Rocket, title: 'Origin', text: 'Started in robotics, fell in love with ML. Built assistants, copilots and A/V generation pipelines.' },
    { icon: Shield, title: 'Philosophy', text: 'Ship fast, measure, iterate. Tools are extensions; interfaces should feel like magic.' },
    { icon: Award, title: 'Impact', text: 'Products used by 1M+ users, saving teams thousands of hours through automation and intelligence.' },
  ]

  return (
    <section id="about" className="relative bg-[#0A0A0F] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_0%_0%,rgba(236,72,153,0.18),rgba(0,0,0,0))]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          About the builder
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-pink-500/20 blur-2xl transition" />
              <it.icon className="text-pink-400" />
              <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-white/70">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
