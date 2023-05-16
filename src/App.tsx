import Layout from 'layout';
import Main from 'pages/main';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
}
