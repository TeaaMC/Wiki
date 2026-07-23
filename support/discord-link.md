# Liên kết Discord & 2FA

Liên kết tài khoản Minecraft với Discord để nhận role **Linked**, rank trong game, đồng bộ rank ↔ role tự động, và mở khóa tính năng bảo mật **2FA**. Trang này hướng dẫn cách liên kết và bật 2FA.

## Bảng điều khiển trên Discord

Trên Discord có một bảng (panel) với các nút để liên kết và quản lý bảo mật:

![Panel Discord của TeaaMC](/images/discord/panel.jpg)

- **Link Account** — liên kết tài khoản Minecraft
- **Unlink Account** — hủy liên kết
- **Enable 2FA** / **Disable 2FA** — bật / tắt xác thực hai bước

## Cách liên kết

Có 2 cách, chọn cách nào cũng được.

### Cách 1: Bắt đầu từ Discord (khuyến nghị)

1. Bấm nút **Link Account** trên panel. Bot báo đã gửi mã qua tin nhắn riêng (DM):

   ![Bấm Link Account](/images/discord/panel-link-dm.jpg)

2. Mở DM của bot để lấy mã liên kết (mã có hạn **5 phút**):

   ![Mã liên kết trong DM](/images/discord/link-code-dm.jpg)

3. Vào máy chủ và chạy `/link <mã>` — ví dụ `/link 975J5U`.

### Cách 2: Bắt đầu từ trong game

1. Vào máy chủ và chạy `/link` (không kèm gì).
2. Server đưa cho bạn một mã (có hạn **5 phút**):

   ![Lệnh /link trong game](/images/discord/ingame-link.jpg)

3. Gửi mã đó vào **DM của bot** trên Discord.

### Liên kết thành công

Dù dùng cách nào, khi xong bạn sẽ thấy xác nhận ở cả hai phía — trong game và trên Discord:

![Liên kết thành công trong game](/images/discord/linked-ingame.jpg)

![Liên kết thành công trên Discord](/images/discord/linked-discord.jpg)

Bạn được cấp role **Linked** trên Discord và rank tương ứng trong game.

::: warning Giữ mã riêng tư
Mã liên kết chỉ dành cho bạn — không gửi cho người khác. Mã hết hạn sau 5 phút; nếu trễ, chỉ cần lấy mã mới.
:::

## Hủy liên kết

- Trong game: chạy `/unlink`.
- Trên Discord: bấm nút **Unlink Account** trên panel.

## Xác thực hai bước (2FA)

2FA thêm một lớp bảo vệ: mỗi lần bạn vào máy chủ, bạn phải nhập mã gửi qua Discord thì mới chơi được — kể cả khi ai đó biết mật khẩu, họ cũng không vào được tài khoản của bạn.

::: info Cần liên kết trước
2FA chỉ dùng được sau khi bạn đã liên kết tài khoản Discord.
:::

### Bật / tắt 2FA

Trên panel Discord, bấm **Enable 2FA** để bật (hoặc **Disable 2FA** để tắt).

### Khi 2FA đang bật, mỗi lần vào server

1. Bạn được đưa vào một phòng chờ và bị làm mờ mắt (blindness) — chưa di chuyển hay dùng lệnh khác được.
2. Bot gửi cho bạn một **mã 6 số** qua DM Discord.
3. Nhập mã bằng lệnh `/2fa <mã>` trong game.
4. Xác minh đúng: mờ mắt được gỡ và bạn được đưa về vị trí cũ.

::: warning Có giới hạn thời gian
Bạn có khoảng **60 giây** để nhập mã, quá thời gian sẽ bị kick khỏi server. Nếu bị kick, cứ vào lại và nhập mã mới.
:::
