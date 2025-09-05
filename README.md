# Real Estate Product Detail Page UI Demo

This project is a functional, working demo that showcases the user interface (UI) and user experience (UX) for a real estate product detail page.

The primary purpose of this project is to serve as a technical and UI/UX **reference**. It is **not intended for DIRECT integration** into a production system due to significant differences in configuration and data structures.

---

## 🚀 Getting Started

To run this demo on your local machine, please follow these steps.

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation & Running

1.  **Clone the repository:**

    ```bash
    git clone [https://your-repository-url.git](https://your-repository-url.git)
    cd your-project-directory
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:3000`.

## 🛠️ Technical Analysis & Integration Guide

These are the core technical points that your development team should consider when recreating this interface on your existing system.

### 1. Project Structure

The most important files and directories are located as follows:

- `app/(main)/page.tsx`: The main file that renders the entire page.
- `components/`: Contains smaller, reusable UI elements like `button.tsx`, `badge.tsx`, `carousel.tsx`, etc.
- `lib/`: Contains the sample data object that populates the UI, simulating an API response.
- `tailwind.config.js`: The configuration file for Tailwind CSS.
- `app/(main)/globals.css`: The file for global CSS styles and font imports.

### 2. Tailwind CSS Configuration (`tailwind.config.js`)

For the UI to render correctly, your system will need to merge the following customizations into its `tailwind.config.js` file.

```javascript
// tailwind.config.js
const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        // More...
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      flexBasis: {
        '1/8': '12.5%',
      },
      textShadow: {
        soft: '2px 2px 4px rgb(36 37 47 / 10%)',
      },
      // More...
    },
  },
  plugins: [animatePlugin, textshadowPlugin],
};
```

### 3. Global CSS (`app/(main)/globals.css`)

This file contains a few crucial base styles:

- **Font Import:** Font is imported from Google Fonts.
- **Base Styling:** Default styles are applied to the `<body>` tag (e.g., `background-color`, `color`) to ensure visual consistency.

### 4. 💎 The Data Contract (Crucial)

This is the **most critical section**. The UI is designed to work with a rich data structure. Your API should return an object with a structure similar to the one below for the UI to render completely.

```javascript
// Example API Response - lib/project-data.js
const productData = {
  id: 1,
  introduction: {
    logoImages: [] as (string | File)[],
    coverImage: null as string | File | null,
    coverTitle: '',

    headerLogoIndex: 0,
    coverLogoIndex: 0,
    titleImage: null as string | File | null,
    introductionImage: null as string | File | null,
    introductionVideo: '',
    introductionBackground: null as string | File | null,
    introductionTitle: '',
    introductionDescription: '',

    launchImages: [] as (string | File)[],
    launchTitle: '',
    launchDescription: '',
  },
  overview: {
    overviewImages: [
      { image: null as string | File | null, description: '' }, // Product
      { image: null as string | File | null, description: '' }, // Area
      { image: null as string | File | null, description: '' }, // Amenity
      { image: null as string | File | null, description: '' }, // Location
    ],
    overviewBackground: null as string | File | null,

    basicInfo: [
      { id: 'project_name', key: 'Tên dự án', value: '', type: 'text' },
      { id: 'bathrooms', key: 'Phòng tắm', value: ['', ''], type: 'range' },
      { id: 'developer', key: 'Chủ đầu tư', value: '', type: 'text' },
      { id: 'category', key: 'Danh mục', value: '', type: 'text' },
      {
        id: 'ownership_status',
        key: 'Tình trạng sở hữu',
        value: '',
        type: 'text',
      },
      // More...
    ],
    experienceImage: null as string | File | null,
  },
  location: {
    title: '',
    description: '',
    locationImage: null as string | File | null,
    mapInputType: 'embed' as 'embed' | 'coordinates',
    embedCode: '',
    coordinates: { lat: 10.75, lng: 106.4 },
    locationBackground: null as string | File | null,
  },
  siteplan: {
    siteplanImages: [] as (string | File)[],
    view360: [] as Array<{
      id: number;
      image: string | File;
      markers: Array<{
        id: number;
        longitude: number;
        latitude: number;
        tooltip: string;
        panoramaTarget: string | File;
      }>;
    }>,
  },
  production: {
    products: [] as any[],
    furnitureImages: [] as (string | File)[],
  },
  amenity: {
    title: '',
    description: '',
    amenityImages: [] as (string | File)[],
  },
  contact: {
    layoutId: 'layout-1',
    logoImage: null as string | File | null,
    contactBackground: null as string | File | null,
  },
  other: {
    policy: {
      title: '',
      policyImage: null as string | File | null,
      policyText: '',
    },
    timeline: {
      timelineTitle: '',
      timelineImage: null as string | File | null,
      progressTitle: 'Hình Ảnh Tiến Độ Dự Án',
      progressImages: [] as (string | File)[],
      backgroundImage: null as string | File | null,
    },
    agency: {
      title: '',
      agencyImage: null as string | File | null,
      description: '',
    },
    isFeatured: true,
    isExclusive: false,
    visibleOnWeb: true,
    breakImages: Array(6).fill(null) as (string | File | null)[],
  },
}
```
