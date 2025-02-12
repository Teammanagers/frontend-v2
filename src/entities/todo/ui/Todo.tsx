import { ReactNode } from 'react';
import styled from 'styled-components';
import dropdownMenuIcon from '@/shared/assets/common/dropdown-menu.svg';
import { ButtonState, ITodo } from '../todo.type';

/**
 * Todo 컴포넌트는 할 일 항목을 렌더링합니다.
 *
 * @param {ReactNode} children - 할 일 항목의 내용.
 * @param {ButtonState} buttonState - 버튼의 상태를 나타내는 값 ('menu', 'alarm', 'none').
 */

export const Todo = ({ children, buttonState }: ITodo) => {
  const buttonComponents: { [key in ButtonState]: ReactNode } = {
    menu: <img src={dropdownMenuIcon} alt="dropdown-menu-icon" />,
    alarm: <button>깨우기</button>, // 공통 컴포넌트 버튼 추가 예정
    none: null,
  };

  return (
    <TodoContainer>
      <InnerWrapper>
        <ContentWrapper>
          <Checkbox />
          <Content>{children}</Content>
        </ContentWrapper>

        {buttonComponents[buttonState]}
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
