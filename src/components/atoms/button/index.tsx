import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../../context/themeProvider';

export type ButtonProps = {
  variant?: "text" | "filled" | "outlined";
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "default";
  disabled?: boolean;
  children?: React.ReactNode;
};

export const Button = ({
  variant = 'filled',
  color = "default",
  onClick,
  size = "medium",
  disabled = false,
  children,
  ...props
}: ButtonProps) => {
  const theme: any = useTheme(); // Access the merged theme from context

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  const buttonClasses = twMerge(
    theme.button.base,
    theme.button.sizes[size],
    theme.button.colors[color],
    theme.button.variants[variant],
    disabledStyles
  );

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

