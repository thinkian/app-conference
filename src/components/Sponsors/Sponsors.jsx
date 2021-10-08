const Sponsors = () => {
  return (
    <section id="sponsors" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                Sponsors
              </h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                Opportunites to get involved and make this event a success
              </p>
            </div>
          </div>
        </div>
        <div
          className="row mb-30 text-center wow fadeInDown"
          data-wow-delay="0.3s"
        >
          <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="spnsors-logo">
              <a href="#">
                <img
                  className="img-fluid"
                  src="assets/img/sponsors/logo-01.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="spnsors-logo">
              <a href="#">
                <img
                  className="img-fluid"
                  src="assets/img/sponsors/logo-02.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="spnsors-logo">
              <a href="#">
                <img
                  className="img-fluid"
                  src="assets/img/sponsors/logo-03.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="spnsors-logo">
              <a href="#">
                <img
                  className="img-fluid"
                  src="assets/img/sponsors/logo-04.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-12 text-center">
            <a href="#" className="btn btn-common">
              become a sponsor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
