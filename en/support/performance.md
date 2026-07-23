# Performance, ghost blocks and chunk loading

TeaaMC runs on **Canvas 26.1.2** — a Paper-based server that processes each world as multiple parallel regions (Folia-style), using the **AFFINITY** scheduler, on Java 25. In short: every world is split into regions that tick in parallel across several threads, so the server handles a lot of players while keeping its rhythm. The trade-off is that latency sometimes shows up in one local area rather than server-wide.

## Hardware

- **CPU:** AMD Ryzen Threadripper 3960X — 24 cores / 48 threads
- **RAM:** 24 GB (16 GB heap given to the JVM)
- **Platform:** Linux (amd64), Java 25 (Eclipse Adoptium)

## How regions work

Instead of the whole server running on a single thread like vanilla, Canvas splits each world into regions, and each region ticks on its own thread. That means TPS and MSPT are measured **per region**, not as one global number.

Here's a real reading from the in-game *Server Health Report*:

- 5 players online, 3 worlds (`mushroom_fields`, `plains`, `spawn`), 4 regions total
- TPS min / median / max: **20.00 / 20.00 / 20.00**
- Overall utilisation: **~4.6% of 600%** — under 5% of the 6 region threads, so there's plenty of headroom

The report also lists the highest-utilisation regions (with coordinates, chunk count, players and entities) so the team can jump straight to the right spot when investigating.

## Why can it still lag at 20 TPS?

Because "20 TPS" is the overall, steady figure. A specific region can still spike in MSPT for a moment, be generating or loading chunks, or hit a cross-region interaction. You feel the stutter right there, while the global TPS still looks fine.

## Common causes

- **Custom terrain & biomes:** complex chunks take longer to build than vanilla terrain.
- **Plugin compatibility:** some plugins aren't fully at home with the per-region model.
- **Region overload:** lots of players, farms or entities crowded into one area load that local thread.
- **Plugin defects:** inefficient handling can cause delay, ghost blocks or chunk-loading issues.

## What you may notice

- Chunks load slowly, freeze for a beat, or render incorrectly.
- A placed block doesn't show up immediately.
- A broken block drops no item, or reappears.
- Interactions feel a little delayed even while TPS reads healthy.

## What TeaaMC is doing

The team keeps a constant eye on things with **spark** (CPU, TPS, entities, chunks over time) and the *Server Health Report* to catch whichever region is running hot, optimizes regularly, and clears up ghost blocks, chunk glitches and other sources of delay whenever possible.

## How to submit a useful report

Post in the **forum** channel on Discord with:

1. The time and in-game location when it happened.
2. Your Minecraft version.
3. A short description of what you did just before it.
4. A video or screenshot, if you have one.

::: info Thanks for your patience
Running custom biomes on a per-region multithreaded platform is a genuinely tricky engineering problem. A specific report from you helps the team narrow things down much faster.
:::
