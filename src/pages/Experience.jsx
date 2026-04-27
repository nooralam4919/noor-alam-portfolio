import { motion } from 'framer-motion'
import { EXPERIENCE } from '../data'

function parseBold(text) {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} style={{ color: 'var(--green)', fontWeight: 500 }}>{part}</strong>
    ) : (
      part
    )
  )
}

export default function Experience() {
  return (
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="section-tag">Work History</div>
        <h1 className="section-title">Where I've worked.</h1>
        <p className="section-sub">
          Professional experience building tools, systems, and full-stack applications at scale.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative pl-7 mb-20" style={{ borderLeft: '1px solid rgba(99,102,241,0.3)' }}>
        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={i}
            className="relative mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            {/* dot */}
            <div
              className="absolute rounded-full"
              style={{
                left: '-34px',
                top: '8px',
                width: '9px',
                height: '9px',
                background: exp.color,
                border: '2px solid var(--bg)',
                boxShadow: `0 0 0 4px rgba(99,102,241,0.18)`,
              }}
            />

            <div
              className="text-xs font-semibold mb-1 tracking-wider uppercase"
              style={{ color: 'var(--indigo2)', letterSpacing: '0.1em' }}
            >
              {exp.company} · {exp.location}
            </div>
            <h2
              className="font-syne font-bold mb-1"
              style={{ fontSize: 'clamp(18px,2.5vw,22px)', color: 'var(--text)' }}
            >
              {exp.role}
            </h2>
            <div className="text-xs mb-5" style={{ color: 'var(--muted)' }}>{exp.period}</div>

            <ul className="space-y-2 mb-5">
              {exp.bullets.map((b, bi) => (
                <li
                  key={bi}
                  className="flex gap-2 text-sm leading-relaxed"
                  style={{ color: 'var(--muted)', paddingLeft: '4px' }}
                >
                  <span style={{ color: 'var(--indigo)', flexShrink: 0, marginTop: 2 }}>▸</span>
                  <span>{parseBold(b)}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.tags.map((t) => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
        <div className="section-tag">Education</div>
        <h2 className="section-title" style={{ fontSize: 'clamp(24px,3vw,34px)', marginBottom: '1.5rem' }}>
          Academic background.
        </h2>
        <div
          className="rounded-xl p-7 max-w-xl card-base"
          style={{ cursor: 'default' }}
        >
          <div className="flex items-start gap-5">
            <span className="text-4xl">🎓</span>
            <div className="flex-1">
              <h3 className="font-syne font-bold text-lg mb-1" style={{ color: 'var(--text)' }}>
                B.E. in Computer Science and Engineering
              </h3>
              <div className="text-sm mb-1" style={{ color: 'var(--muted)' }}>
                Visvesvaraya Technological University, Karnataka
              </div>
              <div className="flex items-center justify-between mt-3">
                <span className="text-sm" style={{ color: 'var(--muted)' }}>2020 – 2024</span>
                <span
                  className="font-syne font-extrabold"
                  style={{ fontSize: '22px', color: 'var(--green)', letterSpacing: '-0.5px' }}
                >
                  7.98 / 10
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {['Algorithms', 'OS', 'DBMS', 'Networks', 'Software Eng.'].map((t) => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="section-tag">Achievements</div>
        <h2 className="section-title" style={{ fontSize: 'clamp(24px,3vw,34px)', marginBottom: '1.5rem' }}>
          Recognition.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          {[
            { icon: '📄', title: 'Research Publication', desc: 'VarifAI published in Gradiva Review Journal, May 2024' },
            { icon: '🧩', title: '500+ DSA Problems', desc: 'Solved across LeetCode and competitive programming platforms' },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-5"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="font-syne font-bold text-base mb-1" style={{ color: 'var(--text)' }}>{item.title}</div>
              <div className="text-sm" style={{ color: 'var(--muted)' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
