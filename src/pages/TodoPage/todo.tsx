import { TodoList } from '@/widgets/todo/TodoList';
import styled from 'styled-components';

export function TodoPage() {
  return (
    <Container>
      <TodoList />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  height: 100vh;
  background-color: #f9fbff;
  margin: 0;
`;
