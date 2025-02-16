import { buttonSizes, buttonStyles } from './button.constants.ts';

export interface IButtonProps {
  size: keyof typeof buttonSizes;
  style: keyof typeof buttonStyles;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}
