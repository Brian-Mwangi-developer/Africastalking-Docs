import React from 'react';
import { ChevronRight, ChevronDown, Book, Code, Phone, MessageSquare } from 'lucide-react';

interface SidebarProps {
    darkMode: boolean;
    activeSection: string;
    setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ darkMode, activeSection, setActiveSection }) => {
    const [expandedSections, setExpandedSections] = React.useState<string[]>(['getting-started', 'sms']);

    const toggleSection = (section: string) => {
        setExpandedSections(prev =>
            prev.includes(section)
                ? prev.filter(s => s !== section)
                : [...prev, section]
        );
    };

    const menuItems = [
        {
            id: 'getting-started',
            title: 'Getting Started',
            icon: <Book className="w-4 h-4" />,
            children: [
                { id: 'introduction', title: 'Introduction' },
                { id: 'authentication', title: 'Authentication' },
                { id: 'quick-start', title: 'Quick Start' }
            ]
        },
        {
            id: 'sms',
            title: 'SMS API',
            icon: <MessageSquare className="w-4 h-4" />,
            children: [
                { id: 'send-sms', title: 'Send SMS' },
                { id: 'sms-delivery', title: 'Delivery Reports' },
                { id: 'premium-sms', title: 'Premium SMS' }
            ]
        },
        {
            id: 'ussd',
            title: 'USSD API',
            icon: <Code className="w-4 h-4" />,
            children: [
                { id: 'ussd-sessions', title: 'USSD Sessions' },
                { id: 'ussd-callbacks', title: 'Callbacks' },
                { id: 'ussd-examples', title: 'Examples' }
            ]
        },
        {
            id: 'voice',
            title: 'Voice API',
            icon: <Phone className="w-4 h-4" />,
            children: [
                { id: 'make-calls', title: 'Make Calls' },
                { id: 'voice-recordings', title: 'Recordings' },
                { id: 'voice-ivr', title: 'IVR System' }
            ]
        }
    ];

    return (
        <aside className={`w-64 border-r transition-colors duration-200 ${darkMode ? 'border-slate-700/50 bg-slate-900/50' : 'border-slate-200 bg-slate-50/50'
            } h-full overflow-y-auto`}>
            <div className="p-4">
                <nav className="space-y-2">
                    {menuItems.map((item) => (
                        <div key={item.id}>
                            <button
                                onClick={() => toggleSection(item.id)}
                                className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors duration-200 ${darkMode
                                        ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                                    }`}
                            >
                                <div className="flex items-center space-x-2">
                                    {item.icon}
                                    <span className="font-medium">{item.title}</span>
                                </div>
                                {expandedSections.includes(item.id) ?
                                    <ChevronDown className="w-4 h-4" /> :
                                    <ChevronRight className="w-4 h-4" />
                                }
                            </button>

                            {expandedSections.includes(item.id) && (
                                <div className="ml-6 mt-2 space-y-1">
                                    {item.children.map((child) => (
                                        <button
                                            key={child.id}
                                            onClick={() => setActiveSection(child.id)}
                                            className={`w-full text-left p-2 text-sm rounded-lg transition-colors duration-200 ${activeSection === child.id
                                                    ? `${darkMode ? 'bg-orange-900/50 text-orange-300' : 'bg-orange-100 text-orange-700'}`
                                                    : `${darkMode
                                                        ? 'text-slate-400 hover:text-slate-300 hover:bg-slate-800'
                                                        : 'text-slate-500 hover:text-slate-700 hover:bg-white'
                                                    }`
                                                }`}
                                        >
                                            {child.title}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;