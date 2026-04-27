import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import { PROJECTS } from '../data'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = PROJECTS.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="section-container text-center">
        <h1 className="section-title">Project not found.</h1>
        <button className="btn-outline mt-4" onClick={() => navigate('/projects')}>
          ← Back to Projects
        </button>
      </div>
    )
  }

  return (
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        {/* Back */}
        <button
          className="inline-flex items-center gap-2 text-sm mb-10 transition-colors duration-200"
          style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', padding: 0 }}
          onClick={() => navigate('/projects')}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
        >
          <ArrowLeft size={15} /> Back to Projects
        </button>

        {/* Hero banner */}
        <div
          className="rounded-2xl p-10 mb-10"
          style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(13,21,38,0.6))',
            border: '1px solid var(--border)',
          }}
        >
          <div className="text-5xl mb-5">{project.icon}</div>
          <div className="section-tag mb-2">{project.category} · {project.date}</div>
          <h1
            className="font-syne font-extrabold mb-4"
            style={{ fontSize: 'clamp(26px,4vw,48px)', letterSpacing: '-1.5px', color: 'var(--text)' }}
          >
            {project.title}
          </h1>
          <p className="text-base leading-relaxed mb-6 max-w-2xl" style={{ color: 'var(--muted)' }}>
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="tag-pill">{t}</span>
            ))}
            {project.specialTag && <span className="tag-pill-green">{project.specialTag}</span>}
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <DetailBlock title="Problem Statement">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{project.problem}</p>
          </DetailBlock>
          <DetailBlock title="Approach & Architecture">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{project.approach}</p>
          </DetailBlock>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <DetailBlock title="Key Features">
            <ul className="space-y-2">
              {project.features.map((f, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  <span style={{ color: 'var(--indigo)', flexShrink: 0, marginTop: 2 }}>→</span>
                  {f}
                </li>
              ))}
            </ul>
          </DetailBlock>
          <DetailBlock title="Challenges & Solutions">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{project.challenges}</p>
          </DetailBlock>
        </div>

        {/* Impact */}
        <div
          className="rounded-xl p-6 mb-8"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <div
            className="text-xs font-bold mb-5 tracking-widest uppercase"
            style={{ color: 'var(--indigo2)', letterSpacing: '0.12em' }}
          >
            Impact
          </div>
          <div className="grid grid-cols-3 gap-4">
            {project.impacts.map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-4 text-center"
                style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)' }}
              >
                <div
                  className="font-syne font-extrabold mb-1"
                  style={{ fontSize: 'clamp(22px,3vw,36px)', color: 'var(--green)', letterSpacing: '-0.5px' }}
                >
                  {item.num}
                </div>
                <div className="text-xs" style={{ color: 'var(--muted)' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <a
            className="btn-primary"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={14} /> View on GitHub
          </a>
          {project.live && (
            <a
              className="btn-outline"
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          <button className="btn-outline" onClick={() => navigate('/projects')}>
            <ArrowLeft size={14} /> All Projects
          </button>
        </div>
      </motion.div>
    </div>
  )
}

function DetailBlock({ title, children }) {
  return (
    <div className="rounded-xl p-6" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
      <div
        className="text-xs font-bold mb-4 tracking-widest uppercase"
        style={{ color: 'var(--indigo2)', letterSpacing: '0.12em' }}
      >
        {title}
      </div>
      {children}
    </div>
  )
}
