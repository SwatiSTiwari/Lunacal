# Lunacal - Interactive Profile Widget Gallery

A modern, interactive React application featuring dynamic profile widgets with custom UI components, smooth animations, and an image gallery system.

## 🌟 Features

### Profile Widget
- **Tabbed Navigation**: Switch between About Me, Experiences, and Recommended sections
- **Custom Scrollbar**: Slim, styled scrollbar for content overflow
- **Responsive Design**: Adapts to different screen sizes
- **Dark Theme**: Professional dark color scheme with gradient backgrounds

### Image Gallery
- **Interactive Thumbnails**: 
  - Grayscale images by default
  - Color + brightness enhancement on hover
  - Smooth scale and rotation animations
  - Shadow effects for depth
- **Navigation Controls**:
  - Previous/Next arrow buttons with circular wrapping
  - Always-active navigation through your image collection
- **Upload Functionality**: Add custom images via file upload
- **Visual Effects**:
  - Tilted image cards (-1deg rotation)
  - Hover straightening and zoom (110% scale)
  - Smooth 500ms transitions

### UI Components
- **Help Icons**: Question mark buttons with decorative 2×2 grid indicators
- **Custom Buttons**: Gradient backgrounds with inner shadows
- **Responsive Layout**: Split-screen design with centered content

## 🚀 Tech Stack

- **React 18.3** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 3.4** - Utility-first styling
- **Lucide React** - Icon library
- **Supabase** - Backend integration (optional)

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/SwatiSTiwari/Lunacal.git
   cd Lunacal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |
| `npm run typecheck` | Run TypeScript type checking |

## 📁 Project Structure

```
Lunacal/
├── public/
│   └── Rectangle 5160.png     # Default gallery image
├── src/
│   ├── App.tsx                # Main component with widgets
│   ├── main.tsx              # App entry point
│   ├── index.css             # Global styles and Tailwind imports
│   └── vite-env.d.ts         # Vite type definitions
├── eslint.config.js           # ESLint configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite build configuration
└── package.json              # Dependencies and scripts
```

## 🎨 Customization

### Colors
The app uses a custom dark theme. Main colors are defined in Tailwind classes:
- Background: `#373E44`, `#2B3238`, `#191B1F` (gradient)
- Widget Background: `#363C43`
- Accent: `#4A4E54`
- Text: `#969696`, `#A3ADB2`

### Image Gallery
To customize the gallery behavior, edit these values in `src/App.tsx`:

```typescript
// Rotation angle
transform: 'rotate(-1deg)'

// Hover scale
hover:scale-110

// Transition duration
duration-500

// Grayscale filter
filter: 'grayscale(100%) brightness(0.7)'
```

### Custom Scrollbar
Adjust scrollbar width and styling:
```typescript
// Width
w-[6px]

// Gradient colors
from-[#888989] to-[#4A4E54]
```

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.js`:
- Custom color palette
- Extended spacing
- Custom shadows and gradients

### TypeScript
Strict mode enabled with:
- Path aliases
- React JSX transform
- ES2020+ target

### Vite
Fast HMR (Hot Module Replacement) with React plugin

## 🖼️ Adding Images

1. Click the "+ ADD IMAGE" button
2. Select an image file from your device
3. Image will be added to the gallery
4. Use arrow buttons to navigate through images

## 🎯 Key Features Breakdown

### Hover Effects
- **Images**: Grayscale → Color + Brightness + Saturation increase
- **Buttons**: Background gradient shifts on hover
- **Scale**: Elements grow slightly on interaction

### Navigation
- **Circular**: Arrow navigation wraps around (last → first, first → last)
- **Always Active**: No disabled state on arrows
- **Smooth**: 500ms transitions between states

### Responsive Behavior
- **Desktop**: Split screen with left empty panel
- **Mobile/Tablet**: Full-width centered content
- **Breakpoint**: `lg` (1024px)

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Swati Tiwari**
- GitHub: [@SwatiSTiwari](https://github.com/SwatiSTiwari)
- Repository: [Lunacal](https://github.com/SwatiSTiwari/Lunacal)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio interfaces
- Built with React and Vite for optimal performance
- Styled with Tailwind CSS for rapid development

## 📞 Support

For issues, questions, or contributions, please open an issue on the [GitHub repository](https://github.com/SwatiSTiwari/Lunacal/issues).

---

**Made with ❤️ using React + TypeScript + Tailwind CSS**
