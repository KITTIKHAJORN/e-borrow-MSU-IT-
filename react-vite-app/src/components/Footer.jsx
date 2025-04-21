import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-4 w-full mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            <p className="text-lg font-medium">&copy; 2025 ระบบยืมคืนครุภัณฑ์. สงวนลิขสิทธิ์</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-300 transition duration-300">
              <i className="fas fa-question-circle mr-1"></i>
              ช่วยเหลือ
            </a>
            <a href="#" className="hover:text-blue-300 transition duration-300">
              <i className="fas fa-phone-alt mr-1"></i>
              ติดต่อ
            </a>
            <a href="#" className="hover:text-blue-300 transition duration-300">
              <i className="fas fa-info-circle mr-1"></i>
              เกี่ยวกับเรา
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;