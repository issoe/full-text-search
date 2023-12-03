import NavList from './NavList';
import NavItem from './NavItem';
import Button from '../button/Button';
import { navList, otherNav } from '@/store/dummyData';

function BaseNav({ active }) {
  return (
    <div className="w-[80%] h-auto mx-auto my-4">
      {/* eslint-disable jsx-a11y/alt-text */}
      <img
        atl="icon"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
        className="h-[64px] object-contain"
      />
      <NavList>
        {navList.map((item, index) => {
          return <NavItem item={item} key={index} active={active} />;
        })}
      </NavList>
      <div className="w-full h-[1px] bg-[#FFF]"></div>

      <NavList>
        {otherNav.map((item, index) => {
          return <Button item={item} key={index} />;
        })}
      </NavList>
    </div>
  );
}

export default BaseNav;
