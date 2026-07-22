# RTP Queue & Duel

TeaaDuel gives you two ways to fight: queue up for a random opponent, or challenge someone directly.

## RTP Queue

Run `/rtpqueue` (alias `/rtpq`) to join the random-teleport queue. Once matched, you and your opponent are teleported into a PvP world to fight it out.

- `/rtpqueue leave` — leave the queue before you're matched
- If the server has multiple allowed worlds configured, run `/rtpqueue <world>` to queue for a specific one

::: tip Uses your loaded kit
Bring your gear by loading a kit first with `/kit` — see [Kits](/kits).
:::

## Duel a specific player

- `/duel <player>` — send a duel request to another player
- `/duel accept <player>` — accept an incoming request
- `/duel deny <player>` — decline an incoming request

## Random teleport

`/rtp [world]` teleports you to a random safe location — handy for finding open space to fight or explore. If you don't specify a world, it uses your current world (if allowed) or the server's default.

::: info Ranked ELO
TeaaMC tracks an ELO rating from ranked matches, shown on your scoreboard/tab list.
:::