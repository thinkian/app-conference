import { useNav } from '../../hooks';

const FAQ = () => {
  const navRef = useNav('faq');

  return (
    <section ref={navRef} id="faq" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                Ask Question?
              </h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                Frequently asked questions and answers about the event
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
            <div className="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <div
                    className="header-title"
                    data-toggle="collapse"
                    data-target="#questionOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <i className="lni-pencil"></i> How do I register for the
                    conference?
                  </div>
                </div>
                <div
                  id="questionOne"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#question"
                >
                  <div className="card-body">
                    Morbi tempus libero sapien. Cras varius erat a euismod
                    dictum. Maecenas mattis justo augue, lacinia placerat lacus
                    elementum vel. Cras eu tristique neque. Morbi egestas eget
                    erat sed porta. Vivamus sollicitudin massa vitae nulla
                    lobortis sodales sit amet a risus.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <div
                    className="header-title"
                    data-toggle="collapse"
                    data-target="#questionTwo"
                    aria-expanded="false"
                    aria-controls="questionTwo"
                  >
                    <i className="lni-pencil"></i> Can I walk in and sign up for
                    the conference?
                  </div>
                </div>
                <div
                  id="questionTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#question"
                >
                  <div className="card-body">
                    Morbi tempus libero sapien. Cras varius erat a euismod
                    dictum. Maecenas mattis justo augue, lacinia placerat lacus
                    elementum vel. Cras eu tristique neque. Morbi egestas eget
                    erat sed porta. Vivamus sollicitudin massa vitae nulla
                    lobortis sodales sit amet a risus.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <div
                    className="header-title"
                    data-toggle="collapse"
                    data-target="#questionThree"
                    aria-expanded="false"
                    aria-controls="questionThree"
                  >
                    <i className="lni-pencil"></i> What discounts are available?
                  </div>
                </div>
                <div
                  id="questionThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#question"
                >
                  <div className="card-body">
                    Morbi tempus libero sapien. Cras varius erat a euismod
                    dictum. Maecenas mattis justo augue, lacinia placerat lacus
                    elementum vel. Cras eu tristique neque. Morbi egestas eget
                    erat sed porta. Vivamus sollicitudin massa vitae nulla
                    lobortis sodales sit amet a risus.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <div
                    className="header-title"
                    data-toggle="collapse"
                    data-target="#questionFour"
                    aria-expanded="false"
                    aria-controls="questionFour"
                  >
                    <i className="lni-pencil"></i> Which payment methods do you
                    accept?
                  </div>
                </div>
                <div
                  id="questionFour"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#question"
                >
                  <div className="card-body">
                    Morbi tempus libero sapien. Cras varius erat a euismod
                    dictum. Maecenas mattis justo augue, lacinia placerat lacus
                    elementum vel. Cras eu tristique neque. Morbi egestas eget
                    erat sed porta. Vivamus sollicitudin massa vitae nulla
                    lobortis sodales sit amet a risus.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
            <div className="accordion">
              <div className="card">
                <div className="card-header" id="headingOne2">
                  <div
                    className="header-title"
                    data-toggle="collapse"
                    data-target="#questionOne2"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <i className="lni-pencil"></i> What types of sessions are
                    covered and why should I attend?
                  </div>
                </div>
                <div
                  id="questionOne2"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#question"
                >
                  <div className="card-body">
                    Morbi tempus libero sapien. Cras varius erat a euismod
                    dictum. Maecenas mattis justo augue, lacinia placerat lacus
                    elementum vel. Cras eu tristique neque. Morbi egestas eget
                    erat sed porta. Vivamus sollicitudin massa vitae nulla
                    lobortis sodales sit amet a risus.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo2">
                  <div
                    className="header-title"
                    data-toggle="collapse"
                    data-target="#questionTwo2"
                    aria-expanded="false"
                    aria-controls="questionTwo"
                  >
                    <i className="lni-pencil"></i> How do I register to attend a
                    specific session or workshop?
                  </div>
                </div>
                <div
                  id="questionTwo2"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#question"
                >
                  <div className="card-body">
                    Morbi tempus libero sapien. Cras varius erat a euismod
                    dictum. Maecenas mattis justo augue, lacinia placerat lacus
                    elementum vel. Cras eu tristique neque. Morbi egestas eget
                    erat sed porta. Vivamus sollicitudin massa vitae nulla
                    lobortis sodales sit amet a risus.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <div
                    className="header-title"
                    data-toggle="collapse"
                    data-target="#questionFive"
                    aria-expanded="false"
                    aria-controls="questionFive"
                  >
                    <i className="lni-pencil"></i>What is the Event Code of
                    Conduct?
                  </div>
                </div>
                <div
                  id="questionFive"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#question"
                >
                  <div className="card-body">
                    Morbi tempus libero sapien. Cras varius erat a euismod
                    dictum. Maecenas mattis justo augue, lacinia placerat lacus
                    elementum vel. Cras eu tristique neque. Morbi egestas eget
                    erat sed porta. Vivamus sollicitudin massa vitae nulla
                    lobortis sodales sit amet a risus.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <div
                    className="header-title"
                    data-toggle="collapse"
                    data-target="#questionSix"
                    aria-expanded="false"
                    aria-controls="questionSix"
                  >
                    <i className="lni-pencil"></i> How do I report a violation
                    of the Code of Conduct?
                  </div>
                </div>
                <div
                  id="questionSix"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#question"
                >
                  <div className="card-body">
                    Morbi tempus libero sapien. Cras varius erat a euismod
                    dictum. Maecenas mattis justo augue, lacinia placerat lacus
                    elementum vel. Cras eu tristique neque. Morbi egestas eget
                    erat sed porta. Vivamus sollicitudin massa vitae nulla
                    lobortis sodales sit amet a risus.
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

export default FAQ;
