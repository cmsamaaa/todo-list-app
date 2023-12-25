import './menu.css';

import { IoSunnyOutline } from 'react-icons/io5';
import { FaRegStar } from 'react-icons/fa';
import { TbColumns3 } from 'react-icons/tb';
import { FaRegUser } from 'react-icons/fa6';
import { GoHome } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx';

function Menu() {
  return (
    <>
      <div className='flex align-middle'>
        <div className='menu maximized'>
          <div className='menu-item width mt-2 active'>
            <div className='menu-item-highlight'></div>
            <div className='menu-item-icon'>
              <IoSunnyOutline size={20} />
            </div>
            <div className='menu-item-label'>My Day</div>
          </div>
          <div className='menu-item width'>
            <div className='menu-item-highlight'></div>
            <div className='menu-item-icon'>
              <FaRegStar size={20} />
            </div>
            <div className='menu-item-label'>Important</div>
          </div>
          <div className='menu-item width'>
            <div className='menu-item-highlight'></div>
            <div className='menu-item-icon'>
              <TbColumns3 size={20} />
            </div>
            <div className='menu-item-label'>Planned</div>
          </div>
          <div className='menu-item width'>
            <div className='menu-item-highlight'></div>
            <div className='menu-item-icon'>
              <FaRegUser size={20} />
            </div>
            <div className='menu-item-label'>Assigned to me</div>
          </div>
          <div className='menu-item width'>
            <div className='menu-item-highlight'></div>
            <div className='menu-item-icon'>
              <GoHome size={20} />
            </div>
            <div className='menu-item-label'>Tasks</div>
          </div>
          <hr className='menu-break width' />
          <div className='menu-item width'>
            <div className='menu-item-highlight'></div>
            <div className='menu-item-icon'>
              <RxHamburgerMenu size={20} />
            </div>
            <div className='menu-item-label'>Getting started</div>
          </div>
          <div className='menu-item width'>
            <div className='menu-item-highlight'></div>
            <div className='menu-item-icon'>
              <RxHamburgerMenu size={20} />
            </div>
            <div className='menu-item-label'>Groceries</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
