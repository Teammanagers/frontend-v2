import { Accordion } from '@/widgets/accordion/Accordion';
import { Todo } from '@/widgets/todo/Todo';

function App() {
  return (
    <>
      <h2>Accordion</h2>

      <Accordion title="이예은" tagList={['기획', '프론트엔드', '백엔드']}>
        <Todo buttonState="menu">Todo</Todo>
        <Todo buttonState="alarm">Todo</Todo>
        <Todo buttonState="none">Todo</Todo>
        <Todo buttonState="menu">Todo</Todo>
      </Accordion>

      <Accordion title="이예은" tagList={['기획', '프론트엔드', '백엔드']}>
        <Todo buttonState="menu">Todo</Todo>
        <Todo buttonState="menu">Todo</Todo>
      </Accordion>
    </>
  );
}

export default App;
