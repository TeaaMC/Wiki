# Hiệu năng, ghost block và tải chunk

TeaaMC chạy trên **Canvas 26.1.2** — một bản server nền Paper, xử lý đa luồng theo từng vùng (region) kiểu Folia, dùng scheduler **AFFINITY** và chạy trên Java 25. Nói ngắn gọn: mỗi thế giới được chia thành nhiều region tick song song trên nhiều luồng, nên server cõng được nhiều người mà vẫn giữ nhịp. Đổi lại, đôi khi độ trễ chỉ xuất hiện cục bộ ở một khu vực chứ không phải cả server.

## Phần cứng

- **CPU:** AMD Ryzen Threadripper 3960X — 24 nhân / 48 luồng
- **RAM:** 24 GB (JVM được cấp 16 GB heap)
- **Nền tảng:** Linux (amd64), Java 25 (Eclipse Adoptium)

## Region hoạt động thế nào

Thay vì cả server chạy trên một luồng như bản vanilla, Canvas cắt mỗi thế giới thành các region, mỗi region tự tick trên luồng riêng. Vì thế TPS và MSPT được đo **theo từng region**, không phải một con số chung.

Đây là một lần đo thực tế từ *Server Health Report* trong game:

- 5 người online, 3 thế giới (`mushroom_fields`, `plains`, `spawn`), tổng 4 region
- TPS min / median / max: **20.00 / 20.00 / 20.00**
- Tổng tải: **~4.6% trên 600%** — tức đang dùng chưa tới 5% của 6 luồng region, còn rất nhiều dư địa

Report này cũng liệt kê các region tải cao nhất (kèm toạ độ, số chunk, người chơi, entity) để đội ngũ nhảy tới đúng chỗ khi cần soi.

## Vì sao TPS vẫn 20 mà thỉnh thoảng vẫn lag?

Vì "TPS 20" là con số tổng thể đang ổn. Nhưng một region cụ thể vẫn có thể bị MSPT nhảy vọt trong tích tắc, đang gen hoặc tải chunk, hay dính tương tác chéo giữa các region. Bạn thấy giật đúng ngay khu đó, trong khi chỉ số TPS chung vẫn đẹp.

## Nguyên nhân thường gặp

- **Địa hình & biome tùy chỉnh:** chunk phức tạp mất nhiều thời gian dựng hơn thế giới vanilla.
- **Tương thích plugin:** một số plugin chưa hợp hoàn toàn với mô hình xử lý theo region.
- **Region quá tải:** đông người, farm hay entity dồn vào một khu làm nặng luồng cục bộ đó.
- **Lỗi plugin:** xử lý chưa tối ưu có thể gây delay, ghost block hoặc lỗi tải chunk.

## Biểu hiện bạn có thể gặp

- Chunk tải chậm, đứng hình một nhịp, hoặc hiển thị chưa đúng.
- Đặt block xong nhưng chưa thấy hiện ngay.
- Phá block nhưng item chưa rơi, hoặc block bị hiện lại.
- Thao tác hơi trễ dù chỉ số TPS vẫn tốt.

## TeaaMC đang làm gì

Đội ngũ theo dõi liên tục bằng **spark** (CPU, TPS, entity, chunk theo thời gian) và *Server Health Report* để bắt đúng region đang tải cao, tối ưu định kỳ, và xử lý ghost block, chunk glitch hay các nguồn gây delay khi có thể.

## Cách báo lỗi hữu ích

Gửi tại kênh **forum** trên Discord, kèm theo:

1. Thời điểm và khu vực trong game lúc xảy ra lỗi.
2. Phiên bản Minecraft bạn đang dùng.
3. Mô tả ngắn những gì bạn vừa làm ngay trước đó.
4. Video hoặc ảnh chụp nếu có.

::: info Cảm ơn bạn đã kiên nhẫn
Chạy biome tùy chỉnh trên nền đa luồng theo region là một bài toán kỹ thuật thật sự phức tạp. Một báo cáo cụ thể từ bạn giúp đội ngũ khoanh vùng vấn đề nhanh hơn nhiều.
:::
