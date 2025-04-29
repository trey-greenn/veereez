'use client'

import { useState } from 'react'
import Link from 'next/link'

// Simple utility function for class name merging
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

type NavItem = {
  title: string
  href: string
  children?: NavItem[]
}

type DropdownName = 'tools' | 'content' | 'mobile-menu' | 'mobile-tools' | 'mobile-content';

const toolsNavItems: NavItem[] = [
  { title: 'YouTube Timestamp Generator', href: '#youtube-tool-component' },
  { title: 'Blog Image Finder', href: '#blog-tool-component' },
  { title: 'Video Summarization', href: '#' },
  { title: 'Video Translation', href: '#' },
]

const contentNavItems: NavItem[] = [
  { title: 'Popular', href: '/content/popular' },
  { title: 'Insights', href: '/content/insights' },
  { title: 'Data', href: '/content/data' },
]

export default function HeaderNavigation() {
  // Separate states for main menu and sub-menus
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'tools' | 'content' | 'mobile-tools' | 'mobile-content' | null>(null);

  const toggleDropdown = (name: 'tools' | 'content' | 'mobile-tools' | 'mobile-content') => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null); // Close any open dropdowns when toggling menu
  };

  const handleClickOutside = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side: Logo and primary navigation */}
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-blue-500 font-bold text-xl">
                VERECCE
              </Link>
            </div>
            
            {/* Primary Navigation */}
            <nav className="hidden md:ml-6 md:flex md:space-x-4 items-center">
              {/* Tools Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown('tools')}
                  className="px-3 py-2 text-gray-300 hover:text-white flex items-center"
                >
                  Tools
                  <svg 
                    className={cn(
                      "ml-1 h-4 w-4 transition-transform",
                      activeDropdown === 'tools' && "transform rotate-180"
                    )}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                
                {activeDropdown === 'tools' && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={handleClickOutside}
                      aria-hidden="true"
                    />
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-20">
                      <div className="py-1" >
                        {toolsNavItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                            role="menuitem"
                            onClick={handleClickOutside}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              {/* List Our Tools (standalone link) */}

              
              {/* Pricing (standalone link) */}
              <Link href="/pricing" className="px-3 py-2 text-gray-300 hover:text-white">
                Pricing
              </Link>
              
              {/* Content Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown('content')}
                  className="px-3 py-2 text-gray-300 hover:text-white flex items-center"
                >
                  Content
                  <svg 
                    className={cn(
                      "ml-1 h-4 w-4 transition-transform",
                      activeDropdown === 'content' && "transform rotate-180"
                    )}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                
                {activeDropdown === 'content' && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={handleClickOutside}
                      aria-hidden="true"
                    />
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-20">
                      <div className="py-1">
                        {contentNavItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                            role="menuitem"
                            onClick={handleClickOutside}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </nav>
          </div>
          
          {/* Right side: Login and Contact */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/login" 
              className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Login
            </Link>
            <Link 
              href="/contact"
              className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white"
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={cn("h-6 w-6", isMobileMenuOpen ? 'hidden' : 'block')}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={cn("h-6 w-6", isMobileMenuOpen ? 'block' : 'hidden')}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => toggleDropdown('mobile-tools')}
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md flex justify-between items-center"
              >
                Tools
                <svg 
                  className={cn(
                    "ml-1 h-4 w-4 transition-transform",
                    activeDropdown === 'mobile-tools' && "transform rotate-180"
                  )}
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              
              {activeDropdown === 'mobile-tools' && (
                <div className="pl-4 space-y-1">
                  {toolsNavItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 rounded-md"
                      onClick={handleClickOutside}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              href="/tools"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              onClick={handleClickOutside}
            >
              List Our Tools
            </Link>
            
            <Link
              href="/pricing"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              onClick={handleClickOutside}
            >
              Pricing
            </Link>
            
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => toggleDropdown('mobile-content')}
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md flex justify-between items-center"
              >
                Content
                <svg 
                  className={cn(
                    "ml-1 h-4 w-4 transition-transform",
                    activeDropdown === 'mobile-content' && "transform rotate-180"
                  )}
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              
              {activeDropdown === 'mobile-content' && (
                <div className="pl-4 space-y-1">
                  {contentNavItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 rounded-md"
                      onClick={handleClickOutside}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              href="/login"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              onClick={handleClickOutside}
            >
              Login
            </Link>
            
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              onClick={handleClickOutside}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
} 