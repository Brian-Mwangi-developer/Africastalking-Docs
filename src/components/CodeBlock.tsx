import React from 'react';
import { Copy, Check } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
    codes: { [key: string]: string };
    id: string;
    defaultLanguage?: string;
    darkMode: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ codes, id, defaultLanguage = 'javascript', darkMode }) => {
    const [selectedLanguage, setSelectedLanguage] = React.useState(defaultLanguage);
    const [copiedCode, setCopiedCode] = React.useState<string | null>(null);
    const languages = Object.keys(codes);

    const copyToClipboard = (code: string, codeId: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(codeId);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    const getLanguageIcon = (lang: string) => {
        const icons: { [key: string]: string } = {
            javascript: '🟨',
            python: '🐍',
            php: '🐘',
            curl: '🌐',
            json: '{}'
        };
        return icons[lang] || '📄';
    };

    return (
        <div className={`relative rounded-lg border ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-slate-50'
            }`}>
            <div className={`flex items-center justify-between px-4 py-2 border-b ${darkMode ? 'border-slate-700' : 'border-slate-200'
                }`}>
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                    <SelectTrigger className={`w-40 h-8 ${darkMode
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
                                <div className="flex items-center space-x-2">
                                    <span>{getLanguageIcon(lang)}</span>
                                    <span>{lang.charAt(0).toUpperCase() + lang.slice(1)}</span>
                                </div>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <button
                    onClick={() => copyToClipboard(codes[selectedLanguage], `${id}-${selectedLanguage}`)}
                    className={`flex items-center space-x-1 px-3 py-1 rounded text-sm transition-colors duration-200 ${darkMode
                            ? 'hover:bg-slate-700 text-slate-400 hover:text-slate-300'
                            : 'hover:bg-slate-200 text-slate-500 hover:text-slate-700'
                        }`}
                >
                    {copiedCode === `${id}-${selectedLanguage}` ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode === `${id}-${selectedLanguage}` ? 'Copied!' : 'Copy'}</span>
                </button>
            </div>

            <div className="overflow-x-auto">
                <SyntaxHighlighter
                    language={selectedLanguage === 'curl' ? 'bash' : selectedLanguage}
                    style={darkMode ? oneDark : oneLight}
                    customStyle={{
                        margin: 0,
                        padding: '1rem',
                        background: 'transparent',
                        fontSize: '0.875rem'
                    }}
                    wrapLines={true}
                >
                    {codes[selectedLanguage]}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default CodeBlock;
