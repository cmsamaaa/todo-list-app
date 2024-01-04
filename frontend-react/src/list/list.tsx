import './list.css';

const List = () => {
  return (
    <div className='list-container'>
      <div className='overlay'></div>
      <div className='list-empty-card'>
        <div className='icon'>CALENDAR IMAGE</div>
        <div className='title'>Focus on your day</div>
        <div className='subtitle'>
          Get things done with My Day, a list that refreshes every day.
        </div>
      </div>
    </div>
  );
};

export default List;
