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
            {event.speakerImageUrl ? (
              <div className="card-image">
                <img
                  className="img-fluid"
                  src={event.speakerImageUrl}
                  alt={event.speakers}
                />
              </div>
            ) : null}
            <div className="card-header-content">
              <p className="card-header-info">
                <span>
                  {event.startTime} - {event.endTime}
                </span>
                <span>
                  {', '}
                  {event.location}
                </span>
              </p>
              <h4 className="card-header-title">{event.activity}</h4>
              <p className="card-header-subtitle">{event.speakers}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScheduleTabPane;
