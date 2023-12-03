import BaseNav from '../nav/BaseNav';
import TheHeader from './TheHeader';

function Layout({ active, pageName, children }) {
  return (
    <div className="w-full h-screen flex">
      <div className="bg-[#111827] text-white w-[20%] h-auto max-w-[400px]">
        <BaseNav active={active}></BaseNav>
      </div>
      <div className="flex flex-col bg-[#F2F2F2] overflow-auto flex-1 h-screen">
        <TheHeader />
        <div className="relative bg-[white] w-full flex-1">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
