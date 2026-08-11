# Kit

Ở TeaaMC, mỗi người tự dựng kit PvP của riêng mình từ kho đồ (Kit Room) mà server chuẩn bị sẵn, lưu lại, rồi gọi ra dùng trong trận. Mặc định bạn có **10 kit** và **5 rương ẩn (enderchest)**.

::: warning Ba điều nhớ trước khi nghịch kit
- **Load kit là GHI ĐÈ.** Khi bạn load một kit, toàn bộ túi đồ hiện tại bị thay thế — đồ đang cầm sẽ mất. Cất đồ vào rương trước khi load.
- **Không có nút "Lưu".** Trong Kit Editor, kit được lưu khi bạn **đóng GUI** (`Esc`) hoặc bấm nút đỏ **Back**. Nút Back là *lưu và thoát*, không phải huỷ.
- **Túi đồ "biến mất" là bình thường.** Khi mở Kit Editor, đồ thật của bạn được cất tạm và thay bằng kit đang dựng. Đóng GUI là đồ thật quay lại nguyên vẹn.
:::

## Menu chính — `/kit`

Gõ `/kit` (hoặc `/k`) để mở menu chính. Hàng trên là 10 kit, hàng dưới là 5 rương ẩn.

![Menu Kit](/images/kit/kit-menu.jpg)

| Biểu tượng | Ý nghĩa |
|---|---|
| Shulker xanh lá | Kit đã có đồ |
| Shulker tối màu | Kit còn trống |
| Rương Ender | Enderchest đã có đồ |
| Mắt Ender | Enderchest còn trống |

Cách bấm giống nhau cho cả kit lẫn enderchest:

| Thao tác | Kết quả |
|---|---|
| **Chuột trái** | Load vào người và đóng menu |
| **Chuột phải** | Mở Kit Editor để sửa |
| **Shift + chuột phải** | Xoá kit (không hỏi lại, không hoàn tác được) |
| Bấm ô trống | Mở Kit Editor để tạo kit mới |

![Hướng dẫn thao tác hiện khi rê chuột lên một kit](/images/kit/kit-menu-actions.jpg)

## Load nhanh trong trận

Không cần mở menu, bạn nạp thẳng bằng lệnh:

- `/k1` đến `/k10` — load nhanh kit số 1–10
- `/ec1` đến `/ec5` — load nhanh rương ẩn số 1–5
- `/ec` — mở xem rương ẩn thường

::: info Không có thời gian hồi
Kit và enderchest load được bất cứ lúc nào, không có cooldown giữa các lần đổi.
:::

## Dựng và sửa kit — Kit Editor

Mở bằng cách **chuột phải** vào một ô kit trong `/kit`, hoặc gõ `/kitroom editor` rồi chọn ô muốn sửa.

![Kit Editor](/images/kit/kitroom-weapons.jpg)

Màn hình chia hai phần:

- **Nửa trên** là kho đồ của server (Kit Room). Đồ ở đây **vô hạn** — lấy xong ô tự đầy lại. Cột phải có tab để đổi trang/nhóm đồ.
- **Nửa dưới là túi đồ của bạn = kit đang dựng.** Sắp xếp thế nào thì lúc load ra sẽ đúng y như vậy. Một kit gồm **41 ô**: 36 ô túi đồ, 4 món giáp và 1 ô tay phụ.

| Thao tác trong Editor | Kết quả |
|---|---|
| Kéo/bấm đồ ở kho trên xuống túi | Lấy đồ vào kit |
| **Shift + chuột trái** vào đồ trong kit | Mở **Item Editor** (đổi tên, phù phép, đổi loại…) |
| **Chuột phải** vào đồ trong kit (tay không cầm gì) | Nhân bản món đó ra con trỏ |
| **Phím Q** khi trỏ vào ô kit | Xoá ô đó |
| Ném ra vùng trống ngoài khung | Xoá món đang cầm trên chuột |
| Nút đỏ **Back** hoặc `Esc` | Lưu kit và thoát |

::: tip Xoá thoải mái
Đồ trong Kit Editor chỉ là bản sao từ kho — xoá bao nhiêu cũng được, không đụng tới đồ thật của bạn.
:::

### Kho đồ có sẵn những gì

Kho đồ chia thành nhiều nhóm, đổi bằng tab ở cột phải. Ví dụ các nhóm:

**Weapons** — kiếm, rìu, cúp, xẻng, đinh ba…

![Kho đồ — Weapons](/images/kit/kitroom-weapons.jpg)

**Crystal** — end crystal, obsidian, respawn anchor, ngọc ender, totem, TNT…

![Kho đồ — Crystal](/images/kit/kitroom-crystal.jpg)

**Armors** — giáp kim cương/netherite, elytra, shulker…

![Kho đồ — Armors](/images/kit/kitroom-armors.jpg)

**Food & Potion** — táo vàng, đồ ăn, các loại bình thuốc và bình ném…

![Kho đồ — Food & Potion](/images/kit/kitroom-food-potion.jpg)

**Random** — cung, nỏ, mũi tên, tuyết…

![Kho đồ — Random](/images/kit/kitroom-random.jpg)

### Item Editor

Shift + chuột trái vào một món trong kit để mở. Chỉ những nút hợp với món đó mới hiện:

