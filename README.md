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

## 📝 Recent Updates

- ✅ **v2.1** — Formspree contact form integration, live email delivery (April 2026)
- ✅ **v2.0** — Logo navigation fix (same-tab redirect), mobile menu enhancements
- ✅ **v1.0** — Initial portfolio launch with glassmorphism UI

---

## 🎬 Live Preview

Visit the live site to see the portfolio in action:
→ **[itssudip.com](https://itssudip.com)** ← 

**What You'll See:**
- ✨ Glassmorphic UI with animated background orbs
- 🌙 Click the moon icon to toggle dark/light mode
- 📊 Animated stats and counters on scroll
- 🎠 Interactive skills carousel (swipe or use arrows)
- 💼 Responsive project cards with hover effects
- 📱 Mobile-friendly design (try resizing your browser)
- 💬 "Hire Me" button to test the contact form

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌙☀️ **Dark / Light Mode** | Smooth theme toggle, preference saved to `localStorage` |
| 🔠 **Giant Name Hero** | Full-viewport name display in Bebas Neue display font |
| 🪟 **Glassmorphism UI** | Frosted glass cards with `backdrop-filter` throughout |
| 🎠 **Skills Carousel** | 3-up sliding carousel with blur edges, arrows, dots & touch |
| 📋 **Hire Me Modal** | Full contact form integrated with Formspree for live email delivery |
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

## ⚡ JavaScript Features (Vanilla ES6+ - No Dependencies)

All interactivity is in `js/main.js` (~370 lines) with **zero external libraries**:

| Feature | Details |
|---|---|
| 🌙 **Theme Toggle** | Dark/light mode with `localStorage` persistence & CSS variables |
| 📋 **Hire Me Modal** | Formspree integration, real email delivery, form validation |
| 🎠 **Skills Carousel** | Auto-rotating, keyboard arrows (←→), touch swipe, click navigation |
| 🎭 **Scroll Reveal** | `IntersectionObserver` for staggered fade-in animations |
| 📊 **Animated Counters** | Auto-counting numbers on scroll (5+, 6+, 2+) |
| ☰ **Mobile Menu** | Hamburger toggle, tap-outside to close, smooth transitions |
| ⌨️ **Keyboard Shortcuts** | Escape = close modal, Arrow keys = carousel |
| 📱 **Touch Support** | Swipe left/right on carousel for mobile |
| 📄 **Footer Loader** | Dynamic fetch & inject footer HTML from `footer.html` |
| 💫 **Smooth Scroll** | CSS `scroll-behavior: smooth` + padded scroll anchors |

---

## 🎨 Tech Stack



| Layer | Choice | Why |
|---|---|---|
| **Markup** | HTML5 | Semantic, accessible, standards-first |
| **Styling** | Pure CSS3 + 50+ CSS Variables | No Tailwind, Bootstrap, or SCSS — full control |
| **Layout** | CSS Grid + Flexbox | Semantic layout system |
| **Typography** | Bebas Neue (display) + Figtree (body) + DM Mono (code) | Google Fonts — instant load |
| **Effects** | `backdrop-filter: blur()` + CSS animations | Native glassmorphism, no libraries |
| **Accessibility** | Semantic HTML5, ARIA labels, keyboard nav | WCAG compliant |
| **Hosting** | GitHub Pages + custom domain | Zero-cost, auto-deployed from git |
| **Performance** | ~95 Lighthouse score, zero JS frameworks | Fast load, smooth 60fps animations |

---

## � CSS Architecture

The styling system is built on CSS custom properties for maximum maintainability:

```css
/* Color tokens (theme.css) */
--p1: #7c3aed;          /* Purple accent */
--p2: #2563eb;          /* Blue secondary */
--p3: #db2777;          /* Pink accent */
--text-main: #f0eaff;   /* Light text */
--bg: #080010;          /* Dark background */
--glass: rgba(255, 255, 255, 0.08);  /* Glassmorphism base */
--gb: rgba(255, 255, 255, 0.15);     /* Glass border */
```

**CSS Files Breakdown:**
- `theme.css` — 30+ color/spacing variables, dark & light mode tokens
- `base.css` — Reset, buttons, glass utilities, animated backgrounds
- `nav.css` — Navigation bar, theme toggle, mobile hamburger
- `hero.css` — Giant name hero, side card with stats
- `sections.css` — About, skills carousel, projects grid, contact, business card
- `modal.css` — Hire Me popup, form styling, animations

---

## �🌙 Theme System

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

## �️ Troubleshooting

| Issue | Solution |
|---|---|
| **Formspree emails not arriving** | Check spam folder. Verify form endpoint in `js/main.js` matches your Formspree ID |
| **Theme not persisting** | Clear browser `localStorage` via DevTools Console: `localStorage.clear()` |
| **Carousel not working on mobile** | Check if JavaScript is enabled. Try Chrome DevTools to toggle device mode |
| **Footer not loading** | Verify `footer.html` exists. Check browser console for 404 errors |
| **Animations feel choppy** | Try updating your browser. Check for running extensions/software affecting performance |

---

## 🎬 Demo & Recording Your Own GIF

### View Live Site
The easiest way to see the portfolio in action:
1. Visit **[itssudip.com](https://itssudip.com)** (live version)
2. Or run locally: `git clone ...` and open `index.html` in your browser

### Create Your Own Demo GIF

**Option 1: ScreenToGif (Windows)**
```
1. Download: https://www.screentogif.com/
2. Open app → click "Recorder"
3. Record yourself:
   - Navigate hero section
   - Click theme toggle (moon icon)
   - Scroll to skills carousel
   - Use arrows to navigate carousel
   - Click "Hire Me" button to show modal
   - Scroll to projects section
4. Export as .gif → Save to `assets/demo.gif`
5. Add to README (see below)
```

**Option 2: FFmpeg (Command Line)**
```bash
# If you have a screen recording video
ffmpeg -i portfolio-demo.mp4 -r 10 -s 1280x720 demo.gif

# Then add to README:
# ![Portfolio Demo](assets/demo.gif)
```

**Option 3: Online Tool**
- Record with OBS → Upload to [ezgif.com](https://ezgif.com/)
- Download the GIF and save to `assets/demo.gif`

### Add GIF to README
Once you have your GIF, add this after the "Live Preview" section:
```markdown
### Preview
![Portfolio Demo](assets/demo.gif)
```

---

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

## � Contact Form (Formspree Integration)

The **"Hire Me" modal** on every page is wired to **[Formspree](https://formspree.io)** for real email delivery.

### How It Works
1. User fills form (First Name, Last Name, Email, Company, Opportunity, Message)
2. Clicks "Send Message →"
3. JavaScript intercepts `submit` event and POSTs to Formspree API
4. Success animation plays while email is being delivered
5. Email forwarded to: `kumarsudip2023@gmail.com`
6. Modal auto-closes after 3 seconds

### Form Validation
- **Required:** First Name, Last Name, Email, Message
- **Optional:** Company / Organisation, Type of Opportunity (dropdown)

### To Connect Your Own Email
1. Create a Formspree account at [formspree.io](https://formspree.io)
2. Create a new form → get your form ID (e.g., `f/abc123xyz`)
3. Open `js/main.js` and find line ~279:
   ```javascript
   const formEndpoint = 'https://formspree.io/f/mlgaqego';
   ```
4. Replace `mlgaqego` with your form ID
5. Test by clicking "Hire Me" and submitting the form

**No backend server needed** — Formspree handles everything! ✨

---

## 🔮 Roadmap

- [x] Connect Hire Me form to [Formspree](https://formspree.io) for real email delivery ✅
- [ ] Add real project screenshots / mockups in `assets/`
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
