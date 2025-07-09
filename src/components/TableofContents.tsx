import React, { useEffect, useState } from 'react';
import { Link as LinkIcon } from 'lucide-react';

interface TableOfContentsProps {
    darkMode: boolean;
}

interface HeadingItem {
    id: string;
    text: string;
    level: number;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ darkMode }) => {
    const [headings, setHeadings] = useState<HeadingItem[]>([]);
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        const headingItems: HeadingItem[] = Array.from(headingElements).map((heading) => ({
            id: heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-') || '',
            text: heading.textContent || '',
            level: parseInt(heading.tagName.charAt(1))
        }));

        setHeadings(headingItems);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0% -80% 0%' }
        );

        headingElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    if (headings.length === 0) {
        return null;
    }

    return (
        <aside className={`w-64 border-l transition-colors duration-200 ${darkMode ? 'border-slate-700/50 bg-slate-900/30' : 'border-slate-200 bg-slate-50/30'
            } h-[calc(100vh-8rem)] overflow-y-auto sticky top-0`}>
            <div className="p-4">
                <h3 className={`text-sm font-semibold mb-3 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    On this page
                </h3>
                <nav className="space-y-1">
                    {headings.map((heading) => (
                        <a
                            key={heading.id}
                            href={`#${heading.id}`}
                            className={`block text-sm transition-colors duration-200 ${heading.level > 2 ? 'ml-4' : ''
                                } ${activeId === heading.id
                                    ? `${darkMode ? 'text-orange-400' : 'text-orange-600'} font-medium`
                                    : `${darkMode ? 'text-slate-400 hover:text-slate-300' : 'text-slate-600 hover:text-slate-700'}`
                                }`}
                        >
                            <div className="flex items-center space-x-2 py-1">
                                {activeId === heading.id && <LinkIcon className="w-3 h-3" />}
                                <span className="truncate">{heading.text}</span>
                            </div>
                        </a>
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default TableOfContents;