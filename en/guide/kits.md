# Kits

TeaaMC lets you save 10 fully customizable kits, plus 5 preset enderchests for quick gear-up.

## Opening the kit menu

Run `/kit` to open the kit editor GUI, where you can build and edit your own kits.

## Loading a kit or enderchest

- `/k1` through `/k10` — load one of your 10 custom kit slots
- `/ec1` through `/ec5` — load one of 5 preset enderchests (fixed items, not player-editable)
- `/enderchest` (alias `/ec`) — view-only look at your regular enderchest, doesn't load anything

::: info No cooldown
Kits and enderchests can be loaded at any time — there's no cooldown between switches.
:::

## Managing your kits

| Command | What it does |
|---|---|
| `/kit` | Open the kit editor GUI to build/edit kits `k1`–`k10` |
| `/swapkit <slot1> <slot2>` | Swap the contents of two kit slots |
| `/deletekit <slot>` | Delete a kit slot |
| `/copykit <code>` | Copy a kit from a share code into your own slot |
| `/sharekit <slot>` | Generate a shareable code for one of your kits (5s cooldown) |
| `/shareec <slot>` | Generate a shareable code for one of your enderchests (5s cooldown) |

## Regear

If you're set up in "command mode," `/regear` (alias `/rg`) instantly restocks your currently loaded kit — handy after a fight burns through your supplies.

::: warning Combat restrictions
Regear has a cooldown between uses and can be blocked for a short time after taking damage, so you can't regear mid-fight to cheese an engagement.
:::

## Public / premade kits

- `/publickit` (aliases `pk`, `premadekit`) — browse and load public kits shared server-wide
- `/publickit <name>` — load a specific public kit directly

::: tip Staff & admin tools
Staff can inspect any player's kit or enderchest with `/inspectkit <player> <slot>` and `/inspectec <player> <slot>`. Server admins manage the starter kit given to new players via `/premadekit <create|delete|list|edit|setkit>`.
:::