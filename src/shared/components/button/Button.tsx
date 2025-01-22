import styled from 'styled-components';

interface ButtonStyle {
  backgroundColor: string;
  textColor: string;
  hoverBackgroundColor?: string;
  borderColor?: string;
}

interface ButtonProps {
  size: keyof typeof buttonSizes;
  style: keyof typeof buttonStyles;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}

// 크기
const buttonSizes = {
  tiny: { width: 28, height: 24, fontSize: 10 },
  mini: { width: 96, height: 36, fontSize: 12 },
  small: { width: 158, height: 36, fontSize: 12 },
  medium: { width: 332, height: 36, fontSize: 12 },
  large: { width: 350, height: 48, fontSize: 16 },
  long: { width: 472, height: 36, fontSize: 12 },
  xl: { width: 472, height: 48, fontSize: 16 },
  xxl: { width: 664, height: 48, fontSize: 16 },
};

// 스타일
const buttonStyles: Record<string, ButtonStyle> = {
  main: {
    backgroundColor: '#5C9EFF',
    textColor: '#FFFFFF',
    hoverBackgroundColor: '#3C8BFF',
  },
  sub: {
    backgroundColor: '#FFFFFF',
    textColor: '#5C9EFF',
    hoverBackgroundColor: '#DDEBFF',
    borderColor: '#5C9EFF',
  },
  red: {
    backgroundColor: '#FFFFFF',
    textColor: '#FF0000',
    hoverBackgroundColor: '#FFE9E9',
    borderColor: '#FF0000',
  },
  disabled: {
    backgroundColor: '#CCCCCC',
    textColor: '#FFFFFF',
  },
};

export const Button = ({
  size,
  style,
  children,
  onClick,
  disabled = false,
  icon,
}: ButtonProps) => {
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
