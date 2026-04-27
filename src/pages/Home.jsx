import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Download } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS, STATS, CONTACT } from '../data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export default function Home() {
  const navigate = useNavigate()
  const featured = PROJECTS.filter((p) => p.featured)

  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-36 pb-24">
        <motion.div {...fadeUp(0.1)}>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-8"
            style={{
              background: 'rgba(34,197,94,0.08)',
              border: '1px solid rgba(34,197,94,0.22)',
              color: 'var(--green)',
              letterSpacing: '0.04em',
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: 'var(--green)',
                animation: 'pulse 2s infinite',
                boxShadow: '0 0 0 0 rgba(34,197,94,0.4)',
              }}
            />
            Open to SDE Roles — 2026
          </div>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="font-syne font-extrabold mb-6"
          style={{
            fontSize: 'clamp(40px, 6vw, 72px)',
            letterSpacing: '-2.5px',
            lineHeight: 1.04,
            color: 'var(--text)',
          }}
        >
          Building{' '}
          <span className="gradient-text">scalable</span>,<br />
          high-performance<br />
          web applications.
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="text-lg leading-relaxed mb-10 max-w-xl"
          style={{ color: 'var(--muted)', fontWeight: 300 }}
        >
          Software Engineer with hands-on experience at Amazon delivering Python automation that cut
          manual effort by 30%+. Published AI researcher. Full-stack problem solver.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3">
          <button className="btn-primary" onClick={() => navigate('/projects')}>
            View Projects <ArrowRight size={14} />
          </button>
          <button className="btn-outline" onClick={() => navigate('/about')}>
            About Me
          </button>
          <a
            className="btn-outline"
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={14} /> GitHub
          </a>
          <a
            className="btn-outline"
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={14} /> LinkedIn
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-wrap gap-10 mt-16 pt-10"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {STATS.map((s, i) => (
            <div key={i}>
              <div
                className="font-syne font-extrabold"
                style={{ fontSize: 'clamp(26px,3vw,34px)', color: 'var(--text)', letterSpacing: '-1px' }}
              >
                {s.num}
              </div>
              <div className="text-sm mt-1" style={{ color: 'var(--muted)' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div {...fadeUp(0)}>
          <div className="section-tag">Featured Work</div>
          <h2 className="section-title">Projects that ship.</h2>
          <p className="section-sub">
            Real products built to solve real problems — from AI-powered deepfake detection to production full-stack applications.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="btn-outline" onClick={() => navigate('/projects')}>
            View All Projects <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* Amazon Highlight */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="section-tag">Experience Highlight</div>
        <h2 className="section-title">Amazon — 1 year, real impact.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { icon: '⚙️', title: 'Automation Engineering', desc: 'Built Python diagnostic pipeline tools that cut manual ops effort by 30%+ across AWS Linux environments.' },
            { icon: '📊', title: 'Data Workflows', desc: 'Architected S3 + MySQL data transmission pipelines for remote analysis across engineering teams.' },
            { icon: '💰', title: 'Cost Optimization', desc: 'Reduced AWS compute and storage costs by right-sizing resources aligned with engineering requirements.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card-base"
              style={{ cursor: 'default' }}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-syne font-bold text-base mb-2" style={{ color: 'var(--text)' }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
      `}</style>
    </div>
  )
}
