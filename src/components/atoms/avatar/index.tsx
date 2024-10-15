
type AvatarProps = {
    img?: string;
    alt?: string;
    name?: string;
    size?: 8 | 10 | 12 | 16 | 20;
};

const getInitials = (name: string) => {
    const parts = name.split(' ');
    if (parts.length > 1) {
        return parts[0][0] + parts[1][0];
    }
    return parts[0][0]; // Return the first character if only one name part
};

const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-red-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-teal-500',
];

// Hash function to generate a consistent index
const getColorIndex = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
    }
    return hash % colors.length;
};

const avatarSizes = {
    8: 'w-8 h-8',
    10: 'w-10 h-10',
    12: 'w-12 h-12',
    16: 'w-16 h-16',
    20: 'w-20 h-20',
};


export const Avatar = ({ img, alt, name, size = 10 }: AvatarProps) => {

    if (img) {
        return (
            <img className={`rounded-full object-cover ${avatarSizes[size]}`} src={img} alt={alt} />
        );
    }

    const initials = name ? getInitials(name) : '';
    const bgColor = name ? colors[getColorIndex(name)] : 'bg-gray-100';

    return (
        <div className={`relative inline-flex items-center justify-center overflow-hidden ${bgColor} rounded-full ${avatarSizes[size]}`}>
            <span className="font-medium text-white">{initials}</span>
        </div>
    );
};
