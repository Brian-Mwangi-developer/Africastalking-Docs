import { Moon, Search, Sparkles, Sun } from 'lucide-react';
import React from 'react';

interface HeaderProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
    isSearchOpen: boolean
    setIsSearchOpen: (open: boolean) => void
    // toggleAiAssistant: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, setIsSearchOpen }) => {
    return (
        <header className={`h-16 border-b transition-colors duration-200 ${darkMode
            ? 'bg-slate-900 border-slate-700'
            : 'bg-white border-slate-200'
            }`}>
            <div className="h-full px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-400 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">AT</span>
                    </div>
                    <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        AfricasTalking
                    </h2>
                </div>

                {/* Search Bar */}
                <div className="flex-1 max-w-md mx-8">
                    <button className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg border transition-colors duration-200 ${darkMode
                        ? 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600'
                        : 'bg-slate-50 border-slate-300 text-slate-500 hover:border-slate-400'
                        }`} onClick={() => setIsSearchOpen(true)}>
                        <Search className="w-4 h-4" />
                        <span className="flex-1 text-left text-sm">Search documentation...</span>
                        <kbd className={`px-2 py-1 rounded text-xs ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-200 text-slate-600'
                            }`}>
                            ⌘K
                        </kbd>
                    </button>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-3">
                    <button
                        onClick={() => { }}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${darkMode
                            ? 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                            }`}
                    >
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-medium">Ask AI</span>
                    </button>

                    <button
                        onClick={toggleDarkMode}
                        className={`p-2 rounded-lg transition-colors duration-200 ${darkMode
                            ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                            }`}
                    >
                        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;