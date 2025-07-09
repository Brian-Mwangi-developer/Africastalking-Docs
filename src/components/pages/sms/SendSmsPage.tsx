import React from 'react';
import CodeBlock from '../../codeBlock';

interface SendSmsPageProps {
    darkMode: boolean;
}

const SendSmsPage: React.FC<SendSmsPageProps> = ({ darkMode }) => {
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

use AfricasTalking\\SDK\\AfricasTalking;

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

    return (
        <div className="mx-auto max-w-4xl p-8 space-y-8 text-left">
            <div>
                <h1 id="send-sms" className={`text-3xl font-bold mb-4 text-left ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Send SMS
                </h1>
                <p className={`text-lg text-left ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    Learn how to send SMS messages using the AfricasTalking SMS API with high delivery rates across Africa.
                </p>
            </div>

            <div className={`p-6 rounded-lg border ${darkMode ? 'border-orange-700/50 bg-orange-900/20' : 'border-orange-200 bg-orange-50'}`}>
                <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                    💡 Quick Tip
                </h3>
                <p className={`${darkMode ? 'text-orange-200' : 'text-orange-700'}`}>
                    Always include the country code in your phone numbers for reliable delivery across different networks.
                </p>
            </div>

            <div>
                <h2 id="basic-sms" className={`text-2xl font-semibold mb-4 text-left ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Basic SMS Sending
                </h2>
                <p className={`text-left ${darkMode ? 'text-slate-300' : 'text-slate-600'} mb-6`}>
                    Send SMS messages to one or multiple recipients using our REST API. The API supports both single and bulk messaging.
                </p>

                <CodeBlock
                    id="sms-basic"
                    codes={smsCodeExamples}
                    defaultLanguage="javascript"
                    darkMode={darkMode}
                />
            </div>

            <div>
                <h2 id="parameters" className={`text-2xl font-semibold mb-4 text-left ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Parameters
                </h2>
                <div className={`overflow-x-auto rounded-lg border ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
                    <table className={`w-full ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
                        <thead className={`${darkMode ? 'bg-slate-700' : 'bg-slate-50'}`}>
                            <tr>
                                <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                                    Parameter
                                </th>
                                <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                                    Type
                                </th>
                                <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                                    Required
                                </th>
                                <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody className={`divide-y ${darkMode ? 'divide-slate-700' : 'divide-slate-200'}`}>
                            <tr>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-900'}`}>
                                    to
                                </td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                    Array
                                </td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                    Yes
                                </td>
                                <td className={`px-6 py-4 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                    Phone numbers to send SMS to (with country code)
                                </td>
                            </tr>
                            <tr>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-900'}`}>
                                    message
                                </td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                    String
                                </td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                    Yes
                                </td>
                                <td className={`px-6 py-4 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                    SMS message content (max 1600 characters)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SendSmsPage;