<div align="center">

<!-- HEADER BANNER -->
```
███████╗ ██╗   ██╗ ██████╗  ██╗ ██████╗
██╔════╝ ██║   ██║ ██╔══██╗ ██║ ██╔══██╗
███████╗ ██║   ██║ ██║  ██║ ██║ ██████╔╝
╚════██║ ██║   ██║ ██║  ██║ ██║ ██╔═══╝
███████║ ╚██████╔╝ ██████╔╝ ██║ ██║
╚══════╝  ╚═════╝  ╚═════╝  ╚═╝ ╚═╝
```

# 🌐 Personal Portfolio Website

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-itssudip.com-7c3aed?style=for-the-badge)](https://itssudip.com)
[![GitHub](https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github)](https://github.com/itssudipkumar)

<br/>

> *"Clean code. Bold design. Zero compromises."*

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌙☀️ **Dark / Light Mode** | Smooth theme toggle, preference saved to `localStorage` |
| 🔠 **Giant Name Hero** | Full-viewport name display in Bebas Neue display font |
| 🪟 **Glassmorphism UI** | Frosted glass cards with `backdrop-filter` throughout |
| 🎠 **Skills Carousel** | 3-up sliding carousel with blur edges, arrows, dots & touch |
| 📋 **Hire Me Modal** | Full contact form with validation & success animation |
| 💼 **Business Card** | Real-size card component with avatar + contact details |
| 📄 **Project Sub-Pages** | Individual detail pages for each project |
| 🌈 **Animated Blobs** | Drifting colour orbs for ambient background depth |
| 📱 **Fully Responsive** | Works flawlessly on mobile, tablet, and desktop |
| ♿ **Accessible** | Keyboard nav, semantic HTML, ARIA labels |

---

## 🗂️ Project Structure

```
itssudip/
│
├── 📄 index.html                   ← Homepage (hero, about, skills, projects, contact)
│
├── 📁 css/
│   ├── 🎨 theme.css                ← CSS variables — dark & light mode tokens
│   ├── 🔧 base.css                 ← Reset, globals, buttons, glass utilities
│   ├── 🧭 nav.css                  ← Navigation bar + theme toggle
│   ├── 🦸 hero.css                 ← Giant name hero section
│   ├── 📐 sections.css             ← About, skills carousel, projects, contact, biz card
│   └── 🪟 modal.css                ← Hire Me popup form
│
├── 📁 js/
│   └── ⚡ main.js                  ← Theme, carousel, modal, scroll reveal, nav active
│
├── 📁 pages/
│   ├── 📋 projects.html            ← All projects listing page
│   ├── 🗄️  project-inventory.html  ← Inventory Management System detail
│   ├── 🌐 project-portfolio.html   ← Portfolio Website detail
│   ├── ➕ project-calculator.html  ← C++ Calculator detail
│   ├── 🍃 project-nosql.html       ← MongoDB NoSQL project detail
│   └── 📦 project-agile.html       ← Agile / Project Mgmt detail
│
└── 📁 assets/                      ← Images, icons, fonts (add yours here)
```

---

## 🚀 Getting Started

### Prerequisites
- [VS Code](https://code.visualstudio.com/) — recommended editor
- [Git](https://git-scm.com/) — version control
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension *(optional but great for dev)*

### Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/itssudipkumar/MyPortfolio-Sudip.git

# 2. Navigate into the folder
cd itssudip

# 3. Open in VS Code
code .

# 4. Right-click index.html → "Open with Live Server"
#    OR just open index.html directly in your browser
```

> No build step, no npm install, no webpack. Pure HTML/CSS/JS — open and go. 🎉

---

## 🎨 Tech Stack



| Layer | Choice | Why |
|---|---|---|
| **Markup** | HTML5 | Semantic, accessible, standards-first |
| **Styling** | Pure CSS3 + CSS Variables | No framework bloat, full control |
| **Logic** | Vanilla JavaScript (ES6+) | Zero dependencies, blazing fast |
| **Fonts** | Bebas Neue + Figtree + DM Mono | Display power + readability |
| **Effects** | `backdrop-filter`, CSS animations | Native glassmorphism, no libs |
| **Hosting** | GitHub Pages | Free, fast, git-integrated |

---

## 🌙 Theme System

The entire site uses CSS custom properties for theming — defined in `css/theme.css`.

```css
/* Switch themes by toggling data-theme on <html> */
[data-theme="dark"]  { --bg: #080010; --text-main: #f0eaff; ... }
[data-theme="light"] { --bg: #faf8ff; --text-main: #1a0040; ... }
```

JavaScript saves the preference:
```js
localStorage.setItem('sudip-theme', 'dark' | 'light');
```

---

## 🪄 Customisation Guide

### Update personal info
Search and replace these placeholders in `index.html`:
```
YOUR_EMAIL     → your email address
YOUR_PHONE     → your phone number
YOUR_LINKEDIN  → your LinkedIn URL
YOUR_GITHUB    → your GitHub URL
YOUR_LOCATION  → your suburb / city
```

### Change the colour theme
In `css/theme.css`:
```css
:root {
  --p1: #7c3aed;   /* primary purple — change me */
  --p2: #2563eb;   /* secondary blue — change me */
  --p3: #db2777;   /* accent pink   — change me */
}
```

### Add a real profile photo
Find the initials avatar and replace:
```html
<!-- Before -->
<div class="hsc-av">SK</div>

<!-- After -->
<img src="assets/photo.jpg" alt="Your Name"
  style="width:100%;height:100%;object-fit:cover;border-radius:16px;">
```

### Add a new project
1. Copy `pages/project-inventory.html` → rename it
2. Update the title, description, stack tags, and gradient class (`gr1`–`gr5`)
3. Add a card in `pages/projects.html` and in the projects grid in `index.html`

---

## 📡 Deploying to GitHub Pages

```bash
# 1. Initialise git and push to GitHub
git init
git add .
git commit -m "🚀 Initial commit"
git branch -M main
git remote add origin https://github.com/itssudipkumar/MyPortfolio-Sudip.git
git push -u origin main

# 2. Enable Pages:
#    GitHub repo → Settings → Pages → Branch: main → / (root) → Save

# 3. Your site goes live at:
#    https://itssudipkumar.github.io/itssudip/
```

### Add custom domain `itssudip.com`
```
GitHub → Settings → Pages → Custom domain → type: itssudip.com → Save

At your domain registrar add a CNAME record:
  Host: www  →  Points to: YOUR_USERNAME.github.io
```

---

## 🔮 Roadmap

- [ ] Add real project screenshots / mockups in `assets/`
- [ ] Connect Hire Me form to [Formspree](https://formspree.io) for real email delivery
- [ ] Add a blog / writing section
- [ ] Three.js / WebGL background animation
- [ ] Dark mode system preference detection (`prefers-color-scheme`)
- [ ] Resume PDF download button

---

## 🔄 Updating the Site

After making any changes locally, push with:

```bash
git add .
git commit -m "describe what you changed"
git push
```

GitHub Pages redeploys automatically — live within seconds. ✅

---

<div align="center">

**Built with 💜 · itssudip.com**

⭐ **If you like this portfolio, drop a star!** ⭐

</div>
