# Trung tâm Phục vụ Hành chính công xã Vô Tranh — Tỉnh Thái Nguyên

Bộ tiện ích số phục vụ **Công dân** và **Cán bộ công chức** xã Vô Tranh, tỉnh Thái Nguyên.

Repo gồm **hai lớp giao diện** dùng chung một nguồn dữ liệu:

| Lớp | Đường dẫn | Vai trò |
|---|---|---|
| Cổng tiện ích | `/index.html` | Trang tổng hợp dạng lưới thẻ, tìm kiếm không dấu, điều hướng theo nhóm |
| Sách điện tử TTHC | `/app/index.html` | Kiosk tra cứu 416 TTHC, chatbot, eform, danh bạ CBCC, QR dịch vụ công |

Trang cổng liên kết thẳng vào các mục tương ứng trong kiosk qua hash (`app/#tthc`, `app/#eform`, `app/#chatbot`, …).

## Nội dung

- **416 thủ tục hành chính** cấp xã, **13 lĩnh vực** do các Bộ quản lý (Nông nghiệp & Môi trường, Tư pháp, Giáo dục & Đào tạo, Nội vụ, Xây dựng, Tài chính, Y tế, Công Thương, Văn hóa – Thể thao – Du lịch, Dân tộc & Tôn giáo, Công an, Thanh tra Chính phủ, Quốc phòng).
- **10 thẻ tiện ích** trong kiosk: Cán bộ – Công chức · Cán bộ các Xóm · Chatbot 24/7 · Khảo sát hài lòng · Quyết định công bố TTHC · Eform mẫu đơn · TTHC cấp Tỉnh/Sở/ngành · TTHC lĩnh vực Đất đai · Sổ tay hướng dẫn DVC trực tuyến · Hỗ trợ Doanh nghiệp – Hộ kinh doanh.
- Cổng tiện ích tổ chức theo **5 nhóm**: Tiện ích số ưu tiên · Liên hệ Hỗ trợ · Hệ thống điều phối & Một cửa điện tử cấp Bộ · Nội bộ & Tiện ích hỗ trợ khác · Thống kê – Báo cáo.
- Tìm kiếm không dấu, chatbot tra cứu theo từ khóa/mã TTHC, in thủ tục, mã QR mở cổng dịch vụ công, khảo sát mức độ hài lòng.

## Cấu trúc

| Tệp | Mô tả |
|---|---|
| `index.html` | Cổng tiện ích (tổng hợp thẻ) |
| `assets/style.css` | Giao diện cổng tiện ích |
| `assets/app.js` | Tìm kiếm, lọc, mở/đóng nhóm, chế độ kiosk |
| `assets/seal.svg` | Biểu trưng xã Vô Tranh |
| `assets/icons/*.png` | Bộ icon thẻ tiện ích |
| `app/index.html` | Ứng dụng Sách điện tử TTHC |
| `app/data.js` | Dữ liệu 416 TTHC + 13 lĩnh vực + cấu hình (`window.KIOSK_DATA`) |
| `app/officials.js` | Danh bạ cán bộ công chức render nội bộ |
| `app/eforms.js` | Danh mục eform mẫu đơn |
| `app/qrcode.js` | Sinh mã QR mở cổng dịch vụ công |

## Chạy thử cục bộ

```bash
python -m http.server 8099
# cổng tiện ích:  http://127.0.0.1:8099/index.html
# sách điện tử:   http://127.0.0.1:8099/app/index.html
```

## Nguồn dữ liệu

- Danh mục TTHC công khai của UBND xã Vô Tranh (Thông báo công bố danh mục TTHC cấp xã).
- Mã tỉnh trên Cổng Dịch vụ công Quốc gia: **H55** (Tỉnh Thái Nguyên).
- Cổng thông tin tham chiếu: <https://votranh.thainguyen.gov.vn/>

## Ghi chú

Trang chỉ chứa dữ liệu công khai (tên thủ tục, mã TTHC, số quyết định công bố, lĩnh vực, cấp thực hiện). Không có thông tin đăng nhập, khóa API, mã bí mật hay dữ liệu cá nhân.
