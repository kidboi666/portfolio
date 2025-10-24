# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Lee Jin Wook built with Next.js 16, React 19, and Tailwind CSS 4. The project uses the Next.js App Router architecture and is in early development.

## AI Workflow Policy

**IMPORTANT**: In this project, AI should NOT directly write or modify code. Instead:
- Provide guidance, suggestions, and recommendations
- Explain best practices and implementation approaches
- Answer questions about code architecture and patterns
- Review existing code and suggest improvements

The developer will implement all code changes manually based on AI guidance.

## Development Commands

```bash
# Start development server (opens at http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run Biome linter checks
npm run lint

# Format code with Biome
npm run format
```

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **React**: Version 19.2.0 with React Compiler enabled
- **Styling**: Tailwind CSS 4 with custom theme system
- **Code Quality**: Biome (replaces ESLint and Prettier)
- **UI Components**: Radix UI primitives with custom styling
- **Utilities**:
  - `class-variance-authority` for component variants
  - `clsx` + `tailwind-merge` for class merging (via `cn()` utility)
  - `lucide-react` for icons

## Architecture

### File Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Header and Jost font
│   ├── page.tsx           # Home page (currently empty)
│   └── globals.css        # Tailwind config + design tokens
├── components/
│   ├── ui/                # Reusable UI components
│   │   └── button.tsx     # Button with CVA variants
│   └── header.tsx         # Site header (needs responsive treatment)
└── lib/
    └── utils.ts           # cn() utility for className merging
```

### Design System

- **Theme**: Defined in `src/app/globals.css` using CSS custom properties
- **Color System**: OKLCH color space with light/dark mode support
- **Dark Mode**: Uses `.dark` class selector (configure via `@custom-variant`)
- **Border Radius**: Responsive radius system (`--radius-sm` through `--radius-xl`)

### Import Alias

- Use `@/*` to import from `src/` directory
  - Example: `import { cn } from "@/lib/utils"`

## Biome Configuration

Biome handles both linting and formatting with these key settings:

- **Auto-import organization**: Enabled (use `// biome-ignore assist/source/organizeImports` to disable)
- **Class sorting**: Enforced via `useSortedClasses` rule for `clsx`, `cva`, `tw` functions
- **Formatting**: 2-space indentation
- **Domains**: Next.js and React recommended rules enabled

## Component Patterns

### Button Component

The project uses a variant-based button system with CVA:

```tsx
<Button variant="ghost">Text</Button>
<Button variant="outline" size="sm">Text</Button>
```

Available variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
Available sizes: `default`, `sm`, `lg`, `icon`, `icon-sm`, `icon-lg`

### Utility Function

Use the `cn()` utility to merge Tailwind classes:

```tsx
import { cn } from "@/lib/utils"

className={cn("base-classes", condition && "conditional-classes")}
```

## Next.js Configuration

- **React Compiler**: Enabled in `next.config.ts`
- **Font Optimization**: Uses `next/font/google` with Jost font family
- **TypeScript**: Strict mode enabled

## Current State

The project is in initial setup phase:
- ✅ Basic Next.js structure configured
- ✅ Tailwind design system with dark mode
- ✅ Header component created (not yet responsive)
- ⚠️ Home page is empty placeholder
- ⚠️ No routing or navigation implemented yet

## Known Issues

- Header component (`src/components/header.tsx:5`) has incomplete Tailwind class `lg:w-`
- Header needs responsive mobile menu implementation