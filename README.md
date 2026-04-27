# Noor Alam — Portfolio

A modern, multi-page personal portfolio website built with React + Vite, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **React 18** + **Vite** — fast dev server, optimized build
- **React Router v6** — multi-page SPA routing
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — smooth page & element animations
- **Lucide React** — clean icons

## 📁 Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Sticky nav with mobile menu
│   ├── Footer.jsx       # Footer with links
│   ├── ProjectCard.jsx  # Reusable project card
│   └── SkillBar.jsx     # Animated skill progress bar
├── pages/
│   ├── Home.jsx         # Hero + featured projects + stats
│   ├── Projects.jsx     # All projects grid
│   ├── ProjectDetail.jsx # Dynamic project detail (/projects/:id)
│   ├── About.jsx        # Bio + skill bars
│   ├── Experience.jsx   # Timeline + education
│   └── Contact.jsx      # Links + contact form
├── data/
│   └── index.js         # All content: projects, experience, skills
├── App.jsx              # Routes + layout shell
├── main.jsx             # Entry point
└── index.css            # Global styles + design tokens
```

## ⚙️ Setup

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2 — GitHub Integration
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Vite → click **Deploy**
5. Done! `vercel.json` handles SPA routing.

## ✏️ Customizing Content

All content lives in **`src/data/index.js`** — no digging through components needed:

- **`PROJECTS`** — add/edit projects (title, tags, metrics, problem, approach, impacts, github link)
- **`EXPERIENCE`** — work history timeline entries
- **`SKILLS`** — grouped skill bars with percentages
- **`STATS`** — hero section numbers
- **`CONTACT`** — email, GitHub, LinkedIn, LeetCode URLs

## 🎨 Design Tokens

CSS variables in `src/index.css`:
```css
--indigo: #6366F1    /* primary */
--green: #22C55E     /* accent / metrics */
--bg: #060A12        /* dark background */
--muted: #7A8AA0     /* secondary text */
```

## 📄 Adding a Resume Download

1. Place your resume PDF at `public/Noor_Alam_Resume.pdf`
2. Update the Download Resume button in `src/pages/Home.jsx`:
```jsx
<a href="/Noor_Alam_Resume.pdf" download className="btn-outline">
  <Download size={14} /> Resume
</a>
```
