# FileUploader Component

---

## Project Description

The **FileUploader** component allows users to:

- Upload files with drag-and-drop or file input.
- Handle single or multiple file uploads.
- Restrict upload types
- Change order by drag-and-drop.
- Remove files from the list.
- Edit alt text for each file.

---

## Features & Design Decisions

- **File Data Structure:** Each file is represented as an object with `id`, `file`, `source`, `sortIndex`, and `altText`.
- **Preloaded Files:** Supports editing of files passed in from backend.
- **TypeScript:** Ensures type safety and better maintainability.
- **Modular & Reusable:** Designed as a self-contained component with configurable props for flexibility.

---

## Installation & Setup

### Prerequisites

- Node.js (v16 or newer recommended)
- npm

### Getting Started

```bash
npm install
npm run dev
```
