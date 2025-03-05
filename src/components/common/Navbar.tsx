"use client"

import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="SafeStart Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/about-us"
            className={({ isActive }) => (isActive ? "text-accent" : "text-gray-700 hover:text-accent")}
          >
            About Us
          </NavLink>
          <NavLink
            to="/personal-safety"
            className={({ isActive }) => (isActive ? "text-accent" : "text-gray-700 hover:text-accent")}
          >
            Personal Safety
          </NavLink>
          <NavLink
            to="/legal-awareness"
            className={({ isActive }) => (isActive ? "text-accent" : "text-gray-700 hover:text-accent")}
          >
            Legal Awareness
          </NavLink>
          <NavLink
            to="/resources"
            className={({ isActive }) => (isActive ? "text-accent" : "text-gray-700 hover:text-accent")}
          >
            Resources
          </NavLink>
        </nav>

        <div className="hidden md:flex space-x-4">
          <Link to="/" className="px-4 py-2 bg-accent text-white rounded hover:bg-accent/90 transition">
            Get Started
          </Link>
          <Link
            to="/about-us"
            className="px-4 py-2 border border-accent text-accent rounded hover:bg-accent/10 transition"
          >
            Learn More
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu} aria-label="Toggle menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col px-4 py-2">
            <NavLink
              to="/about-us"
              className={({ isActive }) => `py-2 ${isActive ? "text-accent" : "text-gray-700"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/personal-safety"
              className={({ isActive }) => `py-2 ${isActive ? "text-accent" : "text-gray-700"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Personal Safety
            </NavLink>
            <NavLink
              to="/legal-awareness"
              className={({ isActive }) => `py-2 ${isActive ? "text-accent" : "text-gray-700"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Legal Awareness
            </NavLink>
            <NavLink
              to="/resources"
              className={({ isActive }) => `py-2 ${isActive ? "text-accent" : "text-gray-700"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </NavLink>
            <div className="flex flex-col space-y-2 mt-2 pb-2">
              <Link
                to="/"
                className="px-4 py-2 bg-accent text-white rounded text-center hover:bg-accent/90 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
              <Link
                to="/about-us"
                className="px-4 py-2 border border-accent text-accent rounded text-center hover:bg-accent/10 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Learn More
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar

