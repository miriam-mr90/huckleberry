# Welcome to my Huckleberry project

HucklePlay is my personal playground for building small features, exploring ideas, and having fun along the way ✨
A space for testing and experimentation — no big frameworks, no deadlines, just curiosity.

This is a simple React application built with TypeScript, Tailwind, CSS, Jest, and Prettier. Navigate to the Star Wars Encyclopedia to see a list of characters.

## Project info

**URL**: xxxxxxxxxx

## How can you edit this code?

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

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Apollo Client (GraphQL)

## What can you find in the different pages?

### Rick and Morty

A character gallery that displays characters from the Rick and Morty API using GraphQL queries.

**Features:**

- Fetches character data from the Rick and Morty GraphQL API
- Displays character information including name, status, species, gender, and image
- Responsive grid layout

**Technical Notes:**

_GraphQL Query Management:_
For this project, I've decided to keep things simple and use manual query definitions rather than setting up GraphQL Code Generator. Since I'm working with just a handful of queries, adding code generation would be overkill and bring unnecessary complexity.

### Star Wars Encyclopedia

A static encyclopedia displaying famous characters from the Star Wars universe.

**Features:**

- Static character data (no API calls)
- Character information including name, role, and description
- Card-based layout with hover effects
