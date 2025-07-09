


export const RightSideBar = () => {
    return (
        <div className="fixed right-8 top-32 w-64 hidden xl:block">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">On this page</h4>
                <nav className="space-y-2">
                    <a
                        href="#"
                        className="block text-sm text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300"
                    >
                        Introduction
                    </a>
                    <a
                        href="#"
                        className="block text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400"
                    >
                        Getting Started
                    </a>
                    <a
                        href="#"
                        className="block text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400"
                    >
                        Quick Example
                    </a>
                </nav>
            </div>
        </div>
    )
}
