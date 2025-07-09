import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import SearchModal from "../components/SearchModal";
import ApiLayout from "../components/layout/ApiLayout";
import HomePage from "../components/pages/HomePage";
import { Introduction } from "../components/pages/getting-started/Introduction";
import SendSmsPage from "../components/pages/sms/SendSmsPage";


const Index = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [activeTab, setActiveTab] = useState('documentation');

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'bg-slate-900 text-white'
            : 'bg-white text-slate-900'}`}>
            <Header
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                isSearchOpen={isSearchOpen}
                setIsSearchOpen={setIsSearchOpen} />

            <Navigation
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                darkMode={darkMode}
            />
            <Routes>
                <Route path="/" element={<HomePage darkMode={darkMode} />} />
                <Route path="/documentation/*" element={<ApiLayout darkMode={darkMode} />}>
                    <Route path="introduction" element={<Introduction darkMode={darkMode} />} />
                    <Route path="sms/send" element={<SendSmsPage darkMode={darkMode} />} />
                </Route>
            </Routes>


            <SearchModal darkMode={darkMode} isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

        </div>
    );
}
export default Index;




// <div className="flex h-[calc(100vh-8rem)]">
//     <Sidebar
//         darkMode={darkMode}
//         activeSection={activeSection}
//         setActiveSection={setActiveSection}
//     />
//     <MainContent
//         darkMode={darkMode}
//         activeTab={activeTab}
//         activeSection={activeSection}
//     />
//     <RightSideBar />
// </div>