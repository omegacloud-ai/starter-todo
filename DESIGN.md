---
version: alpha
name: Emaar Prestige
description: A refined luxury real-estate system balancing editorial elegance with confident navy actions.
colors:
  primary: "#091B36"
  secondary: "#0074A7"
  tertiary: "#FFFFFF"
  neutral: "#E5E7EB"
  muted-label: "#99A1AF"
  surface: "#FFFFFF"
  on-surface: "#0A0A0A"
  error: "#B42318"
  background: "#FFFFFF"
typography:
  headline-display:
    fontFamily: Optima
    fontSize: 46px
    fontSizeMobile: 28px
    fontWeight: 400
    lineHeight: 57.5px
    lineHeightMobile: 1.25
    letterSpacing: 0px
    textTransform: uppercase
  headline-lg:
    fontFamily: Optima
    fontSize: 34px
    fontWeight: 400
    lineHeight: 40px
    letterSpacing: 0px
    textTransform: uppercase
  headline-md:
    fontFamily: Optima
    fontSize: 22px
    fontSizeLg: 24px
    fontWeight: 400
    lineHeight: 27.5px
    lineHeightLg: 30px
    letterSpacing: 0px
    textTransform: uppercase
  headline-sm:
    fontFamily: Lato
    fontSize: 18px
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: 0px
  body-intro:
    fontFamily: Lato
    fontSize: 18px
    fontWeight: 300
    lineHeight: 28px
    letterSpacing: 0px
  body-lg:
    fontFamily: Lato
    fontSize: 16px
    fontWeight: 300
    lineHeight: 24px
    letterSpacing: 0px
  body-md:
    fontFamily: Lato
    fontSize: 14px
    fontWeight: 300
    lineHeight: 21px
    letterSpacing: 0px
  body-sm:
    fontFamily: Lato
    fontSize: 12px
    fontWeight: 400
    lineHeight: 18px
    letterSpacing: 0px
  label-lg:
    fontFamily: Lato
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
    letterSpacing: 0.04em
  label-md:
    fontFamily: Lato
    fontSize: 12px
    fontWeight: 700
    lineHeight: 16px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Lato
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0.02em
  label-eyebrow:
    fontFamily: Lato
    fontSize: 12px
    fontWeight: 700
    lineHeight: 16px
    letterSpacing: 0.1em
    textTransform: uppercase
  nav:
    fontFamily: Lato
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  none: 0px
  sm: 2px
  md: 8px
  lg: 12px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 12px
  md: 24px
  lg: 32px
  xl: 82px
  gutter: 18px
  section: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.tertiary}"
    borderColor: "{colors.primary}"
    borderWidth: "2px"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: "14px 18px"
    height: "48px"
    hover:
      backgroundColor: "{colors.tertiary}"
      textColor: "{colors.primary}"
      borderColor: "{colors.primary}"
  button-secondary:
    backgroundColor: "{colors.muted-label}"
    textColor: "{colors.tertiary}"
    borderColor: "{colors.muted-label}"
    borderWidth: "2px"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: "14px 18px"
    height: "48px"
    hover:
      backgroundColor: "{colors.tertiary}"
      textColor: "{colors.primary}"
      borderColor: "{colors.primary}"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.tertiary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "16px"
  input:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "14px 18px"
    height: "48px"
---

# Emaar Prestige

## Overview

This interface feels premium, calm, and promotional, with a strong editorial sensibility suited to luxury real estate. It targets buyers and visitors who expect clarity, trust, and a polished brand experience rather than playful interaction. The composition is spacious and image-led, using large atmospheric photography, restrained navigation, and high-contrast calls to action.

## Colors

