import { ReactNode } from 'react';
import styled from 'styled-components';
import dropdownMenuIcon from '@/shared/assets/common/dropdown-menu.svg';

type ButtonState = 'menu' | 'alarm' | 'none';

interface TodoProps {
  children: ReactNode;
  buttonState: ButtonState;
}

export const Todo = ({ children, buttonState }: TodoProps) => {
  const renderButton = () => {
    switch (buttonState) {
      case 'menu':
        return <img src={dropdownMenuIcon} alt="dropdown-menu-icon" />;
      case 'alarm':
        return <button>깨우기</button>; // 공통 컴포넌트 버튼 추가 예정
      case 'none':
        return null;
    }
  };

  return (
    <TodoContainer>
      <InnerWrapper>
        <ContentWrapper>
          <Checkbox />
          <Content>{children}</Content>
        </ContentWrapper>

        {renderButton()}
      </InnerWrapper>
    </TodoContainer>
  );
};

const TodoContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 12px;
  box-sizing: border-box;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30px;
  background-color: white;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Content = styled.p`
  margin: 0;
`;

const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  background-color: #f2f2f2;
`;
