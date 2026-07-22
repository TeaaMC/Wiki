# Practice Bot

Practice Bot lets you train PvP on demand against a sparring bot, without waiting for another player. The bot can fight with a sword or do Crystal PvP, and you can customize almost everything: difficulty, armor, weapons, speed, reach and more.

## Commands

The main command is `/teaabottrain`, with the short aliases `/bottrain`, `/bot` and `/tbt`.

| Command | What it does |
|---|---|
| `/bot` or `/bot menu` | Open the bot config GUI (all customization lives here) |
| `/bot spawn` | Spawn a bot at your current location |
| `/bot remove` | Remove your active bot |
| `/bot tpme` | Teleport yourself to the bot |
| `/bot tphere` | Bring the bot to you |

::: tip Typed commands or GUI — your choice
Every button in the GUI (spawn, remove, teleport) does exactly the same thing as the typed commands above. Use whichever is more convenient for you.
:::

## Open the menu

Join the server and run:

```text
/bot
```

![TeaaMC Practice Bot menu](/train-bot.jpg)

*The in-game Practice Bot configuration menu.*

Click each slot to change its value — most slots cycle through the options on click, a few use left/right click to increase/decrease.

## Difficulty

The bot has 3 difficulty levels, click to cycle:

| Difficulty | Reflexes | Behaviour |
|---|---|---|
| **Easy** | Slow | Basic attacks, often whiffs, no advanced techniques |
| **Medium** | Moderate | Uses crit-jumps, strafing, w-taps and combos at a moderate rate |
| **Pro** | Near-instant | Advanced PvP: constant strafing / w-taps / dodges / combos / crystal combos, rarely whiffs |

::: tip Work your way up
Start on Easy to get comfortable, isolate one skill at a time, then move up to Medium/Pro. Short and consistent sessions usually beat one very long session.
:::

## Combat Style

- **Sword** — pure melee sword PvP.
- **Crystal** — Crystal PvP: the bot knocks you up, then detonates End Crystals / Respawn Anchors.

When you pick Crystal, three extra options unlock:

- **Anchor Combos** — enable to let the bot also use Respawn Anchor blast combos (not just End Crystals).
- **Explosions Break Blocks** — whether the blasts destroy surrounding blocks.
- **Crystal Cooldown** — time (in seconds) between crystal combos. Left-click increases, right-click decreases.

## Equipment

Set armor for each piece independently. Each piece cycles through **None → Diamond → Netherite**:

- Helmet
- Chestplate
- Leggings
- Boots

Each armor piece also has its own enchant slot, cycling through **None → Protection → Blast Protection** (Blast Protection is handy for Crystal PvP training).

### Weapon & hands

- **Main Hand** — None / Sword / Totem.
- **Main Hand Knockback** — None / Knockback I / Knockback II (only applies when the main hand is a sword).
- **Off Hand** — None / Shield / Totem.

## Toggles

Click to turn on/off:

| Toggle | Meaning |
|---|---|
| **Attack Mode** | Whether the bot actively attacks you, or just stands as a punching bag |
| **Follow Owner** | Whether the bot follows you around |
| **Unlimited Health** | The bot has infinite totems and cannot die — great for long combo practice |
| **Anti-Knockback** | The bot doesn't get knocked back when hit |
| **Slow Falling** | The bot falls slowly |

## Numeric settings (left-click up / right-click down)

- **Attack Speed** — how fast it swings.
- **Movement Speed** — how fast it moves.
- **Reach** — attack reach.
- **Follow Distance** — the distance the bot keeps when following you.

## Spawn the bot and start

Once configured, click **SPAWN BOT** in the GUI (or run `/bot spawn`) to spawn the bot where you're standing. When you're done, click **REMOVE BOT** or run `/bot remove`.

::: info Your settings are saved
All of your customizations are stored per account, so the next time you spawn a bot it keeps your previous configuration.
:::
