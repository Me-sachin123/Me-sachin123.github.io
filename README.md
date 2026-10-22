# Sachin | Java Full Stack Developer Portfolio

A sleek, responsive, and performance-optimized personal portfolio website designed for a Java Full Stack Developer (Spring Boot + React). Built strictly with clean semantic **HTML5**, modern **Vanilla CSS3**, and **Vanilla JavaScript (ES6+)**, fully compatible with free hosting on **GitHub Pages**.

---

## 🌟 Features & Highlights

- **Dynamic Data-Driven Content (`js/data.js`):** Add, update, or remove projects, skills, internship experience, and certifications without editing the HTML markup.
- **Glassmorphic Aesthetic & Dual Theme:** High visual appeal with dark mode (default) and crisp light mode, persisted across browser sessions via `localStorage`.
- **Project Filtering & Responsive Cards:** Filter projects by category (Full Stack, Backend / API, Productivity, Analytics). Project cards include problem statements, tech stack chips, key architectural features, and conditional live demo buttons.
- **Interactive Experience Timeline:** Highlights internships at QSpiders (Java Full Stack) and Simdaa Technologies (Power BI Developer).
- **Sticky Navbar & Smooth Scrolling:** Features an active section indicator (`IntersectionObserver`) and mobile hamburger menu.
- **Interactive Contact & One-Click Copy:** Click-to-copy email with toast notification, and form handling ready for Formspree.
- **Resume Download:** High-resolution downloadable resume (`resume.pdf`).
- **Zero Build Tools / Zero Dependencies:** Pure static site that loads in under 1 second.

---

## 📁 Repository Structure

```
My-Portfolio/
├── index.html            # Main semantic HTML5 structure & SEO metadata
├── favicon.svg           # High-resolution vector brand favicon
├── resume.pdf            # Downloadable ATS-friendly resume
├── README.md             # Documentation, setup & GitHub Pages deployment guide
├── css/
│   └── style.css         # Modern CSS design system, variables, responsive grid & themes
├── js/
│   ├── data.js           # Central JavaScript data file (projects, skills, experience)
│   └── script.js         # Card rendering, theme toggle, mobile menu, toast notifications
└── images/
    ├── profile.jpg       # Profile portrait photo
    └── projects/         # Featured project screenshots
        ├── fertilizer.jpg
        ├── rate-limiter.jpg
        ├── habit-tracker.jpg
        └── budget-dashboard.jpg
```

---

## 🚀 How to Run Locally

You do not need Node.js or any build tools to run this website.

### Option 1: Python HTTP Server (Recommended)
Open a terminal in the project directory and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Option 2: VS Code Live Server
1. Open the folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click on `index.html` and click **"Open with Live Server"**.

---

## ⚙️ How to Update Content

All content is managed through [`js/data.js`](file:///e:/My-Portfolio/js/data.js):

### Adding a New Project
Add an object to the `projects` array:
```javascript
{
  id: "your-project-id",
  name: "Project Name",
  category: "Full Stack", // or "Backend / Microservices", "Productivity", "Analytics"
  desc: "Brief description of the application...",
  problem: "One-line problem it solves...",
  tech: ["Java", "Spring Boot", "MySQL", "Docker"],
  features: [
    "Key feature 1 with measurable outcome",
    "Key feature 2 with architecture details"
  ],
  image: "images/projects/your-screenshot.jpg",
  github: "https://github.com/Me-sachin123/your-repo",
  demo: "https://your-demo-url.com" // Leave empty ("") if no live demo exists
}
```

### Updating Skills
Edit the `skills` object categories in `js/data.js`:
```javascript
const skills = {
  Backend: ["Java", "Spring Boot", "Spring Security", "REST APIs", "Docker"],
  Frontend: ["HTML5", "CSS3", "JavaScript", "React"],
  Database: ["MySQL", "PostgreSQL", "Redis"],
  Tools: ["Git", "GitHub", "Postman", "Maven"]
};
```

### Updating Resume
Replace [`resume.pdf`](file:///e:/My-Portfolio/resume.pdf) with your updated PDF file using the exact same filename.

---

## 🌐 Deployment to GitHub Pages

1. **Create a GitHub Repository:**
   - If naming it `<username>.github.io`, it will be served at `https://<username>.github.io/`.
   - If using a standard repo name like `portfolio`, it will be served at `https://<username>.github.io/portfolio/`.

2. **Commit and Push:**
   ```bash
   git init
   git add .
   git commit -m "Initial release of Sachin's Java Full Stack Portfolio"
   git branch -M main
   git remote add origin https://github.com/Me-sachin123/<your-repo>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub.
   - Click **Settings** → **Pages** (in the left sidebar).
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Select branch: `main` and folder: `/ (root)`.
   - Click **Save**.
   - In 1–2 minutes, your website is live!

---

## 📋 SRS Compliance Checklist

| Requirement ID | Description | Status |
| --- | --- | :---: |
| **FR-1** | Single page with navbar sections reachable | Passed |
| **FR-2** | Smooth scroll navigation | Passed |
| **FR-3** | Responsive mobile toggle menu | Passed |
| **FR-4** | Dynamic project card generation from `data.js` | Passed |
| **FR-5** | Dynamic skills generation from `data.js` | Passed |
| **FR-6** | Add project by editing only `data.js` | Passed |
| **FR-7** | Download Resume button triggers `resume.pdf` download | Passed |
| **FR-8** | External links (GitHub, LinkedIn, Demo) open in new tab | Passed |
| **FR-9** | Dark/Light mode toggle with `localStorage` persistence | Passed |
| **FR-10** | Contact form with validation and feedback toast | Passed |
| **Privacy** | No phone number or sensitive personal IDs displayed | Passed |

---

## 📄 License & Attribution
Designed & Developed by **Sachin**. Free to use as a template with attribution.
