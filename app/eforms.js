/* Eform mẫu đơn — danh mục biểu mẫu dùng tại Bộ phận Một cửa xã Vô Tranh.
   Cấu trúc field: [nhãn, số cột chiếm (1–12), kiểu?]
   kiểu: 'sel' => [{sel:[...]}] ; 'area' => ô lớn nhiều dòng */
window.EFORMS = {
  groups: [
    {key:'hotich',  name:'Hộ tịch',            icon:'fileBadge', color:'#7c3aed'},
    {key:'chungthuc',name:'Chứng thực',         icon:'scale',    color:'#2563eb'},
    {key:'datdai',  name:'Đất đai',             icon:'map',      color:'#16a34a'},
    {key:'ansinh',  name:'An sinh xã hội',      icon:'heart',    color:'#e11d48'},
    {key:'doanhnghiep', name:'Doanh nghiệp – Hộ kinh doanh', icon:'briefcase', color:'#ca8a04'},
    {key:'khieunai',name:'Khiếu nại – Tố cáo',  icon:'shield',   color:'#ea580c'}
  ],

  forms: [
    /* ---------------- HỘ TỊCH ---------------- */
    {id:'khai-sinh', g:'hotich', title:'Tờ khai đăng ký khai sinh',
     doc:'Phụ lục I – Thông tư 04/2020/TT-BTP', kw:'khai sinh',
     rows:[
       [['Họ, chữ đệm, tên người được khai sinh',6],['Giới tính',3,'sel|Nam|Nữ'],['Ngày, tháng, năm sinh',3]],
       [['Nơi sinh (xã/phường, huyện/quận, tỉnh/thành phố)',12]],
       [['Dân tộc',4],['Quốc tịch',4],['Số định danh cá nhân',4]],
       [['Họ, chữ đệm, tên người mẹ',6],['Năm sinh',2],['Dân tộc',2],['Quốc tịch',2]],
       [['Nơi cư trú của người mẹ',12]],
       [['Số định danh cá nhân của người mẹ',12]],
       [['Họ, chữ đệm, tên người cha',6],['Năm sinh',2],['Dân tộc',2],['Quốc tịch',2]],
       [['Nơi cư trú của người cha',12]],
       [['Số định danh cá nhân của người cha',12]],
       [['Họ, chữ đệm, tên người đi khai sinh',6],['Quan hệ với người được khai sinh',6]],
       [['Nơi cư trú của người đi khai sinh',12]],
       [['Ngày, tháng, năm đăng ký khai sinh',12]]
     ]},

    {id:'khai-tu', g:'hotich', title:'Tờ khai đăng ký khai tử',
     doc:'Phụ lục I – Thông tư 04/2020/TT-BTP', kw:'khai tử',
     rows:[
       [['Họ, chữ đệm, tên người chết',8],['Giới tính',4,'sel|Nam|Nữ']],
       [['Số định danh cá nhân của người chết',12]],
       [['Nơi chết (xã/phường, huyện/quận, tỉnh/thành phố)',12]],
       [['Ngày, tháng, năm chết',4],['Giờ chết',4],['Nơi chết (cơ sở y tế / nơi cư trú / nơi khác)',4]],
       [['Nguyên nhân chết',12]],
       [['Họ, chữ đệm, tên người khai',6],['Quan hệ với người chết',6]],
       [['Số định danh cá nhân của người khai',12]],
       [['Nơi cư trú của người khai',12]]
     ]},

    {id:'ket-hon', g:'hotich', title:'Tờ khai đăng ký kết hôn',
     doc:'Phụ lục I – Thông tư 04/2020/TT-BTP', kw:'kết hôn',
     rows:[
       [['Họ, chữ đệm, tên bên nam',8],['Ngày, tháng, năm sinh',4]],
       [['Dân tộc',4],['Quốc tịch',4],['Số định danh cá nhân',4]],
       [['Nơi cư trú',12]],
       [['Họ, chữ đệm, tên bên nữ',8],['Ngày, tháng, năm sinh',4]],
       [['Dân tộc',4],['Quốc tịch',4],['Số định danh cá nhân',4]],
       [['Nơi cư trú',12]],
       [['Ngày, tháng, năm đăng ký kết hôn',6],['Nơi đăng ký kết hôn',6]],
       [['Cam đoan của hai bên về việc đủ điều kiện kết hôn',12,'area']]
     ]},

    {id:'tinh-trang-hon-nhan', g:'hotich', title:'Tờ khai xác nhận tình trạng hôn nhân',
     doc:'Phụ lục I – Thông tư 04/2020/TT-BTP', kw:'tình trạng hôn nhân',
     rows:[
       [['Họ, chữ đệm, tên',8],['Ngày, tháng, năm sinh',4]],
       [['Dân tộc',4],['Quốc tịch',4],['Số định danh cá nhân',4]],
       [['Nơi cư trú',12]],
       [['Trong thời gian cư trú, ông/bà đã',12,'sel|Chưa kết hôn|Đã kết hôn nhưng đã ly hôn|Đã kết hôn nhưng vợ/chồng đã chết|Đang có vợ/chồng']],
       [['Mục đích sử dụng giấy xác nhận',12]],
       [['Đăng ký thường trú tại các địa phương khác (nếu có)',12,'area']]
     ]},

    {id:'nhan-cha-me-con', g:'hotich', title:'Tờ khai đăng ký nhận cha, mẹ, con',
     doc:'Phụ lục I – Thông tư 04/2020/TT-BTP', kw:'nhận cha mẹ con',
     rows:[
       [['Họ, chữ đệm, tên cha (mẹ)',8],['Ngày, tháng, năm sinh',4]],
       [['Nơi cư trú',12]],
       [['Họ, chữ đệm, tên con',8],['Ngày, tháng, năm sinh',4]],
       [['Số định danh cá nhân của con',12]],
       [['Nơi cư trú của con',12]],
       [['Kết luận giám định ADN (nếu có)',12]],
       [['Cam đoan của cha, mẹ về mối quan hệ huyết thống',12,'area']]
     ]},

    {id:'dang-ky-lai-khai-sinh', g:'hotich', title:'Tờ khai đăng ký lại khai sinh',
     doc:'Phụ lục I – Thông tư 04/2020/TT-BTP', kw:'đăng ký lại khai sinh',
     rows:[
       [['Họ, chữ đệm, tên người được khai sinh',8],['Giới tính',4,'sel|Nam|Nữ']],
       [['Ngày, tháng, năm sinh',4],['Dân tộc',4],['Quốc tịch',4]],
       [['Nơi sinh',12]],
       [['Giấy tờ hộ tịch đã được cấp trước đây (tên, số, nơi cấp)',12]],
       [['Lý do đăng ký lại',12,'sel|Được đăng ký trước ngày 01/01/2016|Thay đổi hộ tịch|Giấy tờ hộ tịch gốc bị hư hỏng/mất|Lý do khác']],
       [['Họ, chữ đệm, tên người mẹ',8],['Năm sinh',4]],
       [['Họ, chữ đệm, tên người cha',8],['Năm sinh',4]]
     ]},

    {id:'giay-danh-ca-nhan', g:'hotich', title:'Tờ khai cấp bản sao trích lục hộ tịch',
     doc:'Phụ lục I – Thông tư 04/2020/TT-BTP', kw:'bản sao trích lục',
     rows:[
       [['Họ, chữ đệm, tên người đề nghị',8],['Số định danh cá nhân',4]],
       [['Nơi cư trú',12]],
       [['Loại giấy tờ hộ tịch đề nghị cấp bản sao',12,'sel|Giấy khai sinh|Giấy khai tử|Giấy chứng nhận kết hôn|Giấy xác nhận tình trạng hôn nhân|Trích lục hộ tịch khác']],
       [['Số lượng bản sao đề nghị cấp',4],['Mục đích sử dụng',8]],
       [['Thông tin ghi trên giấy tờ hộ tịch đã cấp (số, ngày, nơi cấp)',12,'area']]
     ]},

    {id:'giay-to-hanh-chinh', g:'hotich', title:'Tờ khai cấp Giấy xác nhận thông tin về cư trú',
     doc:'Biểu mẫu cư trú – Thông tư 55/2021/TT-BCA', kw:'xác nhận cư trú',
     rows:[
       [['Họ, chữ đệm, tên',8],['Số định danh cá nhân',4]],
       [['Địa chỉ thường trú hiện nay',12]],
       [['Địa chỉ tạm trú (nếu có)',12]],
       [['Nội dung đề nghị xác nhận',12,'sel|Thông tin về nơi thường trú|Thông tin về nơi tạm trú|Toàn bộ thông tin về cư trú']],
       [['Mục đích sử dụng',12]]
     ]},

    /* ---------------- CHỨNG THỰC ---------------- */
    {id:'chung-thuc-chu-ky', g:'chungthuc', title:'Đơn đề nghị chứng thực chữ ký',
     doc:'Phụ lục – Nghị định 23/2015/NĐ-CP', kw:'chứng thực chữ ký',
     rows:[
       [['Họ, chữ đệm, tên người đề nghị',8],['Ngày, tháng, năm sinh',4]],
       [['Số định danh cá nhân / Hộ chiếu',6],['Ngày cấp, nơi cấp',6]],
       [['Nơi cư trú',12]],
       [['Giấy tờ cần chứng thực chữ ký (tên loại giấy tờ)',12]],
       [['Tôi cam đoan đã đọc và đồng ý với toàn bộ nội dung của giấy tờ xin chứng thực chữ ký',12,'area']]
     ]},

    {id:'chung-thuc-ban-sao', g:'chungthuc', title:'Đơn đề nghị chứng thực bản sao từ bản chính',
     doc:'Phụ lục – Nghị định 23/2015/NĐ-CP', kw:'chứng thực bản sao',
     rows:[
       [['Họ, chữ đệm, tên người đề nghị',8],['Số định danh cá nhân',4]],
       [['Nơi cư trú',12]],
       [['Tên giấy tờ, văn bản đề nghị chứng thực bản sao',12]],
       [['Số lượng bản sao đề nghị chứng thực',4],['Số lượng bản chính xuất trình',4],['Trang',4]],
       [['Cam đoan về tính xác thực của bản chính',12,'area']]
     ]},

    /* ---------------- ĐẤT ĐAI ---------------- */
    {id:'cap-gcn', g:'datdai', title:'Đơn đăng ký, cấp Giấy chứng nhận quyền sử dụng đất',
     doc:'Mẫu số 04/ĐK – Thông tư 24/2014/TT-BTNMT', kw:'cấp giấy chứng nhận',
     rows:[
       [['Họ, chữ đệm, tên người sử dụng đất / chủ sở hữu tài sản',8],['Số định danh cá nhân',4]],
       [['Địa chỉ thường trú',12]],
       [['Thửa đất số',3],['Tờ bản đồ số',3],['Diện tích (m²)',3],['Địa chỉ thửa đất',3]],
       [['Mục đích sử dụng đất',6],['Nguồn gốc sử dụng đất',6]],
       [['Loại tài sản gắn liền với đất',12]],
       [['Đề nghị cấp Giấy chứng nhận cho',12,'sel|Cá nhân|Hộ gia đình|Cộng đồng dân cư|Tổ chức']],
       [['Văn bản, giấy tờ về quyền sử dụng đất đính kèm',12,'area']]
     ]},

    {id:'bien-dong-dat-dai', g:'datdai', title:'Phiếu yêu cầu đăng ký biến động đất đai',
     doc:'Thông tư 24/2014/TT-BTNMT (mục 4, mục 5 Thông tư 33/2017/TT-BTNMT)', kw:'biến động đất đai',
     rows:[
       [['Họ, chữ đệm, tên người đề nghị',8],['Số định danh cá nhân',4]],
       [['Số Giấy chứng nhận đã cấp',6],['Ngày cấp',3],['Cơ quan cấp',3]],
       [['Thửa đất số',3],['Tờ bản đồ số',3],['Diện tích (m²)',3],['Địa chỉ thửa đất',3]],
       [['Nội dung biến động',12,'sel|Chuyển nhượng|Thừa kế|Tặng cho|Thế chấp|Xóa thế chấp|Đổi tên chủ sử dụng|Thay đổi diện tích|Khác']],
       [['Mô tả nội dung thay đổi',12,'area']]
     ]},

    /* ---------------- AN SINH XÃ HỘI ---------------- */
    {id:'tro-cap-xa-hoi', g:'ansinh', title:'Tờ khai đề nghị trợ cấp xã hội',
     doc:'Biểu mẫu – Nghị định 20/2021/NĐ-CP', kw:'trợ cấp xã hội',
     rows:[
       [['Họ, chữ đệm, tên đối tượng',8],['Ngày, tháng, năm sinh',4]],
       [['Số định danh cá nhân',6],['Giới tính',3,'sel|Nam|Nữ'],['Dân tộc',3]],
       [['Nơi cư trú',12]],
       [['Thuộc đối tượng bảo trợ xã hội',12,'sel|Trẻ em mồ côi|Người cao tuổi|Người khuyết tật|Người đơn thân nuôi con|Bệnh nhân tâm thần|Đối tượng khác']],
       [['Mức trợ cấp đề nghị',6],['Hình thức nhận',6,'sel|Tiền mặt|Chuyển khoản']],
       [['Số tài khoản, ngân hàng (nếu nhận qua chuyển khoản)',12]],
       [['Họ, chữ đệm, tên người giám hộ (nếu có)',8],['Quan hệ',4]]
     ]},

    {id:'ho-ngheo', g:'ansinh', title:'Đơn đề nghị xét công nhận hộ nghèo, hộ cận nghèo',
     doc:'Biểu mẫu – Nghị định 07/2021/NĐ-CP', kw:'hộ nghèo',
     rows:[
       [['Họ, chữ đệm, tên chủ hộ',8],['Số định danh cá nhân',4]],
       [['Địa chỉ hộ gia đình',12]],
       [['Số nhân khẩu trong hộ',3],['Số người trong độ tuổi lao động',3],['Số người không có khả năng lao động',3],['Số người thuộc diện bảo trợ',3]],
       [['Đề nghị xét công nhận',12,'sel|Hộ nghèo|Hộ cận nghèo|Hộ làm nông nghiệp, lâm nghiệp, ngư nghiệp có mức sống trung bình']],
       [['Thu nhập bình quân đầu người/tháng (đồng)',6],['Điểm thiếu hụt dịch vụ xã hội cơ bản',6]],
       [['Nguồn thu nhập chính của hộ',12,'area']]
     ]},

    /* ---------------- DOANH NGHIỆP ---------------- */
    {id:'ho-kinh-doanh', g:'doanhnghiep', title:'Giấy đề nghị đăng ký hộ kinh doanh',
     doc:'Phụ lục III – Thông tư 01/2021/TT-BKHĐT', kw:'hộ kinh doanh',
     rows:[
       [['Tên hộ kinh doanh',8],['Mã số thuế (nếu có)',4]],
       [['Địa điểm kinh doanh',12]],
       [['Số điện thoại',4],['Email',4],['Website (nếu có)',4]],
       [['Họ, chữ đệm, tên chủ hộ kinh doanh',6],['Số định danh cá nhân',6]],
       [['Nơi cư trú của chủ hộ',12]],
       [['Ngành, nghề kinh doanh chính',12]],
       [['Vốn kinh doanh (đồng)',6],['Số lao động',6]],
       [['Danh sách người tham gia hoạt động kinh doanh cùng chủ hộ',12,'area']]
     ]},

    /* ---------------- KHIẾU NẠI ---------------- */
    {id:'khieu-nai', g:'khieunai', title:'Đơn khiếu nại',
     doc:'Luật Khiếu nại số 02/2011/QH13', kw:'khiếu nại',
     rows:[
       [['Họ, chữ đệm, tên người khiếu nại',8],['Số định danh cá nhân',4]],
       [['Địa chỉ liên hệ, số điện thoại',12]],
       [['Cơ quan, tổ chức bị khiếu nại',12]],
       [['Quyết định hành chính / hành vi hành chính bị khiếu nại',12]],
       [['Nội dung khiếu nại',12,'area']],
       [['Yêu cầu của người khiếu nại',12,'area']],
       [['Tài liệu, chứng cứ kèm theo',12]]
     ]},

    {id:'to-cao', g:'khieunai', title:'Đơn tố cáo',
     doc:'Luật Tố cáo số 25/2018/QH14', kw:'tố cáo',
     rows:[
       [['Họ, chữ đệm, tên người tố cáo',8],['Số định danh cá nhân',4]],
       [['Địa chỉ liên hệ, số điện thoại',12]],
       [['Họ, chữ đệm, tên người bị tố cáo',8],['Chức vụ, cơ quan (nếu có)',4]],
       [['Hành vi vi phạm pháp luật bị tố cáo',12,'area']],
       [['Tóm tắt nội dung tố cáo',12,'area']],
       [['Tài liệu, chứng cứ chứng minh',12]]
     ]}
  ]
};
