import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Github, Linkedin, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(6,10,18,0.92)' : 'rgba(6,10,18,0.7)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="font-syne font-extrabold text-xl no-underline"
            style={{ color: 'var(--text)', letterSpacing: '-0.5px' }}
          >
            Noor<span style={{ color: 'var(--indigo)' }}>.</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `text-sm px-4 py-2 rounded-lg no-underline transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-indigo bg-opacity-20'
                      : 'hover:text-white hover:bg-white hover:bg-opacity-5'
                  }`
                }
                style={({ isActive }) => ({
                  color: isActive ? 'var(--text)' : 'var(--muted)',
                  background: isActive ? 'rgba(99,102,241,0.12)' : undefined,
                })}
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Icons + Mobile menu button */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/nooralam4919"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200"
              style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--indigo)'
                e.currentTarget.style.color = 'var(--indigo)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--muted)'
              }}
            >
              <Github size={15} />
            </a>
            <a
              href="https://linkedin.com/in/noor-alam-webd"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200"
              style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--indigo)'
                e.currentTarget.style.color = 'var(--indigo)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--muted)'
              }}
            >
              <Linkedin size={15} />
            </a>
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg"
              style={{ border: '1px solid var(--border)', color: 'var(--muted)', background: 'none', cursor: 'pointer' }}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{ background: 'rgba(6,10,18,0.98)', borderBottom: '1px solid var(--border)' }}
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-sm px-4 py-3 rounded-lg no-underline transition-all duration-200 ${
                      isActive ? 'text-white' : ''
                    }`
                  }
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--text)' : 'var(--muted)',
                    background: isActive ? 'rgba(99,102,241,0.12)' : undefined,
                  })}
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
