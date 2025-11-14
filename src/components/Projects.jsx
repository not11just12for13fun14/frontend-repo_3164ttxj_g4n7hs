import { motion } from 'framer-motion'
import { ExternalLink, Github, Sparkles } from 'lucide-react'

const projects = [
  {
    title: 'Neon-Forge Agents',
    desc: 'Composable agent framework with memory, tools and realtime streaming UIs.',
    tags: ['Agents', 'Realtime', 'Tools'],
    link: '#',
    repo: '#',
  },
  {
    title: 'DreamWeave Studio',
    desc: 'Generative image/video pipeline with prompt graph, schedulers and evals.',
    tags: ['Diffusion', 'GPU', 'Evals'],
    link: '#',
    repo: '#',
  },
  {
    title: 'OmniRAG',
    desc: 'Production-grade retrieval augmented generation with multi-vector stores.',
    tags: ['RAG', 'Retrieval', 'Embeddings'],
    link: '#',
    repo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#0B0B10] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_100%_0%,rgba(99,102,241,0.18),rgba(0,0,0,0))]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Featured builds
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-indigo-500/20 blur-2xl group-hover:scale-125 transition" />
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                </div>
                <Sparkles className="text-indigo-400" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/15 px-2 py-1 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4">
                <a href={p.link} className="inline-flex items-center gap-1 text-sm text-indigo-300 hover:text-white">
                  <ExternalLink size={16} /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-sm text-fuchsia-300 hover:text-white">
                  <Github size={16} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
