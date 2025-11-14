import { Menu, Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-4">
            <a href="#" className="group inline-flex items-center gap-3">
              <div className="relative">
                <span className="absolute inset-0 rounded-lg bg-fuchsia-500/40 blur-md" />
                <span className="relative rounded-lg bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-600 px-3 py-1 text-sm font-bold tracking-wider text-white">AI</span>
              </div>
              <span className="text-sm font-medium tracking-widest text-white/70 group-hover:text-white transition">GEN DEV</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="text-sm text-white/70 hover:text-white transition"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a href="mailto:dev@genai.studio" className="text-white/70 hover:text-white transition" aria-label="Email"><Mail size={18} /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition" aria-label="GitHub"><Github size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <button className="md:hidden text-white/70 hover:text-white"><Menu /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
