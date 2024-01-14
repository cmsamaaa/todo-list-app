import { IconType } from 'react-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveItem } from './menu.reducer';
import { RootState } from '../redux-store';

interface MenuItemProps {
  iconType: IconType;
  iconSize: number;
  id: number;
  label: string;
  count: number;
  first: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  iconType: Icon,
  iconSize,
  id,
  label,
  count,
  first,
}: MenuItemProps) => {
  const dispatch = useDispatch();

  // Redux store
  const activeItem: number = useSelector(
    (state: RootState) => state.menu.activeItem
  );

  const handleClick = () => {
    dispatch(setActiveItem(id));
  };

  return (
    <div
      className={`menu-item width ${first ? 'mt-2' : ''}
      ${activeItem === id ? 'active' : ''}
      `}
      onClick={handleClick}
    >
      <div className='menu-item-highlight'></div>
      <div className='menu-item-icon'>
        <Icon size={iconSize} />
      </div>
      <div className='menu-item-label'>{label}</div>
      {count > 0 && <div className='menu-item-count'>{count}</div>}
    </div>
  );
};

export default MenuItem;
