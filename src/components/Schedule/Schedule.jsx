import { useNav, useTabs } from '../../hooks';

import ScheduleTabPane from './ScheduleTabPane';

const Schedule = () => {
  // TODO: Fetch event schedule
  const tabs = [
    {
      id: 'dayOne',
      title: 'Day One',
      subtitle: 'November 18',
      events: [
        {
          activity: 'Web Design Principles and Best Practices',
          start: '2021-11-18 10:00',
          end: '2021-11-18 12:30',
          speakers: ['David Warner'],
          location: 'Standford Hall'
        },
        {
          activity: 'Building the MVP on Time and on Budget',
          start: '2021-11-18 14:00',
          end: '2021-11-18 16:00',
          speakers: ['Yara Smith'],
          location: 'Auditorium C'
        }
      ]
    },
    {
      id: 'dayTwo',
      title: 'Day Two',
      subtitle: 'November 19',
      events: [
        {
          activity:
            'Engineering Management: Bringing Change to an Organization',
          start: '2021-11-19 11:00',
          end: '2021-11-19 12:00',
          speakers: ['Patricia Green'],
          location: 'Standford Hall'
        },
        {
          activity: 'Debugging is Easier with the Right Tools',
          start: '2021-11-19 13:30',
          end: '2021-11-19 15:30',
          speakers: ['Daryl Dixon'],
          location: 'Auditorium B'
        }
      ]
    }
  ];
  const [activeTab, handleClick] = useTabs('dayOne');
  const navRef = useNav('schedule');

  return (
    <section ref={navRef} id="schedule" className="schedule section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                Event Schedule
              </h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit, sed do eiusmod tempor
              </p>
            </div>
          </div>
        </div>
        <div className="schedule-area row wow fadeInDown" data-wow-delay="0.3s">
          <div className="schedule-tab-controls col-md-3 col-lg-3 col-xs-12">
            <div className="table-responsive">
              <ul className="nav nav-tabs" id="scheduleTab" role="tablist">
                {tabs.map(tab => (
                  <li key={tab.id} className="nav-item">
                    <a
                      className={`nav-link ${
                        tab.id === activeTab ? 'active' : ''
                      }`}
                      id={`${tab.id}-tab`}
                      href={`#${tab.id}`}
                      role="tab"
                      aria-controls={tab.id}
                      aria-expanded={tab.id === activeTab ? 'true' : 'false'}
                      onClick={handleClick}
                    >
                      <div className="nav-item-text">
                        <h4 className="nav-item-text-title">{tab.title}</h4>
                        <h5 className="nav-item-text-subtitle">
                          {tab.subtitle}
                        </h5>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="schedule-tab-content col-md-9 col-lg-9 col-xs-12 clearfix">
            <div className="tab-content" id="scheduleTabContent">
              {tabs.map(tab => (
                <ScheduleTabPane
                  key={tab.id}
                  {...tab}
                  active={tab.id === activeTab}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
