import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project, index = 0 }) {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="card-base cursor-pointer group"
      onClick={() => navigate(`/projects/${project.id}`)}
    >
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
          style={{ background: 'rgba(99,102,241,0.12)' }}
        >
          {project.icon}
        </div>
        <ArrowUpRight
          size={16}
          className="transition-all duration-200 opacity-0 group-hover:opacity-100"
          style={{ color: 'var(--indigo)' }}
        />
      </div>

      <div className="flex items-start gap-2 mb-2">
        <h3 className="font-syne font-bold text-lg leading-snug" style={{ color: 'var(--text)' }}>
          {project.title}
        </h3>
      </div>

      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
        {project.summary}
      </p>

      <div className="metric-text">
        <span>↑</span>
        <span>{project.metric}</span>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.tags.slice(0, 4).map((t) => (
          <span key={t} className="tag-pill">{t}</span>
        ))}
        {project.specialTag && (
          <span className="tag-pill-green">{project.specialTag}</span>
        )}
      </div>
    </motion.div>
  )
}
