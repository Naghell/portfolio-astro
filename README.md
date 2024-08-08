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

## Getting Started

### Prerequisites

- Node.js (version 18 or later)
- npm, pnpm, yarn or bun

### Installation

1. Install dependencies:

   ```
   pnpm install
   ```

2. Start the development server:

   ```
   pnpm run dev
   ```

3. Open `http://localhost:4321` in your browser to see the site.

## Customization

### Personal Information

Edit `src/utils/*` to update your personal information, skills, and experiences.

### Blog Posts

Add new blog posts as Markdown files in the `src/content/blog/` directory.

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

If you have any questions or suggestions, please feel free to contact me at [naghybusiness@gmail.com](mailto:naghybusiness@gmail.com).

---

Happy coding! 🚀
