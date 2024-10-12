import { Button, ButtonProps } from "../../atoms/button";

type IconButtonProps = {
    position: "start" | "end";
    label: string;
    icon: React.ElementType;
}

const IconButton = ({ icon: Icon, label, position, ...buttonProps }: IconButtonProps & ButtonProps) => {
    const positionStyle = {
        "start": "flex-row-reverse",
        "end": "flex-row"
    }
    return (
        <Button {...buttonProps}>
            <div className={`flex gap-1 items-center justify-center ${positionStyle[position]}`}>
                <p>{label}</p>
                <span><Icon /></span>
            </div>
        </Button >
    );
}

export { IconButton };