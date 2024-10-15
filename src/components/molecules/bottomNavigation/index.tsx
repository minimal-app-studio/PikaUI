
type BottomNavigationProps = {
    navigations: [];
    listItem: React.ElementType;
};


export const BottomNavigation = ({ navigations, listItem: ListItem }: BottomNavigationProps) => {
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
            <div className={`grid h-full max-w-lg grid-cols-4 mx-auto font-medium`}>
                {navigations.map((navigationData, index) => (
                    <ListItem key={index} data={navigationData} />
                ))}
            </div>
        </div>
    );
};

