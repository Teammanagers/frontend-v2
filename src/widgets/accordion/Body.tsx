import { ReactNode } from 'react';
import styled from 'styled-components';

/**
 * AccordionBody 컴포넌트는 아코디언의 내용을 감싸는 컨테이너를 제공합니다.
 *
 * @param {ReactNode} children - 아코디언의 내용.
 * @param {React.RefObject<HTMLDivElement>} parentRef - 부모 요소의 ref.
 * @param {React.RefObject<HTMLDivElement>} childRef - 자식 요소의 ref.
 */

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
