import { SvgWrapper } from './SvgWrapper';

export const MyPageLogo = ({ width = 36, height = 36 }) => {
  return (
    <SvgWrapper width={width} height={height}>
      <path
        d="M18.8408 7.9801C21.3308 7.9801 23.3408 9.9901 23.3408 12.4801C23.3408 14.9654 21.3262 16.9801 18.8408 16.9801C16.3555 16.9801 14.3408 14.9654 14.3408 12.4801C14.3408 9.99483 16.3555 7.9801 18.8408 7.9801Z"
        stroke="#5A5A5A"
        stroke-width="2.28"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.8408 21.4801C24.8408 21.4801 29.3408 24.4801 29.3408 25.9801V28.9801H8.34082V25.9801C8.34082 24.4801 12.8408 21.4801 18.8408 21.4801Z"
        stroke="#5A5A5A"
        stroke-width="2.28"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgWrapper>
  );
};
