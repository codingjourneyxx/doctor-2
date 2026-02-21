# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Untitled UI React** - A Next.js 16 starter kit with a comprehensive UI component library built on:
- React 19, TypeScript, Tailwind CSS v4.1
- React Aria Components for accessibility and behavior

## Development Commands

```bash
npm run dev      # Start Next.js dev server with Turbopack (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
```

## Critical Conventions

### React Aria Import Naming

All imports from `react-aria-components` MUST be prefixed with `Aria*`:

```typescript
// Correct
import { Button as AriaButton, TextField as AriaTextField } from "react-aria-components";
// Incorrect
import { Button, TextField } from "react-aria-components";
```

### File Naming

All files use **kebab-case**: `date-picker.tsx`, `user-profile.tsx`, `api-client.ts`

### Semantic Color Classes

MUST use semantic color classes, not raw Tailwind colors:

```typescript
// Correct
className="text-primary bg-secondary border-brand"
// Incorrect
className="text-gray-900 bg-gray-50 border-blue-600"
```

Key semantic colors:
- **Text**: `text-primary`, `text-secondary`, `text-tertiary`, `text-brand-primary`, `text-error-primary`
- **Background**: `bg-primary`, `bg-secondary`, `bg-brand-solid`, `bg-error-solid`
- **Border**: `border-primary`, `border-secondary`, `border-brand`, `border-error`
- **Foreground (icons)**: `fg-primary`, `fg-secondary`, `fg-brand-primary`, `fg-error-primary`

## Project Structure

```
src/
├── app/                   # Next.js App Router
├── components/
│   ├── base/              # Core UI (Button, Input, Select, Checkbox, Avatar, Badge)
│   ├── application/       # Complex components (DatePicker, Modal, Table, Tabs)
│   ├── foundations/       # Design tokens, FeaturedIcon
│   └── marketing/         # Marketing components
├── hooks/                 # Custom React hooks
├── providers/             # Context providers (theme, router)
├── styles/                # Global styles, theme.css, typography.css
└── utils/                 # Utilities (cx, sortCx, isReactComponent)
```

## Component Architecture

### Compound Component Pattern

```typescript
const Select = SelectComponent as typeof SelectComponent & {
    Item: typeof SelectItem;
    ComboBox: typeof ComboBox;
};
Select.Item = SelectItem;
Select.ComboBox = ComboBox;
```

### Style Organization with sortCx

```typescript
export const styles = sortCx({
    common: { root: "base-classes", icon: "icon-classes" },
    sizes: { sm: { root: "..." }, md: { root: "..." } },
    colors: { primary: { root: "..." }, secondary: { root: "..." } },
});
```

### Common Props Pattern

- **Sizes**: `"sm" | "md" | "lg" | "xl"`
- **State**: `isDisabled`, `isLoading`, `isInvalid`, `isRequired`
- **Icons**: `iconLeading`, `iconTrailing` (accept `FC | ReactNode`)

## Key Components

### Button
```typescript
import { Button } from "@/components/base/buttons/button";
<Button size="md" color="primary" iconLeading={Check}>Save</Button>
```
Colors: `primary`, `secondary`, `tertiary`, `link-gray`, `link-color`, `primary-destructive`, `secondary-destructive`, `tertiary-destructive`, `link-destructive`

### Input
```typescript
import { Input } from "@/components/base/input/input";
<Input label="Email" icon={Mail01} hint="Helper text" isRequired />
```

### Select
```typescript
import { Select } from "@/components/base/select/select";
<Select items={items}>{(item) => <Select.Item id={item.id}>{item.name}</Select.Item>}</Select>
<Select.ComboBox items={items}>{...}</Select.ComboBox>  // With search
```

### Link (uses Button)
```typescript
<Button href="/path" color="link-color">Link Text</Button>
```

## Icon Usage

```typescript
import { Home01, Settings01 } from "@untitledui/icons";

// As component reference (preferred)
<Button iconLeading={ChevronDown}>Options</Button>

// As JSX element (must include data-icon)
<Button iconLeading={<ChevronDown data-icon className="size-4" />}>Options</Button>

// Standalone
<Home01 className="size-5 text-fg-secondary" />
```

Icon libraries: `@untitledui/icons` (free), `@untitledui/file-icons`, `@untitledui-pro/icons` (PRO)

## CSS Transitions

For hover/color transitions: `className="transition duration-100 ease-linear"`

## Path Alias

`@/*` maps to `./src/*`

## Brand Color Customization

Edit `src/styles/theme.css` and modify `--color-brand-*` variables (scale: 25-950).
