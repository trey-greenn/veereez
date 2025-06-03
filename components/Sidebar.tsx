import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>('youtube');

  const categories = [
    {
      id: 'youtube',
      name: 'YouTube',
      tools: [
        { id: 'thumbnail', name: 'Auto Thumbnail Generator', path: '/ai-image-generation' },
        { id: 'video-generation', name: 'Auto Video Generation', path: '/video-generation' },
        { id: 'translation', name: 'Translation', path: '/translation' },
        { id: 'timestamps', name: 'TimeStamps', path: '/timestamps' },
        { id: 'summarization', name: 'Summarization', path: '/summarization' },
      ],
    },
    {
      id: 'content',
      name: 'Content Generation',
      tools: [
        { id: 'b-roll', name: 'B-Roll/Image Automation', path: '/blog-analyzer' },
      ],
    },
    {
      id: 'social',
      name: 'Social Media',
      tools: [
        { id: 'scheduling', name: 'Upload Scheduling', path: '/scheduling' },
      ],
    },
  ];

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleToolClick = (path: string) => {
    router.push(path);
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  return (
    <div 
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:static md:z-auto`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-gray-800">
          <h2 className="text-xl font-bold text-white">VERECCE</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {categories.map((category) => (
            <div key={category.id} className="mb-6">
              <button
                onClick={() => handleCategoryClick(category.id)}
                className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <span className="font-medium">{category.name}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform ${
                    activeCategory === category.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {activeCategory === category.id && (
                <div className="mt-2 pl-3 space-y-1">
                  {category.tools.map((tool) => (
                    <button
                      key={tool.id}
                      onClick={() => handleToolClick(tool.path)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                        router.pathname === tool.path
                          ? 'bg-blue-700 text-white'
                          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      {tool.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-gray-800">
          <Link href="/" className="text-gray-400 hover:text-white text-sm">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 