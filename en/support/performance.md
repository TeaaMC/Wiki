# Performance, ghost blocks and chunk loading

TeaaMC runs on **Folia 1.21.4**, a platform that processes multiple regions in parallel for better scalability. This architecture improves performance, but localized latency can still occur in certain situations.

## Why can it lag at 20 TPS?

Folia processes each region independently. Overall TPS may appear stable while one specific area has high MSPT, slow chunk loading or delayed block updates.

## Common causes

- **Custom terrain and biomes:** complex chunks take longer to generate than vanilla terrain.
- **Plugin compatibility:** some plugins are not fully compatible with Folia's region-based processing.
- **Region overload:** concentrated players, farms or entities can overload a local thread.
- **Plugin defects:** inefficient processing can cause delay, ghost blocks or chunk-loading issues.

## What you may notice

- Chunks load slowly, briefly freeze or render incorrectly.
- A placed block does not appear immediately.
- A broken block drops no item or reappears.
- Interactions feel delayed even while reported TPS remains healthy.

## What TeaaMC is doing

The team monitors TPS, MSPT, logs and Spark profiles to identify overloaded regions, perform regular optimization, and resolve ghost blocks, chunk glitches and other sources of delay whenever possible.

## How to submit a useful report

Post in **🍏┃forum** with:

1. The time and in-game location of the issue.
2. Your Minecraft version.
3. A short description of what you did immediately before it happened.
4. A video or screenshot, when available.

::: info Thank you for your patience
Operating custom biomes on Folia presents genuine technical challenges. Specific player reports help the team isolate issues much faster.
:::
