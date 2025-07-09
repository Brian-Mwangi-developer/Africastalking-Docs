import { useState } from "react";
import Header from "../components/Header";
import SearchModal from "../components/SearchModal";


const HomePage = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [isSearchOpen, setIsSearchOpen] = useState(false)

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
            <div>
                <SearchModal darkMode={darkMode} isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            </div>
        </div>
    );
}
export default HomePage;