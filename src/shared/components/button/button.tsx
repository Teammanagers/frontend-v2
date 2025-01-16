import styled from 'styled-components';

/*
공통 radius: 4px, width 값은 fill로 한 경우가 많아서 props로 받는 형태로 구현

kakaoLarge width: 365px, height: 64px, font-size: 18px, between: 19
kakaoSmall: width: 365px, height: 52px, font-size: 16px, between: 19
large(버튼/큰사이즈) height: 48px, font-size: 16px, between: 12
medium(버튼/중간사이즈) height: 36px, font-size: 12px, between: 8
나머지 버튼들은 height, font-size까지 받아와서 사용

!!!! 색상 같은 경우 파랑 바탕에 흰 글자를 디폴트 값으로 해두었습니다 !!!!

 */

interface ButtonProps {
  name?: 'kakaoLarge' | 'kakaoSmall' | 'large' | 'medium';
  width?: number;
  height?: number;
  fontSize?: number;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  disabled?: boolean;
  disabledBackgroundColor?: string;
  disabledTextColor?: string;
  onClick?: () => void;
  isLogo?: boolean;
  children?: React.ReactNode;
  isIcon?: boolean;
  gap?: number;
  iconSize?: number;
  iconSrc?: string;
}

export const Button = ({
  name,
  width,
  height,
  fontSize,
  backgroundColor = '#5C9EFF',
  borderColor = 'transparent',
  textColor = 'white',
  hoverBackgroundColor,
  hoverTextColor,
  disabled = false,
  disabledBackgroundColor,
  disabledTextColor,
  onClick,
  isIcon = false,
  gap,
  iconSize = 24, // 임시
  iconSrc,
  children,
}: ButtonProps) => {
  return (
    <ButtonContainer
      name={name}
      width={width}
      height={height}
      fontSize={fontSize}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      textColor={textColor}
      hoverBackgroundColor={hoverBackgroundColor}
      hoverTextColor={hoverTextColor}
      disabled={disabled}
      disabledBackgroundColor={disabledBackgroundColor}
      disabledTextColor={disabledTextColor}
      onClick={disabled ? undefined : onClick}
      isIcon={isIcon}
      gap={gap}
    >
      {isIcon && <Icon src={iconSrc} size={iconSize} />}
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<ButtonProps>`
  //  공통 스타일
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border: 1px solid ${({ borderColor }) => borderColor};
  background: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  gap: ${({ gap }) => gap}px;

  &:disabled {
      background: ${({ disabledBackgroundColor }) =>
        disabledBackgroundColor ? disabledBackgroundColor : ''};
      color: ${({ disabledTextColor }) => (disabledTextColor ? disabledTextColor : '')};
  }

  ${({ name, width, height, fontSize }) => {
    if (!name) {
      return `
        width: ${width}px;
        height: ${height}px;
        font-size: ${fontSize}px;
      `;
    }

    switch (name) {
      case 'kakaoLarge':
        return `
          width: 365px;
          height: 64px;
          font-size: 18px;
          background: #FEE500;
          color: black;
          gap: 19px;
        `;
      case 'kakaoSmall':
        return `
          width: 365px;
          height: 52px;
          font-size: 16px;
          background: #FEE500;
          color: black;
          gap: 19px;
        `;
      case 'large':
        return `
          height: 48px;
          font-size: 16px;
          gap: 12px;
       `;
      case 'medium':
        return `
          height: 36px;
          font-size: 12px;
          gap: 8px;
       `;
      default:
        return '';
    }
  }}

  &:hover {
      background: ${({ hoverBackgroundColor }) =>
        hoverBackgroundColor ? hoverBackgroundColor : ''};
      color: ${({ hoverTextColor }) => (hoverTextColor ? hoverTextColor : '')};
  
`;

const ButtonText = styled.p<{ textColor?: string }>`
  font-weight: 700;
  color: ${({ textColor }) => textColor};
  margin: 0;
  padding: 0;
`;

const Icon = styled.img<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
