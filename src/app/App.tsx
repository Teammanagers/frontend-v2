import { Accrodion } from '@/shared/components/accordion/Accordion';
import { Todo } from '@/shared/components/todo/Todo';

function App() {
  return (
    <>
      <h2>Accordion</h2>

      <Accrodion title="이예은" tagList={['기획', '프론트엔드', '백엔드']}>
        <Todo buttonState="menu">Todo</Todo>
        <Todo buttonState="alarm">Todo</Todo>
        <Todo buttonState="none">Todo</Todo>
        <Todo buttonState="menu">Todo</Todo>
      </Accrodion>

      <Accrodion title="이예은" tagList={['기획', '프론트엔드', '백엔드']}>
        <Todo buttonState="menu">Todo</Todo>
        <Todo buttonState="menu">Todo</Todo>
      </Accrodion>
    </>
  );
}

export default App;
