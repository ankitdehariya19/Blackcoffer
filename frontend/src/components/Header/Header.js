import React from 'react';

const Header = () => {
  return (
    <header className=" text-white py-4 px-8">
      <div className="flex flex-col items-start justify-between">
        <div className="w-full flex justify-end p-4">
          <div className="flex items-center space-x-4">
            <span>Welcome, Admin</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Logout</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
