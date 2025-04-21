import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // We're still using the Sidebar file, but it's now a navbar
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BorrowList from './pages/BorrowList';
import Managepro from './pages/Managepro';
import ManageUser from './pages/ManageUser';
import CheckInfo from './pages/CheckInfo';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Navbar />
        <main className="flex-grow p-6 mt-6 mb-6 mx-4 bg-gray-50 rounded-lg shadow-md">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/borrow-list" element={<BorrowList />} />
            <Route path="/equipment" element={<Managepro />} />
            <Route path="/members" element={<ManageUser />} />
            <Route path="/Check" element={<CheckInfo />} />

            
            {/* Add more routes as needed for the new menu items */}

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;