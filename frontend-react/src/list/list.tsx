import './list.css';

const List = () => {
  return (
    <div className='list-container'>
      <div className='overlay'></div>
      <div className='list-empty-card'>
        <div className='icon'>
          <img
            className='calendar-icon'
            src='/img/icon/Vexels-Office-Calendar.1024.png'
            height={20}
            alt='Calendar Icon'
          />
        </div>
        <div className='title'>Focus on your day</div>
        <div className='subtitle'>
          Get things done with My Day, a list that refreshes every day.
        </div>
      </div>
    </div>
  );
};

export default List;
