# Kits

On TeaaMC, everyone builds their own PvP kits from the Kit Room the server prepares, saves them, and loads them in a match. By default you get **10 kits** and **5 enderchests**.

::: warning Three things to know first
- **Loading a kit OVERWRITES your inventory.** When you load a kit, your entire current inventory is replaced — whatever you're holding is gone. Stash your gear in a chest before loading.
- **There is no "Save" button.** In the Kit Editor, a kit is saved when you **close the GUI** (`Esc`) or click the red **Back** button. Back means *save and exit*, not cancel.
- **Your inventory "vanishing" is normal.** When you open the Kit Editor, your real gear is set aside and replaced by the kit you're building. Close the GUI and your real gear comes back untouched.
:::

## Main menu — `/kit`

Run `/kit` (or `/k`) to open the main menu. The top rows are your 10 kits, the bottom row your 5 enderchests.

![Kit menu](/images/kit/kit-menu.jpg)

| Icon | Meaning |
|---|---|
| Green shulker | Kit with gear saved |
| Dark shulker | Empty kit |
| Ender chest | Enderchest with gear |
| Ender eye | Empty enderchest |

The clicks are the same for kits and enderchests:

| Action | Result |
|---|---|
| **Left-click** | Load it and close the menu |
| **Right-click** | Open the Kit Editor to edit it |
| **Shift + right-click** | Delete the kit (no confirmation, can't be undone) |
| Click an empty slot | Open the Kit Editor to make a new kit |

![The action hints shown when hovering a kit](/images/kit/kit-menu-actions.jpg)

## Quick-load in a match

No need to open the menu — load directly with commands:

- `/k1` to `/k10` — quick-load kits 1–10
- `/ec1` to `/ec5` — quick-load enderchests 1–5
- `/ec` — view your regular enderchest

::: info No cooldown
Kits and enderchests can be loaded any time, with no cooldown between swaps.
:::

## Building and editing a kit — Kit Editor

Open it by **right-clicking** a kit slot in `/kit`, or run `/kitroom editor` and pick the slot you want to edit.

![Kit Editor](/images/kit/kitroom-weapons.jpg)

The screen has two halves:

- **The top half** is the server's Kit Room. Items here are **unlimited** — take one and the slot refills. The right column has tabs to switch pages/categories.
- **The bottom half is your inventory = the kit you're building.** However you arrange it is exactly how it loads. A kit is **41 slots**: 36 inventory slots, 4 armor pieces and 1 offhand.

| Action in the editor | Result |
|---|---|
| Drag/click an item from the catalog into your inventory | Add it to the kit |
| **Shift + left-click** an item in the kit | Open the **Item Editor** (rename, enchant, change type…) |
| **Right-click** an item in the kit (empty hand) | Duplicate it onto your cursor |
| **Q key** while pointing at a kit slot | Clear that slot |
| Throw out into the empty area | Delete the item on your cursor |
| The red **Back** button or `Esc` | Save the kit and exit |

::: tip Delete freely
Items in the Kit Editor are just copies from the catalog — delete as much as you like, it never touches your real gear.
:::

### What's in the Kit Room

The catalog is split into categories, switched with the tabs on the right. For example:

**Weapons** — swords, axes, pickaxes, shovels, tridents…

![Kit Room — Weapons](/images/kit/kitroom-weapons.jpg)

**Crystal** — end crystals, obsidian, respawn anchors, ender pearls, totems, TNT…

![Kit Room — Crystal](/images/kit/kitroom-crystal.jpg)

**Armors** — diamond/netherite armor, elytra, shulkers…

![Kit Room — Armors](/images/kit/kitroom-armors.jpg)

**Food & Potion** — golden apples, food, all kinds of potions and splash potions…

![Kit Room — Food & Potion](/images/kit/kitroom-food-potion.jpg)

**Random** — bows, crossbows, arrows, snowballs…

![Kit Room — Random](/images/kit/kitroom-random.jpg)

### Item Editor

Shift + left-click an item in the kit to open it. Only the buttons that fit that item show up:

| Button | What it does |
|---|---|
| **Rename** | Rename the item |
| **Amount** | Change the stack size |
| **Enchant** | Add or remove enchantments |
| **Change Type** | Change the material (e.g. iron → diamond) |
| **Trim** | Change the armor trim |
| **Variant** | Change the variant (arrows, fireworks, potions…) |
| **Shulker** | Open and arrange the items inside a shulker box |

A few examples:

![Rename an item](/images/kit/rename.png)

![Add enchantments](/images/kit/enchant.png)

![Change the armor trim](/images/kit/armor-trim.png)

## Enderchests

Enderchests work exactly like kits, with two differences:

- Each enderchest has **27 slots**, and loading one goes into your **enderchest**, not your inventory.
- While editing an enderchest, your **9 hotbar slots are covered with red glass** — that's just a cover; your real gear is still there underneath and comes back when you close the GUI.

## Restocking & utilities in a match

| Command | What it does |
|---|---|
| `/regear` (`/rg`) | Restock the used-up items from the kit you loaded |
| `/repair` | Repair your worn/held gear |
| `/heal` | Heal yourself |

![Regear Shulker](/images/kit/regear.png)

`/regear` does **not** reload the whole kit. It only restocks the consumables the server allows (usually ender pearls, potions, blocks…), and only into slots that are empty or already holding that item. So:

- You must **load the kit at least once** before you can regear.
- You **can't regear mid-fight** — by default you must be out of combat for 5 seconds.
- There's a **cooldown between uses** (5 seconds by default).
- If the server uses shulker mode: `/rg` gives you a **Regear Shulker** — place it down and click the shell to restock.

## Sharing, copying, rearranging

| Command | What it does |
|---|---|
| `/sharekit <1-10>` | Generate a **6-character code** for that kit (anyone can use it, expires after 15 minutes) |
| `/shareec <1-5>` | Same, but for an enderchest |
| `/copykit <code>` | Receive a kit/enderchest from someone's code |
| `/swapkit <slot1> <slot2>` | Swap two kits |
| `/deletekit <slot>` | Delete a kit |
| `/publickit` (`/pk`) | Browse and load the server's premade kits |

::: warning `/copykit` also overwrites your inventory
`/copykit` overwrites your whole inventory just like loading a kit — stash your gear first. The received kit isn't saved to any slot yet; to keep it, open the Kit Editor and rebuild it.
:::

## Kit Room — `/kitroom`

- `/kitroom open` — open the Kit Room and take items straight into your inventory (unlimited)
- `/kitroom editor` — pick a kit/enderchest to edit, then open the Kit Editor for that slot

## Having trouble?

**"I finished editing but there's no Save button."**
There isn't one. Close the GUI (`Esc`) or click the red **Back** button and the kit saves itself.

**"My inventory vanished when I opened the Kit Editor!"**
It's set aside and returned when you close the GUI. Don't quit the game mid-edit — just close the GUI normally.

**"I loaded a kit and lost everything I had."**
Loading a kit overwrites your whole inventory. Always stash your gear in a chest before loading.

**"I can't take item X from the catalog."**
The server may restrict it: only items in the Kit Room can be saved into a kit, and some items are banned entirely. Banned items are stripped from a kit when it's saved.

**"`/rg` says I have to wait."**
You either just took damage (wait out combat) or just regeared (wait out the cooldown).

**"A command says I don't have permission."**
Permissions are granted by admins — ask your server's staff.

## Full command list

| Command | Aliases | What it does |
|---|---|---|
| `/kit` | `/k` | Open the main menu |
| `/k1` … `/k10` | `/kit1`… | Load kits 1–10 |
| `/ec1` … `/ec5` | `/enderchest1`… | Load enderchests 1–5 |
| `/ec` | `/enderchest` | View your enderchest |
| `/kitroom open` | | Open the Kit Room, take items directly |
| `/kitroom editor` | | Pick a kit to edit |
| `/publickit` | `/pk` | Server premade kits |
| `/sharekit <1-10>` | | Generate a kit share code |
| `/shareec <1-5>` | `/shareenderchest` | Generate an enderchest share code |
| `/copykit <code>` | `/copyec` | Receive a kit/enderchest from a code |
| `/swapkit <slot1> <slot2>` | | Swap two kits |
| `/deletekit <slot>` | | Delete a kit |
| `/regear` | `/rg` | Restock used items |
| `/repair` | | Repair gear |
| `/heal` | | Heal |
