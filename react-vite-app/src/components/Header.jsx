import React, { useState, useEffect } from "react";

const Header = () => {
  const username = "อดิศร";
  const role = "ผู้ดูแลระบบ";

  // สร้างฟังก์ชันสำหรับแสดงเวลาในรูปแบบไทย
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }) + ' น.';
  };
  
  // สร้างฟังก์ชันสำหรับแสดงวันที่ในรูปแบบไทย
  const getCurrentDate = () => {
    const now = new Date();
    return now.toLocaleDateString('th-TH', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      weekday: 'long'
    });
  };

  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000); // อัพเดตเวลาในทุกๆ วินาที

    return () => clearInterval(timer); // ล้าง timer เมื่อ component ถูก unmount
  }, []);

  return (
    <header className="bg-[#D9D9D9] text-black py-4 px-6 shadow-md w-full">
      <div className="flex justify-between items-center">
        {/* โลโก้และชื่อระบบ */}
        <div className="flex items-center gap-3 z-10">
          <img
            src="/logo1.png"
            alt="Logo"
            className="h-24 w-24 object-contain"
          />
          <div className="hidden md:block">
            <h1 className="text-2xl font-bold text-blue-800">ระบบยืมคืนครุภัณฑ์</h1>
            <p className="text-gray-600">คณะวิทยาการสารสนเทศ</p>
          </div>
        </div>

        {/* ข้อมูลผู้ใช้ + รูปโปรไฟล์ + ปุ่มออกจากระบบ */}
        <div className="flex items-center gap-4 z-10">
          {/* รูปโปรไฟล์ */}
          <img
            src="/pro.jpg"
            alt="Profile"
            className="h-14 w-14 rounded-full object-cover"
          />
          
          {/* ชื่อผู้ใช้และสถานะ */}
          <div className="text-sm text-right">
            <div className="font-semibold text-2xl text-black-300">{username}</div>
            <div className="text-lg text-green-600">{role}</div>
          </div>

          {/* ปุ่มออกจากระบบ */}
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-base flex items-center">
            <i className="fas fa-sign-out-alt mr-2"></i>
            ออกจากระบบ
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
