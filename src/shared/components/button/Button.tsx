import styled from 'styled-components';
import { IButtonProps } from './button.types.ts';
import { buttonSizes, buttonStyles } from './button.constants.ts';

export const Button = ({
  size,
  style,
  children,
  onClick,
  disabled = false,
  icon,
}: IButtonProps) => {
  const selectedSize = buttonSizes[size];
  const selectedStyle = buttonStyles[style];

  return (
    <ButtonContainer
      $sizes={selectedSize}
      $styles={selectedStyle}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {children}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<{
  $sizes: (typeof buttonSizes)[keyof typeof buttonSizes];
  $styles: (typeof buttonStyles)[keyof typeof buttonStyles];
  disabled: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  width: ${({ $sizes }) => $sizes.width}px;
  height: ${({ $sizes }) => $sizes.height}px;
  font-size: ${({ $sizes }) => $sizes.fontSize}px;
  border-radius: 4px;
  border: 1px solid
    ${({ $styles, disabled }) =>
      disabled ? 'transparent' : $styles.borderColor || 'transparent'};
  background: ${({ $styles, disabled }) =>
    disabled ? buttonStyles.disabled.backgroundColor : $styles.backgroundColor};
  color: ${({ $styles, disabled }) =>
    disabled ? buttonStyles.disabled.textColor : $styles.textColor};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background: ${({ $styles, disabled }) =>
      disabled
        ? buttonStyles.disabled.backgroundColor
        : $styles.hoverBackgroundColor};
  }
  padding: 0;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;
