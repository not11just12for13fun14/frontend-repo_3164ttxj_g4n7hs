import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Contact() {
  const links = [
    { icon: Mail, label: 'Email', href: 'mailto:dev@genai.studio' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/yourhandle' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/yourhandle' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/yourhandle' },
  ]

  return (
    <section id="contact" className="relative bg-[#0B0B10] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_100%,rgba(88,28,135,0.2),rgba(0,0,0,0))]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Contact
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <h3 className="text-lg font-semibold">Let’s build something bold</h3>
            <p className="mt-2 text-white/70">Open to consulting, collabs and full-time opportunities. I respond within 24 hours.</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {links.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-sm text-white/80 hover:bg-white/10">
                  <l.icon size={16} /> {l.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="relative space-y-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none ring-0 placeholder:text-white/40" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none ring-0 placeholder:text-white/40" placeholder="you@domain.com" />
            </div>
            <div>
              <label className="text-sm text-white/70">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none ring-0 placeholder:text-white/40" placeholder="Tell me about your idea..." />
            </div>
            <button className="w-full rounded-lg bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-4 py-2 text-sm font-semibold shadow-lg shadow-fuchsia-700/30 transition hover:brightness-110">Send</button>
            <p className="text-xs text-white/50">This is a demo form. Use the links to reach me.</p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
