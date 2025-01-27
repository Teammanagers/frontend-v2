import { ReactNode } from 'react';
import styled from 'styled-components';

export const AccordionBody = ({
  children,
  parentRef,
  childRef,
}: {
  children: ReactNode;
  parentRef: React.RefObject<HTMLDivElement>;
  childRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <Containerr ref={parentRef}>
      <BodyWrapper ref={childRef}>{children}</BodyWrapper>
    </Containerr>
  );
};

const Containerr = styled.div`
  height: 0;
  overflow: hidden;
  transition: height 0.5s ease;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: auto;
  background-color: white;
`;
