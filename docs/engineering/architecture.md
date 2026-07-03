# Architecture

## Philosophy

The architecture is the foundation of BLACKSITE.

It is designed for long-term maintainability, scalability, and clarity.

The architecture is considered LOCKED.

Changes should only be made after careful evaluation.

---

# Folder Structure

```text
src/
├── app/
├── assets/
├── components/
├── config/
├── constants/
├── contexts/
├── data/
├── features/
├── hooks/
├── lib/
├── middleware/
├── providers/
├── services/
├── store/
├── styles/
├── types/
└── utils/
```

This structure must not be modified without architectural approval.

---

# Responsibilities

## app/

Contains Next.js App Router files.

Only routing, layouts, templates and pages belong here.

Business logic should not live inside app/.

---

## assets/

Images, fonts, icons, videos and other static resources.

---

## components/

Reusable UI components shared across multiple features.

Example:

* Button
* Card
* Container
* Input
* Modal

---

## features/

Feature-specific components and logic.

Each feature should remain self-contained.

Example:

features/home/

features/dashboard/

features/reception/

---

## config/

Application configuration.

Static application configuration belongs here.

---

## constants/

Application constants.

Avoid magic strings and duplicated values.

---

## contexts/

React Context providers.

Only use Context when truly necessary.

---

## hooks/

Reusable custom React hooks.

Keep hooks focused on one responsibility.

---

## lib/

Shared libraries and utilities that integrate external packages.

---

## middleware/

Application middleware.

Keep middleware lightweight.

---

## providers/

Application-level providers.

Examples include theme, authentication and query providers.

---

## services/

Business logic and communication with APIs.

---

## store/

Global state management.

Only store truly global state.

---

## styles/

Global styles and design tokens.

---

## types/

Shared TypeScript types.

---

## utils/

Pure utility functions.

No business logic should exist here.

---

# Golden Rules

Never reorganize the architecture.

Never create duplicate responsibilities.

Always place new files in the most appropriate folder.

Keep the architecture predictable.

Future developers should immediately understand where every file belongs.
