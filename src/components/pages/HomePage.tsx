import { ArrowRight, Code, MessageSquare, Phone, Sparkles, Zap } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HomePageProps {
    darkMode: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ darkMode }) => {
    const navigate = useNavigate();

    const apiServices = [
        {
            id: 'sms',
            title: 'SMS API',
            description: 'Send and receive SMS messages across Africa with high delivery rates and real-time delivery reports.',
            icon: MessageSquare,
            color: 'from-green-500 to-emerald-500',
            features: ['Bulk SMS', 'Two-way messaging', 'Delivery reports', 'Global coverage'],
            path: '/documentation/sms'
        },
        {
            id: 'ussd',
            title: 'USSD API',
            description: 'Build interactive USSD applications that work on any mobile phone without internet connectivity.',
            icon: Code,
            color: 'from-blue-500 to-purple-500',
            features: ['Interactive menus', 'Session management', 'Real-time responses', 'Works offline'],
            path: '/documentation/ussd'
        },
        {
            id: 'voice',
            title: 'Voice API',
            description: 'Make and receive voice calls with advanced features like IVR, call recording, and AI integration.',
            icon: Phone,
            color: 'from-orange-500 to-red-500',
            features: ['Voice calls', 'IVR systems', 'Call recording', 'AI integration'],
            path: '/documentation/voice'
        },
        {
            id: 'airtime',
            title: 'Airtime API',
            description: 'Top up mobile airtime and data bundles across multiple African countries instantly.',
            icon: Zap,
            color: 'from-purple-500 to-pink-500',
            features: ['Instant top-ups', 'Multiple countries', 'Data bundles', 'Transaction history'],
            path: '/documentation/airtime'
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className={`relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-orange-50 via-white to-orange-100'
                }`}>
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <h1 className={`text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                            Build Powerful Communication Solutions
                        </h1>
                        <p className={`text-xl mb-8 max-w-3xl mx-auto ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                            Connect with customers across Africa using our reliable SMS, USSD, Voice, and Airtime APIs.
                            Trusted by thousands of developers and businesses.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => navigate('/documentation/sms')}
                                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                            >
                                Get Started
                            </button>
                            <button
                                onClick={() => navigate('/api-reference')}
                                className={`px-8 py-4 rounded-lg font-semibold border-2 transition-all duration-200 ${darkMode
                                    ? 'border-slate-600 text-slate-300 hover:border-slate-500 hover:bg-slate-800'
                                    : 'border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50'
                                    }`}
                            >
                                View API Reference
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* API Services Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Choose Your Communication Channel
                    </h2>
                    <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Explore our comprehensive APIs designed for African markets
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {apiServices.map((service) => (
                        <div
                            key={service.id}
                            onClick={() => navigate(service.path)}
                            className={`group relative overflow-hidden rounded-2xl border cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 ${darkMode
                                ? 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                                : 'border-slate-200 bg-white hover:border-slate-300'
                                }`}
                        >
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'
                                        }`} />
                                </div>

                                <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                    {service.title}
                                </h3>
                                <p className={`mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                    {service.description}
                                </p>

                                <div className="grid grid-cols-2 gap-3">
                                    {service.features.map((feature, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`} />
                                            <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Getting Started Section */}
            <div className={`py-20 ${darkMode ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Ready to Get Started?
                    </h2>
                    <p className={`text-lg mb-8 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        Join thousands of developers building amazing communication experiences with AfricasTalking
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate('/documentation/sms/quick-start')}
                            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                        >
                            Quick Start Guide
                        </button>
                        <button
                            onClick={() => navigate('/documentation/introduction')}
                            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${darkMode
                                ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                : 'bg-white text-slate-700 hover:bg-slate-100'
                                }`}
                        >
                            View Documentation
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
