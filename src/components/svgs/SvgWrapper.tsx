import { DEFAULT, HOVER } from '@/commons/svg-border-width';
import { useState } from 'react';

interface SvgWrapperProps {
  width: number;
  height: number;
  children: React.ReactNode;
  props?: React.SVGProps<SVGSVGElement>;
}

export const SvgWrapper = ({
  width,
  height,
  children,
  ...props
}: SvgWrapperProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      strokeWidth={hovered ? HOVER : DEFAULT}
      style={{ cursor: 'pointer' }}
      {...props}
    >
      {children}
    </svg>
  );
};
