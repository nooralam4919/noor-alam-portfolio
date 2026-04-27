import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function SkillBar({ name, level }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex items-center gap-4 mb-3">
      <span className="text-sm min-w-[110px]" style={{ color: 'var(--text)' }}>{name}</span>
      <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, var(--indigo), var(--indigo2))' }}
          initial={{ width: 0 }}
          animate={{ width: visible ? `${level}%` : 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
        />
      </div>
      <span className="text-xs min-w-[32px] text-right" style={{ color: 'var(--muted)' }}>{level}%</span>
    </div>
  )
}
