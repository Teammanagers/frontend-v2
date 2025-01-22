import { Accrodion } from '@/shared/components/accordion/Accordion';

function App() {
  return (
    <>
      <h2>Accordion</h2>

      <Accrodion title="이예은" tagList={['기획', '프론트엔드', '백엔드']}>
        <li>ToDo</li>
        <li>ToDo</li>
        <li>ToDo</li>
        <li>ToDo</li>
      </Accrodion>

      <Accrodion title="이예은" tagList={['기획', '프론트엔드', '백엔드']}>
        <li>ToDo</li>
        <li>ToDo</li>
        <li>ToDo</li>
        <li>ToDo</li>
      </Accrodion>
    </>
  );
}

export default App;
