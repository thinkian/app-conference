import { useNav } from '../../hooks';

const Schedule = () => {
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
          <div className="schedule-tab-title col-md-3 col-lg-3 col-xs-12">
            <div className="table-responsive">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="monday-tab"
                    data-toggle="tab"
                    href="#monday"
                    role="tab"
                    aria-controls="monday"
                    aria-expanded="true"
                  >
                    <div className="item-text">
                      <h4>Monday</h4>
                      <h5>14 February</h5>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="tuesday-tab"
                    data-toggle="tab"
                    href="#tuesday"
                    role="tab"
                    aria-controls="tuesday"
                  >
                    <div className="item-text">
                      <h4>Tuesday</h4>
                      <h5>15 February</h5>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="wednesday-tab"
                    data-toggle="tab"
                    href="#wednesday"
                    role="tab"
                    aria-controls="wednesday"
                  >
                    <div className="item-text">
                      <h4>Wednesday</h4>
                      <h5>16 February</h5>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="thursday-tab"
                    data-toggle="tab"
                    href="#thursday"
                    role="tab"
                    aria-controls="thursday"
                  >
                    <div className="item-text">
                      <h4>Thursday</h4>
                      <h5>17 February</h5>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="schedule-tab-content col-md-9 col-lg-9 col-xs-12 clearfix">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="monday"
                role="tabpanel"
                aria-labelledby="monday-tab"
              >
                <div id="accordion">
                  <div className="card">
                    <div id="headingOne">
                      <div
                        className="collapsed card-header"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        <div className="images-box">
                          <img
                            className="img-fluid"
                            src="assets/img/speaker/speakers-1.jpg"
                            alt=""
                          />
                        </div>
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Consectetur adipisicing elit. Quod distinctio impedit
                          sint accusantium ducimus lites consequuntur innobisl
                          dolores saepe.Proin sit amet turpis lobortis.
                        </p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden
                          Street, San Francisco, CA
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingTwo">
                      <div
                        className="collapsed card-header"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <div className="images-box">
                          <img
                            className="img-fluid"
                            src="assets/img/speaker/speakers-2.jpg"
                            alt=""
                          />
                        </div>
                        <span className="time">10am - 12:30pm</span>
                        <h4>15 Free Productive Design Tools</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Consectetur adipisicing elit. Quod distinctio impedit
                          sint accusantium ducimus lites consequuntur innobisl
                          dolores saepe.Proin sit amet turpis lobortis.
                        </p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden
                          Street, San Francisco, CA
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingThree">
                      <div
                        className="collapsed card-header"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <div className="images-box">
                          <img
                            className="img-fluid"
                            src="assets/img/speaker/speakers-3.jpg"
                            alt=""
                          />
                        </div>
                        <span className="time">10am - 12:30pm</span>
                        <h4>Getting Started With SketchApp</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Consectetur adipisicing elit. Quod distinctio impedit
                          sint accusantium ducimus lites consequuntur innobisl
                          dolores saepe.Proin sit amet turpis lobortis.
                        </p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden
                          Street, San Francisco, CA
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="tuesday"
                role="tabpanel"
                aria-labelledby="tuesday-tab"
              >
                <div id="accordion2">
                  <div className="card">
                    <div id="headingOne1">
                      <div
                        className="collapsed card-header"
                        data-toggle="collapse"
                        data-target="#collapseOne1"
                        aria-expanded="false"
                        aria-controls="collapseOne1"
                      >
                        <div className="images-box">
                          <img
                            className="img-fluid"
                            src="assets/img/speaker/speakers-1.jpg"
                            alt=""
                          />
                        </div>
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div
                      id="collapseOne1"
                      className="collapse show"
                      aria-labelledby="headingOne1"
                      data-parent="#accordion2"
                    >
                      <div className="card-body">
                        <p>
                          Consectetur adipisicing elit. Quod distinctio impedit
                          sint accusantium ducimus lites consequuntur innobisl
                          dolores saepe.Proin sit amet turpis lobortis.
                        </p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden
                          Street, San Francisco, CA
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingTwo2">
                      <div
                        className="collapsed card-header"
                        data-toggle="collapse"
                        data-target="#collapseTwo2"
                        aria-expanded="false"
                        aria-controls="collapseTwo2"
                      >
                        <div className="images-box">
                          <img
                            className="img-fluid"
                            src="assets/img/speaker/speakers-2.jpg"
                            alt=""
                          />
                        </div>
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div
                      id="collapseTwo2"
                      className="collapse"
                      aria-labelledby="headingTwo2"
                      data-parent="#accordion2"
                    >
                      <div className="card-body">
                        <p>
                          Consectetur adipisicing elit. Quod distinctio impedit
                          sint accusantium ducimus lites consequuntur innobisl
                          dolores saepe.Proin sit amet turpis lobortis.
                        </p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden
                          Street, San Francisco, CA
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="wednesday"
                role="tabpanel"
                aria-labelledby="wednesday-tab"
              >
                <div id="accordion3">
                  <div className="card">
                    <div id="headingOne3">
                      <div
                        className="collapsed card-header"
                        data-toggle="collapse"
                        data-target="#collapseOne3"
                        aria-expanded="false"
                        aria-controls="collapseOne3"
                      >
                        <div className="images-box">
                          <img
                            className="img-fluid"
                            src="assets/img/speaker/speakers-1.jpg"
                            alt=""
                          />
                        </div>
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div
                      id="collapseOne3"
                      className="collapse show"
                      aria-labelledby="headingOne3"
                      data-parent="#accordion3"
                    >
                      <div className="card-body">
                        <p>
                          Consectetur adipisicing elit. Quod distinctio impedit
                          sint accusantium ducimus lites consequuntur innobisl
                          dolores saepe.Proin sit amet turpis lobortis.
                        </p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden
                          Street, San Francisco, CA
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingTwo3">
                      <div
                        className="collapsed card-header"
                        data-toggle="collapse"
                        data-target="#collapseTwo3"
                        aria-expanded="false"
                        aria-controls="collapseTwo3"
                      >
                        <div className="images-box">
                          <img
                            className="img-fluid"
                            src="assets/img/speaker/speakers-2.jpg"
                            alt=""
                          />
                        </div>
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div
                      id="collapseTwo3"
                      className="collapse"
                      aria-labelledby="headingTwo3"
                      data-parent="#accordion3"
                    >
                      <div className="card-body">
                        <p>
                          Consectetur adipisicing elit. Quod distinctio impedit
                          sint accusantium ducimus lites consequuntur innobisl
                          dolores saepe.Proin sit amet turpis lobortis.
                        </p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden
                          Street, San Francisco, CA
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingThree3">
                      <div
                        className="collapsed card-header"
                        data-toggle="collapse"
                        data-target="#collapseThree3"
                        aria-expanded="false"
                        aria-controls="collapseThree3"
                      >
                        <div className="images-box">
                          <img
                            className="img-fluid"
                            src="assets/img/speaker/speakers-3.jpg"
                            alt=""
                          />
                        </div>
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div
                      id="collapseThree3"
                      className="collapse"
                      aria-labelledby="headingThree3"
                      data-parent="#accordion3"
                    >
                      <div className="card-body">
                        <p>
                          Consectetur adipisicing elit. Quod distinctio impedit
                          sint accusantium ducimus lites consequuntur innobisl
                          dolores saepe.Proin sit amet turpis lobortis.
                        </p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden
                          Street, San Francisco, CA
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="thursday"
                role="tabpanel"
                aria-labelledby="thursday-tab"
              >
                <div id="accordion4">
                  <div className="card">
                    <div id="headingOne">
                      <div
                        className="collapsed card-header"
                        data-toggle="collapse"
                        data-target="#collapseOne4"
                        aria-expanded="false"
                        aria-controls="collapseOne4"
                      >
                        <div className="images-box">
                          <img
                            className="img-fluid"
                            src="assets/img/speaker/speakers-1.jpg"
                            alt=""
                          />
                        </div>
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div
                      id="collapseOne4"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion4"
                    >
                      <div className="card-body">
                        <p>
                          Consectetur adipisicing elit. Quod distinctio impedit
                          sint accusantium ducimus lites consequuntur innobisl
                          dolores saepe.Proin sit amet turpis lobortis.
                        </p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden
                          Street, San Francisco, CA
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingTwo">
                      <div
                        className="collapsed card-header"
                        data-toggle="collapse"
                        data-target="#collapseTwo4"
                        aria-expanded="false"
                        aria-controls="collapseTwo4"
                      >
                        <div className="images-box">
                          <img
                            className="img-fluid"
                            src="assets/img/speaker/speakers-2.jpg"
                            alt=""
                          />
                        </div>
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div
                      id="collapseTwo4"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion4"
                    >
                      <div className="card-body">
                        <p>
                          Consectetur adipisicing elit. Quod distinctio impedit
                          sint accusantium ducimus lites consequuntur innobisl
                          dolores saepe.Proin sit amet turpis lobortis.
                        </p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden
                          Street, San Francisco, CA
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingThree4">
                      <div
                        className="collapsed card-header"
                        data-toggle="collapse"
                        data-target="#collapseThree4"
                        aria-expanded="false"
                        aria-controls="collapseThree4"
                      >
                        <div className="images-box">
                          <img
                            className="img-fluid"
                            src="assets/img/speaker/speakers-3.jpg"
                            alt=""
                          />
                        </div>
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div
                      id="collapseThree4"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion4"
                    >
                      <div className="card-body">
                        <p>
                          Consectetur adipisicing elit. Quod distinctio impedit
                          sint accusantium ducimus lites consequuntur innobisl
                          dolores saepe.Proin sit amet turpis lobortis.
                        </p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden
                          Street, San Francisco, CA
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="friday"
                role="tabpanel"
                aria-labelledby="friday-tab"
              >
                <div id="accordion">
                  <div className="card">
                    <div id="headingOne">
                      <div
                        className="collapsed card-header"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        <div className="images-box">
                          <img
                            className="img-fluid"
                            src="assets/img/speaker/speakers-1.jpg"
                            alt=""
                          />
                        </div>
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Consectetur adipisicing elit. Quod distinctio impedit
                          sint accusantium ducimus lites consequuntur innobisl
                          dolores saepe.Proin sit amet turpis lobortis.
                        </p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden
                          Street, San Francisco, CA
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingTwo">
                      <div
                        className="collapsed card-header"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <div className="images-box">
                          <img
                            className="img-fluid"
                            src="assets/img/speaker/speakers-2.jpg"
                            alt=""
                          />
                        </div>
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Consectetur adipisicing elit. Quod distinctio impedit
                          sint accusantium ducimus lites consequuntur innobisl
                          dolores saepe.Proin sit amet turpis lobortis.
                        </p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden
                          Street, San Francisco, CA
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingThree">
                      <div
                        className="collapsed card-header"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <div className="images-box">
                          <img
                            className="img-fluid"
                            src="assets/img/speaker/speakers-3.jpg"
                            alt=""
                          />
                        </div>
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Consectetur adipisicing elit. Quod distinctio impedit
                          sint accusantium ducimus lites consequuntur innobisl
                          dolores saepe.Proin sit amet turpis lobortis.
                        </p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden
                          Street, San Francisco, CA
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
