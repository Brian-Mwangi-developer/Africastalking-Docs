import React from 'react';
import { Outlet } from 'react-router-dom';
import ApiSidebar from '../sidebars/ApiSidebar';
import TableOfContents from '../TableofContents';

interface ApiLayoutProps {
    darkMode: boolean;
}

const ApiLayout: React.FC<ApiLayoutProps> = ({ darkMode }) => {
    return (
        <div className="flex h-[calc(100vh-8rem)]">
            <ApiSidebar darkMode={darkMode} />

            <main className="flex-1 overflow-y-auto">
                <Outlet />
            </main>

            <TableOfContents darkMode={darkMode} />
        </div>
    );
};

export default ApiLayout;
