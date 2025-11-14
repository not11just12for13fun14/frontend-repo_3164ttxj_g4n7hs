import { motion } from 'framer-motion'
import { Cpu, Brain, CpuIcon, CircuitBoard, Database, Workflow, Code2, Bot, Terminal } from 'lucide-react'

const skills = [
  { icon: Brain, title: 'Modeling', items: ['LLMs', 'Diffusion', 'RLHF', 'Prompt Eng.'] },
  { icon: CircuitBoard, title: 'Systems', items: ['Agents', 'RAG', 'Vector DBs', 'Streaming'] },
  { icon: Code2, title: 'Engineering', items: ['TypeScript', 'Python', 'FastAPI', 'Vite/React'] },
  { icon: Database, title: 'Data', items: ['Pipelines', 'ETL', 'Eval Suites', 'Monitoring'] },
]

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#0A0A0F] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(124,58,237,0.2),rgba(0,0,0,0))]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Stark-grade skills
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-fuchsia-500/20 blur-2xl transition group-hover:scale-125" />
              <s.icon className="text-fuchsia-400" />
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <ul className="mt-3 space-y-1 text-sm text-white/70">
                {s.items.map((it) => (
                  <li key={it}>• {it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
