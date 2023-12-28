import './menu.css';

import { IoSunnyOutline } from 'react-icons/io5';
import { FaRegStar } from 'react-icons/fa';
import { TbColumns3 } from 'react-icons/tb';
import { FaRegUser } from 'react-icons/fa6';
import { GoHome } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx';
import MenuItem from './menu-item';
import MenuBreak from './menu-break';

const Menu = () => {
  return (
    <>
      <div className='flex align-middle'>
        <div className='menu maximized'>
          <MenuItem
            iconType={IoSunnyOutline}
            iconSize={20}
            label={'My Day'}
            count={0}
            active={true}
            first={true}
          />
          <MenuItem
            iconType={FaRegStar}
            iconSize={20}
            label={'Important'}
            count={0}
            active={false}
            first={false}
          />
          <MenuItem
            iconType={TbColumns3}
            iconSize={20}
            label={'Planned'}
            count={0}
            active={false}
            first={false}
          />
          <MenuItem
            iconType={FaRegUser}
            iconSize={20}
            label={'Assigned to me'}
            count={0}
            active={false}
            first={false}
          />
          <MenuItem
            iconType={GoHome}
            iconSize={20}
            label={'Tasks'}
            count={0}
            active={false}
            first={false}
          />
          <MenuBreak />
          <MenuItem
            iconType={RxHamburgerMenu}
            iconSize={20}
            label={'Getting started'}
            count={7}
            active={false}
            first={false}
          />
          <MenuItem
            iconType={RxHamburgerMenu}
            iconSize={20}
            label={'Groceries'}
            count={5}
            active={false}
            first={false}
          />
        </div>
      </div>
    </>
  );
};

export default Menu;
