# Excel Functions Reference - Vue.js

A modern, responsive Excel Functions Reference website built with Vue.js 3, featuring comprehensive documentation of Excel formulas in Urdu/Roman language for Pakistani users.

## 🚀 Features

- **48+ Excel Functions** - Comprehensive library of commonly used Excel formulas
- **Real-time Search** - Instant search across function names, categories, and descriptions
- **Category Filtering** - Filter by Math, Statistical, Text, Logical, Date & Time, and Lookup
- **Interactive Modal** - Click any function to view detailed syntax and examples
- **Documentation** - Complete guides, tips, and FAQ section
- **API Reference** - REST API documentation with code examples
- **Responsive Design** - Mobile-first, works on all devices
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Production Ready** - Optimized build for Netlify deployment

## 🛠️ Tech Stack

- **Vue.js 3** - Composition API
- **Vue Router 4** - Client-side routing
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Inter font family

## 📦 Installation

### Prerequisites

- Node.js 18+ (recommended)
- npm or yarn

### Steps

1. **Clone or download the repository**

```bash
cd ExcelDocumentationVUE
```

2. **Install dependencies**

```bash
npm install
```

3. **Run development server**

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot-reload |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview production build locally |

## 📁 Project Structure

```
ExcelDocumentationVUE/
├── public/              # Static assets
├── src/
│   ├── assets/          # Styles and static resources
│   │   └── styles.css   # Global CSS with Tailwind
│   ├── components/      # Reusable Vue components
│   │   ├── Header.vue
│   │   ├── CategoryFilter.vue
│   │   └── FunctionModal.vue
│   ├── data/            # Data layer
│   │   └── functions.js # Excel functions data
│   ├── router/          # Vue Router configuration
│   │   └── index.js
│   ├── views/           # Page components
│   │   ├── HomeView.vue
│   │   ├── DocumentationView.vue
│   │   └── ApiView.vue
│   ├── App.vue          # Root component
│   └── main.js          # App entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── netlify.toml         # Netlify deployment config
```

## 🌐 Deployment on Netlify

### Option 1: Deploy via Netlify CLI

1. **Install Netlify CLI**

```bash
npm install -g netlify-cli
```

2. **Build the project**

```bash
npm run build
```

3. **Deploy**

```bash
netlify deploy --prod --dir=dist
```

### Option 2: Deploy via Netlify Dashboard

1. **Build the project locally**

```bash
npm run build
```

2. **Go to [Netlify Dashboard](https://app.netlify.com)**

3. **Drag and drop the `dist/` folder**

### Option 3: Continuous Deployment with Git

1. **Push code to GitHub/GitLab/Bitbucket**

2. **Connect repository in Netlify Dashboard**

3. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`

The `netlify.toml` file is already configured for proper SPA routing.

## 🎨 Customization

### Changing Theme Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#9ACD32',        // YellowGreen
      'primary-dark': '#7FA82E',
      accent: '#FFFF99',
    }
  }
}
```

### Adding New Functions

Edit `src/data/functions.js`:

```javascript
export const excelFormulas = [
  // Add your function here
  { 
    name: "YOUR_FUNCTION", 
    category: "Category", 
    desc: "Description in Urdu/Roman" 
  },
  // ...
]

// Add syntax
export const syntaxMap = {
  'YOUR_FUNCTION': 'YOUR_FUNCTION(arg1, arg2, ...)',
}

// Add example
export const exampleMap = {
  'YOUR_FUNCTION': '=YOUR_FUNCTION(A1, B1)',
}
```

## 📄 Pages

- **Home (/)** - Functions listing with search and filter
- **Documentation (/docs)** - Getting started guides, tips, and FAQ
- **API (/api)** - REST API reference with code examples

## 🔑 Key Features Explained

### Search Functionality
- Debounced search (180ms delay)
- Searches across function name, category, and description
- Case-insensitive matching

### Category Filter
- Dynamic pills based on available categories
- Active state highlighting
- Filters combined with search

### Function Modal
- Opens on row click
- Displays syntax and examples
- ESC key to close
- Click outside to close
- Smooth transitions

### Routing
- Client-side routing with Vue Router
- 404 handling (redirects to home)
- Scroll to top on navigation
- Dynamic page titles

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Add more Excel functions
- Improve descriptions
- Fix bugs
- Enhance UI/UX

## 📧 Contact

For questions or support, contact: **systemset.co@gmail.com**

## 📝 License

This project is open source and available for educational purposes.

---

**Built with ❤️ by Systemset Co**
