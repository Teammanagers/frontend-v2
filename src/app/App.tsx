import { TodoPage } from '@/pages/TodoPage/todo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Todo Page */}
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
