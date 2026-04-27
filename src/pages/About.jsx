import { motion } from 'framer-motion'
import SkillBar from '../components/SkillBar'
import { SKILLS } from '../data'

export default function About() {
  return (
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="section-tag">About</div>
        <h1 className="section-title">Who I am.</h1>
      </motion.div>

      {/* Bio + Quick facts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-start">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>
            I'm a Software Engineer based in Bengaluru, India, with hands-on experience building automation systems, full-stack applications, and AI-powered tools. I spent a year at Amazon delivering Python tooling on AWS that meaningfully reduced manual operational effort for engineering teams.
          </p>
          <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>
            My work spans the full stack — from clean React UIs to production-grade REST APIs to data pipelines and cloud infrastructure. I care about engineering that's measurable: I don't just ship features, I ship outcomes.
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            Outside of work, I actively sharpen my DSA fundamentals (500+ problems solved), contribute to research (published deepfake detection paper in Gradiva Review Journal), and push toward my next challenge in SDE roles.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
          <div
            className="rounded-2xl p-8"
            style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(34,197,94,0.06))', border: '1px solid var(--border)' }}
          >
            <div
              className="text-xs font-bold mb-5 tracking-widest uppercase"
              style={{ color: 'var(--indigo2)', letterSpacing: '0.14em' }}
            >
              Quick Facts
            </div>
            <div className="flex flex-col gap-4">
              {[
                { icon: '🎓', text: 'B.E. CSE — VTU, 7.98 CGPA' },
                { icon: '🏢', text: 'Ex-Amazon — 1 year' },
                { icon: '📄', text: 'Published in Gradiva Review Journal' },
                { icon: '📍', text: 'Bengaluru, Karnataka, India' },
                { icon: '🧩', text: '500+ DSA problems solved' },
                { icon: '📧', text: 'nooralam.webd@gmail.com' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm" style={{ color: 'var(--muted)' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Skills */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <div className="section-tag">Skills</div>
        <h2 className="section-title" style={{ fontSize: 'clamp(24px,3vw,34px)', marginBottom: '2.5rem' }}>
          Technical toolkit.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
        {Object.entries(SKILLS).map(([group, skills], gi) => (
          <motion.div
            key={group}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 + gi * 0.07 }}
          >
            <div
              className="text-xs font-bold mb-5 tracking-widest uppercase"
              style={{ color: 'var(--indigo2)', letterSpacing: '0.14em' }}
            >
              {group}
            </div>
            {skills.map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
