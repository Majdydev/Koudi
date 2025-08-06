"use client";
import Link from "next/link";
import { ModeToggle } from "./toogle-dark-mode";
import { useState } from "react";
import { Menu, X, Code } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-100 z-50 border-b border-gray-700 dark:border-gray-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand - Left */}
          <div className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-blue-400" />
            <Link
              href="/"
              className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              Koudi
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-6">
              <Link
                dir="rtl"
                href="/pourquoi"
                className="relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-4 py-1 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-blue-400/20 font-arabic"
              >
                <span className="relative z-10">علاش أحنا</span>
              </Link>
              <Link
                href="#"
                className=" hover:text-gray-300 dark:hover:text-gray-200 transition-colors"
              >
                Projets
              </Link>
              <Link
                href="/register"
                className=" hover:text-gray-300 dark:hover:text-gray-200 transition-colors"
              >
                Commencer
              </Link>
            </div>
          </div>

          {/* Mode Toggle - Always visible on right */}
          <div className="hidden md:block">
            <ModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="ml-2">
              <ModeToggle />
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 dark:bg-gray-900 border-t border-gray-700 dark:border-gray-600">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 dark:hover:bg-gray-600 hover:text-gray-300 dark:hover:text-gray-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              dir="rtl"
              href="/pourquoi"
              className="block px-3 py-2 rounded-md text-base bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-arabic"
              onClick={() => setIsOpen(false)}
            >
              علاش أحنا
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 dark:hover:bg-gray-600 hover:text-gray-300 dark:hover:text-gray-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projets
            </Link>
            <Link
              href="/register"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 dark:hover:bg-gray-600 hover:text-gray-300 dark:hover:text-gray-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Commencer
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
