# Kits

TeaaMC lets you save **10 custom kits** and **5 enderchests**, with a powerful Kit Editor to fine-tune every item: rename, enchant, change type, armor trim, arrow effects and more.

## Open the Kit menu

Run `/kit` (alias `/k`) to open the main menu.

![Main Kit menu](/images/kit/main-menu.png)

In the menu:

- **Green pouches** = kit slots with gear saved. **Empty pouches** = kit slots with nothing saved.
- **Ender eyes / ender chests** = your 5 enderchest slots.
- The action buttons on the bottom row:

| Button | What it does |
|---|---|
| **Kit Room** | Opens the server's preset kit room (see below) |
| **Premade Kits** | Browse public / premade kits |
| **Clear Inventory** | Empties your inventory |
| **Repair Items** | Repairs your current gear |
| **Meow** | Just a fun button — give it a click |

## Quick-load kits & enderchests

No need to open the menu — load directly with commands:

- `/k1` to `/k10` (aliases `/kit1`–`/kit10`) — load one of your 10 kits
- `/ec1` to `/ec5` (aliases `/enderchest1`–`/enderchest5`) — load one of your 5 enderchests
- `/enderchest` (alias `/ec`) — view your regular enderchest

::: info No cooldown
Kits and enderchests can be loaded any time — there's no cooldown between swaps.
:::

## Editing a kit (Kit Editor)

From the `/kit` menu, click a slot to open the **Kit Editor**.

![Kit Editor](/images/kit/kit-editor.png)

- Lay out gear in the inventory area like a normal chest; place armor and shield in the **Helmet / Chestplate / Leggings / Boots / Offhand** slots on the right.
- **Import** — quickly pull your currently worn/held gear into the kit.
- **Clear** — wipe the current layout.
- **Closing the menu saves automatically** — there's no save button.

Hovering an item in the editor shows the available actions:

![Kit Editor tooltip](/images/kit/item-tooltip.png)

- **Shift-Click** — open that item's editor
- **Right-Click** — duplicate the item
- **Drop (Q)** — remove the item from the kit

## Editing a single item (Item Editor)

Shift-Click an item in the Kit Editor to open the **Item Editor** with these options:

### Rename
![Rename item](/images/kit/rename.png)

### Amount — change the stack size
![Set amount](/images/kit/amount.png)

### Enchant — add/remove enchantments
![Enchant](/images/kit/enchant.png)

### Change Type — swap the item's type / tier (e.g. color or material tier)
![Change Type](/images/kit/change-type.png)

### Trim — customize armor trim
Pick a **pattern** and a **material**, then click to apply. Shields get their own Shield Customizer with banner patterns and colors.

![Armor Trim](/images/kit/armor-trim.png)

### Arrow Effect
For arrows, pick an effect (Healing, Poison, Strength, Slow Falling...), a tier, and optionally a glowing (spectral) arrow.

![Arrow Effect](/images/kit/arrow-effect.png)

There's also **Variant** (change an item-specific variant) and **Shulker Contents** (edit the items inside a shulker).

::: tip Some options may require permission
A few advanced options (rename, enchant, trim, set amount, variant) may be limited by rank/permission depending on server configuration.
:::

## Managing kits

| Command | What it does |
|---|---|
| `/kit` (`/k`) | Open the kit menu |
| `/swapkit <slot1> <slot2>` | Swap the contents of two kit slots |
| `/deletekit <slot>` | Delete a kit slot |
| `/sharekit <slot>` | Generate a **share code** for one of your kits (5-second cooldown) |
| `/shareec <slot>` (`/shareenderchest`) | Generate a share code for an enderchest (5-second cooldown) |
| `/copykit <code>` (`/copyec`) | Load a kit/enderchest from a share code into your slot |

## Regear

`/regear` (alias `/rg`) restocks gear you've used up after a fight. The server has two modes:

- **Command mode** — typing `/rg` restocks you instantly.
- **Shulker mode** — `/rg` hands you a **Regear Shulker**; open it and click the **Regear Shell** to restock.

![Regear Shulker](/images/kit/regear.png)

::: warning Combat limits
Regear has a cooldown (5 seconds by default) and is **temporarily locked after you take damage** (5 seconds by default), so you can't regear mid-fight to cheat. Only allowed item types (ender pearls, crystals, obsidian, potions, netherite gear/weapons...) get restocked.
:::

## Kit Room

`/kitroom` opens the server's **preset kit room** — a place to quickly grab themed items, split across pages: Crystal, Training, Potions, Armory, Axe & UHC... You can also open it from the **Kit Room** button in the `/kit` menu.

## Other utilities

- `/heal` — fully heals (and feeds) you
- `/repair` — repairs all your worn/held gear

## Public & premade kits

- `/publickit` (alias `/pk`) — browse and load server-wide public kits
- `/publickit <name>` — load a specific public kit directly

::: tip Staff & admin tools
Staff can view other players' kits/enderchests with `/inspectkit <player> <slot>` and `/inspectec <player> <slot>`. Admins manage starter kits for new players via `/premadekit <create|delete|list|edit|setkit>`.
:::
