# TechWokes

**Tech Wokes Directory** - A list of tech professionals who signed an open letter to remove DHH from Rails.

This project displays a list of developers who thought they would strike gold trying to remove DHH from Rails. It backfired. So we made a list from their own repo.

## About

This is a [Next.js](https://nextjs.org) project that displays a curated list of tech professionals. The data is loaded directly from a markdown file for easy maintenance.

## Updating the List

To add or modify entries in the list, edit the **`tech-professionals.md`** file in the root directory. The file contains a markdown table with the following structure:

```markdown
| Name     | Project    | Contact  |
| -------- | ---------- | -------- |
| John Doe | My Project | @johndoe |
```

Simply edit this file and the changes will be automatically reflected in the application.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `tech-professionals.md` - The main data file containing the list of professionals
- `app/page.tsx` - The main page component
- `lib/tech-professionals.ts` - Utility functions for loading data from markdown

## Contributing

To add someone to the list:

1. Edit `tech-professionals.md`
2. Add a new row to the table with Name, Project, and Contact information
3. The changes will be automatically reflected in the application

## Original Context

This list was created from the [Plan-Vert/open-letter](https://github.com/Plan-Vert/open-letter) repository, which contained an open letter to remove DHH from Rails.

Made by [@lgrodev](https://twitter.com/lgrodev)
