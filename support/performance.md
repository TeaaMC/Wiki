# Hiệu năng, ghost block và tải chunk

TeaaMC vận hành trên **Folia 1.21.4**, nền tảng xử lý nhiều vùng song song để cải thiện khả năng mở rộng. Kiến trúc này đem lại hiệu năng tốt, nhưng cũng có thể phát sinh độ trễ cục bộ trong một số tình huống.

## Vì sao TPS 20 nhưng vẫn có lag?

Trên Folia, mỗi region được xử lý độc lập. Vì vậy, TPS tổng thể có thể ổn định trong khi một khu vực cụ thể có MSPT cao, tải chunk chậm hoặc phản hồi block trễ.

## Các nguyên nhân thường gặp

- **Địa hình và biome tùy chỉnh:** chunk phức tạp cần nhiều thời gian dựng hơn thế giới vanilla.
- **Tương thích plugin:** một số plugin chưa tương thích hoàn toàn với mô hình xử lý vùng của Folia.
- **Region quá tải:** nhiều người chơi, farm hoặc entity tập trung có thể làm tăng tải cho thread cục bộ.
- **Lỗi plugin:** xử lý chưa tối ưu có thể gây delay, ghost block hoặc lỗi tải chunk.

## Biểu hiện bạn có thể gặp

- Chunk tải chậm, đứng hình ngắn hoặc hiển thị chưa chính xác.
- Block đã đặt nhưng chưa xuất hiện ngay.
- Block đã phá nhưng item chưa rơi hoặc trạng thái bị hoàn tác.
- Tương tác có độ trễ dù chỉ số TPS hiển thị vẫn tốt.

## TeaaMC đang làm gì?

Đội ngũ theo dõi TPS, MSPT, log và dữ liệu từ Spark để phát hiện region quá tải, tối ưu định kỳ và xử lý ghost block, chunk glitch hoặc các nguồn gây delay khi có thể.

## Cách báo lỗi hữu ích

Hãy gửi tại kênh **🍏┃forum** và kèm theo:

1. Thời điểm xảy ra lỗi và khu vực trong game.
2. Phiên bản Minecraft bạn đang dùng.
3. Mô tả ngắn các thao tác ngay trước khi lỗi xuất hiện.
4. Video hoặc ảnh chụp nếu có.

::: info Cảm ơn bạn đã kiên nhẫn
Vận hành đồng thời biome tùy chỉnh và Folia là một bài toán kỹ thuật phức tạp. Báo cáo cụ thể từ người chơi giúp đội ngũ khoanh vùng vấn đề nhanh hơn.
:::
