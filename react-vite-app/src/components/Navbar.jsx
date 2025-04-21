import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [pendingCount, setPendingCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // สำหรับการเปิด/ปิดเมนูมือถือ

  useEffect(() => {
    const fetchPendingCount = async () => {
      // จำลองข้อมูลการยืม (ควรแทนที่ด้วยการดึงจาก API จริง)
      const mockRequests = [
        { id: 1, status: "pending" },
        { id: 2, status: "approved" },
        { id: 3, status: "pending" },
      ];
      const count = mockRequests.filter(req => req.status === "pending").length;
      setPendingCount(count);
    };

    fetchPendingCount();

    // อัปเดตทุก 10 วินาที (optional สำหรับ real-time)
    const interval = setInterval(fetchPendingCount, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-gray-700 text-white w-full shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* เมนูมือถือ */}
        <div className="flex items-center">
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* เมนูเดสก์ท็อป */}
        <div className={`flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'} lg:flex`}>
          <Link to="/" className="nav-item hover:bg-gray-600 px-4 py-2 rounded-md ">
            <i className="fas fa-home mr-2"></i> <span>หน้าแรก</span>
          </Link>

          <Link to="/equipment" className="nav-item hover:bg-gray-600 px-4 py-2 rounded-md ">
            <i className="fas fa-boxes mr-2"></i> <span>จัดการครุภัณฑ์</span>
          </Link>

          <Link to="/members" className="nav-item hover:bg-gray-600 px-4 py-2 rounded-md ">
            <i className="fas fa-users mr-2"></i> <span>จัดการสมาชิก</span>
          </Link>

          <div className="relative">
            <button 
              className="nav-item flex items-center px-4 py-2 hover:bg-gray-600 rounded-md "
              onClick={() => setDropdownVisible(!dropdownVisible)}
            >
              <i className="fas fa-clipboard-list mr-2"></i>
              <span>จัดการรายการยืม</span>
              <i className="fas fa-chevron-down ml-2"></i>
            </button>
            {dropdownVisible && (
              <div className="absolute bg-gray-700 w-48 z-10 mt-2 rounded-md">
                <Link to="/borrow-list" className="block px-4 py-2 hover:bg-gray-600 border-t border-gray-600">
                  รายการยืม
                </Link>
                <Link to="/return-list" className="block px-4 py-2 hover:bg-gray-600">
                  รายการคืน
                </Link>
              </div>
            )}
          </div>

          <Link to="/verification" className="nav-item hover:bg-gray-600 px-4 py-2 rounded-md ">
            <i className="fas fa-user-check mr-2"></i> <span>กำลังตรวจสอบ</span>
          </Link>

          <Link to="/check" className="relative nav-item hover:bg-gray-600 px-4 py-2 rounded-md ">
            <i className="fas fa-clipboard-check mr-2"></i> 
            <span>ตรวจสอบข้อมูล</span>
            {pendingCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
                {pendingCount}
              </span>
            )}
          </Link>

          <Link to="/completed" className="nav-item hover:bg-gray-600 px-4 py-2 rounded-md ">
            <i className="fas fa-check-circle mr-2"></i> <span>คืนแล้ว</span>
          </Link>

          <Link to="/approval" className="nav-item hover:bg-gray-600 px-4 py-2 rounded-md ">
            <i className="fas fa-thumbs-up mr-2"></i> <span>อนุมัติ</span>
          </Link>

          <Link to="/report" className="nav-item hover:bg-gray-600 px-4 py-2 rounded-md ">
            <i className="fas fa-print mr-2"></i> <span>ค่าปรับ</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
