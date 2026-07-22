# Luyện tập với Bot

Practice Bot cho phép bạn luyện PvP chủ động với một con bot đối luyện, không cần chờ đối thủ. Bot có thể đánh kiếm hoặc Crystal PvP, và bạn tùy chỉnh gần như mọi thứ: độ khó, giáp, vũ khí, tốc độ, tầm đánh...

## Lệnh

Lệnh chính là `/teaabottrain`, với các alias ngắn gọn `/bottrain`, `/bot`, `/tbt`.

| Lệnh | Chức năng |
|---|---|
| `/bot` hoặc `/bot menu` | Mở GUI cấu hình bot (mọi tùy chỉnh nằm ở đây) |
| `/bot spawn` | Gọi bot ra ngay tại vị trí bạn đang đứng |
| `/bot remove` | Xóa bot đang có của bạn |
| `/bot tpme` | Dịch chuyển bạn tới chỗ bot |
| `/bot tphere` | Kéo bot về chỗ bạn |

::: tip Gõ tắt hay mở GUI đều được
Mọi nút trong GUI (spawn, remove, teleport) đều làm được y hệt bằng lệnh gõ tay ở trên. Dùng cái nào tiện hơn với bạn cũng được.
:::

## Mở menu

Vào máy chủ và chạy:

```text
/bot
```

![Menu Practice Bot của TeaaMC](/train-bot.jpg)

*Menu cấu hình Practice Bot trong game.*

Bấm vào từng ô để đổi giá trị — hầu hết các ô cứ click là xoay vòng qua các lựa chọn, một vài ô dùng chuột trái/phải để tăng/giảm.

## Độ khó

Bot có 3 mức độ khó, click để xoay vòng:

| Độ khó | Phản xạ | Hành vi |
|---|---|---|
| **Easy** | Chậm | Đánh cơ bản, hay hụt đòn, không dùng kỹ thuật nâng cao |
| **Medium** | Trung bình | Biết crit-jump, strafe (đi ngang né đòn), w-tap và combo ở mức vừa |
| **Pro** | Gần như tức thì | PvP nâng cao: strafe/w-tap/né đòn/combo/crystal-combo liên tục, gần như không hụt đòn |

::: tip Tập từ dễ lên khó
Bắt đầu với Easy để làm quen thao tác, luyện từng kỹ năng riêng rồi mới nâng lên Medium/Pro. Các buổi ngắn mà đều thường hiệu quả hơn một buổi quá dài.
:::

## Kiểu chiến đấu (Combat Style)

- **Sword** — PvP cận chiến bằng kiếm thuần túy.
- **Crystal** — Crystal PvP: bot đánh hất người lên rồi cho nổ End Crystal / Respawn Anchor.

Khi chọn Crystal, bạn có thêm 3 tùy chỉnh riêng:

- **Anchor Combos** — bật để bot dùng thêm cả combo nổ Respawn Anchor (không chỉ End Crystal).
- **Explosions Break Blocks** — cho phép vụ nổ phá khối xung quanh hay không.
- **Crystal Cooldown** — thời gian hồi (giây) giữa mỗi combo crystal. Chuột trái tăng, chuột phải giảm.

## Trang bị

Chỉnh giáp cho từng món riêng biệt, mỗi món click để xoay vòng qua **None → Diamond → Netherite**:

- Mũ (Helmet)
- Giáp thân (Chestplate)
- Quần (Leggings)
- Giày (Boots)

Mỗi món giáp còn có ô enchant riêng, xoay vòng qua **None → Protection → Blast Protection** (Blast Protection hữu ích khi luyện Crystal PvP).

### Vũ khí & tay

- **Main Hand** — None / Sword / Totem.
- **Main Hand Knockback** — None / Knockback I / Knockback II (chỉ có tác dụng khi tay chính là kiếm).
- **Off Hand** — None / Shield / Totem.

## Các công tắc (toggle)

Click để bật/tắt:

| Công tắc | Ý nghĩa |
|---|---|
| **Attack Mode** | Bot có chủ động tấn công bạn hay chỉ đứng làm bao cát |
| **Follow Owner** | Bot có đi theo bạn hay không |
| **Unlimited Health** | Bot có totem vô hạn và không thể chết — hợp để luyện combo lâu |
| **Anti-Knockback** | Bot không bị đẩy lùi khi trúng đòn |
| **Slow Falling** | Bot rơi chậm |

## Chỉnh số (chuột trái tăng / chuột phải giảm)

- **Attack Speed** — tốc độ ra đòn.
- **Movement Speed** — tốc độ di chuyển.
- **Reach** — tầm với khi đánh.
- **Follow Distance** — khoảng cách bot giữ khi đi theo bạn.

## Gọi bot ra và bắt đầu

Sau khi chỉnh xong, bấm **SPAWN BOT** trong GUI (hoặc gõ `/bot spawn`) để gọi bot ra tại chỗ bạn đứng. Khi luyện xong, bấm **REMOVE BOT** hoặc gõ `/bot remove`.

::: info Cài đặt được lưu lại
Mọi tùy chỉnh của bạn được lưu theo tài khoản, nên lần sau gọi bot ra sẽ giữ nguyên cấu hình cũ.
:::
