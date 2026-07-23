# Crystal Royale

Crystal Royale is TeaaMC's **battle royale** mode — the whole lobby parachutes onto the map, loots gear, uses special items, and a shrinking storm closes in until only one player (or team) is left standing.

## Resource pack (required)

Crystal Royale uses a custom resource pack to render the **storm border**. **Without this pack you won't see the border** — an easy way to die by wandering out of the safe zone without noticing.

- 📦 **[Download the resource pack (timc pack)](/downloads/timc-pack.zip)**

How to install (manually):

1. Download the `.zip` above — **don't unzip it**.
2. In Minecraft, go to **Options → Resource Packs**.
3. Click **Open Pack Folder**, then copy the downloaded `.zip` into that folder.
4. Back in Minecraft, move the pack to the right (Selected) column to enable it, then click **Done**.

::: tip The server may send it automatically
The server often sends the resource pack automatically when you join — just click **Yes** when prompted. If for some reason you don't receive it, install it manually with the steps above.
:::

## Joining a match

When a host opens the queue, you'll see a chat announcement with a quick-join button:

![Queue opened in chat](/images/crystal-royale/queue.jpg)

1. Wait for a host to open the queue (`/queue`).
2. Run `/join` (or `/crystal join`, or click **[CLICK TO JOIN]** in chat) to enter the queue.
3. Joined by mistake? Run `/leave` before the match starts.

The match starts after a countdown (120 seconds by default), for up to 100 players.

::: warning Timing matters
`/join` only works while a queue is open (waiting or counting down). If no queue is open, wait for staff to start a new match.
:::

## Playing as a team

You can form a team before the match starts. Run `/team` to open the team menu.

**Create a team:** click the lime glass pane **Create your team** to create a team and become its leader.

![Create a team](/images/crystal-royale/team-create.jpg)

**Invite members:** as the leader, click **Invite members**, then type a player's name in chat to send an invite. The invited player runs `/team accept` to join.

![Invite members](/images/crystal-royale/team-invite.jpg)

A team holds up to **5 players**. Only the leader can invite/manage members (promote, kick). Teams can only be created/edited in the lobby — once the match starts, rosters are locked.

You can also use direct commands: `/team invite`, `/team accept`, `/team leave`, `/team info`.

::: tip Not the leader?
A regular member who wants to leave before the match starts can open `/team`, view their team, and click the **Leave team** button (or `/team leave`).
:::

## Dropping into the match

At the start of each match, the whole lobby is carried across the map by a giant **Ghast** flying high overhead. Press **SHIFT** to jump off the Ghast — you'll deploy a **parachute (baby chicken)** and glide down:

- Move your mouse to **steer toward where you look**.
- After a few seconds on the chute, press **SHIFT** again to drop off and fall faster.
- No fall damage when you land on the chute.

Pick your landing spot wisely: near loot means better gear but more fights; far out means a safer, slower gear-up.

## The storm

A storm border surrounds the play area and **shrinks over time**, forcing everyone together. Standing outside the safe zone drains your health, so always watch the edge.

![Safe-zone border](/images/crystal-royale/border-normal.jpg)

Toggle `/zonebar` to show the distance to the zone edge on your action bar (*Near zone edge: X blocks*).

In the final phase, the storm shrinks to a tiny, wandering circle — the match funnels toward one decisive point:

![Final-phase storm border](/images/crystal-royale/border-final.gif)

## Special items

Found in chests and **airdrops** scattered across the map. The main items:

| Item | Effect |
|---|---|
| **Speed IV** | Speed IV for 10 seconds |
| **Launch Pad** | Place on the ground to launch yourself skyward |
| **Feather Dash** | Right-click to dash quickly toward where you look |
| **Gravity Grenade** | Throw it to fling nearby players into the air |
| **Hotbar Scrambler** | Hit an enemy to scramble their hotbar |
| **Scrambler Arrow** | An arrow that scrambles the hotbar on hit |
| **Swap Egg** | Throw it at a player to **swap positions** (found in airdrops) |
| **Anti-Pearl Rod** | Locks an enemy's Ender Pearls for 5 seconds |
| **Sharpness Book** | Adds +1 Sharpness level to a sword |
| **Smithing Scroll** | Upgrades a worn armor piece |

::: tip Kill reward
Downing an enemy grants you a short **Regeneration** effect — press your advantage when you're ahead.
:::

## Reviving teammates

`/revive [player]` revives a downed teammate. Each revive costs **14 Totems of Undying** (taken from your inventory), and each player can be revived at most **3 times per match**.

If you disconnect mid-match, `/rejoin` puts you back into the running game (or into spectate). You have about 3 minutes before you're eliminated for good.

## Spectating

- `/spectate` (alias `/spec`) — spectate the running match
- `/stopspectate` (aliases `/stopspec`, `/unspectate`) — stop spectating and return to the lobby

## Stats & rewards

Run `/stats` to view your stats (Kills / Deaths / Games / Wins), or `/stats <player>` for someone else. The same info shows when you hover a player's head in the team menu.

![Player stats](/images/crystal-royale/stats.jpg)

At the end of a match you earn **Shards**: the winner gets the most (scaling down by placement) plus bonus shards per kill; non-winners still get a participation reward.

## Utility commands

| Command | What it does |
|---|---|
| `/nightvision` (`/nv`) | Toggle Night Vision in the lobby |
| `/zonebar` | Toggle the safe-zone edge distance display |
| `/killmsg` | Toggle kill/death messages in chat |
| `/shardmsg` | Toggle showing other players' shard earnings |
| `/discord` | Get the server's Discord link |
