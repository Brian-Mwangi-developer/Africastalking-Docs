import { Check, Code, Copy, ExternalLink, MessageSquare, Phone } from 'lucide-react';
import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from './ui/select';

interface MainContentProps {
    darkMode: boolean;
    activeTab: string;
    activeSection: string;
}

const MainContent: React.FC<MainContentProps> = ({ darkMode, activeTab, activeSection }) => {
    const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

    const copyToClipboard = (code: string, id: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(id);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    const CodeBlock: React.FC<{
        codes: { [key: string]: string };
        id: string;
        defaultLanguage?: string;
    }> = ({ codes, id, defaultLanguage = 'javascript' }) => {
        const [selectedLanguage, setSelectedLanguage] = React.useState(defaultLanguage);
        const languages = Object.keys(codes);

        return (
            <div className={`relative rounded-lg border ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-slate-50'
                }`}>
                <div className={`flex items-center justify-between px-4 py-2 border-b ${darkMode ? 'border-slate-700' : 'border-slate-200'
                    }`}>
                    <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                        <SelectTrigger className={`w-32 h-8 ${darkMode
                            ? 'bg-slate-700 border-slate-600 text-slate-300'
                            : 'bg-white border-slate-300 text-slate-700'
                            }`}>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className={darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}>
                            {languages.map((lang) => (
                                <SelectItem
                                    key={lang}
                                    value={lang}
                                    className={darkMode ? 'text-slate-300 hover:bg-slate-700' : 'text-slate-700 hover:bg-slate-100'}
                                >
                                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <button
                        onClick={() => copyToClipboard(codes[selectedLanguage], `${id}-${selectedLanguage}`)}
                        className={`flex items-center space-x-1 px-2 py-1 rounded text-sm transition-colors duration-200 ${darkMode
                            ? 'hover:bg-slate-700 text-slate-400 hover:text-slate-300'
                            : 'hover:bg-slate-200 text-slate-500 hover:text-slate-700'
                            }`}
                    >
                        {copiedCode === `${id}-${selectedLanguage}` ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedCode === `${id}-${selectedLanguage}` ? 'Copied!' : 'Copy'}</span>
                    </button>
                </div>
                <pre className={`p-4 overflow-x-auto text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    <code>{codes[selectedLanguage]}</code>
                </pre>
            </div>
        );
    };

    const smsCodeExamples = {
        javascript: `const AfricasTalking = require('africastalking');

const client = AfricasTalking({
  apiKey: 'YOUR_API_KEY',
  username: 'YOUR_USERNAME'
});

const sms = client.SMS;

// Send SMS
const options = {
  to: ['+254711XXXYYY'],
  message: 'Hello, this is a test message from AfricasTalking!'
};

sms.send(options)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });`,
        python: `import africastalking

# Initialize SDK
username = "YOUR_USERNAME"
api_key = "YOUR_API_KEY"
africastalking.initialize(username, api_key)

# Initialize a service
sms = africastalking.SMS

# Send SMS
response = sms.send(
    "Hello, this is a test message from AfricasTalking!",
    ["+254711XXXYYY"]
)

print(response)`,
        php: `<?php
require_once 'vendor/autoload.php';

use AfricasTalking.SDK.AfricasTalking;

$username = 'YOUR_USERNAME';
$apiKey   = 'YOUR_API_KEY';

$AT = new AfricasTalking($username, $apiKey);

$sms = $AT->sms();

$result = $sms->send([
    'to'      => '+254711XXXYYY',
    'message' => 'Hello, this is a test message from AfricasTalking!'
]);

print_r($result);
?>`,
        curl: `curl -X POST https://api.africastalking.com/version1/messaging \\
  -H "apiKey: YOUR_API_KEY" \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  -d "username=YOUR_USERNAME" \\
  -d "to=+254711XXXYYY" \\
  -d "message=Hello, this is a test message from AfricasTalking!"`
    };

    const renderDocumentationContent = () => {
        switch (activeSection) {
            case 'introduction':
                return (
                    <div className="space-y-8">
                        <div>
                            <h1 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                Welcome to AfricasTalking
                            </h1>
                            <p className={`text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                Build powerful communication solutions with our SMS, USSD, and Voice APIs across Africa.
                            </p>
                        </div>

                        <div className={`p-6 rounded-lg border ${darkMode ? 'border-slate-700 bg-slate-800/50' : 'border-slate-200 bg-slate-50'}`}>
                            <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                What is AfricasTalking?
                            </h2>
                            <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'} mb-4`}>
                                AfricasTalking is the developer platform for building voice AI agents and communication solutions.
                                We handle the complex infrastructure so you can focus on creating great communication experiences.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                                    <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                                        Send and receive SMS messages across Africa
                                    </span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                                    <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                                        Build interactive USSD applications
                                    </span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                                    <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                                        Make and receive voice calls with AI integration
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                How Communication APIs Work
                            </h2>
                            <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'} mb-6`}>
                                Every AfricasTalking solution combines three core technologies:
                            </p>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className={`p-6 rounded-lg border ${darkMode ? 'border-slate-700 bg-slate-800/30' : 'border-slate-200 bg-white'}`}>
                                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                                        <MessageSquare className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                        SMS Gateway
                                    </h3>
                                    <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                        Send bulk SMS, receive messages, and handle delivery reports with our reliable SMS infrastructure.
                                    </p>
                                </div>

                                <div className={`p-6 rounded-lg border ${darkMode ? 'border-slate-700 bg-slate-800/30' : 'border-slate-200 bg-white'}`}>
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                                        <Code className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                        USSD Platform
                                    </h3>
                                    <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                        Create interactive menu-driven applications accessible from any mobile phone without internet.
                                    </p>
                                </div>

                                <div className={`p-6 rounded-lg border ${darkMode ? 'border-slate-700 bg-slate-800/30' : 'border-slate-200 bg-white'}`}>
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                        Voice API
                                    </h3>
                                    <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                        Make automated calls, build IVR systems, and integrate AI-powered voice conversations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'send-sms':
                return (
                    <div className="space-y-8">
                        <div>
                            <h1 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                Send SMS
                            </h1>
                            <p className={`text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                Learn how to send SMS messages using the AfricasTalking SMS API.
                            </p>
                        </div>

                        <div>
                            <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                Basic SMS Sending
                            </h2>
                            <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'} mb-6`}>
                                Send SMS messages to one or multiple recipients using our REST API.
                            </p>

                            <CodeBlock
                                id="sms-basic"
                                codes={smsCodeExamples}
                                defaultLanguage="javascript"
                            />
                        </div>

                        <div className={`p-6 rounded-lg border ${darkMode ? 'border-orange-700/50 bg-orange-900/20' : 'border-orange-200 bg-orange-50'}`}>
                            <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                                💡 Pro Tip
                            </h3>
                            <p className={`${darkMode ? 'text-orange-200' : 'text-orange-700'}`}>
                                Always include the country code in your phone numbers for reliable delivery across different networks.
                            </p>
                        </div>
                    </div>
                );

            default:
                return (
                    <div className="space-y-8">
                        <div>
                            <h1 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                Documentation
                            </h1>
                            <p className={`text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                Select a topic from the sidebar to get started with AfricasTalking APIs.
                            </p>
                        </div>
                    </div>
                );
        }
    };

    const renderApiReference = () => (
        <div className="space-y-8">
            <div>
                <h1 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    API Reference
                </h1>
                <p className={`text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    Complete API reference for all AfricasTalking endpoints.
                </p>
            </div>

            <div className="grid gap-6">
                <div className={`p-6 rounded-lg border ${darkMode ? 'border-slate-700 bg-slate-800/30' : 'border-slate-200 bg-white'}`}>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded">POST</span>
                            <code className={`${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                                https://api.africastalking.com/version1/messaging
                            </code>
                        </div>
                        <ExternalLink className={`w-4 h-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`} />
                    </div>
                    <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Send SMS
                    </h3>
                    <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'} mb-4`}>
                        Send SMS messages to one or multiple recipients.
                    </p>
                    <div className="space-y-2">
                        <h4 className={`font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Headers</h4>
                        <div className={`p-3 rounded border ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-slate-50'}`}>
                            <code className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                apiKey: string (Required)<br />
                                Content-Type: application/x-www-form-urlencoded
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderChangelog = () => (
        <div className="space-y-8">
            <div>
                <h1 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Changelog
                </h1>
                <p className={`text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    Stay updated with the latest changes and improvements to our APIs.
                </p>
            </div>

            <div className="space-y-6">
                <div className={`p-6 rounded-lg border ${darkMode ? 'border-slate-700 bg-slate-800/30' : 'border-slate-200 bg-white'}`}>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                            December 2024
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-700'}`}>
                            Latest
                        </span>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                            <div>
                                <h4 className={`font-medium ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                                    Enhanced Voice API with AI Integration
                                </h4>
                                <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                    Added support for AI-powered voice conversations and improved call quality.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                            <div>
                                <h4 className={`font-medium ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                                    New SMS Delivery Reports Format
                                </h4>
                                <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                    Updated delivery report structure with more detailed status information.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`p-6 rounded-lg border ${darkMode ? 'border-slate-700 bg-slate-800/30' : 'border-slate-200 bg-white'}`}>
                    <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        November 2024
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                            <div>
                                <h4 className={`font-medium ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                                    USSD Session Management Improvements
                                </h4>
                                <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                    Better handling of USSD sessions with improved timeout management.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'documentation':
                return renderDocumentationContent();
            case 'api-reference':
                return renderApiReference();
            case 'changelog':
                return renderChangelog();
            default:
                return renderDocumentationContent();
        }
    };

    return (
        <main className="flex-1 p-8 overflow-y-auto">
            {renderContent()}
        </main>
    );
};

export default MainContent;