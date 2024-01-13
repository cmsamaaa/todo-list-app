import { GoPlus } from 'react-icons/go';

const NewList: React.FC = () => {
  return (
    <div className='menu-item new-list width'>
      <div className='menu-item-highlight'></div>
      <div className='menu-item-icon'>
        <GoPlus size='24' />
      </div>
      <div className='menu-item-label'>New list</div>
    </div>
  );
};

export default NewList;
