import { useNav, useTabs } from '../../hooks';

import ScheduleTabPane from './ScheduleTabPane';

const Schedule = () => {
  const tabs = [
    {
      id: 'dayOne',
      title: 'Day One',
      subtitle: 'November 18',
      events: [
        {
          activity: 'Web Design Principles and Best Practices',
          startTime: '10am',
          endTime: '12:30pm',
          speakers: ['David Warner'],
          speakerImageUrl: 'assets/img/speaker/speakers-2.jpg',
          location: 'Standford Hall'
        },
        {
          activity: 'Building the MVP on Time and on Budget',
          startTime: '2pm',
          endTime: '4pm',
          speakers: ['Yara Smith'],
          speakerImageUrl: 'assets/img/speaker/speakers-1.jpg',
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
          startTime: '11am',
          endTime: '12pm',
          speakers: ['Patricia Green'],
          speakerImageUrl: 'assets/img/speaker/speakers-3.jpg',
          location: 'Standford Hall'
        },
        {
          activity: 'Debugging is Easier with the Right Tools',
          startTime: '1:30pm',
          endTime: '3:30pm',
          speakers: ['Daryl Dixon'],
          speakerImageUrl: 'assets/img/speaker/speakers-4.jpg',
          location: 'Auditorium B'
        }
      ]
    }
  ];
  const [activeTab, handleClick] = useTabs(tabs[0].id);
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
