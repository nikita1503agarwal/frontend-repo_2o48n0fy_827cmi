import { motion } from 'framer-motion';
import { Code2, Smartphone, Sparkles } from 'lucide-react';

export default function About() {
  const items = [
    {
      icon: <Smartphone className="h-5 w-5 text-cyan-400" />,
      title: 'Mobile & Web Apps',
      desc: 'Membangun aplikasi modern lintas platform dengan performa tinggi dan UX yang halus.'
    },
    {
      icon: <Code2 className="h-5 w-5 text-indigo-400" />,
      title: 'Clean Architecture',
      desc: 'Struktur kode yang rapi, scalable, dan mudah dipelihara.'
    },
    {
      icon: <Sparkles className="h-5 w-5 text-fuchsia-400" />,
      title: 'Motion & Micro-interaction',
      desc: 'Animasi halus untuk pengalaman yang lebih hidup dan elegan.'
    }
  ];

  return (
    <section id="about" className="relative bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-semibold sm:text-4xl"
        >
          Tentang Patrick
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-3xl text-white/70"
        >
          Seorang App Developer yang fokus pada pembuatan produk digital yang indah, responsif, dan mudah digunakan.
          Menggabungkan desain yang elegan dengan implementasi teknis yang solid.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
