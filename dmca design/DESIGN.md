---
name: Precision Utility System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#424656'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737687'
  outline-variant: '#c2c6d9'
  surface-tint: '#0053da'
  primary: '#004cca'
  on-primary: '#ffffff'
  primary-container: '#0062ff'
  on-primary-container: '#f3f3ff'
  inverse-primary: '#b4c5ff'
  secondary: '#545f73'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f8'
  on-secondary-container: '#586377'
  tertiary: '#54585a'
  on-tertiary: '#ffffff'
  tertiary-container: '#6d7072'
  on-tertiary-container: '#f3f5f7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
  surface-blue: '#F0F7FF'
  success-green: '#10B981'
  warning-amber: '#F59E0B'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is engineered for a professional, reliable utility suite that transforms complex calculations into effortless tasks. The brand personality is **dependable, efficient, and precise**, catering to students, professionals, and daily users who value speed and accuracy.

The visual direction follows a **Corporate / Modern** aesthetic with a lean towards **Minimalism**. By utilizing a structured card-based layout and significant whitespace, the system reduces cognitive load, allowing the tools to remain the primary focus. The aesthetic avoids unnecessary flourishes in favor of high-legibility and functional clarity, ensuring the platform feels like a trusted institutional tool rather than a casual site.

## Colors

The color palette is anchored by a more sophisticated "Pep Blue" (`#0062FF`), adjusted from the original for better AA/AAA accessibility against white backgrounds. 

- **Primary:** Used for primary actions, branding, and active states.
- **Secondary:** A deep slate for high-contrast typography and navigational elements.
- **Tertiary/Neutral:** A series of cool grays used for backgrounds and subtle borders to keep the interface feeling "airy."
- **Functional Colors:** Named colors like `success-green` and `warning-amber` are reserved for calculation results and validation states.

The background uses a tiered approach: the main page background is the tertiary `#F8FAFC`, while tool cards are pure `#FFFFFF` to create a distinct visual lift.

## Typography

This design system utilizes **Hanken Grotesk** for headings to provide a modern, sharp, and technical feel. **Inter** is used for all body text and UI labels due to its exceptional legibility in data-heavy environments.

The scale prioritizes a clear hierarchy:
- **Display & Headlines:** Used for page titles and tool names inside cards.
- **Body:** Optimized for instruction text and output results.
- **Labels:** Semi-bold weight used for input labels and button text to ensure they are immediately distinguishable from static content.

## Layout & Spacing

The layout utilizes a **12-column fixed grid** centered on the screen, providing a structured foundation for the utility cards. 

### Grid Configuration
- **Desktop:** 12 columns, 24px gutters, max-width 1280px.
- **Tablet:** 8 columns, 20px gutters.
- **Mobile:** 4 columns, 16px gutters.

### Layout Logic
Tools are organized into a responsive grid of cards. On desktop, cards span 4 columns (3 per row); on tablet, 4 columns (2 per row); and on mobile, they stack full-width. Generous vertical spacing (`stack-lg`) is used between sections to allow the user's eye to rest, significantly improving the "utility tool" experience by reducing visual clutter.

## Elevation & Depth

To maintain a clean and professional look, this design system uses **Tonal Layers** combined with **Ambient Shadows**.

1.  **Level 0 (Base):** Background color (`#F8FAFC`).
2.  **Level 1 (Cards):** Surface white (`#FFFFFF`) with a very soft, high-diffusion shadow (Color: `#0F172A`, Opacity: 4%, Blur: 20px, Y-Offset: 4px).
3.  **Level 2 (Interactions):** On hover, cards transition to a slightly higher elevation (Opacity: 8%, Blur: 30px, Y-Offset: 8px) to provide tactile feedback.

This approach creates depth without the heavy, dated look of traditional skeuomorphism, making the "tools" feel like physical objects resting on a clean surface.

## Shapes

The design system adopts a **Rounded** shape language (`0.5rem` or `8px` base radius). This specific radius strikes a balance between the friendliness of fully rounded corners and the professional "engineered" feel of sharp corners.

- **Standard Elements (Buttons, Inputs, Cards):** 8px radius.
- **Large Containers:** 16px radius for the main tool cards.
- **Small Elements (Tags, Badges):** 4px radius.

## Components

### Buttons
- **Primary:** Solid `#0062FF` with white text. 8px border radius. Medium weight Inter.
- **Secondary:** Surface-blue background with primary-blue text. Used for less critical actions.
- **Ghost:** No background, blue text. Used for "Clear" or "Reset" functions.

### Cards (The Core Tool Component)
- White background, 16px rounded corners, Level 1 shadow.
- 32px internal padding for a "premium" airy feel.
- Contains an icon (24px, primary color), Headline-MD title, and Body-MD description.

### Input Fields
- 8px rounded borders.
- Border color: Neutral `#CBD5E1`. On focus: Primary blue with a 2px outer glow.
- Labels are always positioned above the field using `label-sm` typography.

### Lists & Results
- Results areas in calculators should use a subtle "Surface Blue" (`#F0F7FF`) background to differentiate input zones from output zones.
- Use tabular lining figures for numbers to ensure vertical alignment in results.