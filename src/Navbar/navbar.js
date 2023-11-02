
import React from 'react';
import './navbar.css';

const navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">CRUD Supabase Tutorial</div>
            <ul className="nav-links">
                <li><a href="/projects">Projects</a></li>
            </ul>
        </nav>
    );
};

export default navbar;
