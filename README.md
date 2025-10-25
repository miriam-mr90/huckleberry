# Welcome to my Huckleberry project

HuckleLab is my personal playground for building small features, exploring ideas, and having fun along the way ✨

A space for testing and experimentation — no big frameworks, no deadlines, just curiosity.

This is a simple React application built with TypeScript, Tailwind, CSS, Jest, and Prettier. Navigate to the Star Wars Encyclopedia to see a list of characters.

## ✨ Explore the Pages

### Rick and Morty 🚧

A character gallery that displays characters from the Rick and Morty API using GraphQL queries.

**Features:**

- Fetches character data from the Rick and Morty GraphQL API
- Displays character information including name, status, species, gender, and image
- Responsive grid layout

**Technical Notes:**

_GraphQL Query Management:_ For this project, I've decided to keep things simple and use manual query definitions rather than setting up GraphQL Code Generator. Since I'm working with just a handful of queries, adding code generation would be overkill and bring unnecessary complexity.

### Star Wars Encyclopedia 🚧

A static encyclopedia displaying famous characters from the Star Wars universe.

**Features:**

- Static character data (no API calls)
- Character information including name, role, and description
- Card-based layout with hover effects

### Botanix 🚧

Explore a wide variety of plants, add, edit, or remove entries, and easily search or filter your plant collection.

**Features:**

- Browse a collection of plants
- Add, edit, and remove plant entries
- Search and filter functionality
- Plant care instructions and details

**Technical Notes:**

- **Database:** In development, Botanix uses `json-server` to serve data from `src/pages/Botanix/db.json`, which contains a structured array of plant objects.
- **Production:** On GitHub Pages, Botanix fetches data from a static file located at `/public/db_botanix.json`. This file is read-only, so any mutations (add/edit/delete) are not supported in production.
- **Unified API Endpoint:** The frontend always fetches from `/api/plants`. In development, Vite's proxy redirects this to `json-server`, and in production, it fetches the static JSON file.
- **Limitations:** Since the production version relies on a static JSON file, the content cannot be mutated. Operations are read-only. Any changes to plant data require updating the JSON file and redeploying.

## 🚀 GitHub Pages Deployment

This project is deployed to **GitHub Pages** and is publicly accessible at:

**[https://miriam-mr90.github.io/huckleberry/](https://miriam-mr90.github.io/huckleberry/)**

### How it works

1. **Automatic deployment via GitHub Actions**

   - The repository includes a workflow file `deploy.yml` that handles deploying the project to GitHub Pages.
   - This workflow is triggered **every time changes are pushed to the `main` branch**.

2. **Build process**

   - The workflow installs dependencies and runs the build script (`npm run build`) to generate the production-ready files in the `dist/` folder.
   - Vite is configured with `base: './'`, so all assets (CSS, JS, images) are served correctly in GitHub Pages.

3. **Deployment to `gh-pages` branch**

   - After the build, the workflow uses `peaceiris/actions-gh-pages` to push the contents of the `dist/` folder to the `gh-pages` branch.
   - The `clean: true` option ensures that old files are removed, so the branch always reflects the latest build.

4. **Result**
   - The `gh-pages` branch contains the production-ready version of the app.
   - GitHub Pages serves this branch at `https://miriam-mr90.github.io/huckleberry/`, so anyone can see the live version of the project.
   - All future updates to `main` automatically trigger the workflow, rebuilding and redeploying the site.

### Deployment Process

```text
master branch (source code)
        │
        │ Push changes
        ▼
  GitHub Actions Workflow (`deploy.yml`)
        │
        │ Runs:
        │ - npm install
        │ - npm run build
        │ - Deploy dist/ to gh-pages
        ▼
   gh-pages branch (production build)
        │
        ▼
GitHub Pages serves:
https://miriam-mr90.github.io/huckleberry/
```

## 👩‍💻 How can you edit this code?

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Install the necessary dependencies.
npm i

# Step 2: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## 🛠️ Peek Behind the Scenes

A quick look at the tech stack, tools, and libraries used to build HuckleLab:

- Vite: Super fast build tool that makes local development smooth and instant.
- TypeScript: Adds type safety and better structure to the code, keeping things neat.
- Radix UI: A set of accessible, unstyled components that make it easy to build flexible UIs.
- React: The heart of the project, building the interactive UI with reusable components.
- Tailwind CSS: Utility-first CSS framework for styling fast and responsively.
- Apollo Client (GraphQL): Handles data fetching and state management when working with GraphQL APIs.
- JSON server: Provides a simple mock REST API for local development, allowing the frontend to fetch data without setting up a full backend.
