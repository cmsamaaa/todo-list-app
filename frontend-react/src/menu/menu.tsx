import './menu.css';

import { useEffect, useState } from 'react';
import { loadList } from '../util/list.util';
import { ListSection } from '../model/json.model';

import { IoSunnyOutline } from 'react-icons/io5';
import { FaRegStar } from 'react-icons/fa';
import { TbColumns3 } from 'react-icons/tb';
import { FaRegUser } from 'react-icons/fa6';
import { GoHome } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx';

import MenuItem from './menu-item';
import MenuBreak from './menu-break';
import NewList from './new-list';
import { IconType } from 'react-icons';

const Menu = () => {
  const [lists, setLists] = useState<ListSection>({});

  const setIcon = (iconType: string): IconType => {
    switch (iconType) {
      case 'IoSunnyOutline':
        return IoSunnyOutline;
      case 'FaRegStar':
        return FaRegStar;
      case 'TbColumns3':
        return TbColumns3;
      case 'FaRegUser':
        return FaRegUser;
      case 'GoHome':
        return GoHome;
      case 'RxHamburgerMenu':
        return RxHamburgerMenu;
      default:
        return RxHamburgerMenu;
    }
  };

  useEffect(() => {
    loadList()
      .then((data: ListSection) => {
        setLists(data);
      })
      .catch((err) => {
        console.log('Fail to load list: ', err);
      });
  }, []);

  return (
    <>
      <div className='flex align-middle'>
        <div className='menu maximized'>
          {lists?.default &&
            Object.entries(lists?.default).map(([key, value], idx) => (
              <MenuItem
                key={key}
                iconType={setIcon(value)}
                iconSize={20}
                id={idx}
                label={key}
                count={0}
                first={true}
              />
            ))}
          <MenuBreak />
          {lists?.default &&
            lists?.user &&
            Object.entries(lists?.user).map(([key, value], idx) => (
              <MenuItem
                key={key}
                iconType={setIcon(value)}
                iconSize={20}
                id={idx + Object.keys(lists.default).length}
                label={key}
                count={0}
                first={true}
              />
            ))}
          <NewList />
        </div>
      </div>
    </>
  );
};

export default Menu;
