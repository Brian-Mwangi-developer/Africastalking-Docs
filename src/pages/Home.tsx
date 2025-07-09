import { useState } from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Navigation from "../components/Navigation";
import { RightSideBar } from "../components/RightSidebar";
import SearchModal from "../components/SearchModal";
import Sidebar from "../components/Sidebar";


const HomePage = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [activeTab, setActiveTab] = useState('documentation');
    const [activeSection, setActiveSection] = useState('introduction');

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
            <div className="flex h-[calc(100vh-8rem)]">
                <Sidebar
                    darkMode={darkMode}
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />
                <MainContent
                    darkMode={darkMode}
                    activeTab={activeTab}
                    activeSection={activeSection}
                />
                <RightSideBar />
            </div>

            <SearchModal darkMode={darkMode} isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

        </div>
    );
}
export default HomePage;