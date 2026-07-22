# Kit

TeaaMC cho phép bạn lưu 10 kit tùy chỉnh hoàn toàn, cùng 5 enderchest dựng sẵn để lên đồ nhanh.

## Mở menu kit

Chạy `/kit` để mở GUI chỉnh sửa kit, nơi bạn tạo và chỉnh sửa các kit của riêng mình.

## Load kit hoặc enderchest

- `/k1` đến `/k10` — load 1 trong 10 slot kit tùy chỉnh của bạn
- `/ec1` đến `/ec5` — load 1 trong 5 enderchest dựng sẵn (item cố định, không chỉnh sửa được)
- `/enderchest` (alias `/ec`) — xem enderchest thường của bạn (chỉ xem, không load gì cả)

::: info Không có thời gian hồi
Kit và enderchest có thể load bất cứ lúc nào — không có cooldown giữa các lần đổi.
:::

## Quản lý kit

| Lệnh | Chức năng |
|---|---|
| `/kit` | Mở GUI chỉnh sửa để tạo/sửa kit `k1`–`k10` |
| `/swapkit <slot1> <slot2>` | Đổi chỗ nội dung giữa 2 slot kit |
| `/deletekit <slot>` | Xóa 1 slot kit |
| `/copykit <mã>` | Copy 1 kit từ mã chia sẻ vào slot của bạn |
| `/sharekit <slot>` | Tạo mã chia sẻ cho 1 kit của bạn (cooldown 5 giây) |
| `/shareec <slot>` | Tạo mã chia sẻ cho 1 enderchest của bạn (cooldown 5 giây) |

## Regear

Nếu server đang cấu hình ở chế độ "command mode," `/regear` (alias `/rg`) sẽ nạp lại ngay đồ cho kit bạn đang dùng — hữu ích sau khi đánh nhau tốn đồ.

::: warning Giới hạn trong combat
Regear có cooldown giữa các lần dùng và bị khóa tạm thời sau khi vừa dính damage, nên không thể regear giữa trận đấu để ăn gian.
:::

## Kit công khai / kit dựng sẵn

- `/publickit` (alias `pk`, `premadekit`) — xem và load các kit công khai chia sẻ toàn server
- `/publickit <tên>` — load trực tiếp 1 kit công khai cụ thể

::: tip Công cụ cho staff & admin
Staff có thể xem kit hoặc enderchest của người chơi khác bằng `/inspectkit <player> <slot>` và `/inspectec <player> <slot>`. Admin quản lý kit khởi đầu cho người chơi mới qua `/premadekit <create|delete|list|edit|setkit>`.
:::