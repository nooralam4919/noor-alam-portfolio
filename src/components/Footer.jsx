import { Github, Linkedin, Mail } from 'lucide-react'
import { CONTACT } from '../data'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)' }} className="px-6 py-10">
      <div className="flex flex-col items-center justify-between max-w-6xl gap-4 mx-auto sm:flex-row">
        <div className="text-lg font-extrabold font-syne" style={{ letterSpacing: '-0.5px', color: 'var(--text)' }}>
          Noor<span style={{ color: 'var(--indigo)' }}>.</span>
        </div>
        <p className="text-sm" style={{ color: 'var(--muted)' }}>
          {/* Built with React + Vite · Deployed on Vercel ·{' '} */}
          <span style={{ color: 'var(--indigo)' }}>Open to Work</span>
        </p>
        <div className="flex items-center gap-3">
          <a href={`mailto:${CONTACT.email}`} className="transition-colors duration-200" style={{ color: 'var(--muted)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            <Mail size={16} />
          </a>
          <a href={CONTACT.github} target="_blank" rel="noreferrer" className="transition-colors duration-200" style={{ color: 'var(--muted)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            <Github size={16} />
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="transition-colors duration-200" style={{ color: 'var(--muted)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