| Nút | Công dụng |
|---|---|
| **Rename** | Đổi tên món đồ |
| **Amount** | Đổi số lượng trong stack |
| **Enchant** | Thêm/bớt phù phép |
| **Change Type** | Đổi chất liệu (ví dụ sắt → kim cương) |
| **Trim** | Đổi hoa văn giáp |
| **Variant** | Đổi biến thể (mũi tên, pháo hoa, bình thuốc…) |
| **Shulker** | Mở và sắp xếp đồ bên trong shulker box |

Một vài ví dụ:

![Đổi tên item](/images/kit/rename.png)

![Thêm phù phép](/images/kit/enchant.png)

![Đổi hoa văn giáp](/images/kit/armor-trim.png)

## Rương ẩn (Enderchest)

Rương ẩn hoạt động y hệt kit, chỉ khác hai điểm:

- Mỗi rương ẩn có **27 ô**, và load ra sẽ vào **rương ẩn** của bạn chứ không phải túi đồ.
- Khi sửa rương ẩn, **9 ô thanh công cụ bị phủ kính đỏ** — đó chỉ là lớp che, đồ thật của bạn vẫn còn nguyên bên dưới và được trả lại khi đóng GUI.

## Bù đồ & tiện ích trong trận

| Lệnh | Công dụng |
|---|---|
| `/regear` (`/rg`) | Bù lại đồ tiêu hao của kit vừa dùng |
| `/repair` | Sửa đồ đang mặc/cầm |
| `/heal` | Hồi máu |

![Regear Shulker](/images/kit/regear.png)

`/regear` **không** load lại cả kit. Nó chỉ bù những món tiêu hao mà server cho phép (thường là ngọc ender, bình thuốc, block…), và chỉ bù vào ô đang trống hoặc đang chứa đúng món đó. Vì vậy:

- Phải **load kit ít nhất một lần** thì mới regear được.
- Đang giao tranh thì **không regear được** — mặc định phải ra khỏi combat 5 giây.
- Có **thời gian chờ giữa hai lần** dùng (mặc định 5 giây).
- Nếu server bật chế độ shulker: `/rg` cho bạn một **Regear Shulker** — đặt xuống đất rồi bấm vào vỏ shulker để bù đồ.

## Chia sẻ, sao chép, sắp xếp

| Lệnh | Công dụng |
|---|---|
| `/sharekit <1-10>` | Tạo **mã 6 ký tự** cho kit đó (ai cũng dùng được, hết hạn sau 15 phút) |
| `/shareec <1-5>` | Như trên, nhưng cho rương ẩn |
| `/copykit <mã>` | Nhận kit/rương ẩn từ mã người khác gửi |
| `/swapkit <ô1> <ô2>` | Đổi chỗ hai kit |
| `/deletekit <ô>` | Xoá một kit |
| `/publickit` (`/pk`) | Xem và load các kit dựng sẵn của server |

::: warning `/copykit` cũng ghi đè túi đồ
`/copykit` ghi đè toàn bộ túi đồ y như load kit — cất đồ trước khi dùng. Kit nhận được chưa được lưu vào ô nào; muốn giữ thì mở Kit Editor và dựng lại.
:::

## Kho đồ — `/kitroom`

- `/kitroom open` — mở kho đồ và lấy đồ thẳng vào túi (đồ vô hạn)
- `/kitroom editor` — chọn kit/rương ẩn muốn sửa, rồi mở Kit Editor cho ô đó

## Gặp vấn đề?

**"Sửa kit xong nhưng không thấy nút Lưu."**
Không có nút Lưu. Đóng GUI (`Esc`) hoặc bấm nút đỏ **Back** là kit tự lưu.

**"Mở Kit Editor thì túi đồ biến mất!"**
Đồ được cất tạm và trả lại khi bạn đóng GUI. Đừng thoát game giữa chừng — cứ đóng GUI bình thường.

**"Load kit xong mất hết đồ đang có."**
Load kit ghi đè toàn bộ túi đồ. Luôn cất đồ vào rương trước khi load.

**"Không lấy được món X từ kho."**
Server có thể giới hạn: chỉ những món có trong Kit Room mới được lưu vào kit, và một số món bị cấm hoàn toàn. Món bị cấm sẽ tự bị gỡ khỏi kit khi lưu.

**"`/rg` báo phải chờ."**
Bạn vừa bị đánh (chờ hết combat) hoặc vừa regear xong (chờ hết cooldown).

**"Lệnh báo không có quyền."**
Quyền do admin cấp — hỏi admin server của bạn.

## Bảng lệnh đầy đủ

| Lệnh | Viết tắt | Công dụng |
|---|---|---|
| `/kit` | `/k` | Mở menu chính |
| `/k1` … `/k10` | `/kit1`… | Load kit 1–10 |
| `/ec1` … `/ec5` | `/enderchest1`… | Load rương ẩn 1–5 |
| `/ec` | `/enderchest` | Xem rương ẩn |
| `/kitroom open` | | Mở kho đồ, lấy đồ trực tiếp |
| `/kitroom editor` | | Chọn kit để sửa |
| `/publickit` | `/pk` | Kit dựng sẵn của server |
| `/sharekit <1-10>` | | Tạo mã chia sẻ kit |
| `/shareec <1-5>` | `/shareenderchest` | Tạo mã chia sẻ rương ẩn |
| `/copykit <mã>` | `/copyec` | Nhận kit/rương ẩn từ mã |
| `/swapkit <ô1> <ô2>` | | Đổi chỗ hai kit |
| `/deletekit <ô>` | | Xoá kit |
| `/regear` | `/rg` | Bù đồ tiêu hao |
| `/repair` | | Sửa đồ |
| `/heal` | | Hồi máu |
