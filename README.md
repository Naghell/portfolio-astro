# Astro Portfolio Template

Welcome to my Astro-based portfolio template! This project provides a modern, fast, and easily customizable portfolio website with an integrated blog. Built with Astro, it offers excellent performance and a great developer experience.

## Features

- 🚀 Built with Astro for optimal performance
- 🎨 Styled with Tailwind CSS for easy customization
- 📱 Fully responsive design
- 🧩 Bento-style layout for an attractive presentation
- 📝 Integrated blog with Markdown support
- 🔍 SEO optimized
- 📊 Analytics ready (configured for Microsoft Clarity)
- 🌙 Dark mode support

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/astro-portfolio-template.git
   ```

2. Navigate to the project directory:

   ```
   cd astro-portfolio-template
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm run dev
   ```

5. Open `http://localhost:3000` in your browser to see the site.

## Customization

### Personal Information

Edit `src/data/about.ts` to update your personal information, skills, and experiences.

### Projects

Modify `src/data/projects.ts` to add or update your projects.

### Blog Posts

Add new blog posts as Markdown files in the `src/content/blog/` directory.

### Styling

The project uses Tailwind CSS. Customize the theme in `tailwind.config.cjs`.

### Layout

Modify the main layout in `src/layouts/Layout.astro`.

### Pages

Individual pages are located in `src/pages/`. Edit these to change the content and structure of each page.

## Environment Variables

Create a `.env` file in the root directory and add the following:

```
PUBLIC_CLARITY_KEY=your_clarity_key_here
```

Replace `your_clarity_key_here` with your actual Microsoft Clarity key.

## Deployment

This site can be deployed on any platform that supports Astro. Here are instructions for a few popular options:

### Vercel

1. Push your code to a GitHub repository.
2. Log in to Vercel and import your repository.
3. Set the build command to `astro build` and the output directory to `dist`.
4. Add your environment variables in the Vercel project settings.

### Netlify

1. Push your code to a GitHub repository.
2. Log in to Netlify and click "New site from Git".
3. Choose your repository and set the build command to `astro build` and the publish directory to `dist`.
4. Add your environment variables in the Netlify project settings.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

If you have any questions or suggestions, please feel free to contact me at [your-email@example.com](mailto:your-email@example.com).

---

Happy coding! 🚀
