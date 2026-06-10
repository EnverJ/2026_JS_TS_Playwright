```markdown
# Tuning Playwright Workers: Why 50% CPU Usage Is the Sweet Spot

If you've ever watched a Playwright test suite grind your laptop to a halt — fans screaming, IDE freezing, browser tabs pausing mid-frame — you've probably met the worker problem. Playwright runs tests in parallel by spawning worker processes, and the number you pick has a surprisingly large impact on both speed and stability.

## What Is a Worker, Really?

A Playwright worker is an isolated Node.js process that runs one test file at a time. Each worker boots its own browser context (and often its own browser), so workers don't share state. That isolation is what makes parallelism safe, but it's also why workers are expensive: every extra worker means another Chromium process, another V8 heap, and another chunk of your CPU.

By default, Playwright sets `workers` to roughly half the number of logical CPU cores on your machine. That default is not arbitrary — it's a deliberate target of around 50% CPU usage during a run.

## Why 50% CPU Usage Matters

It's tempting to max out parallelism. If you have 8 cores, why not run 8 workers? The answer is that browser automation is bursty, not steady. A single test can spike CPU when a page loads, when JavaScript executes, when screenshots are captured, or when the trace viewer records. If every core is already pinned by a worker at idle, those spikes have nowhere to go — and tests start timing out for reasons that have nothing to do with your code.

Holding CPU usage around 50% gives you headroom for these spikes. It's the difference between a flaky suite and a reliable one. In practice, 50% utilization tends to produce:

- More consistent test durations run over run
- Fewer timeout-related flakes on navigation and network idle waits
- Enough spare capacity for the OS, the Playwright runner itself, and any sidecar services (mock servers, dev servers, databases)

On CI this matters even more, because CI runners are often shared, throttled, or virtualized — a "4 core" runner may not give you four cores of real compute.

## Configuring Workers

In `playwright.config.ts`:

```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  workers: process.env.CI ? 2 : '50%',
  fullyParallel: true,
});
```

Two things worth noting. First, Playwright accepts a percentage string — `'50%'` literally means "use half the logical cores." Second, pinning a lower fixed number on CI is usually safer than a percentage, because CI machines lie about their core count more often than you'd expect.

## Signs You've Set Workers Too High

Watch for these during a run:

- Tests pass locally but fail on CI with `Timeout of 30000ms exceeded`
- `page.goto` occasionally hangs for the full timeout
- Trace files are enormous or corrupted
- Your machine's load average exceeds the number of cores

If you see any of these, drop workers until your average CPU usage sits near 50% during a run. You'll usually recover more time in reduced flakiness than you lose in parallelism.

## The Takeaway

Parallelism is not free. Playwright's default of roughly 50% CPU utilization is a good default precisely because browser tests need headroom. Start there, measure, and only push higher if your suite is genuinely underutilizing the machine — not because a bigger number feels faster.
```