
export const Introduction: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
    return (
        <div className={`mx-auto max-w-4xl p-8 space-y-8 text-left ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            <h1 className="text-3xl font-bold mb-4">Introduction</h1>
            <p className="mb-4">
                Welcome to the Africastalking API documentation! This guide will help you get started with our APIs, including SMS, USSD, and Voice services.
            </p>
            <p className="mb-4">
                To begin, you need to create an account on our platform and obtain your API credentials. Once you have your credentials, you can start making API requests.
            </p>
            <p className="mb-4">
                For detailed instructions on how to authenticate your requests, please refer to the <a href="/documentation/authentication" className="text-blue-500 hover:underline">Authentication</a> section.
            </p>
        </div>
    );
}