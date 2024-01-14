import './menu.css';

import { IoSunnyOutline } from 'react-icons/io5';
import { FaRegStar } from 'react-icons/fa';
import { TbColumns3 } from 'react-icons/tb';
import { FaRegUser } from 'react-icons/fa6';
import { GoHome } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx';
import MenuItem from './menu-item';
import MenuBreak from './menu-break';
import NewList from './new-list';

const Menu = () => {
  return (
    <>
      <div className='flex align-middle'>
        <div className='menu maximized'>
          <MenuItem
            iconType={IoSunnyOutline}
            iconSize={20}
            id={0}
            label={'My Day'}
            count={0}
            first={true}
          />
          <MenuItem
            iconType={FaRegStar}
            iconSize={20}
            id={1}
            label={'Important'}
            count={0}
            first={false}
          />
          <MenuItem
            iconType={TbColumns3}
            iconSize={20}
            id={2}
            label={'Planned'}
            count={0}
            first={false}
          />
          <MenuItem
            iconType={FaRegUser}
            iconSize={20}
            id={3}
            label={'Assigned to me'}
            count={0}
            first={false}
          />
          <MenuItem
            iconType={GoHome}
            iconSize={20}
            id={4}
            label={'Tasks'}
            count={0}
            first={false}
          />
          <MenuBreak />
          <MenuItem
            iconType={RxHamburgerMenu}
            iconSize={20}
            id={5}
            label={'Getting started'}
            count={7}
            first={false}
          />
          <MenuItem
            iconType={RxHamburgerMenu}
            iconSize={20}
            id={6}
            label={'Groceries'}
            count={5}
            first={false}
          />
          <NewList />
        </div>
      </div>
    </>
  );
};

export default Menu;
