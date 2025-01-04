import { SvgWrapper } from './SvgWrapper';

export const TeamLogo = ({ width = 36, height = 36 }) => {
  return (
    <SvgWrapper width={width} height={height}>
      <circle
        cx="18.6401"
        cy="9.32007"
        r="4.86"
        stroke="#5A5A5A"
        stroke-width="2.28"
      />
      <circle
        cx="28.3901"
        cy="16.0701"
        r="2.61"
        stroke="#5A5A5A"
        stroke-width="2.28"
      />
      <circle
        cx="8.89014"
        cy="16.0701"
        r="2.61"
        stroke="#5A5A5A"
        stroke-width="2.28"
      />
      <path
        d="M12.6401 33.3201C12.6401 32.0701 12.6401 28.5201 12.6401 24.3201M24.6401 24.3201V33.3194M12.6401 24.3201C12.6401 21.0064 15.3264 18.3201 18.6401 18.3201C21.9538 18.3201 24.6401 21.0064 24.6401 24.3201"
        stroke="#5A5A5A"
        stroke-width="2.28"
      />
      <path
        d="M32.1401 33.3201V27.0203C32.1401 24.7006 30.1254 22.8201 27.6401 22.8201"
        stroke="#5A5A5A"
        stroke-width="2.28"
      />
      <path
        d="M5.14014 33.3201V27.0203C5.14014 24.7006 7.15486 22.8201 9.64014 22.8201"
        stroke="#5A5A5A"
        stroke-width="2.28"
      />
      <path
        d="M15.6401 25.8198H18.6401M21.6401 25.8198H18.6401M18.6401 25.8198V31.8198"
        stroke="#5A5A5A"
        stroke-width="1.52"
      />
    </SvgWrapper>
  );
};
