import React from 'react';

interface NavigationProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    darkMode: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab, darkMode }) => {
    const tabs = [
        { id: 'documentation', label: 'Documentation' },
        { id: 'api-reference', label: 'API Reference' },
        { id: 'changelog', label: 'Changelog' }
    ];

    return (
        <nav className={`border-b transition-colors duration-200 ${darkMode ? 'border-slate-700/50' : 'border-slate-200'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex space-x-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${activeTab === tab.id
                                    ? `border-orange-500 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`
                                    : `border-transparent ${darkMode
                                        ? 'text-slate-400 hover:text-slate-300 hover:border-slate-600'
                                        : 'text-slate-500 hover:text-slate-700 hover:border-slate-300'
                                    }`
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;