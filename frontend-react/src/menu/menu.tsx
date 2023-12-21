import './menu.css';

function Menu() {
  return (
    <>
      <div className='flex align-middle'>
        <div className='menu maximized'>
          <div className='menu-item mt-2 active'>My Day</div>
          <div className='menu-item'>Important</div>
          <div className='menu-item'>Planned</div>
          <div className='menu-item'>Assigned to me</div>
          <div className='menu-item'>Tasks</div>
          <hr className='menu-break' />
          <div className='menu-item'>Getting started</div>
          <div className='menu-item'>Groceries</div>
        </div>
      </div>
    </>
  );
}

export default Menu;
