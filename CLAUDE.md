# CLAUDE.md

This file describes the codebase structure, conventions, and workflows for AI assistants working in this repository.

## Repository Overview

**2026_JS_TS_Playwright** is a structured JavaScript and TypeScript learning repository organized around a day-by-day curriculum. The repository name includes "Playwright" in anticipation of future test automation content — currently the focus is on building the foundational JS/TS knowledge needed for Playwright.

## Directory Structure

```
2026_JS_TS_Playwright/
├── JS_Folder/
│   ├── package.json          # ES module config ("type": "module")
│   └── scr/                  # Source files (note: "scr" not "src")
│       ├── apps.js           # Advanced JS concepts (destructuring, array methods, etc.)
│       ├── datatypes_day1.js # Day 1: JavaScript data types
│       ├── day03/            # Operators and comparisons
│       ├── day04/            # More operators
│       ├── day05/            # Control flow (if/switch)
│       ├── day06/            # Loops (while, do-while, for)
│       ├── day07/            # Array operations and iteration
│       ├── day08/            # Objects and 2D arrays
│       ├── day09/            # Object parsing and iteration
│       ├── day10/            # Functions
│       ├── day11/            # Function declarations, expressions, chaining
│       ├── day12/            # (exercises)
│       ├── day13/            # Callback functions
│       ├── day14/            # Array methods (map/filter/reduce)
│       ├── day15/            # String manipulation
│       ├── day16/            # Promises and async operations
│       ├── day17/            # Classes and OOP
│       ├── day18/            # OOP continued
│       ├── day19/            # Classes and inheritance
│       └── oreillyHandson/   # O'Reilly supplemental exercises
├── TS_Folder/
│   ├── app.ts                # Main TypeScript entry point
│   ├── tsconfig.json         # TypeScript compiler config
│   ├── package.json          # CommonJS config
│   ├── dist/                 # Compiled JS output (do not edit)
│   └── day2/
│       └── dataType_01.ts    # TypeScript type system exercises
└── README.md                 # Minimal project title
```

## Module Systems

The two folders use **different module systems** — be careful:

| Folder       | Module System | `package.json` setting     |
|--------------|---------------|----------------------------|
| `JS_Folder/` | ES Modules    | `"type": "module"`         |
| `TS_Folder/` | CommonJS      | `"type": "commonjs"`       |

- JS files in `JS_Folder/` use `import`/`export` syntax.
- TypeScript files compile to CommonJS via `tsc`.

## TypeScript Configuration

**`TS_Folder/tsconfig.json`** key settings:
- `target`: `ES2020`
- `module`: `commonjs`
- `outDir`: `./dist` (compiled output goes here)
- `strict`: `true` (all strict checks enabled)
- `esModuleInterop`: `true`
- `include`: only `*.ts` at root level and `day2/dataType_01.ts`

> **Note:** The `include` array is explicit and narrow. When adding new `.ts` files in subdirectories, update `tsconfig.json` to include them.

To compile TypeScript:
```bash
cd TS_Folder
npx tsc
```

## Running JavaScript Files

JS files use ES module syntax and can be run with Node.js directly:
```bash
cd JS_Folder
node scr/apps.js
node scr/day16/promiseconcepts_01.js
```

TypeScript files should be compiled first, then run from `dist/`:
```bash
cd TS_Folder
npx tsc
node dist/app.js
```

## File Naming Conventions

- JS learning files: `[topic]_[number].js` — e.g., `promiseconcepts_01.js`, `callbackfunction_01.js`
- TS learning files: `[topic]_[number].ts` — e.g., `dataType_01.ts`
- Day directories: `day##` (two-digit zero-padded) inside `JS_Folder/scr/`
- The source directory is named `scr/` (not `src/`) — preserve this spelling

## Code Style and Patterns

### General
- Files are **educational examples** with inline `console.log()` output showing expected results in comments
- Comments explain both the "what" and "why" — often referencing real test automation scenarios
- No linting or formatting tools are configured — maintain consistent style with surrounding code

### JavaScript Patterns Used
- Array destructuring with rest operator: `let [first, ...rest] = arr`
- Object destructuring: `let { name, age } = obj`
- Spread operator: `[...a, ...b]`, `{ ...base, extra: val }`
- Optional chaining: `obj?.prop?.nested`
- Nullish coalescing: `value ?? 'default'`
- Arrow functions and callbacks
- Promise chains (`.then()`, `.catch()`, `.finally()`)
- `async`/`await`
- ES6 classes with constructors and methods

### TypeScript Patterns Used
- Explicit type annotations on all variables and function signatures
- Union types: `string | number`
- Array types: `number[]` or `Array<string>`
- Tuples: `[string, number]`
- Type aliases with `type` keyword
- `readonly` properties
- Special types: `any`, `unknown`, `void`, `never`, `null`, `undefined`, `bigint`

## Temporary Files

VS Code's Code Runner extension generates `tempCodeRunnerFile.js` and `tempCodeRunnerFile.ts` files throughout the directory tree. These are **auto-generated artifacts** — do not modify or commit them.

## No Test Framework

Despite the repository name, there is currently **no Playwright, Jest, Vitest, or other testing framework** configured. The curriculum is building toward Playwright automation — foundational JS/TS skills are taught first.

## VS Code Integration

**`.vscode/launch.json`** is present with debug configurations for running files directly in VS Code. Development is primarily done using the VS Code Code Runner extension.

## Git Conventions

- Commit messages are short and descriptive (e.g., `"added promises"`, `"data type"`)
- No enforced commit message format or pre-commit hooks
- Branch naming observed: `claude/[description]-[ID]` for AI-assisted work

## What to Expect When Adding Content

When adding new learning material:

1. **New JS day folder**: Create `JS_Folder/scr/day##/[topic]_01.js` following the existing naming pattern.
2. **New TS file in a subdirectory**: Add the path to `TS_Folder/tsconfig.json`'s `include` array.
3. **Comment style**: Include expected `console.log()` output as inline comments (e.g., `// [1, 2, 3]`).
4. **Test automation context**: Where relevant, use test automation scenarios (browser configs, selectors, assertions) as examples to reinforce the learning goal.
5. **No imports needed** for basic exercises — files are standalone.

## Known Issues / Quirks

- The `scr/` directory name is a typo for `src/` — do **not** rename it (would break existing paths/history).
- There is an empty `calude.md` file in `JS_Folder/scr/` (typo for `CLAUDE.md`) — it can be ignored.
- `TS_Folder/tsconfig.json`'s `include` is narrow by design; new subdirectory files won't compile unless added.
