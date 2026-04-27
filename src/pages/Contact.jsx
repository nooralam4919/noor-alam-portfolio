import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Code2, Send, CheckCircle } from 'lucide-react'
import { CONTACT } from '../data'

const links = [
  { icon: Mail, label: 'Email', value: 'nooralam.webd@gmail.com', href: `mailto:${CONTACT.email}` },
  { icon: Github, label: 'GitHub', value: 'github.com/nooralam4919', href: CONTACT.github },
  { icon: Linkedin, label: 'LinkedIn', value: 'noor-alam-webd', href: CONTACT.linkedin },
  { icon: Code2, label: 'LeetCode', value: '500+ problems solved', href: CONTACT.leetcode },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="section-tag">Contact</div>
        <h1 className="section-title">Let's work together.</h1>
        <p className="section-sub">
          Open to SDE roles, full-stack projects, and interesting engineering challenges. Reach out anytime.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-3xl">
        {/* Contact links */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {links.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-200 no-underline group"
              style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                style={{ background: 'rgba(99,102,241,0.12)' }}
              >
                <Icon size={16} style={{ color: 'var(--indigo)' }} />
              </div>
              <div>
                <div className="text-xs mb-0.5" style={{ color: 'var(--muted)' }}>{label}</div>
                <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>{value}</div>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-2xl p-7"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <h2 className="font-syne font-bold text-lg mb-5" style={{ color: 'var(--text)' }}>
            Send a message
          </h2>

          {sent ? (
            <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
              <CheckCircle size={40} style={{ color: 'var(--green)' }} />
              <div>
                <div className="font-syne font-bold text-lg mb-1" style={{ color: 'var(--text)' }}>
                  Message sent!
                </div>
                <div className="text-sm" style={{ color: 'var(--muted)' }}>
                  Noor will get back to you soon.
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your name"
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg px-4 py-3 text-sm transition-colors duration-200"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  outline: 'none',
                  fontFamily: 'DM Sans, sans-serif',
                }}
                onFocus={e => e.target.style.borderColor = 'var(--indigo)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
              <input
                type="email"
                placeholder="Your email"
                required
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg px-4 py-3 text-sm transition-colors duration-200"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  outline: 'none',
                  fontFamily: 'DM Sans, sans-serif',
                }}
                onFocus={e => e.target.style.borderColor = 'var(--indigo)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
              <textarea
                rows={4}
                placeholder="What are you working on?"
                required
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg px-4 py-3 text-sm transition-colors duration-200 resize-y"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  outline: 'none',
                  fontFamily: 'DM Sans, sans-serif',
                  minHeight: '100px',
                }}
                onFocus={e => e.target.style.borderColor = 'var(--indigo)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
              <button type="submit" className="btn-primary self-start">
                <Send size={14} /> Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}
