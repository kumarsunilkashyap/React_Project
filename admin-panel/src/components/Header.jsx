import React from 'react';

const Header = () => {
    return (
        <header className="sticky top-0 left-0 right-0 bg-white shadow-md flex justify-between items-center p-4">
            <div className="logo">
                <h1 className="text-xl font-bold">Admin Panel</h1>
            </div>
            <div className="flex space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Password Change</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Account</button>
            </div>
        </header>
    );
};

export default Header;