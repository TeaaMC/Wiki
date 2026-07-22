# RTP Queue & Duel

TeaaDuel cho bạn 2 cách để đánh nhau: xếp hàng chờ đối thủ ngẫu nhiên, hoặc thách đấu trực tiếp 1 người.

## RTP Queue

Chạy `/rtpqueue` (alias `/rtpq`) để vào hàng đợi random-teleport. Khi ghép được đối thủ, cả 2 sẽ được teleport vào 1 world PvP để đấu.

- `/rtpqueue leave` — rời hàng đợi trước khi được ghép trận
- Nếu server có cấu hình nhiều world, chạy `/rtpqueue <world>` để xếp hàng cho world cụ thể

::: tip Nhớ mang theo đồ
Load sẵn kit bằng `/kit` trước khi vào — xem thêm ở [Kit](/kits).
:::

## Thách đấu 1 người cụ thể

- `/duel <player>` — gửi lời thách đấu tới người chơi khác
- `/duel accept <player>` — chấp nhận lời thách đấu
- `/duel deny <player>` — từ chối lời thách đấu

## Random teleport

`/rtp [world]` teleport bạn tới 1 vị trí an toàn ngẫu nhiên — hữu ích khi cần tìm chỗ trống để đánh nhau hoặc khám phá. Nếu không chỉ định world, nó sẽ dùng world hiện tại (nếu được phép) hoặc world mặc định của server.

::: info ELO xếp hạng
TeaaMC theo dõi điểm ELO từ các trận ranked, hiển thị trên scoreboard/tab list của bạn.
:::