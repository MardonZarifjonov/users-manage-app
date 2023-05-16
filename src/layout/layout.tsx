import { Outlet } from 'react-router-dom';
// import Sidebar from './sidebar';

export function Layout() {
  return (
    <div className='w-screen h-screen p-main'>
      {/* <Sidebar /> */}
      <Outlet />
    </div>
  );
}
