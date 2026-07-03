# Coding Standards

## Philosophy

Code should be written for humans first.

Readable code is more valuable than clever code.

Future maintainability is more important than short-term speed.

---

## General Rules

* Use TypeScript.
* Prefer functional components.
* Use modern React.
* Keep files focused.
* Use meaningful names.
* Avoid duplicated logic.
* Prefer composition over inheritance.

---

## Components

Each component should have one responsibility.

If a component becomes too large, split it into smaller components.

Reusable components belong in `components/`.

Feature-specific components belong in `features/`.

---

## Naming

Use descriptive names.

Avoid abbreviations unless universally understood.

Component names:

PascalCase

Hooks:

camelCase beginning with use

Files should follow the project's naming conventions consistently.

---

## Imports

Group imports logically:

1. External packages
2. Internal modules
3. Styles

Avoid unnecessary imports.

---

## Styling

Use Tailwind CSS.

Avoid inline styles.

Prefer reusable utilities.

Keep styling consistent with the Design Bible.

---

## Comments

Comments should explain *why*, not *what*.

Avoid obvious comments.

Write self-explanatory code.

---

## Performance

Avoid unnecessary re-renders.

Lazy load expensive components where appropriate.

Keep bundles as small as possible.

Optimize before adding complexity.

---

## Accessibility

Use semantic HTML.

Maintain proper heading hierarchy.

Support keyboard navigation.

Provide accessible labels.

---

## Testing Mindset

Even before tests exist, write code that is easy to test.

Avoid tightly coupled logic.

---

## Final Rule

If another senior engineer cannot understand your code within a few minutes, simplify it.
