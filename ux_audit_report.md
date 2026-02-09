
[UX AUDIT] 14 files checked
--------------------------------------------------
[!] ISSUES (7):
  - [Cognitive Load] index.html: Form inputs without labels. Use <label> for accessibility and clarity.
  - [Cognitive Load] index.css: Form inputs without labels. Use <label> for accessibility and clarity.
  - [Cognitive Load] Services.tsx: Form inputs without labels. Use <label> for accessibility and clarity.
  - [Cognitive Load] Stats.tsx: Form inputs without labels. Use <label> for accessibility and clarity.
  - [Cognitive Load] WhyChoose.tsx: Form inputs without labels. Use <label> for accessibility and clarity.
  - [Cognitive Load] FeatureCard.tsx: Form inputs without labels. Use <label> for accessibility and clarity.
  - [Cognitive Load] ServiceCard.tsx: Form inputs without labels. Use <label> for accessibility and clarity.
[*] WARNINGS (86):
  - [Trust] index.html: Form without security indicators. Add 'SSL Secure' or lock icon.
  - [Visceral] App.tsx: Hero section lacks visual appeal. Consider gradients or subtle animations.
  - [Trust] App.tsx: Footer lacks authority signals. Add certifications, awards, or media mentions.
  - [Visual] App.tsx: Hero section without visual interest. Consider gradient for depth.
  - [Performance] index.css: Animating expensive properties (top). Use transform/opacity where possible.
  - [Accessibility] index.css: Animations found without prefers-reduced-motion check
  - [Color] index.css: 7 distinct colors. Consider 60-30-10 rule: dominant (60%), secondary (30%), accent (10%).
  - [Color] index.css: Color variables without HSL. Consider HSL for easier palette adjustment (Hue, Saturation, Lightness).
  - [Trust] Footer.tsx: Footer lacks authority signals. Add certifications, awards, or media mentions.
  - [Typography] Footer.tsx: No line length constraint (45-75ch). Use max-w-prose or max-w-[65ch].
  - [Typography] Footer.tsx: Text elements found without line-height. Body: 1.4-1.6, Headings: 1.1-1.3
  - [Typography] Footer.tsx: Fixed font sizes without clamp(). Consider fluid typography: clamp(MIN, PREFERRED, MAX)
  - [Typography] Footer.tsx: No h1 found. Each page should have one primary heading.
  - [Visual] Footer.tsx: Flat design with no depth. Consider shadows or subtle gradients for hierarchy.
  - [Typography] Header.tsx: No line length constraint (45-75ch). Use max-w-prose or max-w-[65ch].
[+] PASSED CHECKS: 6
STATUS: FAIL
