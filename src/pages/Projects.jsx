import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS } from '../data'

export default function Projects() {
  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-tag">All Projects</div>
        <h1 className="section-title">Things I've built.</h1>
        <p className="section-sub">
          From AI research to full-stack production apps — every project is driven by measurable impact.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </div>
  )
}
