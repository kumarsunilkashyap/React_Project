import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuPanel = () => {
    return (
        <div className="fixed top-16 left-0 w-64 h-full bg-gray-800 text-white">
            <nav className="flex flex-col p-4">
                <NavLink 
                    to="/dashboard" 
                    className={({ isActive }) => 
                        isActive ? 'bg-gray-700 p-2 rounded' : 'p-2'
                    }
                >
                    Dashboard
                </NavLink>
                <NavLink 
                    to="/account" 
                    className={({ isActive }) => 
                        isActive ? 'bg-gray-700 p-2 rounded' : 'p-2'
                    }
                >
                    Account
                </NavLink>
                <NavLink 
                    to="/password-change" 
                    className={({ isActive }) => 
                        isActive ? 'bg-gray-700 p-2 rounded' : 'p-2'
                    }
                >
                    Password Change
                </NavLink>
            </nav>
        </div>
    );
};

export default MenuPanel;