# Sách điện tử Thủ tục hành chính — Xã Vô Tranh, Tỉnh Thái Nguyên

Kiosk tra cứu thủ tục hành chính cấp xã, xây dựng cho **UBND xã Vô Tranh, tỉnh Thái Nguyên**.

## Nội dung

- **416 thủ tục hành chính** cấp xã, trích từ danh mục công khai của UBND xã Vô Tranh.
- **13 lĩnh vực** do các Bộ quản lý (Nông nghiệp & Môi trường, Tư pháp, Giáo dục & Đào tạo, Nội vụ, Xây dựng, Tài chính, Y tế, Công Thương, Văn hóa – Thể thao – Du lịch, Dân tộc & Tôn giáo, Công an, Thanh tra Chính phủ, Quốc phòng).
- **10 thẻ tiện ích**: Cán bộ – Công chức · Cán bộ các Xóm · Chatbot 24/7 · Khảo sát hài lòng · Quyết định công bố TTHC · Eform mẫu đơn · TTHC cấp Tỉnh/Sở/ngành · TTHC lĩnh vực Đất đai · Sổ tay hướng dẫn DVC trực tuyến · Hỗ trợ Doanh nghiệp – Hộ kinh doanh.
- Tìm kiếm không dấu, chatbot tra cứu theo từ khóa/mã TTHC, in thủ tục, khảo sát mức độ hài lòng.

## Cấu trúc

| Tệp | Mô tả |
|---|---|
| `index.html` | Toàn bộ ứng dụng (HTML + CSS + JS, không phụ thuộc build) |
| `data.js` | Dữ liệu 416 TTHC + 13 lĩnh vực + cấu hình (`window.KIOSK_DATA`) |

## Chạy thử cục bộ

```bash
python -m http.server 8099
# mở http://127.0.0.1:8099/index.html
```

## Nguồn dữ liệu

- Danh mục TTHC công khai của UBND xã Vô Tranh (Thông báo công khai danh mục TTHC xã Vô Tranh).
- Mã tỉnh trên Cổng Dịch vụ công Quốc gia: **H55** (Tỉnh Thái Nguyên).
- Cổng thông tin tham chiếu: <https://votranh.thainguyen.gov.vn/>

## Ghi chú

Trang chỉ chứa dữ liệu công khai (tên thủ tục, mã TTHC, số quyết định công bố, lĩnh vực, cấp thực hiện). Không có thông tin đăng nhập, khóa API hay dữ liệu cá nhân.
