// components/Navbar.js
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const { loggedInUser, onLogout } = this.props;

    return (
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-xl font-bold">
            Weather Dashboard
          </Link>
          <div className="space-x-4">
            <Link to="/" className="text-white hover:text-blue-200">
              Dashboard
            </Link>
            {loggedInUser ? (
              <>
                <Link to="/profile" className="text-white hover:text-blue-200">
                  Profile
                </Link>
                <Link to="/history" className="text-white hover:text-blue-200">
                  Search History
                </Link>
                <button
                  onClick={onLogout}
                  className="text-white hover:text-blue-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/profile" className="text-white hover:text-blue-200">
                Login/Register
              </Link>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
