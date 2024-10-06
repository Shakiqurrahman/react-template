import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-5 px-10">
            <nav className="flex justify-between">
                <h1 className="text-xl font-bold">Photography</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="hover:underline">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:underline">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:underline">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
