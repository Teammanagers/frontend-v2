import { SvgWrapper } from './SvgWrapper';

export const StorageLogo = ({ width = 36, height = 36 }) => {
  return (
    <SvgWrapper width={width} height={height}>
      <path
        d="M21.041 4.57935V10.5793C21.041 10.9772 21.1991 11.3587 21.4804 11.64C21.7617 11.9213 22.1432 12.0793 22.541 12.0793H28.541"
        stroke="#5A5A5A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.041 25.5793V16.5793M25.541 31.5793H10.541C9.74537 31.5793 8.9823 31.2633 8.4197 30.7007C7.85709 30.1381 7.54102 29.375 7.54102 28.5793V7.57935C7.54102 6.7837 7.85709 6.02063 8.4197 5.45803C8.9823 4.89542 9.74537 4.57935 10.541 4.57935H21.041L28.541 12.0793V28.5793C28.541 29.375 28.2249 30.1381 27.6623 30.7007C27.0997 31.2633 26.3367 31.5793 25.541 31.5793Z"
        stroke="#5A5A5A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.291 21.8293L18.041 25.5793L21.791 21.8293"
        stroke="#5A5A5A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgWrapper>
  );
};
