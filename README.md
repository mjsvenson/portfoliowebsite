# Portfolio Website

A responsive, single-page developer portfolio built with Next.js and TypeScript. The site introduces Matthew Svenson, presents his education and software engineering experience, and highlights selected projects with direct links to their source repositories.

**Live demo:** [matthewsvensonportfoliowebsite.vercel.app](https://matthewsvensonportfoliowebsite.vercel.app/)

## Highlights

- **Responsive navigation**: Fixed desktop navigation and a mobile menu provide quick access to each section.

- **Video hero**: A full-screen looping background introduces the portfolio with a strong visual identity.

- **Professional profile**: Dedicated sections cover background, education, relevant coursework, and ACM leadership.

- **Work experience**: Reusable experience cards summarize software engineering internships and teaching experience.

- **Project showcase**: Visual project cards feature Tabular, Block and Wall Collisions, and an image encryption/decryption application.

- **Optimized assets**: Next.js image and font utilities support efficient media loading and typography.

## Tech stack

- [Next.js](https://nextjs.org/) 15
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/) 5
- [Tailwind CSS](https://tailwindcss.com/) 4
- [ESLint](https://eslint.org/) 9

---

## Getting started

### Prerequisites

Install a current Node.js release and npm.

### Installation

```bash
git clone https://github.com/mjsvenson/portfoliowebsite
cd portfoliowebsite
npm ci
```

### Local development

Start the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser. Changes to the app update automatically during development.

### Production build

Create and run an optimized production build:

```bash
npm run build
npm run start
```

---

## Available scripts

- **`npm run dev`**: Starts the Next.js development server with Turbopack.
- **`npm run build`**: Produces an optimized production build and checks types.
- **`npm run start`**: Serves the production build.
- **`npm run lint`**: Runs the repository's configured lint command.

## Project structure

```text
portfoliowebsite/
├── public/
│   └── Background.mp4
├── src/app/
│   ├── Components/
│   │   ├── Images/
│   │   ├── AboutMe.tsx
│   │   ├── Education.tsx
│   │   ├── Footer.tsx
│   │   ├── Intro.tsx
│   │   ├── NavBar.tsx
│   │   ├── Projects.tsx
│   │   └── WorkExperience.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Page composition

The home page is assembled from focused React components:

- **`NavBar`**: Fixed section navigation with a responsive mobile menu.
- **`Intro`**: Full-screen video hero and portfolio title.
- **`AboutMe`**: Personal background and early programming interests.
- **`Education`**: Degree, coursework, and ACM involvement.
- **`WorkExperience`**: Reusable cards for professional and teaching experience.
- **`Projects`**: Linked cards with screenshots and implementation summaries.
- **`Footer`**: GitHub, LinkedIn, and email contact links.

## Featured projects

- **Tabular**: A Chrome extension that organizes large tab collections into a tree structure.
- **Block and Wall Collisions**: A Python physics simulation exploring the relationship between elastic collisions and digits of pi.
- **Encrypt/Decrypt Image**: A C++ image-processing project based on a Fibonacci linear-feedback shift register.

## Repository

Source code: [github.com/mjsvenson/portfoliowebsite](https://github.com/mjsvenson/portfoliowebsite)
