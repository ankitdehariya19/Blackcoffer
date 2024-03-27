import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiBarChart2, FiSettings } from 'react-icons/fi';

const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-white w-64 p-4  min-h-screen max-h-full">
            <div className="flex items-center mb-8">
                <h1 className="text-2xl font-bold">Dashboard</h1>
            </div>
            <ul className="space-y-4">
                <li>
                    <NavLink to="/" exact="true" activeclassname="text-blue-500" className="flex items-center">
                        <FiHome className="mr-2" />
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/analytics" exact="true" activeclassname="text-blue-500" className="flex items-center">
                        <FiBarChart2 className="mr-2" />
                        Analytics
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings" exact="true" activeclassname="text-blue-500" className="flex items-center">
                        <FiSettings className="mr-2" />
                        Settings
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
