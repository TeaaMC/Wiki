# Crystal Royale

Crystal Royale là chế độ **battle royale** của TeaaMC — cả sảnh nhảy dù xuống bản đồ, nhặt đồ, dùng vật phẩm đặc biệt, và vòng bão (storm) thu hẹp dần cho tới khi chỉ còn 1 người (hoặc 1 team) sống sót.

## Tham gia trận đấu

Khi host mở queue, bạn sẽ thấy thông báo trong chat với nút bấm nhanh:

![Queue mở trong chat](/images/crystal-royale/queue.jpg)

1. Chờ host mở queue (`/queue`).
2. Chạy `/join` (hoặc `/crystal join`, hoặc bấm **[CLICK TO JOIN]** trong chat) để vào hàng đợi.
3. Vào nhầm thì `/leave` để rời trước khi trận bắt đầu.

Trận đấu bắt đầu sau khi đếm ngược (mặc định 120 giây), sức chứa tối đa 100 người.

::: warning Canh đúng thời điểm
`/join` chỉ hoạt động khi queue đang mở (đang chờ hoặc đang đếm ngược). Chưa có queue nào mở thì phải chờ staff mở trận mới.
:::

## Chơi theo team

Bạn có thể lập team trước khi trận bắt đầu. Chạy `/team` để mở menu team.

**Tạo team:** bấm ô kính xanh lá **Create your team** để tạo team và làm leader.

![Tạo team](/images/crystal-royale/team-create.jpg)

**Mời thành viên:** là leader, bấm ô **Invite members**, rồi gõ tên người chơi vào chat để gửi lời mời. Người được mời gõ `/team accept` để vào.

![Mời thành viên](/images/crystal-royale/team-invite.jpg)

Một team tối đa **5 người**. Chỉ leader mới mời/quản lý thành viên (thăng cấp, kick). Team chỉ tạo/sửa được khi còn ở lobby — trận bắt đầu là đội hình bị khóa.

Bạn cũng dùng lệnh trực tiếp: `/team invite`, `/team accept`, `/team leave`, `/team info`.

::: tip Không phải leader?
Thành viên thường muốn rời team trước trận thì mở `/team`, xem team mình rồi bấm nút **Rời team** (hoặc `/team leave`).
:::

## Nhảy dù vào trận

Đầu mỗi trận, cả sảnh được một con **Ghast khổng lồ** chở bay ngang bản đồ ở độ cao lớn. Nhấn **SHIFT** để nhảy khỏi Ghast — bạn sẽ bung **dù (gà con)** và lượn xuống:

- Di chuyển chuột để **lái theo hướng nhìn**.
- Sau vài giây trên dù, nhấn **SHIFT** lần nữa để nhảy khỏi dù rơi nhanh xuống.
- Không bị sát thương rơi khi tiếp đất bằng dù.

Chọn điểm đáp khôn ngoan: gần đồ tốt nhưng dễ đụng độ, hay xa để an toàn lên đồ từ từ.

## Vòng bão (Storm)

Một vòng bão bao quanh khu vực chơi và **thu hẹp dần**, ép mọi người lại gần nhau. Đứng ngoài vùng an toàn sẽ mất máu, nên luôn để ý mép vùng.

![Viền vùng an toàn](/images/crystal-royale/border-normal.jpg)

Bật `/zonebar` để hiện khoảng cách tới mép vùng ngay trên action bar (*Near zone edge: X blocks*).

Ở giai đoạn cuối, vòng bão co về rất nhỏ và di chuyển — trận đấu dồn về một điểm quyết định:

![Viền bão giai đoạn cuối](/images/crystal-royale/border-final.gif)

## Vật phẩm đặc biệt

Nhặt trong rương và **airdrop** rải khắp bản đồ. Các vật phẩm chính:

| Vật phẩm | Tác dụng |
|---|---|
| **Speed IV** | Tăng Tốc Độ IV trong 10 giây |
| **Launch Pad** | Đặt xuống đất để bắn mình bay lên trời |
| **Feather Dash** | Chuột phải để lướt nhanh theo hướng nhìn |
| **Gravity Grenade** | Ném ra để hất tung người chơi xung quanh |
| **Hotbar Scrambler** | Bắn trúng đối thủ để xáo trộn hotbar của họ |
| **Scrambler Arrow** | Mũi tên có hiệu ứng xáo trộn hotbar |
| **Swap Egg** | Ném vào người chơi để **đổi vị trí** (kiếm từ airdrop) |
| **Anti-Pearl Rod** | Khóa Ender Pearl của đối thủ trong 5 giây |
| **Sharpness Book** | Cộng thêm 1 cấp Sắc Bén cho kiếm |
| **Smithing Scroll** | Nâng cấp một món giáp đang mặc |

::: tip Phần thưởng khi hạ gục
Hạ gục đối thủ cho bạn hiệu ứng **Regeneration** hồi máu ngắn — chủ động giao tranh khi có lợi thế.
:::

## Hồi sinh đồng đội

`/revive [player]` hồi sinh một đồng đội đã gục. Mỗi lần hồi sinh tốn **14 Totem of Undying** (lấy từ túi bạn), và mỗi người chỉ được hồi sinh tối đa **3 lần / trận**.

Nếu bị rớt mạng giữa trận, `/rejoin` đưa bạn trở lại trận đang diễn ra (hoặc chuyển sang xem). Bạn có khoảng 3 phút trước khi bị loại hẳn.

## Xem trận (spectate)

- `/spectate` (alias `/spec`) — xem trận đang diễn ra
- `/stopspectate` (alias `/stopspec`, `/unspectate`) — thoát xem, quay lại lobby

## Thống kê & phần thưởng

Chạy `/stats` để xem thống kê của bạn (Kills / Deaths / Games / Wins), hoặc `/stats <player>` để xem người khác. Thông tin này cũng hiện khi rê chuột lên đầu người chơi trong menu team.

![Thống kê người chơi](/images/crystal-royale/stats.jpg)

Kết thúc trận, bạn nhận **Shards**: người thắng được thưởng nhiều nhất (giảm dần theo thứ hạng) cộng thêm shard cho mỗi mạng hạ gục; người không thắng vẫn có shard tham gia.

## Lệnh tiện ích

| Lệnh | Chức năng |
|---|---|
| `/nightvision` (`/nv`) | Bật/tắt Night Vision trong lobby |
| `/zonebar` | Bật/tắt hiển thị khoảng cách mép vùng an toàn |
| `/killmsg` | Bật/tắt thông báo hạ gục/tử vong trong chat |
| `/shardmsg` | Bật/tắt hiển thị shard người khác kiếm được |
| `/discord` | Lấy link Discord của server |
