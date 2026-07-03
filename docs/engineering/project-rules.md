# BLACKSITE Project Rules

Version: 1.0

Status: LOCKED

---

# Purpose

This document defines the non-negotiable engineering rules for BLACKSITE.

Every contributor, including AI assistants, must follow these rules.

These rules override personal preferences.

---

# Rule 1 — The Architecture Is Locked

The project architecture has already been approved.

It must not be changed.

Never:

* Rename folders.
* Move folders.
* Reorganize files.
* Replace the architecture.
* Suggest another architecture.

Current architecture is the single source of truth.

---

# Rule 2 — Framework

BLACKSITE uses:

* Next.js App Router
* React
* TypeScript
* Tailwind CSS

Never convert the project to:

* Vite
* Create React App
* React SPA
* Any other framework

The application starts from:

```text
src/app/layout.tsx
src/app/page.tsx
```

Nothing else.

---

# Rule 3 — Never Generate These Files

Do NOT generate:

* App.tsx
* main.tsx
* main.jsx
* ReactDOM.createRoot()
* vite.config.ts
* src/index.css

These files belong to different frameworks.

---

# Rule 4 — Respect Folder Responsibilities

Every folder has a purpose.

components/

Reusable UI.

features/

Feature-specific UI.

config/

Application configuration.

services/

Business logic.

store/

Global state.

utils/

Pure helper functions.

Never mix responsibilities.

---

# Rule 5 — One Task At A Time

Never build the entire application.

Never generate dozens of files.

Always build exactly what is requested.

One feature.

One component.

One file.

Stop after completing it.

---

# Rule 6 — Frontend First

Current development phase:

Frontend.

Do not generate:

* APIs
* Database models
* Authentication
* Backend
* Server Actions

unless explicitly requested.

---

# Rule 7 — Design Consistency

Always follow:

* Frontend Design Bible
* Motion System
* Color System
* Typography System
* Spacing System

Never invent a new visual language.

---

# Rule 8 — Code Style

Write code like a senior software engineer.

Code should be:

* readable
* maintainable
* simple
* scalable
* production ready

Avoid:

* unnecessary abstraction
* clever code
* duplicated logic
* oversized components

---

# Rule 9 — Components

Every component should have one responsibility.

Reusable components belong inside:

src/components

Feature-specific components belong inside:

src/features

Do not mix the two.

---

# Rule 10 — Comments

Comments should explain WHY.

Not WHAT.

Avoid obvious comments.

Write self-explanatory code.

---

# Rule 11 — Performance

Performance is a feature.

Avoid unnecessary JavaScript.

Avoid unnecessary dependencies.

Prefer simple solutions.

Optimize when appropriate.

---

# Rule 12 — Accessibility

Always:

* use semantic HTML
* maintain heading hierarchy
* support keyboard navigation
* write accessible forms

Accessibility is never optional.

---

# Rule 13 — Responsive Design

Every component must work on:

* Mobile
* Tablet
* Laptop
* Desktop
* Ultra-wide

Never ignore mobile.

---

# Rule 14 — AI Behaviour

AI is not the architect.

AI is not the product manager.

AI is not the designer.

AI is the implementation engineer.

AI must respect all existing documentation.

AI must never redesign the project.

---

# Rule 15 — Before Writing Code

Always verify:

* Does this follow the architecture?
* Does this belong in this folder?
* Is the code readable?
* Is the component reusable?
* Is it production ready?

Only then generate code.

---

# Rule 16 — After Writing Code

Always perform a self-review.

Check:

* readability
* maintainability
* accessibility
* performance
* architecture compliance

If improvements are needed, explain them.

Do not rewrite code unnecessarily.

---

# Rule 17 — Git Workflow

Every completed feature should be small enough for one commit.

Write meaningful commit messages.

Avoid mixing unrelated changes.

---

# Rule 18 — Documentation

Documentation is part of the product.

Whenever architecture or behavior changes, documentation must be updated.

Code and documentation should always stay synchronized.

---

# Final Principle

BLACKSITE should feel like a premium software product built by a professional engineering team.

Every technical decision should support:

* quality
* consistency
* maintainability
* scalability
* user experience

If a proposed solution violates these principles, it should not be implemented.
