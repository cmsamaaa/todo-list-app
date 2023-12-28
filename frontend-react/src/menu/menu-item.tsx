import { IconType } from 'react-icons';

interface MenuItemProps {
  iconType: IconType;
  iconSize: number;
  label: string;
  count: number;
  first: boolean;
  active: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  iconType: Icon,
  iconSize,
  label,
  count,
  first,
  active,
}: MenuItemProps) => {
  return (
    <div
      className={`menu-item width ${first ? 'mt-2' : ''}
      ${active ? 'active' : ''}
      `}
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
