import { SvgWrapper } from './SvgWrapper';

export const TodoListLogo = ({ width = 36, height = 36 }) => {
  return (
    <SvgWrapper width={width} height={height}>
      <path
        d="M12.1211 8.30005H6.12109C5.29267 8.30005 4.62109 8.97162 4.62109 9.80005V15.8C4.62109 16.6285 5.29267 17.3 6.12109 17.3H12.1211C12.9495 17.3 13.6211 16.6285 13.6211 15.8V9.80005C13.6211 8.97162 12.9495 8.30005 12.1211 8.30005Z"
        stroke="#5A5A5A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.62109 26.2998L7.62109 29.2998L13.6211 23.2998M19.6211 9.7998H31.6211M19.6211 18.7998H31.6211M19.6211 27.7998H31.6211"
        stroke="#5A5A5A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgWrapper>
  );
};
