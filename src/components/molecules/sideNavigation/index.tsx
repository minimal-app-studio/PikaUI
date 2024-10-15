
export const SideNavigation = () => {
    return (
        <div className="flex h-screen">
            <aside className="w-64 bg-gray-800 text-white">
                <ul className="p-4 space-y-4">
                    <li>
                        <button className="flex items-center space-x-3 hover:bg-gray-700 p-3 rounded-md">
                            <span>Dashboard</span>
                        </button>
                    </li>
                    <li>
                        <button className="flex items-center space-x-3 hover:bg-gray-700 p-3 rounded-md">
                            <span>Settings</span>
                        </button>
                    </li>
                </ul>
            </aside>

            {/* Main Content + Tabs */}
            <div className="flex-1 bg-gray-100">
                <div className="bg-white shadow-sm p-4 flex justify-around">
                    <button className="text-gray-800 hover:text-blue-600">Overview</button>
                    <button className="text-gray-800 hover:text-blue-600">Reports</button>
                    <button className="text-gray-800 hover:text-blue-600">Analytics</button>
                </div>

                <div className="p-6">
                    {/* Your content goes here */}
                </div>
            </div>
        </div>
    );
};
