import type React from "react"

import { ArrowRight, Clock, Code, FileText, Search, X } from "lucide-react"
import { useEffect, useState } from "react"

interface SearchModalProps {
    isOpen: boolean
    onClose: () => void
    darkMode: boolean
}

interface SearchResult {
    id: string
    title: string
    description: string
    category: string
    url: string
    icon: React.ComponentType<{ className?: string }>
}

export default function SearchModal({ isOpen, onClose, darkMode }: SearchModalProps) {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState<SearchResult[]>([])

    const allResults: SearchResult[] = [
        {
            id: "1",
            title: "Send SMS",
            description: "Learn how to send SMS messages using our API",
            category: "Documentation",
            url: "/documentation/sms/send",
            icon: FileText,
        },
        {
            id: "2",
            title: "SMS API Reference",
            description: "Complete API reference for SMS endpoints",
            category: "API Reference",
            url: "/api/sms",
            icon: Code,
        },
        {
            id: "3",
            title: "USSD Sessions",
            description: "Create interactive USSD applications",
            category: "Documentation",
            url: "/documentation/ussd/sessions",
            icon: FileText,
        },
        {
            id: "4",
            title: "Voice API",
            description: "Make and receive voice calls",
            category: "API Reference",
            url: "/api/voice",
            icon: Code,
        },
        {
            id: "5",
            title: "Authentication",
            description: "How to authenticate with our APIs",
            category: "Documentation",
            url: "/documentation/auth",
            icon: FileText,
        },
        {
            id: "6",
            title: "v2.4.0 Release",
            description: "Latest updates and improvements",
            category: "Changelog",
            url: "/changelog/v2.4.0",
            icon: Clock,
        },
    ]

    useEffect(() => {
        if (query.trim()) {
            const filtered = allResults.filter(
                (result) =>
                    result.title.toLowerCase().includes(query.toLowerCase()) ||
                    result.description.toLowerCase().includes(query.toLowerCase()),
            )
            setResults(filtered)
        } else {
            setResults(allResults.slice(0, 4)) // Show recent/popular results
        }
    }, [query])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "/" && !isOpen) {
                e.preventDefault()
                onClose()
            }
            if (e.key === "Escape" && isOpen) {
                onClose()
            }
        }

        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm`}>
            <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-4">
                <div className={`rounded-xl shadow-2xl border overflow-hidden transition-colors duration-200 ${darkMode
                    ? 'bg-slate-900 border-slate-700'
                    : 'bg-white border-slate-200'
                    }`}>
                    {/* Search Input */}
                    <div className={`flex items-center px-4 py-3 border-b transition-colors duration-200 ${darkMode ? 'border-slate-700' : 'border-slate-200'
                        }`}>
                        <Search className="w-5 h-5 text-slate-400 mr-3" />
                        <input
                            type="text"
                            placeholder="Search documentation..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className={`flex-1 bg-transparent placeholder-slate-500 focus:outline-none transition-colors duration-200 ${darkMode ? 'text-white' : 'text-slate-900'
                                }`}
                            autoFocus
                        />
                        <button
                            onClick={onClose}
                            className={`p-1 transition-colors duration-200 ${darkMode
                                ? 'text-slate-400 hover:text-slate-300'
                                : 'text-slate-400 hover:text-slate-600'
                                }`}
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Results */}
                    <div className="max-h-96 overflow-y-auto">
                        {results.length > 0 ? (
                            <div className="p-2">
                                {!query && (
                                    <div className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${darkMode ? 'text-slate-400' : 'text-slate-500'
                                        }`}>
                                        Popular
                                    </div>
                                )}
                                {results.map((result) => {
                                    const Icon = result.icon
                                    return (
                                        <button
                                            key={result.id}
                                            className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors duration-200 text-left group ${darkMode
                                                ? 'hover:bg-slate-800'
                                                : 'hover:bg-slate-100'
                                                }`}
                                            onClick={onClose}
                                        >
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${darkMode
                                                ? 'bg-orange-900/30'
                                                : 'bg-orange-100'
                                                }`}>
                                                <Icon className={`w-4 h-4 transition-colors duration-200 ${darkMode ? 'text-orange-400' : 'text-orange-600'
                                                    }`} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className={`font-medium transition-colors duration-200 ${darkMode
                                                    ? 'text-white group-hover:text-orange-400'
                                                    : 'text-slate-900 group-hover:text-orange-600'
                                                    }`}>
                                                    {result.title}
                                                </h4>
                                                <p className={`text-sm truncate transition-colors duration-200 ${darkMode ? 'text-slate-400' : 'text-slate-500'
                                                    }`}>
                                                    {result.description}
                                                </p>
                                            </div>
                                            <div className="flex items-center space-x-2 flex-shrink-0">
                                                <span className={`text-xs px-2 py-1 rounded transition-colors duration-200 ${darkMode
                                                    ? 'bg-slate-800 text-slate-400'
                                                    : 'bg-slate-100 text-slate-600'
                                                    }`}>
                                                    {result.category}
                                                </span>
                                                <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                            </div>
                                        </button>
                                    )
                                })}
                            </div>
                        ) : (
                            <div className="p-8 text-center">
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-200 ${darkMode ? 'bg-slate-800' : 'bg-slate-100'
                                    }`}>
                                    <Search className="w-6 h-6 text-slate-400" />
                                </div>
                                <h3 className={`text-lg font-medium mb-2 transition-colors duration-200 ${darkMode ? 'text-white' : 'text-slate-900'
                                    }`}>
                                    No results found
                                </h3>
                                <p className={`transition-colors duration-200 ${darkMode ? 'text-slate-400' : 'text-slate-500'
                                    }`}>
                                    Try searching for something else
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className={`px-4 py-3 border-t transition-colors duration-200 ${darkMode
                        ? 'bg-slate-800 border-slate-700'
                        : 'bg-slate-50 border-slate-200'
                        }`}>
                        <div className={`flex items-center justify-between text-xs transition-colors duration-200 ${darkMode ? 'text-slate-400' : 'text-slate-500'
                            }`}>
                            <div className="flex items-center space-x-4">
                                <span>
                                    Press <kbd className={`px-1 rounded transition-colors duration-200 ${darkMode ? 'bg-slate-700' : 'bg-slate-200'
                                        }`}>↵</kbd> to select
                                </span>
                                <span>
                                    Press <kbd className={`px-1 rounded transition-colors duration-200 ${darkMode ? 'bg-slate-700' : 'bg-slate-200'
                                        }`}>esc</kbd> to close
                                </span>
                            </div>
                            <span>Search powered by  Africastalking AI</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}