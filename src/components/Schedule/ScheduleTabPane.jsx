import { getTime } from '../../helpers';

const ScheduleTabPane = props => {
  const { active, events, id } = props;
  const activeClass = active ? 'show active' : '';

  return (
    <div
      className={`tab-pane fade ${activeClass}`}
      id={id}
      role="tabpanel"
      aria-labelledby={`${id}-tab`}
    >
      {events.map(event => (
        <div key={event.activity} className="card">
          <div className="card-header">
            <div className="card-header-content">
              <p className="card-header-info">
                <span>
                  {getTime(event.start)} - {getTime(event.end)}
                </span>
                <span>
                  {', '}
                  {event.location}
                </span>
              </p>
              <h4 className="card-header-title">{event.activity}</h4>
              <p className="card-header-subtitle">
                {event.speakers && event.speakers.length
                  ? event.speakers.join(', ')
                  : null}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScheduleTabPane;
