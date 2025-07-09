import { ChevronDown, ChevronRight, Code, MessageSquare, Phone, Sparkles, Zap } from 'lucide-react';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface ApiSidebarProps {
    darkMode: boolean;
}

const ApiSidebar: React.FC<ApiSidebarProps> = ({ darkMode }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [expandedSections, setExpandedSections] = React.useState<string[]>(['sms']);

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
            icon: <Sparkles className="w-4 h-4" />,
            children: [
                { id: 'introduction', title: 'Introduction', path: '/documentation/introduction' },
                { id: 'authentication', title: 'Authentication', path: '/documentation/authentication' },
                { id: 'request-headers', title: 'Request Headers', path: '/documentation/request_headers' }
            ]
        },
        {
            id: 'sms',
            title: 'SMS API',
            icon: <MessageSquare className="w-4 h-4" />,
            children: [
                { id: 'send-sms', title: 'Send SMS', path: '/documentation/sms/send' },
                { id: 'receive-sms', title: 'Receive SMS', path: '/documentation/sms/receive' },
                { id: 'delivery-reports', title: 'Delivery Reports', path: '/documentation/sms/delivery-reports' },
                { id: 'premium-sms', title: 'Premium SMS', path: '/documentation/sms/premium' }
            ]
        },
        {
            id: 'ussd',
            title: 'USSD API',
            icon: <Code className="w-4 h-4" />,
            children: [
                { id: 'ussd-sessions', title: 'USSD Sessions', path: '/documentation/ussd/sessions' },
                { id: 'ussd-callbacks', title: 'Callbacks', path: '/documentation/ussd/callbacks' },
                { id: 'ussd-examples', title: 'Examples', path: '/documentation/ussd/examples' }
            ]
        },
        {
            id: 'voice',
            title: 'Voice API',
            icon: <Phone className="w-4 h-4" />,
            children: [
                { id: 'make-calls', title: 'Make Calls', path: '/documentation/voice/make-calls' },
                { id: 'receive-calls', title: 'Receive Calls', path: '/documentation/voice/receive-calls' },
                { id: 'ivr-system', title: 'IVR System', path: '/documentation/voice/ivr' },
                { id: 'call-recording', title: 'Call Recording', path: '/documentation/voice/recording' }
            ]
        },
        {
            id: 'airtime',
            title: 'Airtime API',
            icon: <Zap className="w-4 h-4" />,
            children: [
                { id: 'send-airtime', title: 'Send Airtime', path: '/documentation/airtime/send' },
                { id: 'airtime-status', title: 'Check Status', path: '/documentation/airtime/status' },
                { id: 'supported-countries', title: 'Supported Countries', path: '/documentation/airtime/countries' }
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
                                            onClick={() => navigate(child.path)}
                                            className={`w-full text-left p-2 text-sm rounded-lg transition-colors duration-200 ${location.pathname === child.path
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

export default ApiSidebar;