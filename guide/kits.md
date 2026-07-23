# Kit

TeaaMC cho phép bạn lưu **10 kit tùy chỉnh** và **5 enderchest** riêng, kèm một trình chỉnh sửa (Kit Editor) mạnh để tinh chỉnh từng món đồ: đổi tên, enchant, đổi loại, trim giáp, hiệu ứng mũi tên và hơn thế nữa.

## Mở menu Kit

Chạy `/kit` (alias `/k`) để mở menu chính.

![Menu Kit chính](/images/kit/main-menu.png)

Trong menu:

- **Túi màu xanh lá** = slot kit đã có đồ. **Túi trống** = slot kit chưa lưu gì.
- **Mắt Ender / rương Ender** = 5 slot enderchest của bạn.
- Các nút chức năng ở hàng dưới:

| Nút | Chức năng |
|---|---|
| **Kit Room** | Mở phòng kit dựng sẵn của server (xem bên dưới) |
| **Premade Kits** | Xem các kit công khai / dựng sẵn |
| **Clear Inventory** | Dọn sạch túi đồ của bạn |
| **Repair Items** | Sửa toàn bộ đồ đang cầm |
| **Meow** | 🐱 |

## Load nhanh kit & enderchest

Không cần mở menu, bạn có thể nạp thẳng bằng lệnh:

- `/k1` đến `/k10` (alias `/kit1`–`/kit10`) — nạp 1 trong 10 kit của bạn
- `/ec1` đến `/ec5` (alias `/enderchest1`–`/enderchest5`) — nạp 1 trong 5 enderchest của bạn
- `/enderchest` (alias `/ec`) — xem enderchest thường của bạn

::: info Không có thời gian hồi
Kit và enderchest nạp được bất cứ lúc nào — không có cooldown giữa các lần đổi.
:::

## Chỉnh sửa kit (Kit Editor)

Từ menu `/kit`, click vào một slot để mở **Kit Editor**.

![Kit Editor](/images/kit/kit-editor.png)

- Bày đồ vào khu túi như một kho bình thường; đặt giáp và khiên vào các ô **Helmet / Chestplate / Leggings / Boots / Offhand** bên phải.
- **Import** — nạp nhanh toàn bộ đồ đang mặc/cầm vào kit.
- **Clear** — xóa sạch nội dung đang soạn.
- **Đóng menu là tự lưu** — không cần nút save.

Khi rê chuột lên một món trong editor, bạn sẽ thấy hướng dẫn thao tác:

![Tooltip trong Kit Editor](/images/kit/item-tooltip.png)

- **Shift-Click** — mở trình chỉnh sửa món đồ đó
- **Right-Click** — nhân bản món đồ
- **Drop (Q)** — bỏ món đồ khỏi kit

## Chỉnh sửa từng món (Item Editor)

Shift-Click một món trong Kit Editor để mở **Item Editor** với các tùy chọn:

### Rename — đổi tên
![Đổi tên item](/images/kit/rename.png)

### Amount — đổi số lượng trong stack
![Đổi số lượng](/images/kit/amount.png)

### Enchant — thêm/bớt phù phép
![Enchant](/images/kit/enchant.png)

### Change Type — đổi loại / tier của món (ví dụ đổi màu, đổi cấp vật liệu)
![Change Type](/images/kit/change-type.png)

### Trim — tùy biến trim giáp
Chọn **hoa văn (pattern)** và **vật liệu (material)** rồi bấm áp dụng. Khiên có bộ chỉnh riêng (Shield Customizer) với hoa văn cờ và màu.

![Armor Trim](/images/kit/armor-trim.png)

### Arrow Effect — hiệu ứng mũi tên
Với mũi tên, chọn hiệu ứng (Healing, Poison, Strength, Slow Falling...), cấp độ, và tùy chọn mũi tên phát sáng (spectral).

![Arrow Effect](/images/kit/arrow-effect.png)

Ngoài ra còn có **Variant** (đổi biến thể riêng của món) và **Shulker Contents** (chỉnh đồ bên trong shulker).

::: tip Một số tùy chọn có thể cần quyền
Vài tùy chọn nâng cao (đổi tên, enchant, trim, đổi số lượng, variant) có thể bị giới hạn theo rank/quyền tùy cấu hình server.
:::

## Quản lý kit

| Lệnh | Chức năng |
|---|---|
| `/kit` (`/k`) | Mở menu kit |
| `/swapkit <slot1> <slot2>` | Đổi chỗ nội dung giữa 2 slot kit |
| `/deletekit <slot>` | Xóa 1 slot kit |
| `/sharekit <slot>` | Tạo **mã chia sẻ** cho 1 kit của bạn (cooldown 5 giây) |
| `/shareec <slot>` (`/shareenderchest`) | Tạo mã chia sẻ cho 1 enderchest (cooldown 5 giây) |
| `/copykit <mã>` (`/copyec`) | Nạp 1 kit/enderchest từ mã chia sẻ vào slot của bạn |

## Regear

`/regear` (alias `/rg`) giúp bạn nạp lại đồ đã hao sau khi đánh nhau. Server có 2 chế độ:

- **Chế độ lệnh** — gõ `/rg` là đồ được bù lại ngay.
- **Chế độ shulker** — `/rg` đưa cho bạn một **Regear Shulker**; mở ra và click **Regear Shell** để bù đồ.

![Regear Shulker](/images/kit/regear.png)

::: warning Giới hạn trong combat
Regear có cooldown (mặc định 5 giây) và **bị khóa tạm thời sau khi vừa dính damage** (mặc định 5 giây), nên không thể regear giữa lúc đang bị đánh để ăn gian. Chỉ những loại đồ nằm trong danh sách cho phép (ender pearl, crystal, obsidian, potion, giáp/vũ khí netherite...) mới được bù.
:::

## Kit Room

`/kitroom` mở **phòng kit dựng sẵn** do server chuẩn bị — nơi lấy nhanh các vật phẩm theo chủ đề, chia thành nhiều trang: Crystal, Training, Potions, Armory, Axe & UHC... Bạn cũng mở được phòng này bằng nút **Kit Room** trong menu `/kit`.

## Tiện ích khác

- `/heal` — hồi đầy máu (và no) cho bạn
- `/repair` — sửa toàn bộ đồ đang cầm/mặc

## Kit công khai & dựng sẵn

- `/publickit` (alias `/pk`) — xem và nạp các kit công khai chia sẻ toàn server
- `/publickit <tên>` — nạp trực tiếp 1 kit công khai cụ thể

::: tip Công cụ cho staff & admin
Staff xem kit/enderchest của người chơi khác bằng `/inspectkit <player> <slot>` và `/inspectec <player> <slot>`. Admin quản lý kit khởi đầu cho người mới qua `/premadekit <create|delete|list|edit|setkit>`.
:::
