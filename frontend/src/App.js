import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar'; // Import Sidebar component
import DashboardPage from './pages/DashboardPage/DashboardPage';
import Analytics from './pages/Analytics/Analytics';
import Settings from './pages/Settings/Settings';

const App = () => {
    return (
        <Router>
            <div className="app flex">
                <Sidebar /> 
                <Routes>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