- **Primary (#091B36):** A deep navy used for the main brand actions, footer bands, and strong visual anchors. It communicates trust, depth, and a luxury corporate tone.
- **Secondary (#0074A7):** A reserved accent blue for links, highlights, and supporting interactive states. Use sparingly so it does not compete with the primary navy.
- **Tertiary (#FFFFFF):** Clean white used for text on dark imagery, button surfaces, and the overall light, airy structure.
- **Neutral (#E5E7EB):** A soft cool gray for subtle borders, dividers, and quiet separation between UI regions.
- **Muted label (#99A1AF):** A mid gray for section eyebrows (“Overview”, “Properties”) and secondary filled buttons on light card surfaces.
- **Surface (#FFFFFF):** The primary card and control surface color, keeping UI elements crisp against photography.
- **On-surface (#0A0A0A):** Default content color on light surfaces—body copy, titles on white, and readable UI text.
- **Error (#B42318):** A reserved alert red for validation and critical states, not prominent in the visual system.
- **Background (#FFFFFF):** The page foundation color that supports a bright, premium presentation and keeps the layout uncluttered.

## Typography

Headlines use Optima in regular weight with **uppercase** treatment, giving the brand a formal, architectural, and editorial voice. Section titles scale from **28px on mobile to 46px on desktop**; card-level Optima headings use **22px**, stepping to **24px from the large breakpoint**.

Body and utility text use Lato, with light weights for a softer reading texture and bold weights for interactive emphasis. **Section intros** use `body-intro` at **18px / 300 weight** (not `body-lg`); reserve **16px `body-lg`** for denser supporting copy.

Labels, buttons, and section eyebrows are small, uppercase, and tracked at **0.1em** (`label-md`, `label-eyebrow`) so they feel precise and premium at small sizes. Navigation keeps slightly tighter tracking at **0.08em**.

Use Optima for high-impact headlines and Lato for everything transactional: navigation, descriptions, labels, buttons, and UI chrome.

## Layout & Spacing

The layout is full-bleed and image-forward, with a top navigation bar over a wide hero scene and a centered content stack. Interactive controls sit in a wide, pill-shaped search bar near the bottom of the hero, creating a clear conversion path without crowding the image.

Spacing is generous and rhythmic, relying on large open zones rather than dense grids. The scale should lean on 4px, 12px, 24px, 32px, and large section spacing around 82px for airy separations, while internal control padding stays compact and consistent.

Cards and controls should use modest internal padding, with 16px for cards and 14px 18px for buttons and form fields. Horizontal structure should feel balanced and centered, with clean dividers and consistent gutters rather than heavy boxed layouts.

## Elevation & Depth

The system is intentionally flat and restrained, with no meaningful shadow language. Hierarchy comes from contrast, image layering, white-on-dark overlays, and thin borders rather than depth effects.

Dark footer bands, white control surfaces, and translucent overlays over photography create separation without visual noise. Use borders sparingly and keep them light, relying on tonal contrast and content scale for emphasis.

## Shapes

The shape language is understated and premium, anchored by small radii. Interactive controls favor the 2px `rounded.sm` look, while cards can relax slightly to 8px for a subtle, approachable container feel.

Overall, the system feels architectural and crisp rather than soft or bubbly. Large pill forms are acceptable for composite search bars and cookie actions, but individual controls should remain sharp and disciplined.

## Components

Buttons are the strongest interactive element and should remain compact, uppercase, and highly legible. Standard button height is 48px with 14px 18px padding, **2px** borders, `rounded.sm`, and `label-md` typography (**12px / 700 / 0.1em tracking**).

- **`button-primary`:** Navy fill (`#091B36`), white label, navy border. Use for main conversion actions—“Get in touch”, “View all awards”, “View all destinations”, “Read founder’s letter”. On hover, invert to white fill with navy text and border (same feedback as on emaar.com).
- **`button-secondary`:** Muted gray fill (`#99A1AF`), white label, matching gray border. Use for supportive actions inside gray or white cards—e.g. “Learn more” on board/officer tiles—not for global header CTAs.
- **`button-link`:** Transparent background, white text on dark imagery; `body-sm` weight (400).

Primary and secondary buttons share the same hover invert; only the default fill differs.

**Section eyebrows** (e.g. “Overview”, “Properties”) use `label-eyebrow` with `muted-label` color and an optional horizontal rule in the same gray.

Cards should use `card` styling: white background, light neutral border, 8px radius, and 16px padding. Keep card depth flat and use them as quiet content containers rather than expressive panels.

Inputs and segmented filters should feel like integrated utility controls, not standalone form fields. Use white surfaces, low-contrast borders or separators, 48px height, and compact spacing so multi-step filters appear as one coherent bar.

Navigation links should be small, spaced, and text-first, with limited decoration. Dropdown indicators and icon buttons should stay minimal and monochrome to avoid competing with the hero imagery.

If chips, tags, or tooltips are introduced, they should inherit the same restrained rules: small type, subtle borders, light surfaces, and no shadow-heavy styling. Keep all ancillary components visually subordinate to the hero and primary CTA.

## Do's and Don'ts

- Do keep the interface spacious and image-led, letting photography do most of the emotional work.
- Do use Optima for premium editorial headlines (uppercase) and Lato for utility, navigation, and controls.
- Do use `body-intro` (18px) for opening section paragraphs on marketing pages.
- Do favor navy and white contrast for primary actions and important hierarchy.
- Do keep borders thin, shapes restrained, and shadows essentially absent.
- Don't use `button-secondary` for primary conversion CTAs—those stay `button-primary`.
- Don't use white-filled/navy-outline buttons for card “Learn more” actions; that pattern is not used on emaar.com.
- Don't introduce bright accent colors beyond the defined secondary blue and muted label gray.
- Don't use rounded, bubbly, or playful UI motifs; the system should feel disciplined and architectural.
- Don't overcrowd sections with dense cards or excessive copy; preserve the calm luxury feel.
- Don't rely on heavy elevation or drop shadows to separate layers; use contrast and spacing instead.
