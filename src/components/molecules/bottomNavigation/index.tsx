
type BottomNavigationProps = {
    navigations: {
        icon: React.ElementType;
        label: string;
        onClick: () => void;
    }[];
};


export const BottomNavigation = ({ navigations }: BottomNavigationProps) => {
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
            <div className={`grid h-full max-w-lg grid-cols-${navigations.length} mx-auto font-medium`}>
                {navigations.map(({ icon: Icon, label }, index) => (
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" key={index}>
                        <Icon fontSize="medium" />
                        {label && <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">{label}</span>}
                    </button>
                ))}
            </div>
        </div>
    );
};

