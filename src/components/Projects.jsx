import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'NovaNote',
    desc: 'Aplikasi catatan minimalis dengan sinkronisasi real-time dan fokus pada kecepatan.',
    tags: ['React', 'Supabase', 'Tailwind'],
    live: '#',
    source: '#'
  },
  {
    title: 'PulseFit',
    desc: 'Pelacak kebugaran dengan gamifikasi dan progres harian yang menarik.',
    tags: ['Flutter', 'Firebase'],
    live: '#',
    source: '#'
  },
  {
    title: 'SnapCart',
    desc: 'E-commerce demo dengan animasi halus dan checkout yang cepat.',
    tags: ['Next.js', 'Stripe'],
    live: '#',
    source: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-semibold sm:text-4xl"
        >
          Proyek Pilihan
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 backdrop-blur-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                </div>
                <div className="flex items-center gap-2">
                  <a href={p.live} className="rounded-lg border border-white/10 p-2 hover:bg-white/10" aria-label="Live">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a href={p.source} className="rounded-lg border border-white/10 p-2 hover:bg-white/10" aria-label="Source">
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                    {t}
                  </span>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
