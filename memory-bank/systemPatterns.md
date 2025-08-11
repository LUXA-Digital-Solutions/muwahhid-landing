# System Patterns: Portfolio Website Architecture

## System Architecture

### Technology Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library
- **Routing**: React Router DOM for navigation
- **State Management**: React Query for data fetching
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React for consistent iconography

### Project Structure
```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   └── landing/      # Page-specific components
├── pages/            # Route components
├── lib/              # Utility functions and configurations
├── hooks/            # Custom React hooks
├── assets/           # Images and static files
└── App.tsx          # Main application component
```

## Key Technical Decisions

### Component Architecture
- **Atomic Design**: Components built from smallest units up
- **Composition**: Components designed for flexible composition
- **Props Interface**: TypeScript interfaces for component contracts
- **Custom Hooks**: Reusable logic extracted into custom hooks

### Styling Strategy
- **Design System**: CSS custom properties for consistent theming
- **Tailwind Utilities**: Utility-first approach with custom extensions
- **Component Variants**: Class variance authority for component styling
- **Responsive Design**: Mobile-first approach with breakpoint system

### Performance Considerations
- **Code Splitting**: Route-based code splitting with React Router
- **Image Optimization**: Lazy loading for portfolio images
- **Bundle Optimization**: Vite for fast builds and HMR
- **SEO Optimization**: React Helmet for meta tag management

## Design Patterns in Use

### Component Patterns
- **Container Pattern**: Consistent layout containers across sections
- **Card Pattern**: Elevated cards for content sections
- **Grid Pattern**: Responsive grid layouts for portfolio and services
- **Button Pattern**: Consistent button variants and states

### Layout Patterns
- **Section-based Layout**: Clear content separation with consistent spacing
- **Container Constraints**: Max-width containers for optimal reading
- **Responsive Grids**: CSS Grid with responsive breakpoints
- **Spacing System**: Consistent spacing scale using Tailwind utilities

### Interaction Patterns
- **Hover Effects**: Subtle animations on interactive elements
- **Mouse Tracking**: Hero section with cursor-following effects
- **Smooth Scrolling**: Anchor links with smooth scroll behavior
- **Loading States**: Lazy loading for portfolio images

## Component Relationships

### Page Structure
```
App.tsx
├── HelmetProvider (SEO)
├── QueryClientProvider (Data)
├── TooltipProvider (UI)
├── BrowserRouter (Routing)
│   └── Routes
│       ├── Index (Home Page)
│       └── NotFound (404)
```

### Landing Page Components
```
Index.tsx
├── Navbar (Navigation)
├── Hero (Introduction)
├── Services Section
├── PortfolioGrid (Work Showcase)
├── About Section
├── Contact Section
└── Footer (Site Footer)
```

### Component Dependencies
- **UI Components**: Built on shadcn/ui foundation
- **Landing Components**: Custom components for specific page needs
- **Utility Functions**: Shared functions in lib/ directory
- **Custom Hooks**: Reusable logic for component behavior

## State Management

### Local State
- **Component State**: React useState for local component state
- **Form State**: React Hook Form for form management
- **UI State**: Local state for interactive elements

### Global State
- **Query Client**: React Query for server state management
- **Theme State**: Next-themes for dark/light mode
- **Router State**: React Router for navigation state

## Data Flow

### Component Communication
- **Props Down**: Data flows from parent to child components
- **Events Up**: User interactions bubble up through callbacks
- **Context**: Theme and routing context for global state
- **Custom Hooks**: Shared logic extracted for reusability

### External Data
- **Portfolio Images**: Static assets imported directly
- **Content**: Hardcoded content with potential for CMS integration
- **SEO Data**: Meta tags and structured data for search engines
