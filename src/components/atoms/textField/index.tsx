import { InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder?: string;
    required?: boolean;
    type?: string;
    name: string;
    icon?: React.ElementType;
}


export const TextField = ({ label, name, placeholder, type = 'text', icon: Icon, required = false, ...props }: TextFieldProps) => {
    if (Icon) {
        return (
            <>
                {label && <label className="block mb-2 text-sm font-medium text-slate-700">{label}</label>}
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <Icon sx={{ color: '#64748b' }} />
                    </div>
                    <input {...props} type={type} id={name} name={name} className="ps-12 p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal focus:border-teal focus:outline-none block w-full p-2.5" placeholder={placeholder} required={required} />
                </div>
            </>
        )
    }

    return (
        <div>
            {label && <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>}
            <input type={type} id={name} name={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-500 focus:border-secondary-500 block w-full p-2.5" placeholder={placeholder} required={required} />
        </div>
    );
};



