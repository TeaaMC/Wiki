# Discord linking & 2FA

Link your Minecraft account to Discord to get the **Linked** role, your in-game rank, automatic rank ↔ role sync, and access to the **2FA** security feature. This page covers how to link and how to enable 2FA.

## The Discord panel

Discord has a panel with buttons to link and manage security:

![TeaaMC Discord panel](/images/discord/panel.jpg)

- **Link Account** — link your Minecraft account
- **Unlink Account** — unlink
- **Enable 2FA** / **Disable 2FA** — turn two-factor authentication on / off

## How to link

There are two ways — either works.

### Option 1: Start from Discord (recommended)

1. Click **Link Account** on the panel. The bot confirms it sent a code to your DMs:

   ![Clicking Link Account](/images/discord/panel-link-dm.jpg)

2. Open the bot's DM to get your link code (valid for **5 minutes**):

   ![Link code in DM](/images/discord/link-code-dm.jpg)

3. Join the server and run `/link <code>` — e.g. `/link 975J5U`.

### Option 2: Start from in-game

1. Join the server and run `/link` (with no arguments).
2. The server gives you a code (valid for **5 minutes**):

   ![The /link command in game](/images/discord/ingame-link.jpg)

3. Send that code to the **bot's DM** on Discord.

### Successful link

Either way, you'll get a confirmation on both sides — in game and on Discord:

![Linked successfully in game](/images/discord/linked-ingame.jpg)

![Linked successfully on Discord](/images/discord/linked-discord.jpg)

You're granted the **Linked** role on Discord and your matching in-game rank.

::: warning Keep your code private
The link code is for you only — don't share it. It expires after 5 minutes; if you're too late, just get a new one.
:::

## Unlinking

- In game: run `/unlink`.
- On Discord: click **Unlink Account** on the panel.

## Two-factor authentication (2FA)

2FA adds an extra layer of protection: every time you join the server, you must enter a code sent through Discord before you can play — so even if someone knows your password, they can't get into your account.

::: info Link first
2FA is only available after you've linked your Discord account.
:::

### Enabling / disabling 2FA

On the Discord panel, click **Enable 2FA** to turn it on (or **Disable 2FA** to turn it off).

### With 2FA on, every time you join

1. You're moved to a waiting room and blinded — you can't move or use other commands yet.
2. The bot sends you a **6-digit code** via Discord DM.
3. Enter it with `/2fa <code>` in game.
4. On success, the blindness is removed and you're teleported back to where you were.

::: warning There's a time limit
You have about **60 seconds** to enter the code, or you'll be kicked from the server. If you get kicked, just rejoin and enter a fresh code.
:::
