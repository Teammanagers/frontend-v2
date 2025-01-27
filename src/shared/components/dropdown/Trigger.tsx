import { ReactNode } from 'react';
import styled from 'styled-components';

export interface DropdownTriggerProps {
  children: ReactNode;
  onClick: () => void;
}

const DropdownTrigger = ({ children, onClick }: DropdownTriggerProps) => {
  return (
    <Container onClick={onClick}>
      <IconWrapper>{children}</IconWrapper>
    </Container>
  );
};

export default DropdownTrigger;

const Container = styled.div`
  cursor: pointer;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
